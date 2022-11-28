let colors = ['red', 'blue', 'green', 'yellow']

function start(){
    
    let selectedColor = colors[Math.floor(Math.random()*colors.length)]

    if (selectedColor === 'red'){
        illuminate(document.querySelector('#red'))
    } else if (selectedColor === 'blue'){
        illuminate(document.querySelector('#blue'))
    } else if (selectedColor === 'green'){
        illuminate(document.querySelector('#green'))
    } else {
        illuminate(document.querySelector('#yellow'))
    }

// for (let i = 0; i < colors.length; i++) {
//     element.style.background = colors[];
// }

};

function illuminate(element){

    if (element === document.querySelector('#red')){
        element.style.background = 'pink';
    } else if (element === document.querySelector('#blue')){
        element.style.background = 'cyan';
    } else if (element === document.querySelector('#green')){
        element.style.background = 'purple';
    } else {
        element.style.background = 'orange';
    }

    const myPromise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve ()
        }, 1000)
    });

    myPromise.then(() => {
        if (element === document.querySelector('#red')){
            element.style.background = 'red';
        } else if (element === document.querySelector('#blue')){
            element.style.background = 'blue';
        } else if (element === document.querySelector('#green')){
            element.style.background = 'green';
        } else {
            element.style.background = 'yellow';
        }
    });
 
}