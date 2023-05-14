let artikel = document.getElementsByTagName('body')[0];
let darkmode = document.getElementById('darkmode');

darkmode.addEventListener('click', function() {
    darkmode.classList.toggle('active');
    artikel.classList.toggle('night');
})