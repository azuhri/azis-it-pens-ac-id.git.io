
const r1 = document.querySelector('.reviewer1');
const r2 = document.querySelector('.reviewer2');
const r3 = document.querySelector('.reviewer3');
const r4 = document.querySelector('.reviewer4');


var dataSlide = [r1, r2, r3, r4];
var i = 0; //nilai awal

const bulet1 = document.querySelector('.bulet1 span');
const bulet2 = document.querySelector('.bulet2 span');
const bulet3 = document.querySelector('.bulet3 span');
const bulet4 = document.querySelector('.bulet4 span');


function slide() {

    
    
    if( i < dataSlide.length - 1) {
        i++
    } else {
        i = 0
    }


    // dataSlide[i].classList.add('opacity')

    if( i == 0 ) {
        dataSlide[3].classList.remove('opacity')
        dataSlide[0].classList.add('opacity')

        //bulet
        bulet4.classList.remove('buletActive');
        bulet1.classList.add('buletActive');
    } else if( i == 1) {
        dataSlide[0].classList.remove('opacity');
        dataSlide[1].classList.add('opacity');
        
        //bulet
        bulet1.classList.remove('buletActive');
        bulet2.classList.add('buletActive');
    } else if( i == 2) {
        dataSlide[1].classList.remove('opacity');
        dataSlide[2].classList.add('opacity');
   
        //bulet
        bulet2.classList.remove('buletActive');
        bulet3.classList.add('buletActive');
    }

    else if( i == 3) {
        dataSlide[2].classList.remove('opacity');
        dataSlide[3].classList.add('opacity');
   
        //bulet
        bulet3.classList.remove('buletActive');
        bulet4.classList.add('buletActive');
    }

    setTimeout("slide()", 7000)

}



window.onload = slide;
