Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./28.js");
var d = function (e) {
  function CastleWorldCupFinisher() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWorldCupFinisher.NAME) || this;
  }
  n.__extends(CastleWorldCupFinisher, e);
  CastleWorldCupFinisher.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new l.LocalizedTextVO("dialog_worldCup"));
    this.tfDesc = this.textFieldManager.registerTextField(this.dialogDisp.tfDesc, new l.LocalizedTextVO(""));
    this.initBasicButtons([this.dialogDisp.btnOk, this.dialogDisp.btnClose]);
  };
  CastleWorldCupFinisher.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    var i = new r.LocalizedDateTimeVO(new Date(this.dialogProperties.date * u.ClientConstTime.SEC_2_MILLISEC), a.DateTimeStyle.SHORT, a.DateTimeStyle.NONE);
    var n = s.Localize.text("dialog_worldCup_team" + this.dialogProperties.teamA);
    var o = s.Localize.text("dialog_worldCup_team" + this.dialogProperties.teamB);
    var l = c.int(this.dialogProperties.paymentC2 * this.dialogProperties.bonusC2 / 100);
    if (this.dialogProperties.winner == this.dialogProperties.vote) {
      switch (this.dialogProperties.winner) {
        case p.WorldCupEventVO.VOTE_VALUE_TEAM_A:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageWin1";
          break;
        case p.WorldCupEventVO.VOTE_VALUE_TEAM_B:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageWin2";
          break;
        case p.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageWin3";
      }
      this.tfDesc.textContentVO.textReplacements = [i, n, o, l];
    } else {
      switch (this.dialogProperties.winner) {
        case p.WorldCupEventVO.VOTE_VALUE_TEAM_A:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageLose1";
          break;
        case p.WorldCupEventVO.VOTE_VALUE_TEAM_B:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageLose2";
          break;
        case p.WorldCupEventVO.VOTE_VALUE_TEAM_DRAW:
          this.tfDesc.textContentVO.textId = "dialog_worldCup_messageLose3";
      }
      this.tfDesc.textContentVO.textReplacements = [i, n, o];
    }
  };
  CastleWorldCupFinisher.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnClose:
      case this.dialogDisp.btnOk:
        this.hide();
    }
  };
  Object.defineProperty(CastleWorldCupFinisher.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldCupFinisher.__initialize_static_members = function () {
    CastleWorldCupFinisher.NAME = "CastleWorldCupFinisherExternal";
  };
  return CastleWorldCupFinisher;
}(require("./11.js").CastleExternalDialog);
exports.CastleWorldCupFinisher = d;
var p = require("./669.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();