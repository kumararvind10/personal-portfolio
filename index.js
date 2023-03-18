// document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });

  document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const targetTop = target.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPos = targetTop - (windowHeight / 2);
    window.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    });
  });


document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    window.alert('Thank you for the details, we will get back to you')

})