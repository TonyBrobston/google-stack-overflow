var chai = require('chai'); 
var assert = chai.assert;

describe('Build site list', function() {
  it('should be only stackoverflow', function() {
    var sites = ['stackoverflow'];

    siteList = buildSiteList(sites);
 
    assert.equal(siteList, '[site:stackoverflow.com]');
  });
  
  it('should be only stackoverflow and askubuntu', function() {
    var sites = ['stackoverflow', 'askubuntu'];

    siteList = buildSiteList(sites);
 
    assert.equal(siteList, '[site:stackoverflow.com | site:askubuntu.com]');
  });

  it('should format string for google', function() {
    var search = 'javascript';
    var sites = ['askubuntu'];
    var time = null;

    googleSearch = formatGoogleSearch(search, sites, time);

    assert.equal(googleSearch, 'https://google.com/search?q=javascript+[site:askubuntu.com]');
  });
  
  it('should format string for google with time', function() {
    var search = 'javascript';
    var sites = ['askubuntu'];
    var time = 'y';;

    googleSearch = formatGoogleSearch(search, sites, time);

    assert.equal(googleSearch, 'https://google.com/search?q=javascript+[site:askubuntu.com]&tbs=qdr:y');
  });
});

