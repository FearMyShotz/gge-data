Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./279.js");
var s = require("./59.js");
var r = require("./35.js");
var l = require("./281.js");
var c = function (e) {
  function OptionsDialogSublayerAccordion(t) {
    var i = e.call(this, t) || this;
    var n = new a.AccordionComponentProperties();
    n.scrollStepPixels = 124;
    n.scrollStrategy = s.DynamicSizeScrollStrategyVertical;
    n.disableButtons = true;
    n.onlyOneActiveItem = true;
    i._accordionComponent = new l.DynamicSliderAccordionComponent(i.subLayerDisp, n);
    o.MovieClipHelper.clearMovieClip(i.subLayerDisp.mc_items);
    return i;
  }
  n.__extends(OptionsDialogSublayerAccordion, e);
  OptionsDialogSublayerAccordion.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.createContent();
    this._accordionComponent.show();
    this.scrollToFirstExpandedItem();
  };
  OptionsDialogSublayerAccordion.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._accordionComponent.hide();
  };
  Object.defineProperty(OptionsDialogSublayerAccordion.prototype, "contentCreator", {
    get: function () {
      return this._params.contentCreator;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialogSublayerAccordion.prototype.createContent = function () {
    var e = this;
    this.contentCreator.accordionComponent = this._accordionComponent;
    this.contentCreator.createItems().forEach(function (t) {
      return e._accordionComponent.addItem(t);
    });
  };
  OptionsDialogSublayerAccordion.prototype.scrollToFirstExpandedItem = function () {
    var e = this._accordionComponent.items.find(function (e) {
      return e.isExpanded && e.disp.visible;
    });
    var t = e ? e.disp.y : 0;
    this._accordionComponent.scrollToValue(t);
  };
  return OptionsDialogSublayerAccordion;
}(r.CastleDialogSubLayer);
exports.OptionsDialogSublayerAccordion = c;