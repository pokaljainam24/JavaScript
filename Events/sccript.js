const lamp = document.getElementById('lamp');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {

    lamp.classList.toggle('on');

    if (lamp.classList.contains('on')) {
        button.textContent = 'Turn Off';
    } else {
        button.textContent = 'Turn On';
    }
});