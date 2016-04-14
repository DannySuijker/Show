/**
 * Created by danny on 4-2-16.
 */
var plaatjes = ['img/HL.png','img/site.png','img/vieropeenrij.png','img/Keuze.png'];
var highlight = 0;

function onClick(direction) {
    if(direction === 'left') {

        if(highlight !== 0) {
            highlight--;
            var source = plaatjes[highlight];
            document.getElementsByClassName('projectsImg')[0].src = source;
        }
        else {
            highlight = plaatjes.length-1;
            var source = plaatjes[highlight];
            document.getElementsByClassName('projectsImg')[0].src = source;
        }
    }
    else {
        if(highlight !== plaatjes.length-1) {
            highlight++;
            var source = plaatjes[highlight];
            document.getElementsByClassName('projectsImg')[0].src = source;
        }
        else {
            highlight = 0;
            var source = plaatjes[highlight];
            document.getElementsByClassName('projectsImg')[0].src = source;
        }
    }
};