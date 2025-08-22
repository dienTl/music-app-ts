import {Router} from "express"

const router : Router = Router()

import * as controller from "../../controller/admin/song.controllers"

router.get("/", controller.index )

export const SongRoutes :Router = router