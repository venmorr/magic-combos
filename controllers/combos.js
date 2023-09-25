import { Combo } from '../models/combo.js'
import { Card } from '../models/card.js'

function index(req, res) {
  Combo.find({})
  .then(combos => {
    res.render('combos/index', {
      combos,
      title: '☀️💧💀🔥🌳'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newCombo(req, res) {
  Combo.find({})
    .then(combos => {
      res.render('combos/new', {
        title: 'Add Combo',
        combos,
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Combo.create(req.body)
  .then(combo => {
    res.redirect('/combos')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newCombo as new,
  create,
}