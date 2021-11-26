const li = document.querySelectorAll('.nav ul li');
const nav1 = document.querySelector('.nav ul li:nth-child(1) a');
const nav2 = document.querySelector('.nav ul li:nth-child(2) a');
const nav3 = document.querySelector('.nav ul li:nth-child(3) a');
const nav4 = document.querySelector('.nav ul li:nth-child(4) a');
const nav5 = document.querySelector('.nav ul li:nth-child(5) a');
const nav6 = document.querySelector('.nav ul li:nth-child(6) a');
const nav7 = document.querySelector('.nav ul li:nth-child(7) a');

nav1.addEventListener('click',function() {
    li[0].classList.toggle('active');
});

nav2.addEventListener('click',function() {
    li[1].classList.toggle('active');
});

nav3.addEventListener('click',function() {
    li[2].classList.toggle('active');
});

nav4.addEventListener('click',function() {
    li[3].classList.toggle('active');
});

nav5.addEventListener('click',function() {
    li[4].classList.toggle('active');
});

nav6.addEventListener('click',function() {
    li[5].classList.toggle('active');
});

nav7.addEventListener('click',function() {
    li[6].classList.toggle('active');
});

//Remove Bar
nav1.addEventListener('click',function() {
    li[1].classList.remove('active');
    li[2].classList.remove('active');
    li[3].classList.remove('active');
    li[4].classList.remove('active');
});

nav2.addEventListener('click',function() {
    li[0].classList.remove('active');
    li[2].classList.remove('active');
    li[3].classList.remove('active');
    li[4].classList.remove('active');
});

nav3.addEventListener('click',function() {
    li[0].classList.remove('active');
    li[1].classList.remove('active');
    li[3].classList.remove('active');
    li[4].classList.remove('active');
});

nav4.addEventListener('click',function() {
    li[0].classList.remove('active');
    li[1].classList.remove('active');
    li[2].classList.remove('active');
    li[4].classList.remove('active');
});

nav5.addEventListener('click',function() {
    li[0].classList.remove('active');
    li[1].classList.remove('active');
    li[2].classList.remove('active');
    li[3].classList.remove('active');
});


//Effect Scroll
// const banner = document.getElementById('banner');
// const header = document.getElementById
// banner.addEventListener('wheel' ,function() {
//     header.classList.add('scroll')
// });
// const header = document.getElementById('header');
// banner.addEventListener('wheel' ,function() {
//     header.classList.add('scroll');
// });

//button user
const btnSiswa = document.querySelector('.button-user button:nth-child(1)');
const btnGuru = document.querySelector('.button-user button:nth-child(2)');
const btnOrtu = document.querySelector('.button-user button:nth-child(3)');

//User
const siswa = document.querySelector('.siswa');
const guru = document.querySelector('.guru');
const ortu = document.querySelector('.ortu');

btnSiswa.addEventListener('click', function() {
    //BackgroundButton
    btnSiswa.classList.toggle('button-bg');
    btnGuru.classList.remove('button-bg');
    btnOrtu.classList.remove('button-bg');

    //effect content
    siswa.classList.toggle('opacity');
    guru.classList.remove('opacity');
    ortu.classList.remove('opacity');

});

btnGuru.addEventListener('click', function() {
    //BackgroundButton
    btnGuru.classList.toggle('button-bg');
    btnSiswa.classList.remove('button-bg');
    btnOrtu.classList.remove('button-bg');
    btnSiswa.classList.remove('btnUserActive')

    //effect content
    guru.classList.add('opacity');

    siswa.classList.remove('opacity');
    ortu.classList.remove('opacity')
});

btnOrtu.addEventListener('click', function() {
    //BackgroundButton
    btnOrtu.classList.toggle('button-bg');
    btnGuru.classList.remove('button-bg');
    btnSiswa.classList.remove('button-bg');
    btnSiswa.classList.remove('btnUserActive')

    //effect content
    ortu.classList.add('opacity');

    siswa.classList.remove('opacity');
    guru.classList.remove('opacity')

});

//Button Mulai Sekarang
const dgs = document.getElementById('digschool');
const btnMulai = document.querySelector('#cover-desc button');

btnMulai.addEventListener('click', function() {
    location.href = '#digschool';
});


//Slide mobile Nav
const hamburger = document.getElementById('iconHam');
const silang = document.getElementById('silang');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.remove('close');
     menu.classList.add('hClick');
     silang.classList.add('close');
});

silang.addEventListener('click', function() {
    silang.classList.remove('close');
     menu.classList.remove('hClick');
     hamburger.classList.add('close');
});