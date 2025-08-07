Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./243.js");
var l = require("./4.js");
var c = require("./466.js");
var u = function (e) {
  function CastleEilandAllianceRankingComponent(t) {
    var i = this;
    i._ownRank = s.int(Number.MAX_VALUE);
    CONSTRUCTOR_HACK;
    (i = e.call(this, t, d.CastleEilandAllianceRankingItem, new c.CastleGenericHighscoreDialogProperties(o.HighscoreConst.ALLIANCE_AQUA_POINTS)) || this).textFieldManager.registerTextField(i.disp.txt_rankTitle, new a.LocalizedTextVO("rank"));
    i.textFieldManager.registerTextField(i.disp.txt_allianceTitle, new a.LocalizedTextVO("dialog_alliance_name_default"));
    i.textFieldManager.registerTextField(i.disp.txt_levelTitle, new a.LocalizedTextVO("level"));
    i.textFieldManager.registerTextField(i.disp.txt_membersTitle, new a.LocalizedTextVO("dialog_alliance_member")).autoFitToBounds = true;
    i.disp.icon_alliancePoints.toolTipText = "aquamarin_points_alliance_tooltip";
    i.disp.btn_search.toolTipText = "dialog_highscore_search_alliance";
    return i;
  }
  n.__extends(CastleEilandAllianceRankingComponent, e);
  CastleEilandAllianceRankingComponent.prototype.setSearchPlaceholderText = function () {
    this.searchPlaceholderText = "dialog_highscore_search_alliance";
  };
  CastleEilandAllianceRankingComponent.prototype.onGetHighscoreData = function (t) {
    if (this.searchName == "" && l.CastleModel.userData.isInAlliance) {
      this.searchName = l.CastleModel.userData.allianceName;
    }
    e.prototype.onGetHighscoreData.call(this, t);
    if (l.CastleModel.userData.isInAlliance) {
      if (this.rankingItems) {
        for (var i = 0; i < this.rankingItems.length; i++) {
          var n = this.rankingItems[i];
          if (n.isOwnAlliance() && n.disp.visible) {
            this._ownRank = s.int(this.rankingItems[i].rank);
          }
        }
      }
    } else {
      this._ownRank = s.int(Number.MAX_VALUE);
    }
  };
  CastleEilandAllianceRankingComponent.prototype.show = function (t = null) {
    e.prototype.show.call(this);
    this.controller.addEventListener(r.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onReset));
  };
  CastleEilandAllianceRankingComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(r.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onReset));
  };
  CastleEilandAllianceRankingComponent.prototype.onReset = function (e) {
    this._ownRank = s.int(Number.MAX_VALUE);
  };
  Object.defineProperty(CastleEilandAllianceRankingComponent.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandAllianceRankingComponent;
}(require("./805.js").CastleGenericRankingComponent);
exports.CastleEilandAllianceRankingComponent = u;
var d = require("./3696.js");