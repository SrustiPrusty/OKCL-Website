var prevp = document.getElementById("prevp");
var nextp = document.getElementById("nextp");
var thumbnailp = document.getElementsByClassName("thumbnailp");
var herop = document.getElementById("herop");

var backgroundImg =  new Array(
    "images/pr1.jpg",
    "images/pr2.jpg",
    "images/pr3.jpg",
);
let i = 0;
nextp.onclick = function(){


    if(i < 4){
        herop.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnailp[i+1].classList.add("active");
        thumbnailp[i].classList.remove("active");
        i++;
    }
    
}
prevp.onclick = function(){


    if(i > 0){
        herop.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnailp[i-1].classList.add("active");
        thumbnailp[i].classList.remove("active");
        i--;
    }
    
}
