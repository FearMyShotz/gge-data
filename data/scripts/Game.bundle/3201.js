Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1047.js");
var s = function (e) {
  function CastleIcecreamSlumPackageDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleIcecreamSlumPackageDialog, e);
  Object.defineProperty(CastleIcecreamSlumPackageDialog.prototype, "merchantScrollItem", {
    get: function () {
      return r.IcecreamSlumPackageScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleIcecreamSlumPackageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setSlumText("dialog_village_copy_ice");
  };
  Object.defineProperty(CastleIcecreamSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      return 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageDialog.prototype, "backgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleIcecreamSlumPackageDialog.__initialize_static_members = function () {
    CastleIcecreamSlumPackageDialog.NAME = "CastleIcecreamSlumPackage";
  };
  return CastleIcecreamSlumPackageDialog;
}(a.CastleSlumPackageDialog);
exports.CastleIcecreamSlumPackageDialog = s;
var r = require("./3202.js");
s.__initialize_static_members();
o.classImplementsInterfaces(s, "ICollectableRendererList");