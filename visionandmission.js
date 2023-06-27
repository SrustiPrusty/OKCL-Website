var contentt1 = document.getElementById("contentt1")
var contentt2 = document.getElementById("contentt2")

var btnn1 = document.getElementById("btnn1")
var btnn2 = document.getElementById("btnn2")


function openVISION() {
    contentt1.style.transform = "translateX(0)"
    contentt2.style.transform = "translateX(150%)"

    btnn1.style.color = "#ff7846"
    btnn2.style.color = "#001D45"
  
    contentt1.style.transitionDelay = "0.5s";
    contentt2.style.transitionDelay = "0s";
}
  
function openMISSION() {
    contentt1.style.transform = "translateX(150%)"
    contentt2.style.transform = "translateX(0)"
    
    btnn1.style.color = "#001D45"
    btnn2.style.color = "#ff7846"
    
    contentt1.style.transitionDelay = "0s";
    contentt2.style.transitionDelay = "0.5s";

}