formatGoogleSearch = function(text, sites) {
  return 'https://google.com/search?q=' + text + '+' + buildSiteList(sites);
}
  
buildSiteList = function(sites) {
  for (var i = 0; i < sites.length; i++) {
    sites[i] = 'site:' + sites[i] + '.com';
  }
  return '[' + sites.join(' | ') + ']';
}

