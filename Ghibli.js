function updateBodyHeight() {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    body.style.height = height + 'px';
}
updateBodyHeight();

function printRadio(radioName){
    var radio = document.getElementsByName(radioName);
    var output = document.getElementById('output');
    for(var i = 0; i < radio.length; i++) { 
        if(radio[i].checked) {
            var newOutput = radio[i].value + ' ||| ' + radio[i].name;
            output.innerText += newOutput + '\n';
            break;
        }
    }
}
