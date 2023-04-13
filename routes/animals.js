import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'

const router = Router()

// GET localhost:3000/animals
router.get('/', animalsCtrl.index)

// GET localhost:3000/animals/new
router.get('/new', animalsCtrl.new)

// GET localhost:3000/animals/:animalId
router.get('/:animalId', animalsCtrl.show)

// POST localhost:3000/animals
router.post('/', animalsCtrl.create)

export { router }
