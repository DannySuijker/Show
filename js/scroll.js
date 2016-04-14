var topPos;
var updatedPos;
window.onscroll = navPos;

if(!topPos) {
    topPos = 0;
}
function navPos() {
    var pos = window.scrollY;

    if(!topPos) {
        topPos = 0;
    }

    var bar = document.getElementById('nav_bar');

    if (bar) {
        if(pos < topPos && updatedPos != 'absolute') {
            bar.style.position = 'absolute';
            bar.style.width = '100%';
            bar.style.top = topPos + 'px';
            bar.style.bottom =  '10px';
            updatedPos = 'absolute';
        } else if(pos >= topPos && updatedPos != 'fixed') {
            bar.style.position = 'fixed';
            bar.style.width = '100%';
            bar.style.top = '0';
            updatedPos = 'fixed';
        }
    }
}
navPos();