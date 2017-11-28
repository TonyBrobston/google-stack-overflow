function search() {
    // alert(formatGoogleSearch(document.getElementById('searchText').value));
    window.location.href = formatGoogleSearch(document.getElementById('searchText').value);
}

function formatGoogleSearch(text) {
  return 'http://google.com/search?q=' + text.split(' ').join('+') + '+site%3Astackoverflow.com'
}

exports.buildSiteList = function(sites) {
  for (var i = 0; i < sites.length; i++) {
    sites[i] = 'site:' + sites[i] + '.com';
  }
  return '[' + sites.join('|') + ']';
}
