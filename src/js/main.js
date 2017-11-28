search = function() {
  var searchText = document.getElementById('searchText').value;
  window.location.href = formatGoogleSearch(searchText, ['stackoverflow']);
}

window.onload = function() {
  document.getElementById('searchText').focus();
}
