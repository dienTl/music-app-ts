import { Request , Response } from "express"
import Song from "../../models/song.model"
import Singer from "../../models/singer.model"
import { convertToSlug } from "../../helper/convertToSlug"

//[GET] //search/result
export const result = async ( req:Request ,res:Response) =>{
  const keyword : string = `${req.query.keyword}`
  
  let newSongs = []

  if(keyword){
    const keywordRegex = new RegExp(keyword ,"i")
    // Tạo ra slug, có thêm dấu trừ ngăn cách
    const stringSlug = convertToSlug(keyword)
    const stringSlugRegex = new RegExp(stringSlug ,"i")
    const songs = await Song.find({
      $or:[
        {title :keywordRegex},
        {slug: stringSlugRegex}
      ]
      
    })

    for( const item of songs) {
      const infoSinger = await Singer.find({
        _id: item.singerId
      })
      item["infoSinger"] = infoSinger
    }
    newSongs = songs
  }

  res.render("client/pages/search/result.pug",{
    pagetitle : `kết quả: ${keyword}`,
    keyword : keyword,
    songs : newSongs
  })
}