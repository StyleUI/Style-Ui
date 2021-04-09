const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlink');
    console.log("pressed")
    console.log("hello")
    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();