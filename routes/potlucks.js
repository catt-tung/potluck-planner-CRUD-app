import { Router } from "express";
import { isLoggedIn } from "../middleware/middelware.js";
import * as potlucksCtrl from "../controllers/potlucks.js"

const router = Router()

// GET localhost:3000/potlucks/
router.get('/', isLoggedIn, potlucksCtrl.index)
// Get localhost:3000/potlucks/:id
router.get('/:id', potlucksCtrl.show)
// GET localhost:3000/potlucks/:id/edit
router.get('/:id/edit', isLoggedIn, potlucksCtrl.edit)

// POST localhost:3000/potlucks
router.post('/', isLoggedIn, potlucksCtrl.create)
// POST localhost:3000/potlucks/:id/dishes
router.post('/:id/dishes', isLoggedIn, potlucksCtrl.addDish)

// PUT localhost:3000/potlucks/:id
router.put('/:id', isLoggedIn, potlucksCtrl.update)

// DELETE localhost:3000/potlucks/:id
router.delete('/:id', isLoggedIn, potlucksCtrl.delete)
// DELETE localhost:3000/potlucks/:id/dishes/:dishId
router.delete('/:id/:dishId', isLoggedIn, potlucksCtrl.deleteDish)

export {
  router
}