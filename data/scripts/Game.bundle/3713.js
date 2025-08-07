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
var d = require("./43.js");
var p = require("./40.js");
var h = require("./8.js");
var g = require("./149.js");
var C = require("./136.js");
var _ = function (e) {
  function CastleGenericAllianceHighscoreDialogItemRenderer(t, i = null) {
    var n = e.call(this, t) || this;
    n._itemVO = i;
    return n;
  }
  n.__extends(CastleGenericAllianceHighscoreDialogItemRenderer, e);
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.itemVO && h.ButtonHelper.isButtonEnabled(t.target)) {
      t.target;
      if (u.CastleModel.userData.isInAlliance && u.CastleModel.userData.allianceID == this.itemVO.allianceVO.allianceId) {
        m.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleAllianceDialog, new C.CastleAllianceDialogProperties());
      } else {
        m.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(E.CastleAllianceInfoDialog, new g.CastleAllianceInfoDialogProperties(this.itemVO.allianceVO.allianceId), d.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.updateItem = function (e = "") {
    if (!this._itemVO) {
      this.disp.visible = false;
      this.onHide();
      return;
    }
    this.disp.visible = true;
    this.onShow();
    var t = this.itemVO.rank <= 1;
    var i = this.itemVO.rank == 2;
    var n = u.CastleModel.userData.isInAlliance && this.itemVO.allianceVO.allianceName.toLowerCase() == u.CastleModel.allianceData.myAllianceVO.allianceName.toLowerCase();
    this.disp.mc_first.visible = t && !n;
    this.disp.mc_second.visible = i && !n;
    this.disp.mc_own.visible = n;
    if (this.disp.mc_search) {
      this.disp.mc_search.visible = !!e && (this.itemVO.allianceVO.allianceName.toLowerCase() == e.toLowerCase() || parseInt(e) == this.itemVO.rank);
    }
    O.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new r.LocalizedNumberVO(this.itemVO.rank), new a.InternalGGSTextFieldConfigVO(true));
    O.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new c.TextVO(this.itemVO.allianceVO.allianceName), new a.InternalGGSTextFieldConfigVO(true));
    O.CastleComponent.textFieldManager.registerTextField(this.disp.txt_fameLevel, new l.NumberVO(u.CastleModel.allianceFameData.getLevelFromFamePoints(this.itemVO.allianceVO.allianceCurrentFame)), new a.InternalGGSTextFieldConfigVO(true));
    O.CastleComponent.textFieldManager.registerTextField(this.disp.txt_membercount, new r.LocalizedNumberVO(this.itemVO.allianceVO.memberAmount), new a.InternalGGSTextFieldConfigVO(true));
    O.CastleComponent.textFieldManager.registerTextField(this.disp.txt_amount, new r.LocalizedNumberVO(this.itemVO.amount), new a.InternalGGSTextFieldConfigVO(true));
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onRollOver = function (e) {
    this.disp.scaleX = this.disp.scaleY = 1.02;
    f.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onRollOut = function (e) {
    this.disp.scaleX = e.target.scaleY = 1;
    f.CastleLayoutManager.getInstance().nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onMouseOver = function (t) {
    O.CastleComponent.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    e.prototype.onMouseOver.call(this, t);
  };
  CastleGenericAllianceHighscoreDialogItemRenderer.prototype.onMouseOut = function (t) {
    O.CastleComponent.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    e.prototype.onMouseOut.call(this, t);
  };
  Object.defineProperty(CastleGenericAllianceHighscoreDialogItemRenderer.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    set: function (e) {
      this._itemVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericAllianceHighscoreDialogItemRenderer.prototype, "isOwnAlliance", {
    get: function () {
      return !!this.disp && !!this.disp.mc_own && this.disp.mc_own.visible;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericAllianceHighscoreDialogItemRenderer;
}(p.CastleItemRenderer);
exports.CastleGenericAllianceHighscoreDialogItemRenderer = _;
var m = require("./9.js");
var f = require("./17.js");
var O = require("./14.js");
var E = require("./132.js");
var y = require("./125.js");
s.classImplementsInterfaces(_, "ICollectableRendererList");