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

document.getElementById("modal_window_button-open").addEventListener("click",function() {
    document.getElementById("photo-modal").classList.add("open")
})

// при клике на кнопку с id modal_window_button-open находится модальное окно с id photo-modal и при клике показывается

document.getElementById("close-photo-modal-btn").addEventListener("click",function() {
    document.getElementById("photo-modal").classList.remove("open")
})





// переход по ссылкам (скарлет и бадм)
document.getElementById("open-scarlet-ring").addEventListener("click",function() {
    window.open('https://scarletring.github.io/', '_blank');
})

document.getElementById("open-badminton").addEventListener("click",function() {
    window.open('https://manilocka.github.io/', '_blank');
})

document.getElementById("open-gallery-maya").addEventListener("click",function() {
    window.open('gallery-menu.html?tab=photos-grid-maya', "_self");
})

document.getElementById("open-razrab6-modal-btn").addEventListener("click",function() {
    window.open('gallery-menu.html?tab=photos-grid-olesya', "_self");
})
document.getElementById("open-gallery-nastya").addEventListener("click",function() {
    window.open('gallery-menu.html?tab=photos-grid-nastya', "_self");
})



document.getElementById("open-modal-profile_btn").addEventListener("click",function() {
    document.getElementById("profile-modal").classList.add("open")
})
document.getElementById("close-profile-modal_button").addEventListener("click",function() {
    document.getElementById("profile-modal").classList.remove("open")
})

// видео ссылка  пуск
for (let item of document.getElementsByClassName("open-start")) {
    item.addEventListener("click",function() {
        window.open('https://rutube.ru/video/b0e3a3259f977fc941c6c1508388e884/', '_blank');
    })
}

// мод окно почта
for (let item of document.getElementsByClassName("mail")) {
    item.addEventListener("click",function() {
        document.getElementById("mail-modal").classList.add("open")
    })
}
document.getElementById("close-mail-btn").addEventListener("click",function() {
    document.getElementById("mail-modal").classList.remove("open")
})


// document.getElementById("open-gallery-nastya").addEventListener("click",function() {
//     document.getElementById("razrab-modal").classList.add("open")
// })
// document.getElementById("close-razrab-modal-btn").addEventListener("click",function() {
//     document.getElementById("razrab-modal").classList.remove("open")
// })

// document.getElementById("open-razrab6-modal-btn").addEventListener("click",function() {
//     document.getElementById("razrab6-modal").classList.add("open")
// })
// document.getElementById("close-razrab6-modal-btn").addEventListener("click",function() {
//     document.getElementById("razrab6-modal").classList.remove("open")
// })


// document.getElementById("button1").addEventListener("click",function() {
//     document.getElementById("gallery-slide1").style.display=''
//     document.getElementById("gallery-slide2").style.display='none'
// })
// document.getElementById("button2").addEventListener("click",function() {
//     document.getElementById("gallery-slide1").style.display='none'
//     document.getElementById("gallery-slide2").style.display=''
// })



// document.getElementById("maya-menu-item").addEventListener("click",function() {
//     document.getElementById("maya-menu-item").classList.add("folder-preview-selected")
//     document.getElementById("nastya-menu-item").classList.remove("folder-preview-selected")
//     document.getElementById("olesya-menu-item").classList.remove("folder-preview-selected")

//     document.getElementById("photos-grid-maya").classList.remove("photos-grid-hidden")
//     document.getElementById("photos-grid-nastya").classList.add("photos-grid-hidden")
//     document.getElementById("photos-grid-olesya").classList.add("photos-grid-hidden")
// })

// document.getElementById("nastya-menu-item").addEventListener("click",function() {
//     document.getElementById("maya-menu-item").classList.remove("folder-preview-selected")
//     document.getElementById("nastya-menu-item").classList.add("folder-preview-selected")
//     document.getElementById("olesya-menu-item").classList.remove("folder-preview-selected")

//     document.getElementById("photos-grid-maya").classList.add("photos-grid-hidden")
//     document.getElementById("photos-grid-nastya").classList.remove("photos-grid-hidden")
//     document.getElementById("photos-grid-olesya").classList.add("photos-grid-hidden")
// })

// document.getElementById("olesya-menu-item").addEventListener("click",function() {
//     document.getElementById("maya-menu-item").classList.remove("folder-preview-selected")
//     document.getElementById("nastya-menu-item").classList.remove("folder-preview-selected")
//     document.getElementById("olesya-menu-item").classList.add("folder-preview-selected")

//     document.getElementById("photos-grid-maya").classList.add("photos-grid-hidden")
//     document.getElementById("photos-grid-nastya").classList.add("photos-grid-hidden")
//     document.getElementById("photos-grid-olesya").classList.remove("photos-grid-hidden")
// })



