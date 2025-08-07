Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./583.js");
var r = require("./24.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function AllianceCrestCreation_ALayout_ItemVE(t) {
    var i = this;
    i._selected = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).layoutVO = t;
    i.createDisp();
    return i;
  }
  n.__extends(AllianceCrestCreation_ALayout_ItemVE, e);
  AllianceCrestCreation_ALayout_ItemVE.prototype.createDisp = function () {
    var e = "CoA_Layout_" + this.layoutType;
    new r.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("AllianceCrestCreation1")).doWhenLoaded(this.bindFunction(this.onDispLoaded));
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.onDispLoaded = function (e) {
    this.disp = e.currentshownDisplayObject;
    this.disp.actLikeButton = true;
    this.disp.gotoAndStop(1);
    this.disp.mouseChildren = false;
    this.disp.addEventListener(l.MOUSE_OVER, this.bindFunction(this.mouseOver));
    this.disp.addEventListener(l.MOUSE_OUT, this.bindFunction(this.mouseOut));
    this.disp.addEventListener(l.MOUSE_DOWN, this.bindFunction(this.mouseDown));
    this.disp.addEventListener(l.MOUSE_UP, this.bindFunction(this.mouseUp));
    this.updateDisp();
    this.addLayoutDisplay();
    this.addChild(this.disp);
  };
  Object.defineProperty(AllianceCrestCreation_ALayout_ItemVE.prototype, "layoutType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreation_ALayout_ItemVE.prototype.addLayoutDisplay = function () {
    var e = "Collectable_AllianceLayout_" + this.layoutVO.allianceCoatLayoutID;
    var t = new r.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e));
    t.doWhenLoaded(this.bindFunction(this.onLayoutDisplayLoaded));
    this.disp.mc_icon.addChild(t);
    t.x = -1;
    t.y = -1;
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.onLayoutDisplayLoaded = function (e) {
    var t = this.disp.mc_selected ? this.disp.mc_selected : this.disp.mc_frame.mc_selected;
    o.MovieClipHelper.scaleDownToFit(e, t.width, t.height);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.setSelected = function (e) {
    this._selected = e;
    this.updateDisp();
  };
  Object.defineProperty(AllianceCrestCreation_ALayout_ItemVE.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestCreation_ALayout_ItemVE.prototype.updateDisp = function () {
    this.disp.mc_selected.visible = this._selected;
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseOver = function (e) {
    this.disp.gotoAndStop(2);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseOut = function (e) {
    this.disp.gotoAndStop(1);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseDown = function (e) {
    this.disp.gotoAndStop(3);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.mouseUp = function (e) {
    this.disp.gotoAndStop(2);
    this.onClickCallback(this.layoutVO);
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.destroy = function () {
    this.disp.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.mouseOver));
    this.disp.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.mouseOut));
    this.disp.removeEventListener(l.MOUSE_DOWN, this.bindFunction(this.mouseDown));
  };
  AllianceCrestCreation_ALayout_ItemVE.prototype.addOnClick = function (e) {
    this.onClickCallback = e;
  };
  Object.defineProperty(AllianceCrestCreation_ALayout_ItemVE.prototype, "layoutID", {
    get: function () {
      return this.layoutVO.allianceCoatLayoutID;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestCreation_ALayout_ItemVE;
}(s.CastleMovieClip);
exports.AllianceCrestCreation_ALayout_ItemVE = c;
a.classImplementsInterfaces(c, "MovieClip");