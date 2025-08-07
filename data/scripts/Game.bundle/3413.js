Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./222.js");
var p = require("./43.js");
var h = require("./93.js");
var g = require("./8.js");
var C = createjs.Point;
var _ = function () {
  function CastleSingleplayerRankingItem(e) {
    this._rank = 0;
    this._amount = 0;
    this._disp = e;
    g.ButtonHelper.initBasicButton(this._disp, 1.02);
  }
  CastleSingleplayerRankingItem.prototype.onMouseOver = function (e) {};
  CastleSingleplayerRankingItem.prototype.onMouseOut = function (e) {};
  CastleSingleplayerRankingItem.prototype.onClick = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      f.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(E.CastlePlayerInfoDialog, new h.CastlePlayerInfoDialogProperties(this._ownerInfo.playerID), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleSingleplayerRankingItem.prototype.update = function (e, t, i) {
    this._ownerInfo = new m.WorldMapOwnerInfoVO();
    if (e.length > 2) {
      this._ownerInfo.fillFromParamObject(e[2]);
      this._rank = c.int(e[0]);
      this._amount = c.int(e[1]);
    } else {
      this._ownerInfo.fillFromParamObject(e[1]);
      this._rank = c.int(e[0]);
      this._amount = 0;
    }
    var n = i != "" ? i : u.CastleModel.userData.userName;
    var a = this._rank <= 1;
    var d = this._rank == 2;
    var p = this.isSearchedForPlayer(n);
    this.disp.mc_first.visible = a && !p;
    this.disp.mc_second.visible = d && !p;
    this.disp.mc_own.visible = p || a || d;
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_rank, new s.LocalizedNumberVO(this._rank), new o.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_name, new l.TextVO(this._ownerInfo.playerName), new o.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_alliance, new l.TextVO(this._ownerInfo.isInAlliance ? this._ownerInfo.allianceName : " - "), new o.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_level, new r.NumberVO(this._ownerInfo.playerLevel), new o.InternalGGSTextFieldConfigVO(true));
    CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_distance, new s.LocalizedNumberVO(this.getDistanceToOwnMainCastle()), new o.InternalGGSTextFieldConfigVO(true));
    if (this.disp.txt_amount) {
      CastleSingleplayerRankingItem.textFieldManager.registerTextField(this.disp.txt_amount, new s.LocalizedNumberVO(this._amount), new o.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleSingleplayerRankingItem.prototype.getDistanceToOwnMainCastle = function () {
    var e = u.CastleModel.userData.castleList.getHomeCastle();
    return Math.round(d.MapHelper.getShortestDistance(this._ownerInfo.getMainCastlePositionByKingdomID(0), new C(e.absAreaPosX, e.absAreaPosY)));
  };
  CastleSingleplayerRankingItem.prototype.isSearchedForPlayer = function (e) {
    var t = parseInt(e);
    if (isNaN(t)) {
      return this._ownerInfo.playerName == e;
    } else {
      return t == this._rank;
    }
  };
  Object.defineProperty(CastleSingleplayerRankingItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSingleplayerRankingItem.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSingleplayerRankingItem, "layoutManager", {
    get: function () {
      return O.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSingleplayerRankingItem, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSingleplayerRankingItem;
}();
exports.CastleSingleplayerRankingItem = _;
var m = require("./316.js");
var f = require("./9.js");
var O = require("./17.js");
var E = require("./94.js");
a.classImplementsInterfaces(_, "ICastleGenericRankingItem");