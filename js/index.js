/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.boxShadow = "0px 1px 3px 2px rgba(0, 0, 0, 0.7)";
    //document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("toggler").style.display = "none"
    document.getElementById('navInner').style.display = "block"
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.boxShadow = "none";
    //document.getElementById("main").style.marginLeft = "0";
    document.getElementById("toggler").style.display = "inline-block"
    document.getElementById('navInner').style.display = "none"

}