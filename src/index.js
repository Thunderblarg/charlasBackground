import anime from 'animejs';
import background2 from './img/cyberpunkBackground.jpg';
import "./style.css";

document.addEventListener('DOMContentLoaded', function (){

    let body = document.getElementsByTagName("body")[0];
    body.classList.add("body");

    let scrolling = anime.timeline({
        loop: true
    })



    let b2 = new Image();
    b2.src = background2;
    b2.classList.add("b2");

    body.appendChild(b2);
    
    
    scrolling.add({
        targets: body,
        backgroundSize: ['300%', '280%'],
        backgroundPosition: ['12% 25%', '30% 30%'],
        begin: function(anim){
            anime({
                delay: 15000,
            });
        },
        duration: 20000,
        easing: 'linear'
    })
    .add({
        targets: '.b2',
        duration: 5000,
        easing: 'linear',
        opacity: [0, 1],
    }, '-=5000')
    .add({
        targets: '.b2',
        translateX : [-400, -1350],
        translateY : [-1150, -800],
        duration: 20000,
        easing: 'linear'    
    }, '-=5000')
    .add({
        targets: '.b2',
        duration: 5000,
        easing: 'linear',
        opacity: [1, 0],
        begin: function(anim){
            anime({
                targets: body,
                backgroundSize: ['305%', '300%'],
                backgroundPosition: ['7.5% 23.75%', '12% 25%'],
                duration: 5000,
                easing: 'linear'
            })
        },
    }, '-=5000')

 

});