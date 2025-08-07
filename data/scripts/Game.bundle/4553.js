Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./43.js");
var c = require("./8.js");
var u = require("./93.js");
var d = require("./1897.js");
var p = function (e) {
  function CastleTournamentRankListItem(t) {
    var i = this;
    i._playerId = -1;
    i._playerName = "";
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleTournamentRankListItem, e);
  CastleTournamentRankListItem.prototype.parseItemData = function (t) {
    e.prototype.parseItemData.call(this, t);
    this._playerId = r.int(t[2]);
    this._playerName = t[3];
  };
  CastleTournamentRankListItem.prototype.updateBgColor = function () {
    var e = CastleTournamentRankListItem.BACKGROUND_FRAME_BOBBY;
    if (this.isSearchTextRelevant) {
      e = CastleTournamentRankListItem.BACKGROUND_FRAME_RELEVANT;
    } else if (this.rank <= CastleTournamentRankListItem.COLOR_TOP3_RANK) {
      e = CastleTournamentRankListItem.BACKGROUND_FRAME_TOP3;
    } else if (this.rank <= CastleTournamentRankListItem.COLOR_TOPX_RANK) {
      e = CastleTournamentRankListItem.BACKGROUND_FRAME_TOPX;
    }
    this.disp.mc_background.gotoAndStop(e);
  };
  Object.defineProperty(CastleTournamentRankListItem.prototype, "isSearchTextRelevant", {
    get: function () {
      return this._playerName != "" && this._playerName.toLowerCase() == this.searchFieldValue.toLowerCase();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ACastleTournamentRankListItem.prototype, "isSearchTextRelevant").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleTournamentRankListItem.prototype.updateText = function () {
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new a.LocalizedNumberVO(this.rank)).autoFitToBounds = true;
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new s.TextVO(this._playerName)).autoFitToBounds = true;
    h.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new a.LocalizedNumberVO(this.points)).autoFitToBounds = true;
  };
  CastleTournamentRankListItem.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      t.target;
      if (this._playerId >= 0) {
        h.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(g.CastlePlayerInfoDialog, new u.CastlePlayerInfoDialogProperties(this._playerId), l.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleTournamentRankListItem.__initialize_static_members = function () {
    CastleTournamentRankListItem.COLOR_TOP3_RANK = 3;
    CastleTournamentRankListItem.COLOR_TOPX_RANK = 100;
    CastleTournamentRankListItem.BACKGROUND_FRAME_TOP3 = 1;
    CastleTournamentRankListItem.BACKGROUND_FRAME_TOPX = 2;
    CastleTournamentRankListItem.BACKGROUND_FRAME_BOBBY = 3;
    CastleTournamentRankListItem.BACKGROUND_FRAME_RELEVANT = 4;
  };
  return CastleTournamentRankListItem;
}(d.ACastleTournamentRankListItem);
exports.CastleTournamentRankListItem = p;
var h = require("./14.js");
var g = require("./94.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();