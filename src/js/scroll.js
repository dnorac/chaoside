const header = document.querySelector("header");
const scrollCursor = document.querySelector('#cursor');

const handleScroll = () => {
    if (window.scrollY > window.innerHeight - 50) {
        header.classList.add('dark');
    } else {
        header.classList.remove('dark');
    }
}
document.addEventListener('scroll', handleScroll);

document.addEventListener('keydown', (e) => {
    if (!(e.key === 'PageDown' || e.key === 'PageUp')) return;
    const locations = ['', '#vision', '#contact']
    e.preventDefault();
    let currentLocation = locations.findIndex(l => l === location.hash);
    const nextLocation = currentLocation => {
        if (e.key === 'PageDown') {
            return currentLocation === locations.length - 1 ? 0 : currentLocation + 1
        } else {
            return currentLocation === 0 ? locations.length - 1 : currentLocation - 1
        }
    }
    console.log(nextLocation(currentLocation))
    location.hash = locations[nextLocation(currentLocation)]
})