import { Router } from "express";
import * as potluckCtrl from "../controllers/potlucks.js"

const router = Router()

router.get('/', potluckCtrl.index)

export {
  router
}