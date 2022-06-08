// her STARTER javascript til billede galleriet på 2001-forestilinger siden der er brugt denne video som hjælp https://www.youtube.com/watch?v=sHG3Sf6XN9g

let fullImgBox = document.getElementById("fullImgBox");
let fullImages = document.getElementById("fullimages");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImages.src = pic;

}

function closeFullImg() {
  fullImgBox.style.display = "none";

}