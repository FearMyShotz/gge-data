Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./33.js");
var o = function () {
  function AIsoDataObjectGroup() {}
  AIsoDataObjectGroup.prototype.init = function (e) {
    this._isoData = e;
  };
  AIsoDataObjectGroup.prototype.destroy = function () {};
  AIsoDataObjectGroup.prototype.initObjects = function () {};
  AIsoDataObjectGroup.prototype.addObject = function (e) {};
  AIsoDataObjectGroup.prototype.updateObjectByServer = function (e, t) {
    return null;
  };
  AIsoDataObjectGroup.prototype.removeObject = function (e) {};
  AIsoDataObjectGroup.prototype.isObjectForThisList = function (e) {
    return e.objectType.groupType == this.groupType;
  };
  AIsoDataObjectGroup.prototype.containsObject = function (e) {
    return false;
  };
  AIsoDataObjectGroup.prototype.containsObjectById = function (e) {
    return false;
  };
  AIsoDataObjectGroup.prototype.fillInCompleteList = function (e) {};
  AIsoDataObjectGroup.prototype.parseGCA = function (e) {};
  Object.defineProperty(AIsoDataObjectGroup.prototype, "isoData", {
    get: function () {
      return n.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  AIsoDataObjectGroup.prototype.destroyObject = function (e) {
    if (e) {
      e.destroy();
    }
    return null;
  };
  Object.defineProperty(AIsoDataObjectGroup.prototype, "groupType", {
    get: function () {
      return this._groupType;
    },
    set: function (e) {
      this._groupType = e;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoDataObjectGroup;
}();
exports.AIsoDataObjectGroup = o;