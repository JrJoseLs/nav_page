// No va 
// let sec = document.querySelectorAll('section');
// let links = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sec.forEach(section => {
//         let top = window.scrollY;
//         let offset = section.offsetTop;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             links.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header nav a[href*='+id+']').classList.add('active');
//             })
//         }
//     })
// }


// Si va
let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');
let indicator = document.querySelector('.indicator');

function moveIndicator() {
    let activeIndex = Array.from(links).indexOf(this);
    let linkWidth = this.offsetWidth;

    indicator.style.width = `${linkWidth}px`;
    indicator.style.transform = `translateX(calc(${linkWidth * activeIndex}px))`;
}

links.forEach(link => {
    link.addEventListener('click', moveIndicator);
});

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });
};

