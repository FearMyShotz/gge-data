Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./954.js");
var d = createjs.Point;
var p = function (e) {
  function CastleAllianceDialogTreasuryStorage(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleAllianceDialogTreasuryStorage, e);
  CastleAllianceDialogTreasuryStorage.prototype.init = function () {
    e.prototype.init.call(this);
    c.ButtonHelper.initBasicButton(this.disp.btn_donate);
    this.disp.btn_donate.toolTipText = "dialog_alliance_donateToTreasury_tooltip";
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_desc, new a.LocalizedTextVO("dialog_alliance_treasury_treasury_info"));
  };
  CastleAllianceDialogTreasuryStorage.prototype.update = function () {
    e.prototype.update.call(this);
    var t = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED, new d(30, 30));
    t.tooltip.useAmount = false;
    g.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.disp, "mc_item"), l.CastleModel.allianceData.myAllianceVO.storage, t);
  };
  CastleAllianceDialogTreasuryStorage.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_donate:
          h.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastleAllianceDonateDialog);
      }
    }
  };
  return CastleAllianceDialogTreasuryStorage;
}(u.ACastleAllianceDialogTreasurySublayer);
exports.CastleAllianceDialogTreasuryStorage = p;
var h = require("./14.js");
var g = require("./25.js");
var C = require("./1388.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");