import { Router} from "express"

const router : Router = Router();

import * as controller from "../../controller/client/search.controllers"

router.get("/result" , controller.result)

export const searchRoutes : Router = router