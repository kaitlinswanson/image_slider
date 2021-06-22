//create image slider
const image1 = document.getElementById('image1'); 
const image2 = document.getElementById('image2'); 
const image3 = document.getElementById('image3'); 

//make change image function that puts images in an array 
let imageArray = ['image1', 'image2', 'image3']; 

function changeImage() { 
    for(i = 0; i < imageArray.length; i++) {
       console.log(imageArray[i])
    } 
}



//setInterval(function () { 
//changeImage();
//}, 2000)

//automatically moves fwd every 5 seconds 

function showImage(name) {  
    clearPrevious();
    name.style.display="flex";
}

function clearPrevious() { 
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
}


//navigation circles at the bottom that can be clicked


//set up a wide div which will contain images.
//put it inside of a container div "picture frame"

//build functions for "next" and "previous"