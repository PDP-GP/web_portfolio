var url = new URLSearchParams(location.search);
var tab = url.get("tab");
if (tab == null){
    tab = "photos-grid-maya"
}
document.querySelector('#' + tab).classList.remove('hidden')
document.querySelector('#' + tab + "-menu").classList.add('folder-preview-selected')


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

        folderPreview.forEach(element => element.classList.remove("folder-preview-selected"))
        item.classList.add('folder-preview-selected')

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

