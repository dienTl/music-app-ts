// upload image
  const uploadImage = document.querySelector("[upload-image]")
  if(uploadImage){
    const uploadImageInput = document.querySelector("[upload-image-input]")
    const uploadImagePreview = document.querySelector("[upload-image-preview]")
    uploadImageInput.addEventListener("change" , (e) =>{
      const file = e.target.files[0]
      uploadImagePreview.src = URL.createObjectURL(file)
    })
  }

  const HUY = document.querySelector("[HUY]");
if (HUY) {
  HUY.addEventListener("click", () => {
    const uploadImageInput = document.querySelector("[upload-image-input]");
    const uploadImagePreview = document.querySelector("[upload-image-preview]");
    if (uploadImageInput && uploadImagePreview) {
      uploadImageInput.value = "";
      uploadImagePreview.src = "";
    }
  });
}
//end upload image
