$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

// function search() {
    // window.location.href = formatGoogleSearch(document.getElementById('searchText').value);
// }

function formatGoogleSearch(text) {
  return 'http://google.com/search?q=' + text.split(' ').join('+') + '+site%3Astackoverflow.com'
}

function search() {
    $.get(
        formatGoogleSearch(document.getElementById('searchText').value),
        function (response) {
            console.log("> ", response);
            $("#viewer").html(response);
        }
    );
}
