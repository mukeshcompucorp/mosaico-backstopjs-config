'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/form-page.js');
  var page = new Page(casper, scenario, vp);

  casper.then(function () {
    page.clickFirst('.crm_wizard__footer button.btn-primary');
    this.wait(1000);
    page.clickFirst('.crm-mosaico-template-actions a.btn-primary');
    this.wait(10000);
    page.casper.withFrame(0,function(){
      this.click('#page #toolbar div.rightButtons a:nth-child(2)');
    });
    this.wait(2000);
  });
};
