const iclose = document.querySelector('.iClose img');

const popup = document.querySelector('.formUploadBuku');

const upload = document.querySelector('.upload i');

const iList = document.querySelector('.list i');
const list = document.querySelector('.urutkan');


  
upload.addEventListener('click', function() { popup.classList.remove('display')});
iclose.addEventListener('click', function() { popup.classList.add('display')});
iList.addEventListener('mouseenter', function() { list.classList.remove('display')});
iList.addEventListener('mouseleave', function() { list.classList.add('display')});
list.addEventListener('mouseenter', function() { list.classList.remove('display')});
list.addEventListener('mouseleave', function() { list.classList.add('display')});

// iList.addEventListener('click', function() { list.classList.remove('display')});
// iList.addEventListener('click', function() { list.classList.add('display')});




