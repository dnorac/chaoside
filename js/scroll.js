const header = document.querySelector("header");
const scrollCursor = document.querySelector('#cursor');

const handleScroll = (event) => {
    if (window.scrollY > window.innerHeight - 50) {
        header.classList.add('dark');
    } else {
        header.classList.remove('dark');
    }
}
document.addEventListener('scroll', handleScroll);