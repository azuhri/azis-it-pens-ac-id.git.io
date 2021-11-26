const iclose = document.querySelector('.iClose img');
const tclose = document.querySelector('.tClose img');
const popup = document.querySelector('.formUploadBuku');
const popupJoinKelas = document.querySelector('.formJoinKelas');
const upload = document.querySelector('.upload i');
const tJoin = document.querySelector('.join i');
const iList = document.querySelector('.list i');
const list = document.querySelector('.urutkan');


    tJoin.addEventListener('click', function() { popupJoinKelas.classList.remove('display')});
    tclose.addEventListener('click', function() { popupJoinKelas.classList.add('display')});

upload.addEventListener('click', function() { popup.classList.remove('display')});
iclose.addEventListener('click', function() { popup.classList.add('display')});
iList.addEventListener('mouseenter', function() { list.classList.remove('display')});
iList.addEventListener('mouseleave', function() { list.classList.add('display')});
list.addEventListener('mouseenter', function() { list.classList.remove('display')});
list.addEventListener('mouseleave', function() { list.classList.add('display')});

// iList.addEventListener('click', function() { list.classList.remove('display')});
// iList.addEventListener('click', function() { list.classList.add('display')});




