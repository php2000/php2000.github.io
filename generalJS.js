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