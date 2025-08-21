import {Router} from "express"

const router : Router = Router()

import * as controller from "../../controller/client/favorite-song.controllers"

router.get("/",controller.index)

export const favoriteSongRoutes : Router = router ;