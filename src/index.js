import anime from 'animejs';
import background from './img/cyberpunkBackground.jpg';
import "./style.css";

document.addEventListener('DOMContentLoaded', function (){

    let body = document.getElementsByTagName("body")[0];
    body.classList.add("body");

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
    });

    // first scan
    timeline
    .add({  // set scale for layer 1
        targets: b1,
        scale: 2,
        duration: 0
    }).add({        // set scale for layer 2
        targets: b2,
        scale: 2.5,
        duration: 0
    }) 

    .add({                // start scrolling first layer
        targets: b1,
        translateX: [0, -1100],
        translateY: [0, 390],
        duration: 30000,
        easing: 'linear'
    })
    .add({                // start fading first layer 5s before first scroll ends
        targets: b1,
        duration: 5000,
        easing: 'linear',
        opacity: [1, 0],
    }, '-=5000')


    .add({                // do all this JANKY SHIT BECAUSE THE LIBRARY IS BORKED to swap the Z indices
        targets: b1,
        zIndex: 0,
        opacity: 1,
        duration: 1,
        offset: '-=1'
    })
    .add({
        targets: b2,
        zIndex: 1,
        duration: 1,
        offset: '-=1'
    })
    
    .add({              // start scrolling second layer
        targets: b2,
        translateX: [-1200, -400],
        translateY: [-1500, -1700],
        duration: 30000,
        easing: 'linear'
    }, '-=5000')
    .add({             // start fading first layer 5s before first scroll ends
        targets: b2,
        duration: 5000,
        easing: 'linear',
        opacity: [1, 0]
    }, '-=5000')

    .add({                // more jank shit to swap the Z indices again
        targets: b2,
        zIndex: 0,
        opacity: 1,
        duration: 1,
        offset: '-=1'
    })
    .add({
        targets: b1,
        zIndex: 1,
        duration: 1,
        offset: '-=1'
    })


    .add({ // this add goes on the end no matter what to smoothly cycle back to the first transition
        targets: b1,
        translateX: [183, 0], // these values are (x2 - x1 or y2 - y1) / transition time (30s), multiplied by
        translateY: [-65, 0], // the number of seconds the rollover takes (5s)
        duration: 5000,
        easing: 'linear'
    }, '-=5000')

});