Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./43.js");
var p = require("./93.js");
var h = function () {
  function FactionRankingItem(e) {
    this._points = 0;
    this._rank = 0;
    this._leagueTypeID = 0;
    this._disp = e;
  }
  FactionRankingItem.prototype.onMouseOver = function (e) {};
  FactionRankingItem.prototype.onMouseOut = function (e) {};
  FactionRankingItem.prototype.onClick = function (e) {
    FactionRankingItem.dialogHandler.registerDialogsWithTypeAndDefaultValues(m.CastlePlayerInfoDialog, new p.CastlePlayerInfoDialogProperties(this._ownerInfo.playerID), d.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  FactionRankingItem.prototype.update = function (e, t, i) {
    this._leagueTypeID = t;
    this._rank = c.int(e[0]);
    this._points = c.int(e[1]);
    this._ownerInfo = new g.WorldMapOwnerInfoVO();
    this._ownerInfo.fillFromParamObject(e[2]);
    if (i.toLowerCase() == this._ownerInfo.playerName.toLowerCase() || i == this._rank.toString()) {
      this.disp.mc_color.gotoAndStop(FactionRankingItem.HIGHLIGHT_FRAME);
    } else {
      this.disp.mc_color.gotoAndStop(this.factionFrame);
    }
    this.textFieldManager.registerTextField(this.disp.txt_rank, new a.LocalizedNumberVO(this._rank));
    this.textFieldManager.registerTextField(this.disp.txt_name, new l.TextVO(this._ownerInfo.playerName));
    this.textFieldManager.registerTextField(this.disp.txt_level, new r.NumberVO(this._ownerInfo.playerLevel));
    this.textFieldManager.registerTextField(this.disp.txt_points, new a.LocalizedNumberVO(this._points));
    var n = u.CastleModel.titleData.getTitleByTitleID(this._ownerInfo.factionTitleID);
    this.textFieldManager.registerTextField(this.disp.txt_title, new s.LocalizedTextVO(n ? n.textID : "-"));
  };
  Object.defineProperty(FactionRankingItem.prototype, "factionFrame", {
    get: function () {
      var e = this._leagueTypeID % 2 ? 1 : 3;
      return (this._rank != 1) + e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem.prototype, "layoutManager", {
    get: function () {
      return _.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionRankingItem, "dialogHandler", {
    get: function () {
      return C.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  FactionRankingItem.__initialize_static_members = function () {
    FactionRankingItem.HIGHLIGHT_FRAME = 5;
  };
  return FactionRankingItem;
}();
exports.FactionRankingItem = h;
var g = require("./316.js");
var C = require("./9.js");
var _ = require("./17.js");
var m = require("./94.js");
o.classImplementsInterfaces(h, "ICastleGenericRankingItem");
h.__initialize_static_members();