function search() {
    // alert(formatGoogleSearch(document.getElementById('searchText').value));
    window.location.href = formatGoogleSearch(document.getElementById('searchText').value);
}

function formatGoogleSearch(text) {
  return 'http://google.com/search?q=' + text.split(' ').join('+') + '+inurl%3Astackoverflow.com'
}
