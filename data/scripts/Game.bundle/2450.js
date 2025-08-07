Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AllianceCrestCreation_FreeLayout_ItemVE(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(AllianceCrestCreation_FreeLayout_ItemVE, e);
  AllianceCrestCreation_FreeLayout_ItemVE.prototype.updateDisp = function () {
    e.prototype.updateDisp.call(this);
  };
  Object.defineProperty(AllianceCrestCreation_FreeLayout_ItemVE.prototype, "layoutType", {
    get: function () {
      return "Normal";
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestCreation_FreeLayout_ItemVE;
}(require("./1380.js").AllianceCrestCreation_ALayout_ItemVE);
exports.AllianceCrestCreation_FreeLayout_ItemVE = a;
o.classImplementsInterfaces(a, "MovieClip");