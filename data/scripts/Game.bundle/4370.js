Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./43.js");
var u = require("./42.js");
var d = require("./8.js");
var p = require("./149.js");
var h = require("./136.js");
var g = require("./1895.js");
var C = function (e) {
  function CastleAllianceTournamentRankListItem(t) {
    var i = this;
    i._allianceId = -1;
    i._allianceName = "";
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleAllianceTournamentRankListItem, e);
  CastleAllianceTournamentRankListItem.prototype.parseItemData = function (t) {
    e.prototype.parseItemData.call(this, t);
    this._allianceId = r.int(t[2][0]);
    this._allianceName = t[2][1];
  };
  CastleAllianceTournamentRankListItem.prototype.updateBgColor = function () {
    var e = CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_DEFAULT;
    if (this.isSearchTextRelevant) {
      e = CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_RELEVANT;
    } else if (this.ownAlliance) {
      e = CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_OWN_ALLIANCE;
    }
    this.disp.mc_background.gotoAndStop(e);
  };
  Object.defineProperty(CastleAllianceTournamentRankListItem.prototype, "isSearchTextRelevant", {
    get: function () {
      return this._allianceName != "" && this._allianceName.toLowerCase() == this.searchFieldValue.toLowerCase() || parseInt(this.searchFieldValue) == this.rank;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.ACastleTournamentRankListItem.prototype, "isSearchTextRelevant").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceTournamentRankListItem.prototype, "ownAlliance", {
    get: function () {
      return l.CastleModel.allianceData.myAllianceVO.allianceId == this._allianceId;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceTournamentRankListItem.prototype.updateText = function () {
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new a.LocalizedNumberVO(this.rank)).autoFitToBounds = true;
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new s.TextVO(this._allianceName)).autoFitToBounds = true;
    var e = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new a.LocalizedNumberVO(this.points));
    e.autoFitToBounds = true;
    e.verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  CastleAllianceTournamentRankListItem.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      t.target;
      this.onItemClick();
    }
  };
  CastleAllianceTournamentRankListItem.prototype.onItemClick = function () {
    if (this._allianceId >= 0) {
      if (this._allianceId != l.CastleModel.userData.allianceID) {
        _.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(m.CastleAllianceInfoDialog, new p.CastleAllianceInfoDialogProperties(this._allianceId), c.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      } else {
        _.CastleComponent.dialogHandler.registerDefaultDialogs(f.CastleAllianceDialog, new h.CastleAllianceDialogProperties());
      }
    }
  };
  CastleAllianceTournamentRankListItem.__initialize_static_members = function () {
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_DEFAULT = 1;
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_OWN_ALLIANCE = 2;
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_BOBBY = 3;
    CastleAllianceTournamentRankListItem.BACKGROUND_FRAME_RELEVANT = 4;
  };
  return CastleAllianceTournamentRankListItem;
}(g.ACastleTournamentRankListItem);
exports.CastleAllianceTournamentRankListItem = C;
var _ = require("./14.js");
var m = require("./132.js");
var f = require("./125.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();