document.addEventListener('DOMContentLoaded', function() {
  const scriptCard = document.querySelector('.script-card');
  scriptCard.addEventListener('click', function() {
    const content = scriptCard.querySelector('pre');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });

  const searchBox = document.querySelector('#search-box input');
  searchBox.addEventListener('keyup', function() {
    const filter = searchBox.value.toUpperCase();
    const h3 = scriptCard.querySelector('h3');
    if (h3.textContent.toUpperCase().indexOf(filter) > -1) {
      scriptCard.style.display = '';
    } else {
      scriptCard.style.display = 'none';
    }
  });
});
