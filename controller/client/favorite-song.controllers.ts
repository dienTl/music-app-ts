import { Request, Response } from "express"
import FavoriteSong from "../../models/favorite-song.model"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"

// [GET] //favorite-songs/
export const index = async ( req: Request ,res : Response) =>{
  const favoriteSong = await FavoriteSong.find({
    // userId:"",
    deleted:false,
  })
  for( const item of favoriteSong){
    const infoSong = await Song.findOne({
      _id: item.songId
    })

    const infoSinger = await Singer.findOne({
      _id: infoSong.singerId
    })

    item["infoSong"] = infoSong
    item["infoSinger"] = infoSinger
  }
  res.render("client/pages/favorite-songs/index.pug",{
    pagetitle :" bài hát yêu thích",
    favoriteSong :favoriteSong
  })
}