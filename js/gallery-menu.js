var url = new URLSearchParams(location.search);
var tab = url.get("tab");
if (tab == null){
    tab = "photos-grid-maya"
}
document.querySelector('#' + tab).classList.remove('hidden')


document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const options = {hour: 'numeric', minute: 'numeric', hour12: true};
        const timeString = now.toLocaleString('en-US', options);
        document.getElementById('userTime').textContent = timeString;
    }
    updateTime();
    setInterval(updateTime, 60000);
});



const folderPreview = document.querySelectorAll('.folder-preview');
const photosGrid = document.querySelectorAll('.photos-grid');

for (let item of folderPreview) {
    item.addEventListener('click', function() {

        for (let element of photosGrid){
            element.classList.add('hidden')
        }
        
        const content = document.querySelector('#' + item.dataset.tab)
        content.classList.remove('hidden')
        tab = item.dataset.tab
    })
}






for (let item of document.getElementsByClassName("open-start")) {
    item.addEventListener("click",function() {
        window.open('https://rutube.ru/video/b0e3a3259f977fc941c6c1508388e884/', '_blank');
    })
}

for (let item of document.getElementsByClassName("photo-preview")) {
    item.addEventListener("click",function() {
        
        window.open('big-photo-gallery.html?image=' + item.dataset.imageNumber + "&tab="+ tab, "_self");
    })
}




    // const images = [
    //     {src: 'Olesya/img1.png', title: 'My groupmates', alt: 'Группа студентов'},
    //     {src: 'Olesya/img2.png', title: 'Little witch', alt: 'Маленькая ведьма'},
    //     {src: 'Olesya/img3.png', title: 'grunge girl', alt: 'Девушка в гранжевом стиле'},
    //     {src: 'Olesya/img4.png', title: 'Girl redraw', alt: 'Переосмысленный рисунок девушки'},
    //     {src: 'Olesya/img5.png', title: 'Tired Woman', alt: 'Уставшая женщина'},
    //     {src: 'Olesya/img6.png', title: 'Don’t Touch Me', alt: 'Не трогай меня'},
    //     {src: 'Olesya/img7.png', title: 'Shiny Girl', alt: 'Сияющая девушка'},
    //     {src: 'Olesya/img8.png', title: 'Just a portrait', alt: 'Просто портрет'},
    // ];

    // let currentIndex = 0;
    // let isZoomed = false;

    // function updateImage() {
    //     const image = images[currentIndex];
    //     const imgElement = document.getElementById('displayImage');
    //     imgElement.src = image.src;
    //     document.getElementById('projectTitle').innerText = ${image.title} - Gallery;
        
    //     imgElement.style.transform = 'scale(1)'; 
    //     imgElement.style.width = 'auto'; 
    //     imgElement.style.height = 'auto'; 
    //     imgElement.style.maxHeight = '100%'; 
    //     imgElement.style.maxWidth = '100%'; 
    //     imgElement.style.objectFit = 'contain'; 
        
    //     isZoomed = false;
    //     document.getElementById('sizeImage').src = 'button/bigger.png';
    // }

    // function showNextImage() {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     updateImage();
    // }

    // function showPreviousImage() {
    //     currentIndex = (currentIndex - 1 + images.length) % images.length;
    //     updateImage();
    // }

    // function toggleImageSize() {
    //     const imgElement = document.getElementById('displayImage');

    //     if (isZoomed) {
            
    //         imgElement.style.transform = 'scale(1)';
    //         imgElement.style.width = 'auto';
    //         imgElement.style.height = 'auto';
    //         imgElement.style.maxHeight = '100%';
    //         imgElement.style.maxWidth = '100%';
    //     } else {
           
    //         imgElement.style.transform = 'scale(2)';
    //         imgElement.style.width = 'auto'; 
    //         imgElement.style.height = 'auto';
    //         imgElement.style.maxWidth = 'none'; 
    //         imgElement.style.maxHeight = 'none'; 
    //     }

    //     imgElement.style.objectFit = 'contain'; 
    //     isZoomed = !isZoomed;
    // }

    // updateImage(); 
