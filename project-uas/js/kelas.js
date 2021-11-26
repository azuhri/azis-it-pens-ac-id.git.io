const navKelas = document.querySelectorAll('.navKelas h2')

const nav1 = navKelas[0];
const nav2 = navKelas[1];
const nav3 = navKelas[2];
const nav4 = navKelas[3];

const tugas = document.querySelector('.tugasutama');
const materi = document.querySelector('.materi');
const ulangan = document.querySelector('.ulangan');
const chat = document.querySelector('.chat');
const upload = document.getElementById('upload');
const popup = document.querySelector('.formUploadBuku');
const iclose = document.querySelector('.iClose img');

upload.addEventListener('click', function() { popup.classList.remove('display')});
iclose.addEventListener('click', function() { popup.classList.add('display')});


function addForm(){
    var type = document.getElementById('pilihan').value;
    var x = ['tugas', 'materi', 'ulangan'];
    for (let index = 0; index < x.length; index++) {
        const form = document.getElementById(x[index]);
        const input = form.children;
        if(type == x[index]){
            form.classList.remove('none');
            for(i = 0; i < input.length; i++){
                if(input[i].nodeName == "INPUT" || input[i].nodeName == "TEXTAREA" || input[i].nodeName == "SELECT"){
                    if(input[i].type != "file"){
                        input[i].setAttribute("required", "");
                    }
                }
            }
        }else{
            form.classList.add('none');
            for(i = 0; i < input.length; i++){
                if(input[i].nodeName == "INPUT" || input[i].nodeName == "TEXTAREA" || input[i].nodeName == "SELECT"){
                    input[i].removeAttribute("required");
                }
            }
        }
    }
    document.getElementById("form-tugas").action = window.location.href + "/" + type;
}
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
    upload.style.display = "block";

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
    upload.style.display = "block";
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
    upload.style.display = "block";
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
    upload.style.display = "none";
});