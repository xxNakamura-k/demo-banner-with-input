function buttonClick(){
  location.href='embed.html?va_query=' + vaWord.value;
}
let vaWord = document.getElementById('vaWord');
let vaSend = document.getElementById('vaSend');
if (vaWord !== null && vaSend !== null) {
  vaSend.addEventListener('click', buttonClick);
}

const dispArea = document.getElementById('disp-query-param');
if (dispArea !== null) {
  const vaQuery = location.search.split('=')[1]
  dispArea.innerHTML = vaQuery;
}
