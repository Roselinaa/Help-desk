let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    // let getSidebarMenu = document.querySelector(".btn-toggle-nav");
    // let getSidebarX = document.querySelector(".btn-toggle-nav2");

    if (toggleNavStatus === false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity ="0.5";
        // getSidebarMenu = "hidden";
        // getSidebarX = "visible";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";    
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "60px";
        getSidebarTitle.style.opacity ="0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";    
        }

        // getSidebarMenu = "visible";
        // getSidebarX = "hidden";
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}