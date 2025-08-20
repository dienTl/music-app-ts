import { Request,Response } from "express"
import Topic from "../../models/topics.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";

//[GET] //songs/:slugTopic
export const list = async (req:Request , res:Response) =>{
  try {
    console.log(req.params.slugTopic);
    const topic = await Topic.findOne({
      slug:req.params.slugTopic,
      status :"active",
      deleted:false
    })
    const songs =await Song.find({
      topicId : topic.id ,
      status :"active" ,
      deleted :false
    }).select("avatar title slug singerId like")
  
    for( const song of songs){
      const infoSinger = await Singer.findOne({
        _id : song.singerId,
        status :"active",
        deleted :false ,
      })
      song["infoSinger"] = infoSinger
    }

    res.render("client/pages/songs/list",{
      pagetitle: topic.title,
      songs :songs
    });
  } catch (error) {
    res.redirect("/")
  }
}