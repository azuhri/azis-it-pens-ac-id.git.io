const tSiswa = document.querySelector('.cover-main .siswa');
const tGuru = document.querySelector('.cover-main .guru');
const tOrtu = document.querySelector('.cover-main .ortu');


tSiswa.addEventListener('click', function() {
	window.location.href = "siswa";
	// tSiswa.style.backgroundColor = 'red';
	});

tGuru.addEventListener('click', function() {
	window.location.href = "guru";
})

tOrtu.addEventListener('click', function() {
	window.location.href = "ortu";
})