const tSiswa = document.querySelector('.cover-main .siswa');
const tGuru = document.querySelector('.cover-main .guru');


tSiswa.addEventListener('click', function() {
	window.location.href = "siswa";
	// tSiswa.style.backgroundColor = 'red';
	});

tGuru.addEventListener('click', function() {
	window.location.href = "guru";
})