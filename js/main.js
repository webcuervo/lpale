window.addEventListener("scroll", function() {
    let header = document.getElementById("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function() {
    let texto = document.getElementsById("texto")
    texto.classList.toggle("none", window.scrollY > 0)
})