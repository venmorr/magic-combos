import { Combo } from "../models/combo.js"
import { Card } from "../models/card.js"

// function newCard(req, res) {
  
// }

function create(req, res) {
  Combo.findById(req.params.comboId)
  .then(combo => {
    console.log(req.params.comboId)
    Card.find({name: req.body.name})
    .then(card => {
      // console.log(card)
      // combo.cards.push(card)  
    })
    .catch(err => {
      console.log(err)
      res.redirect('/combos') //need to redirect to specific combo
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos') //need to redirect to specific combo
  })
}

export {
  // newCard as new,
  create,
}