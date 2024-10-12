for (let item of document.getElementsByClassName("mail")) {
    item.addEventListener("click",function() {
        document.getElementById("mail-modal").classList.add("open")
    })
}
document.getElementById("close-mail-btn").addEventListener("click",function() {
    document.getElementById("mail-modal").classList.remove("open")
})

document.addEventListener("DOMContentLoaded", function() {
    const dropdownSelect = document.querySelector('.dropdown-select');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const subjectInput = document.querySelector('.subject-input');
    const messageInput = document.querySelector('.message-input');
    const sendButton = document.getElementById('sendButton');

  
    dropdownSelect.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

  
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            dropdownSelect.textContent = email;
            dropdownMenu.style.display = 'none';
        });
    });

   
    document.addEventListener('click', function(event) {
        if (!dropdownSelect.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    sendButton.addEventListener('click', function() {
        this.src = 'photos/popup-img/send2.png';
        setTimeout(() => {
            this.src = 'photos/popup-img/send3.png';
        }, 2000);
    });
});