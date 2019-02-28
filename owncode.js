var PW_LENGTH = 10;
var PIN_LENGTH = 8;

var user = document.getElementById("user");
var domain = document.getElementById("domain");
var master = document.getElementById("master");
var pw = document.getElementById("password");
var copyBtn = document.getElementById("copybtn");
var pin = document.getElementById("pin");

user.value = default_username;

var chunkIntoPieces = function(input, size) {
    input = input.split('');
    var chunks = [];
    while (input.length > 0) {
        chunks.push(input.splice(0, size).join(''));
    }
    return chunks;
};

var hexToInt = function(hex){
	return parseInt(hex, 16);	
};

var md5ToPw = function(text) {    
    var as_decimals = chunkIntoPieces(text, 2).map(hexToInt);	
	var weird_string = String.fromCharCode(...as_decimals);
	
    return window.btoa(weird_string).replace(/[\W]/g, '');
};

var updatePasswordField = function(event) {
    var combined = (user.value + domain.value + master.value + salt).toLowerCase();
    var md5code = md5(combined);
	
    pw.value = md5ToPw(md5code).substring(0, PW_LENGTH);
    pin.value = hexToInt(md5code.substring(0,13)).toString().slice(-PIN_LENGTH);
};

var copyToClip = function(event) {
    pw.select();
    document.execCommand('copy');
};

user.addEventListener("change", updatePasswordField);
domain.addEventListener("change", updatePasswordField);
master.addEventListener("change", updatePasswordField);
copyBtn.addEventListener("click", copyToClip);

