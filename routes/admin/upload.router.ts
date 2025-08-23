import {Router} from "express"
import multer from "multer"

const router : Router = Router();

import * as controller from "../../controller/admin/upload.controllers"

import * as uploadCloud from "../../middlerwares/admin/uploadCloud.middleware"

const upload =multer()

router.get("/",
    upload.single("file"),
  uploadCloud.uploadSingle 
  , controller.index)

export const uploadRoutes : Router = router
