 const menuToggle = document.getElementById("menuToggle");
const navManu = document.getElementById("navManu");
// mobile menu open/close

menuToggle.addEventListener("click",function(){
    const isOpen = navManu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded",isOpen);
    menuToggle.setAttribute("aria-label", isOpen? "close navigation" : "Open navigation");
    menuToggle.innerHTML = isOpen? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});

 const navLinks = navManu.querySelectorAll("a");
 navLinks.forEach(function(link){
    link.addEventListener("click",function(){
        navManu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded","false");
        menuToggle.setAttribute("aria-label","Open-navigation");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
 });
document.getElementById("year").textContent= new Date().getFullYear();