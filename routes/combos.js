import { Router } from 'express'
import * as combosCtrl from '../controllers/combos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', combosCtrl.index)
router.get('/new', isLoggedIn, combosCtrl.new)  //should be '/combos/new'
router.post('/', isLoggedIn, combosCtrl.create)

export {
  router
}