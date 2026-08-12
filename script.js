const btnAbrir = document.getElementById('btn-abrir');
const btnCerrar = document.getElementById('btn-cerrar');
const navMenu = document.getElementById('nav-menu');
const calcularBtn = document.getElementById('calcular');
const resultadoSpan = document.querySelector('#resultado span');

function openMenu() {
  navMenu.classList.add('active');
  btnAbrir.style.display = 'none';
  btnCerrar.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('active');
  btnAbrir.style.display = 'block';
  btnCerrar.style.display = 'none';
  document.body.style.overflow = '';
}

btnAbrir.addEventListener('click', openMenu);
btnCerrar.addEventListener('click', closeMenu);

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  });
});

function handleResize() {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    btnAbrir.style.display = 'none';
    btnCerrar.style.display = 'none';
    document.body.style.overflow = '';
  } else {
    btnAbrir.style.display = 'block';
    btnCerrar.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

function calculateAverage() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const valor1 = parseFloat(document.getElementById('valor1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const valor2 = parseFloat(document.getElementById('valor2').value);

  if (isNaN(nota1) || isNaN(valor1) || isNaN(nota2) || isNaN(valor2)) {
    alert('Por favor, llena todos los campos correctamente.');
    return;
  }

  if (valor1 + valor2 !== 100) {
    alert('La suma de los valores debe ser 100%.');
    return;
  }

  const promedio = (nota1 * valor1 / 100) + (nota2 * valor2 / 100);
  resultadoSpan.textContent = promedio.toFixed(2);
}

calcularBtn.addEventListener('click', calculateAverage);

document.getElementById('formulario').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    calculateAverage();
  }
});