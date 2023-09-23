import { Router } from 'express'
import * as combosCtrl from '../controllers/combos.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()