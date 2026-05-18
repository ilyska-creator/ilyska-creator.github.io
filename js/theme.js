const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    }
});