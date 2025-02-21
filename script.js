 function login() {
            let u = document.getElementById("username").value;
            let p = document.getElementById("pw").value;
            
            if (u === "Luca" && p === "Kalicyanide") {
                window.open("home.html");
            } else {
                document.getElementById("error-msg").style.display = "block";
            }
 }
