import mongoose from "mongoose";

const singerShema = new mongoose.Schema(
  {
    fullName :String , 
    avater : String ,
    status :String ,
    slug : String ,
    deleted:{
      type : Boolean,
      default : false 
    },
    deletedAt :Date ,
  },{
    timestamps:true
  },
  
)
const Singer = mongoose.model("Singer",singerShema,"singers")

export default Singer