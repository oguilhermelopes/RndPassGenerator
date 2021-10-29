function getPassword(){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%()-_=+[]{}";
    var passwordLenght = 16;
    var password = "";

    for (var i = 0; i < passwordLenght; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password;
    }

function copyPassword(){
    var copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand("copy");
    alert("New Password Copied");

}