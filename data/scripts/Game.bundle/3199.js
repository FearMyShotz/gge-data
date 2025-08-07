Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSlumPackageBuyDialogProperties() {
    var t = this;
    t.activeSlumLevel = 0;
    t.level = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleSlumPackageBuyDialogProperties, e);
  CastleSlumPackageBuyDialogProperties.prototype.parseDataFromSlumPackageScrollItemVO = function (e) {
    this.parseDataFromScrollItem(e);
    this.slumVO = e.slumVO;
    this.activeSlumLevel = e.activeSlumLevel;
    this.level = e.level;
  };
  return CastleSlumPackageBuyDialogProperties;
}(require("./167.js").CastleGenericBuyDialogProperties);
exports.CastleSlumPackageBuyDialogProperties = o;