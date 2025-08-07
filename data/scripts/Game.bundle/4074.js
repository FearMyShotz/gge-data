Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./4.js");
var u = require("./81.js");
var d = require("./8.js");
var p = require("./93.js");
var h = createjs.MouseEvent;
var g = function (e) {
  function PlayerIgnoreList_Item() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PlayerIgnoreList_Item, e);
  PlayerIgnoreList_Item.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    d.ButtonHelper.initButtons([this.itemMc.btn_delete], O.ClickFeedbackButtonHover);
    this.itemMc.mc_item.mc_down.visible = false;
    this.itemMc.mc_item.mc_hover.visible = false;
    this.itemMc.mc_item.actLikeButton = true;
    this.itemMc.mc_item.mouseChildren = false;
  };
  PlayerIgnoreList_Item.prototype.fill = function () {
    _.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_item.txt_value, new r.LocalizedNumberVO(this.data[0]));
    _.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_item.txt_name, new l.LocalizedTextVO(this.ignoredPlayerVO.playerName));
  };
  Object.defineProperty(PlayerIgnoreList_Item.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  PlayerIgnoreList_Item.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.itemMc.btn_delete:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.ModernYesNoDialog, new a.BasicStandardYesNoDialogProperties(s.Localize.text("dialog_inbox_unignore_player_tooltip"), s.Localize.text("dialog_inbox_unignore_player_confirm_copy"), this.bindFunction(this.unignorePlayer)));
        break;
      default:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastlePlayerInfoDialog, new p.CastlePlayerInfoDialogProperties(this.ignoredPlayerVO.playerID));
    }
  };
  PlayerIgnoreList_Item.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  PlayerIgnoreList_Item.prototype.removeEventListener = function () {
    this.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  PlayerIgnoreList_Item.prototype.onRollOver = function (e) {
    this.itemMc.mc_item.mc_hover.visible = true;
  };
  PlayerIgnoreList_Item.prototype.onRollOut = function (e) {
    this.itemMc.mc_item.mc_hover.visible = false;
    this.itemMc.mc_item.mc_down.visible = false;
  };
  PlayerIgnoreList_Item.prototype.onMouseDown = function (e) {
    this.itemMc.mc_item.mc_down.visible = true;
    this.itemMc.mc_item.mc_hover.visible = false;
  };
  PlayerIgnoreList_Item.prototype.onMouseUp = function (e) {
    this.itemMc.mc_item.mc_down.visible = false;
    this.itemMc.mc_item.mc_hover.visible = true;
  };
  PlayerIgnoreList_Item.prototype.unignorePlayer = function (e = null) {
    c.CastleModel.messageData.ignorePlayer(this.ignoredPlayerVO.playerID, false);
  };
  Object.defineProperty(PlayerIgnoreList_Item.prototype, "ignoredPlayerVO", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return PlayerIgnoreList_Item;
}(u.AInfiniteScrollListItem);
exports.PlayerIgnoreList_Item = g;
var C = require("./9.js");
var _ = require("./14.js");
var m = require("./283.js");
var f = require("./94.js");
var O = require("./20.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");