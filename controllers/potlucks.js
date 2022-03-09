import { Potluck } from "../models/potluck.js";

function index(req, res) {
  Potluck.find({})
  .then (potlucks => {
    res.render('potlucks/index', {
      potlucks,
      title: "All Potlucks"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/potlucks')
  })
}

function create(req, res) {
  req.body.host = req.user.profile._id
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
  Potluck.create(req.body)
  .then (potluck => {
    res.redirect('/potlucks')
  })
  .catch (err => {
    console.log(err)
    res.redirect('potlucks')
  })
}

function show (req, res) {
  Potluck.findById(req.params.id)
  .populate("host")
  .then(potluck => {
    res.render('potlucks/show', {
      potluck,
      title: "`${potluck.name} Details`"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/potlucks')
  })
}

function deletePotluck(req, res) {
  Potluck.findById(req.params.id)
  .then(potluck => {
    if (potluck.host.equals(req.user.profile._id)) {
      potluck.delete()
      .then(() => {
        res.redirect('/potlucks')
      })
    } else {
      throw new Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/potlucks')
  })
}

function addDish(req, res) {
  Potluck.findById(req.params.id)
  .then(potluck => {
    potluck.dishes.push(req.body)
    potluck.save()
    .then(()=> {
      res.redirect(`/potlucks/${req.params.id}`)
    })
  })
}

function deleteDish (req, res){
  Potluck.findById(req.params.id, function (err, potluck) {
    let index = 0;
    potluck.dishes.forEach(dish => {
      if (dish._id === req.params.dishId) {
        index = potluck.dish.indexOf(dish)
      }
    })
    potluck.dishes.splice(index, 1)
    potluck.save(function(err) {
      res.redirect(`/potlucks/${req.params.id}`)
    })
  })
}

export {
  index,
  create,
  show,
  deletePotluck as delete,
  addDish,
  deleteDish,
}