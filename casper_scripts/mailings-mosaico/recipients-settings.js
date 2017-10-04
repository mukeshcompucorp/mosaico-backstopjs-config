'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.clickFirst('.crm-mailing-recipients-row > a');
    this.wait(1000);
  });
};
