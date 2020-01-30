var modal = document.querySelector('.modal-backdrop');
var openButton = document.querySelector('#modList');

openButton.addEventListener('click', function(e) {
    modal.classList.add('open');
});

modal.addEventListener('click', function (e) {
    modal.classList.remove('open');
});
