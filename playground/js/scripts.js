window.onload = () => {
    const slider_nav = Array.from(document.getElementsByClassName('slider-nav'));
    const slider_nav_dots = Array.from(slider_nav[0].getElementsByTagName('a'));
    slider_pictures = Array.from(document.getElementsByTagName('img'));
    let slides = [];
    slider_nav_dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            changeActiveSlide(slides, index);
        });
        slides.push({
            dot: dot,
            img: slider_pictures[index]
        });
    });
};

function changeActiveSlide(slides, index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.dot.classList.add('active');
            slide.dot.classList.remove('inactive');
        } else {
            slide.dot.classList.remove('active');
            slide.dot.classList.add('inactive');
        }
    });

}