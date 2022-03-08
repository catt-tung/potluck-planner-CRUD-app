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

export {
  index,
}