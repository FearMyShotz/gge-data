Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./51.js");
var u = require("./1086.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./107.js");
var g = function (e) {
  function CastleSabotageMessageDialog() {
    var t = this;
    t.CHAR_ICON_ASSET_NAME = "SabotageMessageIcon";
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSabotageMessageDialog.NAME) || this;
  }
  n.__extends(CastleSabotageMessageDialog, e);
  CastleSabotageMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_repairAll]);
  };
  CastleSabotageMessageDialog.prototype.onClipLoaded = function (e) {
    this.dialogDisp.mcBuilding.addChild(e.currentshownDisplayObject);
  };
  CastleSabotageMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_spy_titleSabotage"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_premiumToolTip.txt_name, new s.LocalizedTextVO("repairAll"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_sabotageMessage_affected"));
    this.repairAllButton = new _.ButtonRepairAllComponent(this.dialogDisp.btn_repairAll);
    this.buildingIcon = new p.CastleGoodgameExternalClip(this.CHAR_ICON_ASSET_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.CHAR_ICON_ASSET_NAME), null, 0, false);
    if (this.buildingIcon.isLoaded) {
      this.onClipLoaded(this.buildingIcon);
    } else {
      this.buildingIcon.clipLoaded.add(this.bindFunction(this.onClipLoaded));
    }
    h.CharacterHelper.createCharacterBig(c.ClientConstCharacter.CHAR_ID_SPY, this.dialogDisp.mc_char, 178, 154);
    this.repairAllButton.initRepairAllButton(this.dialogProperties.castleID, this.dialogDisp.mc_premiumToolTip);
    if (a.currentBrowserInfo.isMobile) {
      this.dialogDisp.mc_premiumToolTip.visible = true;
    }
  };
  CastleSabotageMessageDialog.prototype.hideLoaded = function (t = null) {
    if (this.buildingIcon.currentshownDisplayObject && this.buildingIcon.currentshownDisplayObject.parent == this.dialogDisp.mcBuilding) {
      this.dialogDisp.mcBuilding.removeChild(this.buildingIcon.currentshownDisplayObject);
    }
    e.prototype.hideLoaded.call(this, t);
  };
  CastleSabotageMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_repairAll:
        d.CastleModel.smartfoxClient.sendCommandVO(new u.C2SIsoRepairAllVO());
        this.hide();
    }
  };
  CastleSabotageMessageDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_repairAll && this.layoutManager.currentState == C.CastleLayoutManager.STATE_ISO) {
      this.dialogDisp.mc_premiumToolTip.visible = true;
      l.TweenMax.fromTo(this.dialogDisp.mc_premiumToolTip, 0.2, {
        alpha: 0
      }, {
        alpha: 1,
        ease: r.Linear.easeIn
      });
    }
  };
  CastleSabotageMessageDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.dialogDisp.mc_premiumToolTip.visible = false;
  };
  CastleSabotageMessageDialog.prototype.destroy = function () {
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleSabotageMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSabotageMessageDialog.__initialize_static_members = function () {
    CastleSabotageMessageDialog.NAME = "CastleSabotageMessageEx";
  };
  return CastleSabotageMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSabotageMessageDialog = g;
var C = require("./17.js");
var _ = require("./5524.js");
a.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();