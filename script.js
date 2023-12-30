const sidebarBox = document.querySelector('.sidebar-box');

window.addEventListener('scroll', () => window.scroll(sidebarBox.scrollTo(0, window.scrollY)));

const dark_and_light_mode = document.getElementById('more');

const body = document.querySelector('body');

let z = true;
dark_and_light_mode.addEventListener('click', (e) => {
    e.preventDefault();
    if (z == true) {
        document.documentElement.style.setProperty('--color1', 'rgb(235, 235, 235)');
        document.documentElement.style.setProperty('--color2', 'rgba(0, 0, 0, 0.849)');
        document.documentElement.style.setProperty('--color3', '#000');
        document.documentElement.style.setProperty('--color4', 'rgba(11, 12, 12, 0.1)');
        document.documentElement.style.setProperty('--color5', '#168eff');
        z = false;
    } else {
        document.documentElement.style.setProperty('--color1', '#0d0d0d');
        document.documentElement.style.setProperty('--color2', 'rgba(207, 207, 207, 0.849)');
        document.documentElement.style.setProperty('--color3', 'white');
        document.documentElement.style.setProperty('--color4', 'rgba(240, 248, 255, 0.1)');
        document.documentElement.style.setProperty('--color5', 'rgb(255, 255, 255)');
        z=true;
    }
})


// document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');