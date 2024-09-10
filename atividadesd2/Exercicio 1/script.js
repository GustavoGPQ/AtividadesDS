function ConverParanoias() {
    const celsius = document.getElementById('celsius').value;
    
    if (celsius !== '') {
        const fahrenheit = (celsius * 9/5) + 32;

        document.getElementById('fahrenheit').value = fahrenheit


    } else {
        document.getElementById('fahrenheit').value = '';
    }
}


document.querySelector('button').addEventListener('click', ConverParanoias);
