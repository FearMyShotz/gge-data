Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
var s = function () {
  function AccessibilityImplementation() {
    this.errno = 0;
    this.stub = false;
    this.logger = i.getLogger(a.CREATEJS_UTILITIES_LOGGER + ".AccessibilityImplementation");
  }
  AccessibilityImplementation.prototype.accDoDefaultAction = function (e) {
    this.logger.warn("AccessibilityImplementation.accDoDefaultAction is not implemented");
  };
  AccessibilityImplementation.prototype.accLocation = function (e) {
    this.logger.warn("AccessibilityImplementation.accLocation is not implemented");
    return null;
  };
  AccessibilityImplementation.prototype.accSelect = function (e, t) {
    this.logger.warn("AccessibilityImplementation.accSelect is not implemented");
  };
  AccessibilityImplementation.prototype.get_accDefaultAction = function (e) {
    this.logger.warn("AccessibilityImplementation.get_accDefaultAction is not implemented");
    return "";
  };
  AccessibilityImplementation.prototype.get_accFocus = function () {
    this.logger.warn("AccessibilityImplementation.get_accFocus is not implemented");
    return 0;
  };
  AccessibilityImplementation.prototype.get_accName = function (e) {
    this.logger.warn("AccessibilityImplementation.get_accName is not implemented");
    return "";
  };
  AccessibilityImplementation.prototype.get_accRole = function (e) {
    this.logger.warn("AccessibilityImplementation.get_accRole is not implemented");
    return 0;
  };
  AccessibilityImplementation.prototype.get_accSelection = function () {
    this.logger.warn("AccessibilityImplementation.get_accSelection is not implemented");
    return [];
  };
  AccessibilityImplementation.prototype.get_accState = function (e) {
    this.logger.warn("AccessibilityImplementation.get_accState is not implemented");
    return 0;
  };
  AccessibilityImplementation.prototype.get_accValue = function (e) {
    this.logger.warn("AccessibilityImplementation.get_accValue is not implemented");
    return "";
  };
  AccessibilityImplementation.prototype.get_selectionActiveIndex = function () {
    this.logger.warn("AccessibilityImplementation.get_selectionActiveIndex is not implemented");
    return null;
  };
  AccessibilityImplementation.prototype.get_selectionAnchorIndex = function () {
    this.logger.warn("AccessibilityImplementation.get_selectionAnchorIndex is not implemented");
    return null;
  };
  AccessibilityImplementation.prototype.getChildIDArray = function () {
    this.logger.warn("AccessibilityImplementation.getChildIDArray is not implemented");
    return Array(0);
  };
  AccessibilityImplementation.prototype.isLabeledBy = function (e) {
    this.logger.warn("AccessibilityImplementation.isLabeledBy is not implemented");
    return false;
  };
  return AccessibilityImplementation;
}();
exports.AccessibilityImplementation = s;