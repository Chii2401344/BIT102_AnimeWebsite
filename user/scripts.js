// ---------------------------------------------------------- Logout ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    function setupLogoutHandler(id) {
        const logoutButton = document.getElementById(id);
        if (logoutButton) {
            logoutButton.addEventListener("click", function (event) {
                event.preventDefault();
                let logoutAlert = confirm("Are you sure you want to logout?");
                if (logoutAlert) {
                    window.location.href = "../index.html";
                }
            });
        }
    }

    // Apply event listeners to both buttons
    setupLogoutHandler("logoutDesktop");
    setupLogoutHandler("logoutMobile");
});

// ---------------------------------------------------------- Load saved username & email ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Load saved username
    if (localStorage.getItem("username")) {
        document.getElementById("profileUsername").textContent = localStorage.getItem("username");
    }

    // Load saved email
    if (localStorage.getItem("email")) {
        document.getElementById("profileEmail").textContent = localStorage.getItem("email");
    }
});
