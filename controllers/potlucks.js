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
  Potluck.create(req.body)
  .then (potluck => {
    res.redirect('/potlucks')
  })
  .catch (err => {
    console.log(err)
    res.redirect('potlucks')
  })
}

export {
  index,
  create,
}