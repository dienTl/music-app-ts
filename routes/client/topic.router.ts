import {  Router } from "express";
import * as controller from "../../controller/client/topic.controllers"

const router : Router = Router();


router.get("/", controller.topics )
export const topicRoutes : Router = router