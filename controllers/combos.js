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

function show(req, res) {
  Combo.findById(req.params.comboId)
  .populate("author")
  .then(combo => {
    res.render('combos/show', {
      combo,
      title: "combo show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos')
  })
}

function edit(req, res) {
  Combo.findById(req.params.comboId)
  .then(combo => {
    if (combo.author.equals(req.user.profile._id)) {
    res.render('combos/edit', {
      combo: combo,
      title: 'Edit Combo'
    })
  } else {
    throw new Error ('🚫 Not authorized 🚫')
  }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos')
  })
}

function update(req, res) {
  // req.body.nowShowing = !!req.body.nowShowing
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key]
  // }
  Combo.findByIdAndUpdate(req.params.comboId, req.body, {new: true})
  .then(combo => {
    res.redirect(`/combos/${combo._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos')
  })
}

function deleteCombo(req, res) {
  Combo.findById(req.params.comboId)
  .then(combo => {
    if (combo.author.equals(req.user.profile._id)) {
      combo.deleteOne()
      .then(() => {
        res.redirect('/combos')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos')
  })
}

function createComment(req, res) {
  Combo.findById(req.params.comboId)
  .then(combo => {
    combo.comments.push(req.body)
    combo.save()
    .then(() => {
      res.redirect(`/combos/${combo._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/combos')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos')
  })
}

function deleteComment(req, res) {
  Combo.findById(req.params.comboId)
  .then(combo => {
    combo.comments.id(req.params.commentId).deleteOne()
    combo.save()
    .then(() => {
      res.redirect(`/combos/${combo._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/combos')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/combos')
  })
}

export {
  index,
  newCombo as new,
  create,
  show,
  edit,
  update,
  deleteCombo as delete,
  createComment,
  deleteComment,

}