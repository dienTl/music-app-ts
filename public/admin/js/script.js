// upload image
  const uploadImage = document.querySelector("[upload-image]")
  if(uploadImage){
    const uploadImageInput = document.querySelector("[upload-image-input]")
    const uploadImagePreview = document.querySelector("[upload-image-preview]")
    uploadImageInput.addEventListener("change" , (e) =>{
      if(e.target.files.length){
      const image = URL.createObjectURL(e.target.files[0])
      uploadImagePreview.src = image
      }
    })
  }

//end upload image

// upload audio
  const uploadAudio = document.querySelector("[upload-audio]")
  if(uploadAudio){
    const uploadAudioInput = document.querySelector("[upload-audio-input]")
    const uploadAudioPlay = document.querySelector("[upload-image-play]")
    const source = uploadAudio.querySelector("source")
    uploadAudioInput.addEventListener("change" , (e) =>{
      if(e.target.files.length){
        const audio = URL.createObjectURL(e.target.file[0])
        source.scr = audio
        uploadAudio.load()
      }

    })
  }

  // const HUY = document.querySelector("[HUY]");
// if (HUY) {
//   HUY.addEventListener("click", () => {
//     const uploadImageInput = document.querySelector("[upload-image-input]");
//     const uploadImagePreview = document.querySelector("[upload-image-preview]");
//     if (uploadImageInput && uploadImagePreview) {
//       uploadImageInput.value = "";
//       uploadImagePreview.src = "";
//     }
//   });
// }
//end upload audio

