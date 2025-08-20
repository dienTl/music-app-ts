import { Request, Response } from "express"
import Topic from "../../models/topics.model"

//[GET] /topics/
export const topics = async (Request :Request , res : Response) =>{
  const topics = await Topic.find({
    deleted:false
  })
  res.render("client/pages/topics/index.pug",{
    pagetitle :"Chủ đề bài hát",
    topics : topics
  })
}