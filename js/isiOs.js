const ua = window.navigator.userAgent;
if (ua.match(/iPhone/i) || ua.match(/iPad/i)) {
    const cssRoot = document.querySelector(':root');
    cssRoot.style.setProperty('--windowHeight', `${window.innerHeight - 20}px`);
}