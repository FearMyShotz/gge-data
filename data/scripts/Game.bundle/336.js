Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoObjectRotationEnum(t, i) {
    var n = this;
    n._id = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._id = i;
    return n;
  }
  n.__extends(IsoObjectRotationEnum, e);
  IsoObjectRotationEnum.getTypeById = function (e) {
    return this.getByProperty(IsoObjectRotationEnum, "id", e, IsoObjectRotationEnum.NONE);
  };
  Object.defineProperty(IsoObjectRotationEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  IsoObjectRotationEnum.__initialize_static_members = function () {
    IsoObjectRotationEnum.NONE = new IsoObjectRotationEnum("none", 1);
    IsoObjectRotationEnum._1FrameFor2Dir = new IsoObjectRotationEnum("1FrameFor2Dir", 2);
    IsoObjectRotationEnum._2FramesFor4Dir = new IsoObjectRotationEnum("2FramesFor4Dir", 3);
    IsoObjectRotationEnum._4FramesFor4Dir = new IsoObjectRotationEnum("4FramesFor4Dir", 4);
    IsoObjectRotationEnum._4GfxFor4Dir = new IsoObjectRotationEnum("4GfxFor4Dir", 5);
  };
  return IsoObjectRotationEnum;
}(require("./84.js").CastleEnum);
exports.IsoObjectRotationEnum = a;
a.__initialize_static_members();