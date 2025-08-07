Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./2607.js");
var h = require("./4.js");
var g = require("./43.js");
var C = require("./8.js");
var _ = require("./93.js");
var m = function (e) {
  function FriendListScrollItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    var n = a.GoodgameTextFieldManager.getInstance();
    i.textPlayername = n.registerTextField(t.playername, new d.TextVO(""));
    i.textLevel = n.registerTextField(t.level, new u.NumberVO(0));
    i.textAlliance = n.registerTextField(t.alliance, new d.TextVO("-"));
    i.textDistance = n.registerTextField(t.distance, new u.NumberVO(0));
    i.textMight = n.registerTextField(t.might, new u.NumberVO(0));
    t.actLikeButton = true;
    t.playername.mouseEnabled = false;
    t.level.mouseEnabled = false;
    t.onlineLight.actLikeButton = true;
    t.alliance.mouseEnabled = false;
    t.distance.mouseEnabled = false;
    t.might.mouseEnabled = false;
    t.btn_delete.toolTipText = "dialog_friendsList_removeFriend";
    C.ButtonHelper.initBasicButton(t.btn_delete);
    return i;
  }
  n.__extends(FriendListScrollItem, e);
  FriendListScrollItem.prototype.customFillItem = function () {
    var e = this._scrollItemVO;
    this.textPlayername.textContentVO = new d.TextVO(e.playerName);
    this.textLevel.textContentVO = new u.NumberVO(e.level);
    this.textAlliance.textContentVO = new d.TextVO(e.getAllianceName());
    this.textDistance.textContentVO = new u.NumberVO(e.distance);
    this.textMight.textContentVO = new u.NumberVO(e.mightPoints);
    this.disp.gotoAndStop(e.highlight ? FriendListScrollItem.FRAME_HIGHLIGHT : FriendListScrollItem.FRAME_DEFAULT);
    this.disp.friends_icon.visible = e.viaReferAFriend;
    this.disp.friends_icon.toolTipText = e.isInvited ? "dialog_friendsList_referrer_tooltip" : "dialog_friendsList_referred_tooltip";
    this.disp.onlineLight.gotoAndStop(e.isOnline ? FriendListScrollItem.FRAME_ONLINE : FriendListScrollItem.FRAME_OFFLINE);
    this.disp.onlineLight.toolTipText = e.isOnline ? "dialog_alliance_loginActivity_state0" : "dialog_alliance_loginActivity_state5";
    this.disp.btn_delete.visible = false;
  };
  FriendListScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    var i = r.castAs(this._scrollItemVO, "FriendInfoVO");
    if (i) {
      if (t.target == this.disp.btn_delete) {
        f.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(c.Localize.text("alert_removeFriend_header"), c.Localize.text("alert_removeFriend_desc", [i.playerName]), this.deleteFriend(i.playerID)));
      } else {
        f.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(E.CastlePlayerInfoDialog, new _.CastlePlayerInfoDialogProperties(i.playerID), g.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  FriendListScrollItem.prototype.deleteFriend = function (e) {
    return function () {
      h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SDeleteFriendConnectionVO(e));
    };
  };
  FriendListScrollItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    this.disp.btn_delete.visible = true;
  };
  FriendListScrollItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this.disp.btn_delete.visible = false;
  };
  FriendListScrollItem.__initialize_static_members = function () {
    FriendListScrollItem.FRAME_ONLINE = 2;
    FriendListScrollItem.FRAME_OFFLINE = 1;
    FriendListScrollItem.FRAME_DEFAULT = 1;
    FriendListScrollItem.FRAME_HIGHLIGHT = 2;
  };
  return FriendListScrollItem;
}(s.ScrollItem);
exports.FriendListScrollItem = m;
var f = require("./9.js");
var O = require("./151.js");
var E = require("./94.js");
l.classImplementsInterfaces(m, "MovieClip");
m.__initialize_static_members();