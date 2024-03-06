function updateBodyHeight() {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    body.style.height = height + 'px';
}
updateBodyHeight();