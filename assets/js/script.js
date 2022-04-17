let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('#section1').clientWidth;

document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('#section1').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 7000);

//Codigo antigo 

const target = document.querySelectorAll('[data-animacao');
const animationClass = 'animate';

function animacaoScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } 
    })
}

animacaoScroll();

if(target.length){ 
    window.addEventListener('scroll', function() {
        animacaoScroll();
    })
}

//Animação sites e e-commerece

const titulo = document.querySelector('#h1Sites');
const texto = document.querySelector('#pSites');

function sites(){
    titulo.textContent = "Desenvolvimento de Web Sites";
    texto.innerHTML = "<p>Em tempos remotos um web site realmente era considerado uma página na web, sua estrutura era extremamente simples, com poucos ou nenhum conceito de desing e sem planejamento voltados para acessibilidade e usabilidade. <br/><br/>Não é mais possível dizer que um web site são apenas páginas na interntet, hoje um site deve ser enxergados como um sistema web, que pode ter níveis varíados de desenvolvimento. Hoje é necessario utilizar conhecimento de áreas diferentes para formar um projeto completo.</p>"
}

function ecommerce() {
    titulo.textContent = "Desenvolvimento de e-Commerce";
    texto.innerHTML = "<p>O e-commerce funciona como uma loja virtual e representa um excelente canal de venda online para as empresas. Na prática, significa que o lojista pode comercializar os seus produtos por meio de um site exclusivo e personalizado e, se preferir, centralizar ali as suas operações. <br/><br/>Um bom design e um sistema que não vai te deixar na mão, são com certeza os passos mais importantes para se ter uma loja virtual de sucesso. </p> "
}