Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoViewObjectGroupFloorMark() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoViewObjectGroupFloorMark, e);
  IsoViewObjectGroupFloorMark.prototype.destroy = function () {
    this._floorCursorVE = null;
    this._tutorialMarkerVE = null;
    this._debugPosVE = null;
    e.prototype.destroy.call(this);
  };
  IsoViewObjectGroupFloorMark.prototype.initObjects = function () {
    this.resetList();
    this.addObjectToLayerAndList(this._floorCursorVE = this.createElement(s.IsoFloorCursorVE), this.list);
    this.addObjectToLayerAndList(this._tutorialMarkerVE = this.createElement(r.IsoTutorialMarkerVE), this.list);
    this.addObjectToLayerAndList(this._debugPosVE = this.createElement(a.IsoDebugPosVE), this.list);
  };
  IsoViewObjectGroupFloorMark.prototype.createElement = function (e) {
    var t = new e();
    t.init(null);
    t.updateDisp();
    t.elementContainer.visible = false;
    t.elementContainer.mouseEnabled = false;
    return t;
  };
  Object.defineProperty(IsoViewObjectGroupFloorMark.prototype, "floorCursorVE", {
    get: function () {
      return this._floorCursorVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupFloorMark.prototype, "tutorialMarkerVE", {
    get: function () {
      return this._tutorialMarkerVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupFloorMark.prototype, "debugPosVE", {
    get: function () {
      return this._debugPosVE;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupFloorMark;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupFloorMark = o;
var a = require("./2813.js");
var s = require("./1529.js");
var r = require("./1530.js");