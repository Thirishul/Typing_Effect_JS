const texts = ['thirishul', 'asokan', 'Genius', 'MASS'];
let c = 0;
let it = 0;
let ct = '';
let letter = '';


(function type() {
    if (c === texts.length) {
        c = 0;
    }
    ct = texts[c];
    letter = ct.slice(0, ++it);

    document.querySelector('.type').textContent = letter;

    if (letter.length === ct.length) {
        c++;
        it = 0;
    }
    setTimeout(type, 400);
}());