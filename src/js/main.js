function search() {
    window.location.href = formatGoogleSearch(document.getElementById('searchText').value);
}

exports.formatGoogleSearch = function(text, sites) {
  return 'http://google.com/search?q=' + text + '+site%3Astackoverflow.com';
}
  
exports.buildSiteList = function(sites) {
  for (var i = 0; i < sites.length; i++) {
    sites[i] = 'site:' + sites[i] + '.com';
  }
  return '[' + sites.join('|') + ']';
}
