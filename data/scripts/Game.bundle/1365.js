Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./607.js");
var r = require("./1366.js");
var l = require("./296.js");
var c = require("./102.js");
var u = require("./4.js");
var d = require("./1367.js");
var p = require("./13.js");
var h = function (e) {
  function CastleAllianceRequestDiplomacyDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, d.CastleAllianceInvitationDialog.NAME) || this;
  }
  n.__extends(CastleAllianceRequestDiplomacyDialog, e);
  CastleAllianceRequestDiplomacyDialog.prototype.applyPropertiesLoaded = function (e = null) {};
  CastleAllianceRequestDiplomacyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties_0.allianceInfoVO) {
      this.applyAllianceData(this.dialogProperties_0.allianceInfoVO);
    } else {
      u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
      u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAllianceInfoVO(this.dialogProperties_0.allianceID));
    }
    switch (this.dialogProperties_0.requestStatus) {
      case a.AllianceConst.DIPLOMACY_NEUTRAL:
        this.itxt_question.textContentVO.textId = "dialog_alliance_diplomacyQuestion_neutral";
        break;
      case a.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        this.itxt_question.textContentVO.textId = "dialog_alliance_diplomacyQuestion_noAttack";
        break;
      case a.AllianceConst.DIPLOMACY_REAL_ALLIED:
        this.itxt_question.textContentVO.textId = "dialog_alliance_diplomacyQuestion_pact";
    }
    this.itxt_title.textContentVO.textId = p.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_requestDiplomacy_title");
  };
  CastleAllianceRequestDiplomacyDialog.prototype.onAllianceDataUpdate = function (e) {
    u.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    this.applyAllianceData(e.allianceInfoVO);
  };
  Object.defineProperty(CastleAllianceRequestDiplomacyDialog.prototype, "helperTextId", {
    get: function () {
      return "help_requestDiplomacy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleAllianceInvitationDialog.prototype, "helperTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceRequestDiplomacyDialog.prototype.onRefuse = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SAllianceRefuseDiplomacyVO(this.dialogProperties_0.allianceID));
  };
  CastleAllianceRequestDiplomacyDialog.prototype.onAccept = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new s.C2SAllianceChangeDiplomacyVO(this.dialogProperties_0.allianceID, this.dialogProperties_0.requestStatus));
  };
  Object.defineProperty(CastleAllianceRequestDiplomacyDialog.prototype, "dialogProperties_0", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceRequestDiplomacyDialog.__initialize_static_members = function () {
    CastleAllianceRequestDiplomacyDialog.NAME = "CastleAllianceInvitationEx";
  };
  return CastleAllianceRequestDiplomacyDialog;
}(d.CastleAllianceInvitationDialog);
exports.CastleAllianceRequestDiplomacyDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();