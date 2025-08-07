Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoDataObjectGroupBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupBackground, e);
  IsoDataObjectGroupBackground.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._vo = this.destroyObject(this.vo);
  };
  IsoDataObjectGroupBackground.prototype.initObjects = function () {
    this._vo = new s.StaticBackgroundVO();
    this._vo.type = a.IsoHelper.data.getBackgroundType(this.isoData);
    this._vo.init(this.isoData);
  };
  IsoDataObjectGroupBackground.prototype.fillInCompleteList = function (e) {
    if (this.vo) {
      e.push(this.vo);
    }
  };
  IsoDataObjectGroupBackground.prototype.containsObject = function (e) {
    return this.vo == e;
  };
  Object.defineProperty(IsoDataObjectGroupBackground.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupBackground;
}(require("./862.js").AIsoDataObjectGroup);
exports.IsoDataObjectGroupBackground = o;
var a = require("./46.js");
var s = require("./1171.js");