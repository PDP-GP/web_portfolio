for (let item of document.getElementsByClassName("mail")) {
    item.addEventListener("click",function() {
        document.getElementById("mail-modal").classList.add("open")
    })
}
document.getElementById("close-mail-btn").addEventListener("click",function() {
    document.getElementById("mail-modal").classList.remove("open")
})
