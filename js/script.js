const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const contaier = document.querySelector('.my-container');
createCarousel(images);

const mainImage = document.querySelectorAll('.view-image');
const carouselImage = document.querySelectorAll('.my-carousel-image')
shiftCarousel(mainImage, 'd-none');
shiftCarousel(carouselImage, 'my-opacity');

//funzione che crea le immagini piccole del carosello
function createMainImage(object) {
    const mainImage = document.createElement('div');
    mainImage.className = 'col-12 view-image d-none';
    mainImage.innerHTML =
        `
    <img src="${object.url}" alt="${object.title}" class="big-dimension">
    <div class="title-image">
        <h1>${object.title}</h1>
        <span class="description-image">${object.description}</span>
    </div>
    `
    return mainImage;
}

//funzione che crea l'immagine grande
function createCarouselImage(object) {
    const carouselImage = document.createElement('div');
    carouselImage.className = 'col my-carousel-image my-opacity';
    carouselImage.innerHTML = `<img src="${object.url}" alt="${object.title}" class="small-dimension">`
    return carouselImage;
}

//funzione che crea il caroselo
function createCarousel(objectArray) {
    const myFlex = document.createElement('div');
    myFlex.className = 'my-flex';
    contaier.appendChild(myFlex);

    for (let object of objectArray) {
        const mainImage = createMainImage(object);
        myFlex.appendChild(mainImage);
    }
    for (let object of objectArray) {
        const carouselImage = createCarouselImage(object);
        myFlex.appendChild(carouselImage);
    }

    myFlex.innerHTML +=
        `
    <button id="previous" class="btn btn-dark">
        <i class="fa-solid fa-angle-left"></i>
    </button>
    <button id="next" class="btn btn-dark">
        <i class="fa-solid fa-angle-right"></i>
    </button>
    `
}

//funzione che fa scorrere le immagini
function shiftCarousel(objectArray, classe) {
    objectArray[0].classList.toggle(classe);
    setInterval(showImage, 3000, objectArray);
    let i = 0;
    let j = 1;
    function showImage(objectArray) {
        const x = mod5(i);
        const y = mod5(j);
        objectArray[x].classList.toggle(classe);
        objectArray[y].classList.toggle(classe);
        i++;
        j++;
    }
}

function mod5(numb) {
    return numb % 5
};