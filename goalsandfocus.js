var contenttt1 = document.getElementById("contenttt1")
var contenttt2 = document.getElementById("contenttt2")

var btnnn1 = document.getElementById("btnnn1")
var btnnn2 = document.getElementById("btnnn2")


function openGOALS() {
    contenttt1.style.transform = "translateX(0)"
    contenttt2.style.transform = "translateX(150%)"

    btnnn1.style.color = "#ff7846"
    btnnn2.style.color = "#001D45"
  
    contenttt1.style.transitionDelay = "0.5s";
    contenttt2.style.transitionDelay = "0s";
}
  
function openFOCUS() {
    contenttt1.style.transform = "translateX(150%)"
    contenttt2.style.transform = "translateX(0)"
    
    btnnn1.style.color = "#001D45"
    btnnn2.style.color = "#ff7846"
    
    contenttt1.style.transitionDelay = "0s";
    contenttt2.style.transitionDelay = "0.5s";

}