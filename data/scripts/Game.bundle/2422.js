Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./2423.js");
var c = require("./37.js");
var u = require("./30.js");
var d = require("./4.js");
var p = require("./76.js");
var h = require("./77.js");
var g = require("./8.js");
var C = function (e) {
  function CastleAllianceCentersOfPowerDialog() {
    return e.call(this, CastleAllianceCentersOfPowerDialog.NAME) || this;
  }
  n.__extends(CastleAllianceCentersOfPowerDialog, e);
  CastleAllianceCentersOfPowerDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    var i = new h.InfiniteScrollListOptions(f.CastleAllianceCentersOfPowerDialogItem, "CastleAllianceCentersOfPowerItem", CastleAllianceCentersOfPowerDialog.NAME);
    i.itemPaddingY = 10;
    i.useSmoothScroll = true;
    this._rewardScrollList = new m.InfiniteScrollListComponent(new p.InfiniteScrollListClips(this.dialogDisp.mc_list).addMaskMc(this.dialogDisp.mc_list.mc_mask).addSliderMc(this.dialogDisp.mc_list.mc_slider).addItemMc(this.dialogDisp.mc_list.mc_items), i);
  };
  CastleAllianceCentersOfPowerDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_centersOfPower_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_centersOfPower_desc"));
    this._rewardScrollList.onShow();
    this.controller.addEventListener(c.CastleServerMessageArrivedEvent.CPD_ARRIVED, this.bindFunction(this.onCPDArrived));
    a.BasicModel.smartfoxClient.sendCommandVO(new l.C2SAllianceBattleGroundGetCentersOfPowerDetailVO(d.CastleModel.userData.allianceID));
  };
  CastleAllianceCentersOfPowerDialog.prototype.onCPDArrived = function (e) {
    this.controller.removeEventListener(c.CastleServerMessageArrivedEvent.CPD_ARRIVED, this.bindFunction(this.onCPDArrived));
    var t = [];
    var i = e.params[0].AAI;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = [_.WorldmapObjectFactory.parseWorldMapArea(a.AI), a.PN, r.int(Math.max(r.int(a.AMT), r.int(a.AOT), r.int(a.PB))), u.CachedTimer.getCachedTimer()];
          t.push(s);
        }
      }
    }
    this._rewardScrollList.updateWithNewData(t);
  };
  CastleAllianceCentersOfPowerDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._rewardScrollList.onHide();
  };
  CastleAllianceCentersOfPowerDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleAllianceCentersOfPowerDialog.NAME = "CastleAllianceCentersOfPower";
  return CastleAllianceCentersOfPowerDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceCentersOfPowerDialog = C;
var _ = require("./147.js");
var m = require("./78.js");
var f = require("./2424.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");