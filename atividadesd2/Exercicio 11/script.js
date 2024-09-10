document.getElementById('triangle-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (side1 <= 0 || side2 <= 0 || side3 <= 0 || (side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
        document.getElementById('result').innerText = 'Não é um triângulo válido';
        document.getElementById('triangle-image-img').src = '';
        return;
    }

    let triangleType = '';
    let imageUrl = '';
    if (side1 === side2 && side2 === side3) {
        triangleType = 'Equilátero';
        imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zlnGW9lg3S_6MTE1PJDhhKIke958ebFWyQ&s';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        triangleType = 'Isósceles';
        imageUrl = 'https://beduka.com/blog/wp-content/uploads/2018/10/o-que-e-triangulo-isosceles.jpg';
    } else {
        triangleType = 'Escaleno';
        imageUrl = 'https://static.todamateria.com.br/upload/tr/ia/trianguloescaleno.jpg';
    }

    document.getElementById('result').innerText = `Triângulo ${triangleType}`;
    document.getElementById('triangle-image-img').src = imageUrl;
});




