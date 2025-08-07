Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./73.js");
var l = require("./248.js");
var c = require("./353.js");
var u = function (e) {
  function GemScrollItem(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(GemScrollItem, e);
  GemScrollItem.prototype.customFillItem = function () {
    this._disp.mc_equipmentHolder.addChild(l.CastleGemRenderer.renderAsset(this.gemVO, null, null, s.CastleModel.equipData.isEquipableNew(this.gemVO)));
    this.locked = this.gemScrollItemVO.locked;
    this.fillFavoriteInfo();
  };
  Object.defineProperty(GemScrollItem.prototype, "isVOFavorite", {
    get: function () {
      return !!this.gemScrollItemVO && !!this.gemScrollItemVO.gemVO && this.gemScrollItemVO.gemVO.isFavorite;
    },
    enumerable: true,
    configurable: true
  });
  GemScrollItem.prototype.setVOFav = function (e) {
    this.gemScrollItemVO.gemVO.isFavorite = e;
  };
  GemScrollItem.prototype.dispatchFavUpdate = function () {
    c.CastleEquipmentFavoritesMicroservice.Instance.gemItemUpdatedSignal.dispatch(this.gemVO);
  };
  Object.defineProperty(GemScrollItem.prototype, "gemScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  GemScrollItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
    }
    r.EquipmentIconHelper.showToolTip(this._disp, this.gemVO);
    this.isRollOut = false;
  };
  GemScrollItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
    }
    r.EquipmentIconHelper.hideEquipmentToolTip();
    this.isRollOut = true;
  };
  GemScrollItem.prototype.onTouchUp = function (t) {
    if (this._markAsFavoriteModeEnabled) {
      e.prototype.onTouchUp.call(this, t);
      if (!this.isRollOut) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
      }
    }
  };
  GemScrollItem.prototype.onTouchDown = function (t) {
    if (this._markAsFavoriteModeEnabled) {
      e.prototype.onTouchDown.call(this, t);
      this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = true;
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
    }
  };
  GemScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    o.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder);
  };
  Object.defineProperty(GemScrollItem.prototype, "gemVO", {
    get: function () {
      return this.scrollItemVO.gemVO;
    },
    enumerable: true,
    configurable: true
  });
  return GemScrollItem;
}(require("./1305.js").AEquipAbleScrollItem);
exports.GemScrollItem = u;
a.classImplementsInterfaces(u, "MovieClip");