function search(text) {
    window.location.href = formatGoogleSearch(text);
}

function formatGoogleSearch(text) {
  return 'http://google.com/search?q=' + text.split(' ').join('+') + '+inurl%3Astackoverflow.com'
}
