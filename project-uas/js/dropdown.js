const pp = document.querySelector('.photoF');
const dropdown = document.querySelector('.dropdown');

pp.addEventListener('mouseenter', function() {
    dropdown.classList.remove('visible');
});


pp.addEventListener('mouseleave', function() {
    dropdown.classList.add('visible');
});