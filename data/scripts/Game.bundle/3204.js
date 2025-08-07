Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1047.js");
var s = function (e) {
  function CastleVolcanoSlumPackageDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleVolcanoSlumPackageDialog, e);
  Object.defineProperty(CastleVolcanoSlumPackageDialog.prototype, "merchantScrollItem", {
    get: function () {
      return r.VolcanoSlumPackageScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleVolcanoSlumPackageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setSlumText("dialog_village_copy_vulcan");
  };
  Object.defineProperty(CastleVolcanoSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      return 3;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageDialog.prototype, "backgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleVolcanoSlumPackageDialog.__initialize_static_members = function () {
    CastleVolcanoSlumPackageDialog.NAME = "CastleVolcanoSlumPackage";
  };
  return CastleVolcanoSlumPackageDialog;
}(a.CastleSlumPackageDialog);
exports.CastleVolcanoSlumPackageDialog = s;
var r = require("./3205.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();