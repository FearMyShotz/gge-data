Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function OptionsDialogSublayerAccordionProperties(t, i) {
    var n = e.call(this) || this;
    n.sublayerID = t;
    n._contentCreator = i;
    return n;
  }
  n.__extends(OptionsDialogSublayerAccordionProperties, e);
  Object.defineProperty(OptionsDialogSublayerAccordionProperties.prototype, "contentCreator", {
    get: function () {
      return this._contentCreator;
    },
    enumerable: true,
    configurable: true
  });
  return OptionsDialogSublayerAccordionProperties;
}(require("./2.js").BasicProperties);
exports.OptionsDialogSublayerAccordionProperties = o;