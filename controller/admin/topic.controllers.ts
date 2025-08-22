import { Request , Response } from "express"
import Topic from "../../models/topics.model"

// [GET] /admin/topics
export const index =  async(req :Request , res : Response) =>{
  const topics = await Topic.find({
    deleted:false
  })
  res.render("admin/pages/topics/index.pug",{
    pagetitle :"Quản lí chủ đề",
    topics:topics
  })
}