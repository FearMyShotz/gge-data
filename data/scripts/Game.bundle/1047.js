Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3198.js");
var r = function (e) {
  function SlumPackageScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SlumPackageScrollItem, e);
  Object.defineProperty(SlumPackageScrollItem.prototype, "isLocked", {
    get: function () {
      var e = this.slumPackageScrollItemVO;
      return e.activeSlumLevel < e.level;
    },
    enumerable: true,
    configurable: true
  });
  SlumPackageScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.disp.mc_locked.visible = this.isLocked;
  };
  SlumPackageScrollItem.prototype.handleTooltip = function () {
    e.prototype.handleTooltip.call(this);
    if (this.isLocked) {
      this.disp.toolTipText = new a.LocalizedTextVO("dialog_village_buy_levellock", [this.slumPackageScrollItemVO.level]);
    }
  };
  SlumPackageScrollItem.prototype.createDialogProperties = function () {
    var e = new s.CastleSlumPackageBuyDialogProperties();
    e.parseDataFromSlumPackageScrollItemVO(this.slumPackageScrollItemVO);
    return e;
  };
  Object.defineProperty(SlumPackageScrollItem.prototype, "slumPackageScrollItemVO", {
    get: function () {
      return this.packageScrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return SlumPackageScrollItem;
}(require("./173.js").AMerchantScrollItem);
exports.SlumPackageScrollItem = r;
o.classImplementsInterfaces(r, "MovieClip");