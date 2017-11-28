search = function() {
  var searchText = document.getElementById('searchText').value;
  var sites = [];
  var searchOptions = document.getElementById('searchOptions').getElementsByTagName('div'); 
  for(i = 0; i < searchOptions.length; i++) {
    var searchOption = searchOptions[i];
    var checkbox = searchOption.querySelectorAll('input[type="checkbox"]')[0];
    if (checkbox.checked) {
      site = checkbox.id;
      sites.push(site);
    }
  }
  window.location.href = formatGoogleSearch(searchText, sites);
}

window.onload = function() {
  document.getElementById('searchText').focus();
}
