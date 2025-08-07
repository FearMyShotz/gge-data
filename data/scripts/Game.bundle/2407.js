Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./203.js");
var l = require("./8.js");
var c = function (e) {
  function CreatePersonalBookmarkSublayer(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CreatePersonalBookmarkSublayer, e);
  CreatePersonalBookmarkSublayer.prototype.show = function (t) {
    this._currentBookmarkVO = t[0];
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_friend, new s.LocalizedTextVO("Bookmarks_addBookmark_friendly_text"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_enemy, new s.LocalizedTextVO("Bookmarks_addBookmark_enemy_text"));
    this.subLayerDisp.btn_friend.toolTipText = "Bookmarks_addBookmark_friendly_tooltip";
    this.subLayerDisp.btn_enemy.toolTipText = "Bookmarks_addBookmark_enemy_tooltip";
    l.ButtonHelper.initTwoStateButton(this.subLayerDisp.btn_friend);
    l.ButtonHelper.initTwoStateButton(this.subLayerDisp.btn_enemy);
    this.switchMarkedAsFriend(this._currentBookmarkVO.type);
  };
  CreatePersonalBookmarkSublayer.prototype.switchMarkedAsFriend = function (e) {
    this._currentBookmarkVO.type = e;
    var t = this._currentBookmarkVO.type == r.EWorldmapBookmarkType.PLAYER_FRIEND;
    l.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_friend, t);
    l.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_enemy, !t);
  };
  CreatePersonalBookmarkSublayer.prototype.onClick = function (t) {
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_friend:
          this.switchMarkedAsFriend(r.EWorldmapBookmarkType.PLAYER_FRIEND);
          break;
        case this.subLayerDisp.btn_enemy:
          this.switchMarkedAsFriend(r.EWorldmapBookmarkType.PLAYER_ENEMY);
      }
    }
  };
  CreatePersonalBookmarkSublayer.prototype.showHelp = function () {
    u.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_addBookmark_copy"));
  };
  return CreatePersonalBookmarkSublayer;
}(require("./34.js").CastleDialogSubLayer);
exports.CreatePersonalBookmarkSublayer = c;
var u = require("./9.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");