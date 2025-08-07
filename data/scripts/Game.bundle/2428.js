Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./8.js");
var r = require("./522.js");
var l = function (e) {
  function CastleAllianceBookmarkScrollItem(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CastleAllianceBookmarkScrollItem, e);
  CastleAllianceBookmarkScrollItem.prototype.customFillItem = function () {
    this._currentRenderer = CastleAllianceBookmarkScrollItem.RENDER.get(this.bookmarkVO.type.typeIndex);
    this._currentRenderer.render(this.disp, this.bookmarkVO);
    if (this._jumpToButton) {
      this._jumpToButton.destroy();
    }
    if (this._deleteBookmarkButton) {
      this._deleteBookmarkButton.destroy();
    }
    var e = this._currentRenderer.getSublayer(this.disp);
    this._jumpToButton = new d.ButtonJumpToAllianceBookmark(e.btn_jumpTo);
    this._deleteBookmarkButton = new u.ButtonDeleteAllianceBookmarkComponent(e.btn_delete);
    this._jumpToButton.init(this.bookmarkVO.worldmapObjectVO);
    this._deleteBookmarkButton.init(this.bookmarkVO);
  };
  CastleAllianceBookmarkScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._jumpToButton) {
      this._jumpToButton.destroy();
    }
    if (this._deleteBookmarkButton) {
      this._deleteBookmarkButton.destroy();
    }
  };
  CastleAllianceBookmarkScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      var i = this._currentRenderer.getSublayer(this.disp);
      switch (t.target) {
        case i.btn_jumpTo:
          this._jumpToButton.onClick();
          break;
        case i.btn_delete:
          this._deleteBookmarkButton.onClick();
      }
      if (i.mc_participants && t.target == i.mc_participants) {
        c.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleBookmarkShowAttackersDialog, new r.CastleBookmarkPasserProperties(this.bookmarkVO));
      }
    }
  };
  Object.defineProperty(CastleAllianceBookmarkScrollItem.prototype, "bookmarkVO", {
    get: function () {
      return this.scrollItemVO.bookmark;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBookmarkScrollItem.__initialize_static_members = function () {
    var e;
    (e = new Map()).set(C.AllianceBookmarkFreeAttackRenderer.ID, new C.AllianceBookmarkFreeAttackRenderer());
    e.set(g.AllianceBookmarkDefendRenderer.ID, new g.AllianceBookmarkDefendRenderer());
    e.set(h.AllianceBookmarkAttackOrderRenderer.ID, new h.AllianceBookmarkAttackOrderRenderer());
    CastleAllianceBookmarkScrollItem.RENDER = e;
  };
  return CastleAllianceBookmarkScrollItem;
}(o.ScrollItem);
exports.CastleAllianceBookmarkScrollItem = l;
var c = require("./9.js");
var u = require("./2429.js");
var d = require("./1361.js");
var p = require("./1362.js");
var h = require("./2431.js");
var g = require("./2432.js");
var C = require("./2433.js");
a.classImplementsInterfaces(l, "MovieClip");
l.__initialize_static_members();