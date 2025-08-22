import {Router} from "express"

const router : Router = Router();

import * as controller from "../../controller/admin/dashboard.controllers"

router.get("/", controller.index)

export const dashboardRoutes : Router = router
