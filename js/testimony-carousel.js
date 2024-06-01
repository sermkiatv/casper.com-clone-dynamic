document.addEventListener('DOMContentLoaded', function () {
  let currentTestimony = 0;
  const testimonies = document.querySelectorAll('.testimony-container');
  const dots = document.querySelectorAll('.dot');

  document.querySelector('.prev').addEventListener('click', () => {
    testimonies[currentTestimony].style.display = 'none';
    dots[currentTestimony].style.backgroundColor = '#bbb';
    currentTestimony = currentTestimony - 1 < 0 ? testimonies.length - 1 : currentTestimony - 1;

    console.log(currentTestimony);
    console.log(dots);

    testimonies[currentTestimony].style.display = 'block';
    dots[currentTestimony].style.backgroundColor = '#717171';
  });

  document.querySelector('.next').addEventListener('click', () => {
    testimonies[currentTestimony].style.display = 'none';
    dots[currentTestimony].style.backgroundColor = '#bbb';
    currentTestimony = (currentTestimony + 1) % testimonies.length;

    console.log(currentTestimony);
    console.log(dots);

    testimonies[currentTestimony].style.display = 'block';
    dots[currentTestimony].style.backgroundColor = '#717171';
  });
});