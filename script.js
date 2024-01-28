document.getElementById('watch').addEventListener('click', function() {
        window.open('https://www.hulu.com/series/house-ef39603f-eb90-424  8-8237-f6168d7c1be1', '_blank');
    });

    document.getElementById("signup-link").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("container").style.display = "none";
        document.getElementById("sign-up").style.display = "block";
        

    });