import { Router } from 'express'
import * as combosCtrl from '../controllers/combos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', combosCtrl.index)
router.get('/new', isLoggedIn, combosCtrl.new)  
router.post('/', isLoggedIn, combosCtrl.create)
router.get('/:comboId', isLoggedIn,combosCtrl.show)
router.post('/:comboId/comments', isLoggedIn, combosCtrl.createComment)
router.delete('/:comboId', isLoggedIn, combosCtrl.delete)
router.delete('/:comboId/comments/:commentId', isLoggedIn, combosCtrl.deleteComment)

export {
  router
}