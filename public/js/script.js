// aplayer
const aplayer = document.querySelector('#aplayer')
if(aplayer){
  let dataSong = aplayer.getAttribute("data-song")
  dataSong = JSON.parse(dataSong)

  let dataSinger = aplayer.getAttribute("data-singer")
  dataSinger = JSON.parse(dataSinger)
  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: dataSong.title,
        artist: dataSinger.fullName,
        url: dataSong.audio,
        cover: dataSong.avatar
    },],
    autoplay : true,
    volume :0.8 
});
  const avatar = document.querySelector(".singer-detail .inner-avatar");
  

  ap.on('play', function(){
    avatar.style.animationPlayState=  "running" 
  })
  ap.on('pause', function(){
    avatar.style.animationPlayState=  "paused" 
  })
}
// end button aplay 
// buuton like
const buttonLike = document.querySelector("[button-like]")
if(buttonLike){
  buttonLike.addEventListener("click",()=>{
    const idSong =buttonLike.getAttribute("button-like");
    const isActive = buttonLike.classList.contains("acitve")

    const typeLike = isActive ?"dislike" :"like"
    const link =`/songs/like/${typeLike}/${idSong}`
    const option = {
      method : "PATCH"
    }
    fetch(link,option)
      .then(res =>res.json())
      .then(data =>{
        if(data.code == 200){
          const span = buttonLike.querySelector("span")
          span.innerHTML = `${data.like} thích`
          buttonLike.classList.toggle("active")
        }
        
      })
  })
}

// end button like

// buuton favorite
const listButtonFavorite = document.querySelectorAll("[button-favorite]")
if(listButtonFavorite.length >0){
  listButtonFavorite.forEach((buttonFavorite)=>{
    buttonFavorite.addEventListener("click",()=>{
    const idSong = buttonFavorite.getAttribute("button-favorite");
    const isActive = buttonFavorite.classList.contains("active")

    const typeFavorite = isActive ? "unfavorite" :"favorite"
    const link = `/songs/favorite/${typeFavorite}/${idSong}`
    const option = {
      method : "PATCH"
    }
    fetch(link,option)
      .then(res =>res.json())
      .then(data =>{
        if(data.code == 200 ){
          buttonFavorite.classList.toggle("active")
        }
      })
  })

  })
}  

// end button favorite

// Search suggest 
const boxSearch = document.querySelector(".box-search")
if(boxSearch){
  const input = boxSearch.querySelector("input[name='keyword']");
  input.addEventListener("keyup",()=>{
    const keyword = input.value
    const link =`/search/suggest?keyword=${keyword}`;

  
    fetch(link)
      .then(res => res.json())
      .then(data =>{
        data.songs.forEach(song =>{
          
        })
      })
  })
}
// end search suggest