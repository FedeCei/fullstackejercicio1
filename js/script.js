// Back to top
const amountScrolled = 200;

window.addEventListener('scroll', () => {
  if (window.scrollY > amountScrolled) {
    document.querySelector('button.back-to-top').classList.add('show');
  } else {
    document.querySelector('button.back-to-top').classList.remove('show');
  }
});

document.querySelector('button.back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
