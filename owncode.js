var user = document.getElementById("user");
var domain = document.getElementById("domain");
var master = document.getElementById("master");
var pw = document.getElementById("password");
var copyBtn = document.getElementById("copybtn");
var pin = document.getElementById("pin");

var chunky = function(input, size) {
    input = input.split('');
    var arrays = [];
    while (input.length > 0) {
        arrays.push(input.splice(0, size).join(''));
    }
    return arrays;
};

var textToPw = function(text) {
    var a = chunky(md5(text), 2);
    var b = a.map(function(i) {
        return String.fromCharCode(parseInt(i, 16));
    }).join('');
    return btoa(b).replace(/[\W]/g, '');
};

var updatePasswordField = function(event) {
    var combined = (user.value + domain.value + master.value + salt).toLowerCase();
    var md5code = md5(combined);
    pw.value = textToPw(md5code).substr(0, 10);
    pin.value = parseInt(md5code.substr(0,6), 16).toString().substr(0, 4);
    console.log(pin.value);
};

var copyToClip = function(event) {
    pw.select();
    document.execCommand('copy');
};

user.addEventListener("change", updatePasswordField);
domain.addEventListener("change", updatePasswordField);
master.addEventListener("change", updatePasswordField);
copyBtn.addEventListener("click", copyToClip);

