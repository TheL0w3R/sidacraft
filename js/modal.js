var modal = document.querySelector('.modal-backdrop');
var openButton = document.querySelector('#modList');

openButton.addEventListener('click', function(e) {
    modal.classList.add('open');
});

modal.addEventListener('click', function (e) {
    modal.classList.remove('open');
});

var modalHeight = document.querySelector('.modal').clientHeight;
document.querySelector('.scroll').setAttribute('style', 'height: ' + (modalHeight - 73) + 'px;');
