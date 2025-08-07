Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./4.js");
var d = require("./223.js");
var p = require("./43.js");
var h = require("./40.js");
var g = require("./8.js");
var C = require("./93.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleGenericHighscoreDialogItemRenderer(t, i = null) {
    var n = e.call(this, t) || this;
    n._itemVO = i;
    return n;
  }
  n.__extends(CastleGenericHighscoreDialogItemRenderer, e);
  CastleGenericHighscoreDialogItemRenderer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.itemVO && g.ButtonHelper.isButtonEnabled(t.target)) {
      t.target;
      f.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(y.CastlePlayerInfoDialog, new C.CastlePlayerInfoDialogProperties(this.itemVO.ownerInfo.playerID), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.updateItem = function (e = "") {
    if (!this._itemVO) {
      this.disp.visible = false;
      this.onHide();
      return;
    }
    this.disp.visible = true;
    this.onShow();
    var t = u.CastleModel.userData.userName;
    var i = e != "" ? e : null;
    var n = this.itemVO.rank <= 1;
    var o = this.itemVO.rank == 2;
    var s = this.itemVO.ownerInfo.playerName.toLowerCase() == t.toLowerCase();
    this.disp.mc_first.visible = n && !s;
    this.disp.mc_second.visible = o && !s;
    this.disp.mc_own.visible = s || n || o;
    if (this.disp.mc_search) {
      this.disp.mc_search.visible = !!i && (this.itemVO.ownerInfo.playerName.toLowerCase() == i.toLowerCase() || parseInt(i) == this.itemVO.rank);
    }
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new r.LocalizedNumberVO(this.itemVO.rank), new a.InternalGGSTextFieldConfigVO(true));
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new c.TextVO(this.itemVO.ownerInfo.playerName), new a.InternalGGSTextFieldConfigVO(true));
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_alliance, new c.TextVO(this.itemVO.ownerInfo.isInAlliance ? this.itemVO.ownerInfo.allianceName : " - "), new a.InternalGGSTextFieldConfigVO(true));
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new l.NumberVO(this.itemVO.ownerInfo.playerLevel), new a.InternalGGSTextFieldConfigVO(true));
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new r.LocalizedNumberVO(this.getDistanceToOwnMainCastle()), new a.InternalGGSTextFieldConfigVO(true));
    if (this.disp.txt_amount) {
      E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new r.LocalizedNumberVO(this.itemVO.amount), new a.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.getDistanceToOwnMainCastle = function () {
    var e = u.CastleModel.userData.castleList.getHomeCastle();
    return Math.round(d.MapHelper.getShortestDistance(this.itemVO.ownerInfo.getMainCastlePositionByKingdomID(0), new _(e.absAreaPosX, e.absAreaPosY)));
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.onRollOver = function (e) {
    this.disp.scaleX = this.disp.scaleY = 1.02;
    O.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.onRollOut = function (e) {
    this.disp.scaleX = e.target.scaleY = 1;
    O.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleGenericHighscoreDialogItemRenderer.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    set: function (e) {
      this._itemVO = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericHighscoreDialogItemRenderer.prototype.isSelected = function () {
    return !!this.disp && !!this.disp.mc_own && this.disp.mc_own.visible;
  };
  CastleGenericHighscoreDialogItemRenderer.prototype.select = function () {
    this.disp.mc_own.visible = true;
  };
  return CastleGenericHighscoreDialogItemRenderer;
}(h.CastleItemRenderer);
exports.CastleGenericHighscoreDialogItemRenderer = m;
var f = require("./9.js");
var O = require("./17.js");
var E = require("./14.js");
var y = require("./94.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");