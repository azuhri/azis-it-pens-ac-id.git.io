const navKelas = document.querySelectorAll('.navKelas h2')

const nav1 = navKelas[0];
const nav2 = navKelas[1];
const nav3 = navKelas[2];
const nav4 = navKelas[3];

const tugas = document.querySelector('.tugasutama');
const materi = document.querySelector('.materi');
const ulangan = document.querySelector('.ulangan');
const chat = document.querySelector('.chat');

nav1.addEventListener('click', function() {
    nav1.classList.add('clickNav');

    nav2.classList.remove('clickNav');
    nav3.classList.remove('clickNav');
    nav4.classList.remove('clickNav');

    //nav kelas
    tugas.classList.add('noneS');

    materi.classList.remove('noneS');
    ulangan.classList.remove('noneS');
    chat.classList.remove('noneS');
});


nav2.addEventListener('click', function() {
    nav2.classList.add('clickNav');

    
    nav1.classList.remove('clickNav');
    nav3.classList.remove('clickNav');
    nav4.classList.remove('clickNav');

    //nav kelas
    materi.classList.add('noneS');

    tugas.classList.remove('noneS');
    ulangan.classList.remove('noneS');
    chat.classList.remove('noneS');
});


nav3.addEventListener('click', function() {
    nav3.classList.add('clickNav');

    
    nav1.classList.remove('clickNav');
    nav2.classList.remove('clickNav');
    nav4.classList.remove('clickNav');

    
    //nav kelas
    ulangan.classList.add('noneS');

    tugas.classList.remove('noneS');
    materi.classList.remove('noneS');
    chat.classList.remove('noneS');
});


nav4.addEventListener('click', function() {
    nav4.classList.add('clickNav');

    
    nav1.classList.remove('clickNav');
    nav2.classList.remove('clickNav');
    nav3.classList.remove('clickNav');

    
    //nav kelas
    chat.classList.add('noneS');
    tugas.classList.remove('noneS');
    ulangan.classList.remove('noneS');
    materi.classList.remove('noneS');
});