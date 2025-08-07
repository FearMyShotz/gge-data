Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function (e) {
  function CastleDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(CastleDetailView, e);
  CastleDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  CastleDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._castleLayer.x = -7;
    if (a.instanceOfClass(this._detailDrawAble, "CapitalMapobjectVO")) {
      this._layerKeep.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_KEEP_PALACE));
    } else if (a.instanceOfClass(this._detailDrawAble, "MetropolMapobjectVO")) {
      this._layerKeep.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_KEEP_EMPORIUM));
    } else {
      this._layerKeep.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_KEEP + this._detailDrawAble.keepLevel));
    }
    this._layerLeft.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_BACKWALL + "_Left_Level" + this._detailDrawAble.wallLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_TOWER + "_Left_Level" + this._detailDrawAble.towerLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_FRONTWALL + "_Left_Level" + this._detailDrawAble.wallLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_TOWER + "_Right_Level" + this._detailDrawAble.towerLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_FRONTWALL + "_Right_Level" + this._detailDrawAble.wallLevel));
    this._layerMiddle.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_GATE + this._detailDrawAble.gateLevel));
    this._layerRight.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_BACKWALL + "_Right_Level" + this._detailDrawAble.wallLevel));
    if (this._detailDrawAble.moatLevel > 0) {
      this._layerMoat.addChild(this.getMovieClipByName(CastleDetailView.CLASSNAME_MOAT + this._detailDrawAble.moatLevel));
    }
  };
  CastleDetailView.__initialize_static_members = function () {
    CastleDetailView.CLASSNAME_MOAT = "CastlePart_Moat_Level";
    CastleDetailView.CLASSNAME_KEEP = "CastlePart_Keep_Level";
    CastleDetailView.CLASSNAME_BACKWALL = "CastleParts_BackWall";
    CastleDetailView.CLASSNAME_FRONTWALL = "CastleParts_FrontWall";
    CastleDetailView.CLASSNAME_TOWER = "CastleParts_Tower";
    CastleDetailView.CLASSNAME_GATE = "CastlePart_Gate_Level";
    CastleDetailView.CLASSNAME_KEEP_PALACE = "CastlePart_Keep_Palace";
    CastleDetailView.CLASSNAME_KEEP_EMPORIUM = "CastlePart_Keep_Emporium";
  };
  return CastleDetailView;
}(require("./162.js").FightDetailView);
exports.CastleDetailView = s;
o.classImplementsInterfaces(s, "IFightDetailView");
s.__initialize_static_members();