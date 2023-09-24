import { Combo } from '../models/combo.js'

function index(req, res) {
  Combo.find({})
  .then(combos => {
    res.render('combos/index', {
      combos,
      title: '🌮'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  // create,
  // show,
  //// flipTasty,
  // edit,
  // update,
  // deleteCombo as delete,
}