var prevScrollpos = window.pageYOffset;
window.onscroll = function() // Pour faire disparaitre/apparaitre la navbar
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navButton").style.top = "1%";
    } 
    else 
    {
        document.getElementById("navbar").style.top = "-200px";
        document.getElementById("navButton").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}



// Noooooooo Popup


// $(document).mouseleave(function () {
//     document.getElementById("Popup").style.visibility = "visible";
// });

// addEvent(document, "mouseleave", function(e) {
//     test = e.target == null;
//     if (test){
//         document.getElementById("Popup").style.visibility = "visible";
//     }
// });
//
// addEvent(document, "mousein", function (e) {
//     document.getElementById("Popup").style.visibility = "hidden";
// });



var prevEvent, currentEvent;
document.documentElement.onmousemove=function(event){
  currentEvent = event;
}

var switchAnim = false;

setInterval(function()
{
    if(prevEvent && currentEvent)
    {
        var movementX = Math.abs(currentEvent.screenX-prevEvent.screenX);
        var movementY = Math.abs(currentEvent.screenY-prevEvent.screenY);
        var movement = Math.sqrt(movementX*movementX+movementY*movementY);
        // console.log(movement);

        if (movement > 450)
        {
            if (switchAnim)
                document.body.classList.add("spasmegauche");
            else
                document.body.classList.add("spasmedroite");
            setTimeout(removeSpasme, 520);
        }
    }
    prevEvent=currentEvent;
}, 100);

function removeSpasme()
{
    // console.log("spasme removed");
    if (switchAnim)
        document.body.classList.remove("spasmegauche");
    else
        document.body.classList.remove("spasmedroite");
    switchAnim = !switchAnim;    
}






// Sur mobile
var menuIsDeployed = false;
function popMobileNavBar()
{
    var navB = document.getElementById("navbar");
    var navATagList = navB.getElementsByTagName("a");
    
    if (menuIsDeployed)
    {
        menuIsDeployed = false;
        for (i = 0; navATagList.length; i++)
        {
            if (navATagList[i] != navB.getElementsByClassName("active")[0])
                navATagList[i].style.display = "none";
            else
            {
                navATagList[i].style.display = "block";
                navATagList[i].style.backgroundColor = "#555";                
            }
            
        }                   
    }
    else
    {
        menuIsDeployed = true;
        for (i = 0; navATagList.length; i++)
        {
            if (navATagList[i] != navB.getElementsByClassName("active")[0])
                navATagList[i].style.display = "block";
            else
                navATagList[i].style.backgroundColor = "#9900cc";
        }                    
    }
}