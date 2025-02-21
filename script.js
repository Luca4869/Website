 function login() {
    let u = document.getElementById("username").value;
    let p = document.getElementById("pw").value;
    let errorMsg = document.getElementById("error-msg");
    
    errorMsg.style.display = "none"; 
    
    if (u === "Luca" && p === "Kalicyanide") {
        window.location.href = "home.html";
        return false;
    } else {
        errorMsg.style.display = "block";
        return false;
    }
}
