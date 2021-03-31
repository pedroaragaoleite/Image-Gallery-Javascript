const current = document.querySelector('#current img');
const imgs = document.querySelectorAll('.images img');
const images = document.querySelector('.images');
const opacity = 0.4;

imgs[0].style.opacity = opacity;

images.addEventListener('click', imgClick);

function imgClick(e){
    console.log('clicked', e.target);
    // change current img on click
    current.src = e.target.src;

    // reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    current.classList.add('fade-in');

    e.target.style.opacity = opacity;

    setTimeout(() => current.classList.remove('fade-in'), 500);
};

// for(let img of imgs) {
//     img.addEventListener('click', function(e){
//         current.src = e.target.src;
//         console.log(current.src);
//     });
// }

current.addEventListener('click', (e)=>{
    console.log('alert');
});

