@@include('webpcss.js');
@@include('dynamicAdapt.js');
let burgerMenu = document.querySelector(".header__burger");
burgerMenu.onclick = function  open(){
    document.querySelector("body").classList.toggle("burger-active");
    burgerMenu.classList.toggle("active");
    document.querySelector(".header__burger-list").classList.toggle("active");
    document.querySelector(".header__placeholder").classList.toggle("active");
    document.querySelector(".header__logo").classList.toggle("active");
    document.querySelector(".search").classList.toggle("active");
}
document.querySelectorAll(".tab__triggers").forEach((item) =>   
    item.addEventListener('click',function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll(".tab__triggers").forEach(
            (child) => child.classList.remove("active")
        );
        document.querySelectorAll(".tab__items").forEach(
            (child) => child.classList.remove("active")
        );     
        item.classList.add("active");
        document.getElementById(id).classList.add('active')
    })  
);
document.querySelector('.tab__triggers').click();
window.onscroll = function fixedHeader() {
    if(window.pageYOffset > 80) {
        document.querySelector(".header-top").classList.add("fixed");
        document.querySelector(".header-top__fixed").classList.add("fixed");
        document.querySelector(".header-placeholder").classList.add("fixed");
    } else {
        document.querySelector(".header-top").classList.remove("fixed");
        document.querySelector(".header-top__fixed").classList.remove("fixed");
        document.querySelector(".header-placeholder").classList.remove("fixed");
    }
}
