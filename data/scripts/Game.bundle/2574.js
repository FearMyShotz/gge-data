Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./2575.js");
var u = require("./4.js");
var d = require("./180.js");
var p = require("./8.js");
var h = require("./35.js");
var g = require("./2576.js");
var C = function (e) {
  function CastleAllianceInfoDialogOverview(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_description, new r.LocalizedTextVO("dialog_alliance_description"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_member, new r.LocalizedTextVO("dialog_alliance_member"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_leader, new r.LocalizedTextVO("dialog_alliance_leader"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_honor, new r.LocalizedTextVO("honor"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_fame, new r.LocalizedTextVO("dialog_alliancelevel")).autoFitToBounds = true;
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_language, new r.LocalizedTextVO("dialog_allianceLanguage_name")).autoFitToBounds = true;
    i.itxt_memberCount = i.textFieldManager.registerTextField(i.sublayerDisp.txt_memberCount, new s.LocalizedNumberVO(0));
    i.itxt_leaderName = i.textFieldManager.registerTextField(i.sublayerDisp.txt_leaderName, new l.TextVO(""));
    i.itxt_allianceDescription = i.textFieldManager.registerTextField(i.sublayerDisp.txt_allianceDescription, new l.TextVO(""));
    i.itxt_allianceDescription.selectable = true;
    i.itxt_honorAmount = i.textFieldManager.registerTextField(i.sublayerDisp.txt_honorAmount, new s.LocalizedNumberVO(0));
    i.itxt_fameAmount = i.textFieldManager.registerTextField(i.sublayerDisp.txt_fameAmount, new s.LocalizedNumberVO(0));
    i.itxt_languageName = i.textFieldManager.registerTextField(i.sublayerDisp.txt_languageName, new r.LocalizedTextVO(""));
    i._scrollComponent = new m.CastleTextScrollComponent(new d.CastleTextScrollVO(i.sublayerDisp.txt_allianceDescription, i.sublayerDisp.mc_scrollHandle.btn_up, i.sublayerDisp.mc_scrollHandle.btn_down, i.sublayerDisp.mc_scrollHandle.btn_slider, i.sublayerDisp.mc_scrollHandle.mc_sliderLine, [i.sublayerDisp.mc_scrollHandle]));
    i._scrollComponent.invisibleOnFit = true;
    p.ButtonHelper.initBasicButton(i.sublayerDisp.btn_appyForMembership);
    return i;
  }
  n.__extends(CastleAllianceInfoDialogOverview, e);
  CastleAllianceInfoDialogOverview.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._scrollComponent.onShow();
    this.itxt_memberCount.textContentVO.numberValue = this.allianceInfoVO.memberAmount;
    this.itxt_leaderName.textContentVO.stringValue = this.allianceInfoVO.allianceLeader ? this.allianceInfoVO.allianceLeader.playerName : "";
    this.itxt_allianceDescription.textContentVO.stringValue = this.allianceInfoVO.allianceDescription;
    this.itxt_honorAmount.textContentVO.numberValue = this.allianceInfoVO.allianceHonor;
    this.itxt_fameAmount.textContentVO.numberValue = this.allianceInfoVO.allianceFameLevel;
    this.itxt_languageName.textContentVO.textId = this.allianceInfoVO.allianceLanguage ? "language_native_" + this.allianceInfoVO.allianceLanguage : "dialog_allLanguages_desc";
    this.sublayerDisp.btn_appyForMembership.visible = !u.CastleModel.userData.isInAlliance;
    p.ButtonHelper.enableButton(this.sublayerDisp.btn_appyForMembership, true);
    if (this.allianceInfoVO.isAcceptingMembers) {
      this.sublayerDisp.btn_appyForMembership.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.sublayerDisp.btn_appyForMembership.btn_join.txt_label, new r.LocalizedTextVO("dialog_alliance_joinAlliance_Button"), new o.InternalGGSTextFieldConfigVO(true));
      this.sublayerDisp.btn_appyForMembership.toolTipText = "dialog_alliance_joinAlliance_Button_tooltip";
    } else if (this.allianceInfoVO.isSearchingMembers) {
      this.sublayerDisp.btn_appyForMembership.gotoAndStop(1);
      this.sublayerDisp.btn_appyForMembership.toolTipText = "dialog_alliance_applyForMembership";
    } else {
      this.sublayerDisp.btn_appyForMembership.gotoAndStop(1);
      this.sublayerDisp.btn_appyForMembership.toolTipText = "dialog_alliance_isntLookingForMembers";
    }
    this._scrollComponent.scrollToStart();
  };
  CastleAllianceInfoDialogOverview.prototype.hide = function () {
    this._scrollComponent.onHide();
    e.prototype.hide.call(this);
  };
  CastleAllianceInfoDialogOverview.prototype.onMouseUp = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.sublayerDisp.btn_appyForMembership:
          if (this.sublayerDisp.btn_appyForMembership.currentFrame == 0) {
            this.onApplyForMembership();
          } else {
            this.onJoin();
          }
      }
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogOverview.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogOverview.prototype.onApplyForMembership = function () {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleApplyForMembershipDialog, new g.CastleApplyForMembershipDialogProperties(this.allianceInfoVO));
  };
  CastleAllianceInfoDialogOverview.prototype.onJoin = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SJoinOpenAllianceVO(this.allianceInfoVO.allianceId));
    this.layoutManager.hideDialog(f.CastleAllianceInfoDialog);
    this.layoutManager.hideDialog(E.CastleSearchAllianceDialog);
  };
  Object.defineProperty(CastleAllianceInfoDialogOverview.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogOverview;
}(h.CastleDialogSubLayer);
exports.CastleAllianceInfoDialogOverview = C;
var _ = require("./9.js");
var m = require("./182.js");
var f = require("./132.js");
var O = require("./2577.js");
var E = require("./971.js");
a.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");