formatGoogleSearch = function(text, sites, time) {
  var googleSearch = 'https://google.com/search?q=' + text + '+' + buildSiteList(sites);
  if (time != null) {
   googleSearch += '&tbs=qdr:' + time; 
  }
  return googleSearch; 
}
  
buildSiteList = function(sites) {
  for (var i = 0; i < sites.length; i++) {
    sites[i] = 'site:' + sites[i] + '.com';
  }
  return '[' + sites.join(' | ') + ']';
}

