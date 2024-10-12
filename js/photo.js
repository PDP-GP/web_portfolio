

document.addEventListener('DOMContentLoaded', function () {
    function updateTime() {
        const now = new Date();
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const timeString = now.toLocaleString('en-US', options);
        document.getElementById('userTime').textContent = timeString;
    }
    updateTime();
    setInterval(updateTime, 60000);
});




for (let item of document.getElementsByClassName("open-start")) {
    item.addEventListener("click", function () {
        window.open('https://rutube.ru/video/b0e3a3259f977fc941c6c1508388e884/', '_blank');
    })
}

document.getElementById('next-button').addEventListener("click", function () {
    showNextImage()
})
document.getElementById('prev-button').addEventListener("click", function () {
    showPreviousImage()
})
document.getElementById('sizeImage').addEventListener("click", function () {
    toggleImageSize()
})

document.getElementById("close-photo-modal-btn").addEventListener("click",function() {
    history.back()
})


images = [
    { src: 'photos/3D/img1.png', title: 'Nastyas interior', alt: 'Nastyas interior picture' },
    { src: 'photos/3D/img2.png', title: 'Nastyas interior 2', alt: 'Nastyas interior 2 picture' },
    { src: 'photos/3D/img3.png', title: 'Nastyas robot', alt: 'Nastyas robot picture' },
    { src: 'photos/3D/img4.png', title: 'Nastyas robot 2', alt: 'Nastyas robot 2 picture' },
    { src: 'photos/3D/img5.png', title: 'Nastyas robot 3', alt: 'Nastyas robot 3 picture' },
    { src: 'photos/3D/img6.png', title: 'Olesyas interior', alt: 'Olesyas interior picture' },
    { src: 'photos/3D/img7.png', title: 'Olesyas interior 2', alt: 'Olesyas interior 2 picture' },
    { src: 'photos/3D/img8.png', title: 'Olesyas robot', alt: 'Olesyas interior 2 picture' },
    { src: 'photos/3D/img9.png', title: 'Olesyas robot 2', alt: 'Olesyas robot 2 picture' },
    { src: 'photos/3D/img10.png', title: 'Olesyas robot 3', alt: 'Olesyas robot 3 picture' },
];


var url = new URLSearchParams(location.search);
var tab = url.get("tab");
if(tab == "photos-grid-nastya"){
    images = [
        { src: 'photos/Nastya/1.png', title: 'Green eyes', alt: 'Green eyes picture'},
        { src: 'photos/Nastya/2.png', title: 'Red Hat with an Ax', alt: 'Red Hat with an Ax picture' },
        { src: 'photos/Nastya/3.png', title: 'Forest Queen', alt: 'Forest Queen picture' },
        { src: 'photos/Nastya/4.png', title: 'Anna', alt: 'Anna picture' },
        { src: 'photos/Nastya/5.png', title: 'My brother', alt: 'My brother picture' },
        { src: 'photos/Nastya/6.png', title: 'Loser', alt: 'Loser picture' },
        { src: 'photos/Nastya/7.png', title: 'Oden', alt: 'Oden picture' },
        { src: 'photos/Nastya/8.png', title: 'Sad Kitty', alt: 'Sad Kitty picture' },
        { src: 'photos/Nastya/9.png', title: 'Japanese room', alt: 'apanese room picture' },
        { src: 'photos/Nastya/10.png', title: 'My groupmates', alt: 'My groupmates picture' },
    ];
}

var url = new URLSearchParams(location.search);
var tab = url.get("tab");
if(tab == "photos-grid-olesya"){
    images = [
        { src: 'photos/Olesya/img1-ol.png', title: 'My groupmates', alt: 'Group of students' },
        { src: 'photos/Olesya/img2-ol.png', title: 'Little witch', alt: 'Little witch picture' },
        { src: 'photos/Olesya/img3-ol.png', title: 'grunge girl', alt: 'grunge girl picture' },
        { src: 'photos/Olesya/img4-ol.png', title: 'Girl redraw', alt: 'Girl redraw picture' },
        { src: 'photos/Olesya/img5-ol.png', title: 'Tired Woman', alt: 'Tired Woman picture' },
        { src: 'photos/Olesya/img6-ol.png', title: 'Don’t Touch Me', alt: 'Don’t Touch Me picture' },
        { src: 'photos/Olesya/img7-ol.png', title: 'Shiny Girl', alt: 'Shiny Girl picture' },
        { src: 'photos/Olesya/img8-ol.png', title: 'Just a portrait', alt: 'Just a portrait picture' },
    ];
}

let currentIndex = 0;
let isZoomed = false;

var url = new URLSearchParams(location.search);
var imageNumber = url.get("image");
if(imageNumber != null){
    currentIndex = imageNumber
}


function updateImage() {
    const image = images[currentIndex];
    const imgElement = document.getElementById('displayImage');
    imgElement.src = image.src;
    document.getElementById('projectTitle').innerText = image.title + " - Gallery";

    imgElement.style.transform = 'scale(1)';
    imgElement.style.width = 'auto';
    imgElement.style.height = 'auto';
    imgElement.style.maxHeight = '100%';
    imgElement.style.maxWidth = '100%';
    imgElement.style.objectFit = 'contain';

    isZoomed = false;
    document.getElementById('sizeImage').src = 'photos/popup-img/middle-button.png';
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function toggleImageSize() {
    const imgElement = document.getElementById('displayImage');

    if (isZoomed) {

        imgElement.style.transform = 'scale(1)';
        imgElement.style.width = 'auto';
        imgElement.style.height = 'auto';
        imgElement.style.maxHeight = '100%';
        imgElement.style.maxWidth = '100%';
    } else {

        imgElement.style.transform = 'scale(2)';
        imgElement.style.width = 'auto';
        imgElement.style.height = 'auto';
        imgElement.style.maxWidth = 'none';
        imgElement.style.maxHeight = 'none';
    }

    imgElement.style.objectFit = 'contain';
    isZoomed = !isZoomed;
}



updateImage(); 
