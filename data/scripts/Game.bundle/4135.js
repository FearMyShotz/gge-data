Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./4.js");
var u = function (e) {
  function CastleCraneTeaserDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleCraneTeaserDialog.NAME) || this;
  }
  n.__extends(CastleCraneTeaserDialog, e);
  CastleCraneTeaserDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = r.int(this.dialogProperties.lastDiscountLevel + 1);
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy5, new s.LocalizedTextVO("dialog_craneteaser_discount", [i, this.dialogProperties.discount]));
    this.textFieldManager.registerTextField(this.dialogDisp.seal.tfPercentage, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.dialogProperties.discount]));
  };
  CastleCraneTeaserDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btnClose, this.dialogDisp.btnBuild]);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new s.LocalizedTextVO("dialog_craneteaser_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy1, new s.LocalizedTextVO("dialog_craneteaser_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy2, new s.LocalizedTextVO("dialog_craneteaser_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy3, new s.LocalizedTextVO("dialog_craneteaser_copy3"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy4, new s.LocalizedTextVO("dialog_craneteaser_copy4"));
    this.textFieldManager.registerTextField(this.dialogDisp.tfCopy5, new s.LocalizedTextVO("dialog_craneteaser_discount", [0, 0]));
    this.textFieldManager.registerTextField(this.dialogDisp.seal.tfPercentage, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.dialogDisp.btnBuild.toolTipText = "dialog_craneteaser_buildNow";
    e.prototype.initLoaded.call(this);
  };
  CastleCraneTeaserDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.btnBuild:
        this.hide();
        d.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
        if (this.layoutManager.isInMyCastleBuildMode) {
          var t = c.CastleModel.wodData.getBuildingVOById(l.ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1);
          var i = this.layoutManager.getPanel(p.CastleDecoShopPanel);
          i.changeCategory(l.ClientConstCastle.CATEGORY_CIVIL);
          i.centerAndHighlightBuildingInShop(t);
        }
    }
  };
  Object.defineProperty(CastleCraneTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraneTeaserDialog.__initialize_static_members = function () {
    CastleCraneTeaserDialog.NAME = "CastleCraneTeaser";
  };
  return CastleCraneTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleCraneTeaserDialog = u;
var d = require("./33.js");
var p = require("./260.js");
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();