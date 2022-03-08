import { Router } from "express";
import { isLoggedIn } from "../middleware/middelware.js";
import * as potlucksCtrl from "../controllers/potlucks.js"

const router = Router()

// GET localhost:3000/potlucks/
router.get('/', potlucksCtrl.index)
router.get('/:id', potlucksCtrl.show)

// POST localhost:3000/potlucks
router.post('/', isLoggedIn, potlucksCtrl.create)

// DELETE localhost:3000/potlucks/:id
router.delete('/:id', isLoggedIn, potlucksCtrl.delete)

export {
  router
}