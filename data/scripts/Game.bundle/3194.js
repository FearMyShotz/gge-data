Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1046.js");
var s = function (e) {
  function CastleDessertSlumPackageDialog() {
    return e.call(this) || this;
  }
  n.__extends(CastleDessertSlumPackageDialog, e);
  Object.defineProperty(CastleDessertSlumPackageDialog.prototype, "merchantScrollItem", {
    get: function () {
      return r.DessertSlumPackageScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleDessertSlumPackageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setSlumText("dialog_village_copy_desert");
  };
  Object.defineProperty(CastleDessertSlumPackageDialog.prototype, "backgroundFrame", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.CastleSlumPackageDialog.prototype, "backgroundFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleDessertSlumPackageDialog.__initialize_static_members = function () {
    CastleDessertSlumPackageDialog.NAME = "CastleDessertSlumPackage";
  };
  return CastleDessertSlumPackageDialog;
}(a.CastleSlumPackageDialog);
exports.CastleDessertSlumPackageDialog = s;
var r = require("./3197.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");
s.__initialize_static_members();