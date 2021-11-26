const iclose = document.querySelector('.iClose img');

const popup = document.querySelector('.formUploadBuku');

const upload = document.querySelector('.upload i');
  
upload.addEventListener('click', function() { popup.classList.remove('display')});
iclose.addEventListener('click', function() { popup.classList.add('display')});

// iList.addEventListener('click', function() { list.classList.remove('display')});
// iList.addEventListener('click', function() { list.classList.add('display')});




