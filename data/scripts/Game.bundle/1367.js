Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./2435.js");
var p = require("./2436.js");
var h = require("./607.js");
var g = require("./102.js");
var C = require("./4.js");
var _ = require("./43.js");
var m = require("./41.js");
var f = require("./149.js");
var O = require("./11.js");
var E = require("./93.js");
var y = function (e) {
  function CastleAllianceInvitationDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t ?? CastleAllianceInvitationDialog.NAME) || this;
  }
  n.__extends(CastleAllianceInvitationDialog, e);
  CastleAllianceInvitationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_allianceName.actLikeButton = true;
    this.dialogDisp.mc_leaderName.actLikeButton = true;
    this.dialogDisp.mc_allianceName.mouseChildren = false;
    this.dialogDisp.mc_leaderName.mouseChildren = false;
    m.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_allianceName);
    m.CastleMovieClipHelper.createHitArea(this.dialogDisp.mc_leaderName);
    this.setStaticText();
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO(R.TextHelper.toUpperCaseLocaSafeTextId("")));
    this.itxt_allianceName = this.textFieldManager.registerTextField(this.dialogDisp.mc_allianceName.txt_nameValue, new u.TextVO(""));
    this.itxt_leaderName = this.textFieldManager.registerTextField(this.dialogDisp.mc_leaderName.txt_leaderValue, new u.TextVO(""));
    this.itxt_languageValue = this.textFieldManager.registerTextField(this.dialogDisp.txt_languageValue, new u.TextVO(""));
    this.itxt_memberCount = this.textFieldManager.registerTextField(this.dialogDisp.txt_membersValue, new c.NumberVO(0));
    this.itxt_allianceLevelAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevelValue, new c.NumberVO(0));
    this.itxtfameAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_fameValue, new r.LocalizedNumberVO(0));
    this.itxt_allianceLevelValue = this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevelValue, new c.NumberVO(0));
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_description, new u.TextVO(""));
    this.itxt_question = this.textFieldManager.registerTextField(this.dialogDisp.txt_question, new l.LocalizedTextVO(""));
    v.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes, this.dialogDisp.btn_help, this.dialogDisp.btn_openAllianceCard], T.ClickFeedbackButtonHover);
  };
  CastleAllianceInvitationDialog.prototype.applyPropertiesLoaded = function (e = null) {
    C.CastleModel.allianceData.addEventListener(g.CastleAllianceDataEvent.ALLIANCE_INVITATION, this.bindFunction(this.onAllianceInvitationDataUpdate));
    C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetAllianceInvitationVO(this.dialogProperties.messageVO.messageID));
    C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SReadMessagesVO(this.dialogProperties.messageVO.messageID));
    this.itxt_question.textContentVO.textId = "dialog_alliance_invitationQuestion";
    this.itxt_title.textContentVO.textId = R.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_invitationHeader");
  };
  CastleAllianceInvitationDialog.prototype.setStaticText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new l.LocalizedTextVO("dialog_alliance_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_leader, new l.LocalizedTextVO("dialog_alliance_leader"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_language, new l.LocalizedTextVO("dialog_allianceLanguage_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_members, new l.LocalizedTextVO("dialog_alliance_member"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_fame, new l.LocalizedTextVO("playerMight"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceLevel, new l.LocalizedTextVO("dialog_alliancelevel"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_descTitle, new l.LocalizedTextVO(o.GenericTextIds.VALUE_COLON, [s.Localize.text("dialog_alliance_description")]));
  };
  CastleAllianceInvitationDialog.prototype.onAllianceInvitationDataUpdate = function (e) {
    C.CastleModel.allianceData.removeEventListener(g.CastleAllianceDataEvent.ALLIANCE_INVITATION, this.bindFunction(this.onAllianceInvitationDataUpdate));
    this.applyAllianceData(e.allianceInfoVO);
  };
  CastleAllianceInvitationDialog.prototype.applyAllianceData = function (e) {
    this.allianceVO = e;
    if (this.allianceVO) {
      this.itxt_allianceName.textContentVO.stringValue = this.allianceVO.allianceName;
      this.itxt_leaderName.textContentVO.stringValue = this.allianceVO.allianceLeader.playerName;
      this.itxt_languageValue.textContentVO.stringValue = s.Localize.text("language_native_" + this.allianceVO.allianceLanguage);
      this.itxt_memberCount.textContentVO.numberValue = this.allianceVO.memberAmount;
      this.itxt_allianceLevelAmount.textContentVO.numberValue = this.allianceVO.allianceFameLevel;
      this.itxtfameAmount.textContentVO.numberValue = this.allianceVO.mightPoints;
      this.itxt_allianceLevelValue.textContentVO.numberValue = this.allianceVO.allianceFameLevel;
      this.itxt_description.textContentVO.stringValue = this.allianceVO.allianceDescription;
      this._textScrollComponent = new S.ModernSliderScrollComponent(new A.SimpleScrollVO(this.dialogDisp.mc_list.mc_descSlider.btn_minus, this.dialogDisp.mc_list.mc_descSlider.btn_plus, null, null, this.dialogDisp.mc_list.mc_descSlider.mc_sliderLine, this.dialogDisp.mc_list.mc_descSlider.btn_slider, [this.dialogDisp.mc_slider], [this.dialogDisp.mc_list.txt_description, this.dialogDisp.mouse_area]), new L.DynamicSizeScrollStrategyVertical(true, 0), true);
      this._textScrollComponent.strategy.visibleValue = P.ClientConstUtils.isTlfMode ? this.itxt_description.height : this.itxt_description.numLines;
      var t = M.int(P.ClientConstUtils.isTlfMode ? 20 : 1);
      this._textScrollComponent.init(1, this.itxt_description.maxScrollV, t, t);
      this._textScrollComponent.setVisibility(this.itxt_description.maxScrollV > 1);
      this._textScrollComponent.show();
      this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    } else {
      this.hide();
    }
  };
  CastleAllianceInvitationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        this.onRefuse();
        break;
      case this.dialogDisp.mc_leaderName:
      case this.dialogDisp.btn_openAllianceCard:
        b.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(I.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(this.allianceVO.memberList[0].playerID), _.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.mc_allianceName:
        b.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(D.CastleAllianceInfoDialog, new f.CastleAllianceInfoDialogProperties(this.allianceVO.allianceId, this.allianceVO.allianceName), _.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case this.dialogDisp.btn_yes:
        this.hide();
        this.onAccept();
        break;
      case this.dialogDisp.btn_help:
        b.CastleDialogHandler.getInstance().showHelper("", s.Localize.text(this.helperTextId ? this.helperTextId : ""));
    }
  };
  Object.defineProperty(CastleAllianceInvitationDialog.prototype, "helperTextId", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInvitationDialog.prototype.onRefuse = function () {
    C.CastleModel.messageData.deleteMessageFromClientList(this.dialogProperties.messageVO);
    C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceAcceptInviteVO(this.dialogProperties.messageVO.messageID, 0));
  };
  CastleAllianceInvitationDialog.prototype.onAccept = function () {
    C.CastleModel.messageData.deleteMessageFromClientList(this.dialogProperties.messageVO);
    C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceAcceptInviteVO(this.dialogProperties.messageVO.messageID, 1));
  };
  CastleAllianceInvitationDialog.prototype.showLoaded = function (t = null) {
    if (this.helperTextId) {
      this.dialogDisp.btn_help.toolTipText = "generic_help";
    } else {
      this.dialogDisp.btn_help.visible = false;
    }
    this.itxt_question.textContentVO.textId = "dialog_alliance_invitationQuestion";
    this.itxt_title.textContentVO.textId = "dialog_alliance_invitationHeader";
    e.prototype.showLoaded.call(this);
  };
  CastleAllianceInvitationDialog.prototype.onDescriptionScroll = function () {
    this.itxt_description.scrollV = o.MathBase.clamp(this._textScrollComponent.currentValue, 1, this.itxt_description.maxScrollV);
  };
  CastleAllianceInvitationDialog.prototype.hideLoaded = function (t = null) {
    if (this._textScrollComponent) {
      this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
      this._textScrollComponent.hide();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceInvitationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInvitationDialog.__initialize_static_members = function () {
    CastleAllianceInvitationDialog.NAME = "CastleAllianceInvitationEx";
  };
  return CastleAllianceInvitationDialog;
}(O.CastleExternalDialog);
exports.CastleAllianceInvitationDialog = y;
var b = require("./9.js");
var D = require("./132.js");
var I = require("./94.js");
var T = require("./20.js");
var v = require("./8.js");
var S = require("./82.js");
var A = require("./47.js");
var L = require("./59.js");
var P = require("./55.js");
var M = require("./6.js");
var R = require("./13.js");
a.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();