function onReady() {
    var navMenu = document.getElementsByClassName("nav_menu")[0];
    
    // Create navbar button
    var btnToggle = document.createElement("a");
    btnToggle.classList.add("btn", "toggle_sidebar");
    btnToggle.href = "#";
    btnToggle.addEventListener("click", toggleSidebar);
    
    // Create navbar button icon
    var btnIcon = document.createElement("img");
    btnIcon.classList.add("icon");
    btnIcon.src = "../themes/icons/all.svg";
    btnIcon.alt = "☰";
    btnToggle.appendChild(btnIcon);
    
    // Insert navbar button in navbar
    navMenu.insertBefore(btnToggle, navMenu.firstChild);
    
    // Toggle sidebar based on saved action
    var sidebar = document.getElementById("aside_feed");
    var navEntries = document.getElementById("nav_entries");
    var sidebarHidden = localStorage.getItem("sidebar_hidden");
    if (sidebarHidden === "true") {
        sidebar.classList.add("aside_hidden");
        navEntries.classList.add("aside_hidden");
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById("aside_feed");
    var navEntries = document.getElementById("nav_entries");
    if (sidebar.classList.contains("aside_hidden")) {
        sidebar.classList.remove("aside_hidden");
        navEntries.classList.remove("aside_hidden");
        localStorage.setItem("sidebar_hidden", false);
    } else {
        sidebar.classList.add("aside_hidden");
        navEntries.classList.add("aside_hidden");
        localStorage.setItem("sidebar_hidden", true);
    }
}

document.addEventListener('DOMContentLoaded', onReady, false);