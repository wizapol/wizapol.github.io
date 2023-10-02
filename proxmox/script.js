document.addEventListener('DOMContentLoaded', function() {
  const scriptCards = document.querySelectorAll('.script-card');
  scriptCards.forEach(function(scriptCard) {
    const h3 = scriptCard.querySelector('h3');
    h3.addEventListener('click', function() {
      scriptCard.classList.toggle('active');
    });
  });

  const searchBox = document.querySelector('#search-box input');
  searchBox.addEventListener('keyup', function() {
    const filter = searchBox.value.toUpperCase();
    scriptCards.forEach(function(scriptCard) {
      const h3 = scriptCard.querySelector('h3');
      if (h3.textContent.toUpperCase().indexOf(filter) > -1) {
        scriptCard.style.display = '';
      } else {
        scriptCard.style.display = 'none';
      }
    });
  });
});

function copyToClipboard(elementId) {
  const str = document.getElementById(elementId).innerText;
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
