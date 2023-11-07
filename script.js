const container = document.querySelector('.container');
const flipBtn = document.getElementById('flipper');
const heads = document.createElement('img');
heads.src = 'svgs/heads.svg';
heads.setAttribute('id', 'heads');
const tails = document.createElement('img');
tails.src = 'svgs/tails.svg';
tails.setAttribute('id', 'tails');


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

flipBtn.addEventListener('click', () => {
    let flipped =  getRandomArbitrary(1, 2);
    console.log(flipped);
    if(flipped == 1) {
        container.appendChild(heads);
        if(container.contains(tails)) {
            container.removeChild(tails);
        };
    }
    else {
        container.appendChild(tails);
        if(container.contains(heads)) {
            container.removeChild(heads);
        }
    }
    container.classList.add('containerShaking');
    setTimeout(function() {
        container.classList.remove('containerShaking');
    }, 250);
})