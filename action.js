function login () {
    var studentID = document.getElementById("studentID").value;
    var password = document.getElementById("password").value;

    if (studentID === "5251" && password === "password5251") {
        document.getElementById("output").innerHTML = "Login successful. Welcome, " + studentID + "!";
    } else {
        document.getElementById("output").innerHTML = "Login failed. Please check your credentials.";
    }
}