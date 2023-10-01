import anime from 'animejs';
import background from './img/cyberpunkBackground.jpg';
import "./style.css";

document.addEventListener('DOMContentLoaded', function (){

    let body = document.getElementsByTagName("body")[0];
    body.classList.add("body");

    // let scrolling = anime.timeline({
    //     loop: true
    // })

    let b1 = new Image();
    b1.src = background;
    b1.classList.add("b1");

    let b2 = new Image();
    b2.src = background;
    b2.classList.add("b2");

    body.appendChild(b1);
    body.appendChild(b2);

    let timeline = anime.timeline({
        loop: true
    })

    // first scan

    timeline.add({
        targets: b1,
        scale: 2,
        opacity: 1,
        duration: 0
    }).add({
        targets: b2,
        scale: 3,
        opacity: 1,
        duration: 0
    }).add({
        targets: b1,
        translateX: [0, -1100],
        translateY: [0, 390],
        duration: 30000,
        easing: 'linear',
        begin: function(anim) {
            anime({
                targets: b2,
                scale: 3,
                opacity: 1,
                duration: 0
            });
        },
        complete: function(){
            anime({
                targets: b1,
                zIndex: 0,
                duration: 0
            });

            anime({
                targets: b2,
                zIndex: 1,
                duration: 0
            });
        } 
    }).add({
        targets: b1,
        duration: 5000,
        easing: 'linear',
        opacity: [1, 0],        
    }, '-=5000').add({
        targets: b2,
        translateX: [-1100, -400],
        translateY: [-1300, -1600],
        duration: 30000,
        easing: 'linear',
        begin: function(anim) {
            anime({
                targets: b1,
                scale: 2,
                opacity: 1,
                duration: 0
            });
        },
        complete: function(){
            anime({
                targets: b2,
                zIndex: 0,
                duration: 0
            });

            anime({
                targets: b1,
                zIndex: 1,
                duration: 0
            });
        } 
    }, '-=5000').add({
        targets: b2,
        duration: 5000,
        easing: 'linear',
        opacity: [1, 0]
    }, '-=5000').add({ // this add goes on the end no matter what
        targets: b1,
        translateX: [183, 0],
        translateY: [-65, 0],
        duration: 5000,
        easing: 'linear'
    }, '-=5000')
    
    

    // let firstT = anime({
    //     targets: b1,
    //     translateX: [0, -1100],
    //     translateY: [0, 390],
    //     duration: 30000,
    //     easing: 'linear',
    //     autoplay: false,
    //     begin: function(anim){
    //         anime({
    //             targets: b1,
    //             scale: 2,
    //             duration: 0
    //         });
            
    //         anime({
    //             targets: b1,
    //             delay: 25000,
    //             duration: 5000,
    //             opacity: [1, 0],
    //             begin: function(anim) {
    //                 anime({
    //                     targets: b2,
    //                     scale: 3,
    //                     opacity: 1,
    //                     duration: 0
    //                 });
    //                 secondT.play();
    //             }                
    //         })
    //     },
    //     complete: function(anim){
    //         anime({
    //             targets: b1,
    //             zIndex: 0,
    //             duration: 0
    //         });

    //         anime({
    //             targets: b2,
    //             zIndex: 1,
    //             duration: 0
    //         });
    //     }
    // });

    // let secondT = anime({
    //     begin: function(anim){
    //         anime({
    //             targets: b2,
    //             delay: 25000,
    //             duration: 5000,
    //             opacit{
    //     targets: b2,
    //     translateX: [-1100, -400],
    //     translateY: [-600, -900],
    //     duration: 30000,
    //     easing: 'linear',
    //     autoplay: falsey: [1, 0],
    //             begin: function(anim) {
    //                 anime({
    //                     targets: b1,
    //                     scale: 2,
    //                     opacity: 1,
    //                     duration: 0
    //                 });
    //                 firstT.play();
    //             }                
    //         })
    //     },
    //     complete: function(anim){
    //         anime({
    //             targets: b2,
    //             zIndex: 0,
    //             duration: 0
    //         });

    //         anime({
    //             targets: b1,
    //             zIndex: 1,
    //             duration: 0
    //         });
    //     }
    // });

    // firstT.play();
    
    
    // anime({
    //     targets: b2,
    //     scale: 3,
    //     duration: 0,
    //     translateX: -400,
    //     translateY: -900,        
    // });
    


    
    
    // scrolling.add({
    //     targets: body,
    //     backgroundSize: ['300%', '280%'],
    //     backgroundPosition: ['12% 25%', '30% 30%'],
    //     begin: function(anim){
    //         anime({
    //             delay: 15000,
    //         });
    //     },
    //     duration: 20000,
    //     easing: 'linear'
    // })
    // .add({
    //     targets: '.b2',
    //     duration: 5000,
    //     easing: 'linear',
    //     opacity: [0, 1],
    // }, '-=5000')
    // .add({
    //     targets: '.b2',
    //     translateX : [-400, -1350],
    //     translateY : [-1150, -800],
    //     duration: 20000,
    //     easing: 'linear'    
    // }, '-=5000')
    // .add({
    //     targets: '.b2',
    //     duration: 5000,
    //     easing: 'linear',
    //     opacity: [1, 0],
    //     begin: function(anim){
    //         anime({
    //             targets: body,
    //             backgroundSize: ['305%', '300%'],
    //             backgroundPosition: ['7.5% 23.75%', '12% 25%'],
    //             duration: 5000,
    //             easing: 'linear'
    //         })
    //     },
    // }, '-=5000')

 

});