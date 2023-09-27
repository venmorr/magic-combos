import { Profile } from '../models/profile.js'
import { Combo } from '../models/combo.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: 'Profiles',
      profiles,
    })
  })
  .catch(err => {
    console.log('title not working', err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    Combo.find({author: profile._id})
    .populate([
      {path: "cards", model:"Card"},
    ])
    .then(combos => {
      
      const isSelf = profile._id.equals(req.user.profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        combos,
        isSelf,
      })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/profiles")
  })
}

export {
  index,
  show,
}