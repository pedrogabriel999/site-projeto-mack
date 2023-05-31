
var btnQueroAssistir = document.querySelectorAll('.btn-quero-assistir');

btnQueroAssistir.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        event.stopPropagation(); 
        alert('Filme adicionado à lista "Filmes que quero assistir"!');
    });
});


var btnJaAssisti = document.querySelectorAll('.btn-ja-assisti');

btnJaAssisti.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        event.stopPropagation(); 
        alert('Filme adicionado à lista "Filmes que já assisti"!');
    });
});


var posterImgs = document.querySelectorAll('.poster img');

posterImgs.forEach(function (img) {
    img.addEventListener('click', function () {
        var link = this.parentNode.href; 
        window.open(link, '_blank'); 
    });
});