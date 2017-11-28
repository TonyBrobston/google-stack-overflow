var chai = require('chai'); 
var assert = chai.assert;
var main = require('../src/js/main.js');

describe('Build site list', function() {
  it('should be only stackoverflow', function() {
    var sites = ['stackoverflow'];

    siteList = main.buildSiteList(sites);
 
    assert.equal(siteList, '[site:stackoverflow.com]');
  });
  
  it('should be only stackoverflow and askubuntu', function() {
    var sites = ['stackoverflow', 'askubuntu'];

    siteList = main.buildSiteList(sites);
 
    assert.equal(siteList, '[site:stackoverflow.com|site:askubuntu.com]');
  });

  it('should format string for google', function() {
    var search = 'javascript';
    var sites = ['stackoverflow'];

    googleSearch = main.formatGoogleSearch(search, sites);

    assert.equal(googleSearch, 'http://google.com/search?q=javascript+site%3Astackoverflow.com');
  });
});

