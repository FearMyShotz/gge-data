Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1880.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./1704.js");
var u = require("./355.js");
var d = require("./272.js");
var p = createjs.MouseEvent;
var h = createjs.Point;
var g = function (e) {
  function RewardHubPopoverVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RewardHubPopoverVE, e);
  RewardHubPopoverVE.prototype.fillContent = function (t) {
    e.prototype.fillContent.call(this, t);
    this._disp = t;
    this._disp.mc_hover.visible = false;
    this._disp.mc_down.visible = false;
    this.addEventListeners();
    var i = l.CastleModel.rewardHubData.getRewardHubVOById(this.popoverVO.data.id);
    var n = c.RewardHubTextsFactory.createRewardHubItemTextVO(i);
    var o = u.EventIconHelper.createEventIconByEventID(i.mainEventID, new h(26, 30));
    this._itxt_title = s.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_name, new r.LocalizedTextVO(""));
    this._itxt_copy = s.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.itxt_copy, new r.LocalizedTextVO(""));
    s.MovieClipHelper.clearMovieClip(this._disp.icon);
    this._disp.icon.addChild(o);
    this._itxt_title.textContentVO.textId = n.txtTitlte;
    this._itxt_copy.textContentVO.textId = n.txtSubtitle;
  };
  RewardHubPopoverVE.prototype.addEventListeners = function () {
    this._disp.addEventListener(p.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(p.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.addEventListener(p.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(p.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(p.CLICK, this.bindFunction(this.onClick));
  };
  RewardHubPopoverVE.prototype.removeEventListeners = function () {
    this._disp.removeEventListener(p.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(p.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.removeEventListener(p.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(p.ROLL_OUT, this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(p.CLICK, this.bindFunction(this.onClick));
  };
  RewardHubPopoverVE.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.removeEventListeners();
  };
  RewardHubPopoverVE.prototype.getPopoverConfig = function () {
    var e = new d.SimplePopoverConfig("RewardHubNotification");
    e.useClickArea = false;
    e.waitDuration = 3;
    e.fadeOutDuration = 0.5;
    return e;
  };
  RewardHubPopoverVE.prototype.onMouseOver = function (e) {
    this._disp.mc_hover.visible = true;
  };
  RewardHubPopoverVE.prototype.onMouseOut = function (e) {
    this._disp.mc_hover.visible = false;
    this._disp.mc_down.visible = false;
  };
  RewardHubPopoverVE.prototype.onRollOver = function (e) {
    this._disp.mc_hover.visible = true;
  };
  RewardHubPopoverVE.prototype.onRollOut = function (e) {
    this._disp.mc_hover.visible = false;
    this._disp.mc_down.visible = false;
  };
  RewardHubPopoverVE.prototype.onClick = function (e) {
    this._disp.mc_down.visible = true;
  };
  return RewardHubPopoverVE;
}(a.APopoverVE);
exports.RewardHubPopoverVE = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");