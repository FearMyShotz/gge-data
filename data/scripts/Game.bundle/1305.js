Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./68.js");
var c = require("./8.js");
var u = require("./41.js");
var d = require("./24.js");
var p = function (e) {
  function AEquipAbleScrollItem(t) {
    var i = this;
    i._locked = false;
    i._markAsFavoriteModeEnabled = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(AEquipAbleScrollItem, e);
  AEquipAbleScrollItem.prototype.fillFavoriteInfo = function () {
    var e = new d.CastleGoodgameExternalClip("Equipment_Favorite", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_Favorite"), null, 0, false);
    if (e.isLoaded) {
      this.onFavoriteClipLoaded(e);
    } else {
      e.clipLoaded.add(this.bindFunction(this.onFavoriteClipLoaded));
    }
  };
  AEquipAbleScrollItem.prototype.onFavoriteClipLoaded = function (e) {
    if (e) {
      e.clipLoaded.remove(this.bindFunction(this.onFavoriteClipLoaded));
      if (this._disp.mc_equipmentHolder.favoriteDisp) {
        a.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder.favoriteDisp);
      }
      this._disp.mc_equipmentHolder.favoriteDisp = e.children[0];
      this._disp.mc_equipmentHolder.addChild(this._disp.mc_equipmentHolder.favoriteDisp);
      if (this._disp.mc_equipmentHolder.favoriteDisp) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_active.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_inactive.visible = false;
        this.toggleOpenMarkAsFavorite(this._markAsFavoriteModeEnabled);
      }
    }
  };
  Object.defineProperty(AEquipAbleScrollItem.prototype, "isVOFavorite", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AEquipAbleScrollItem.prototype.toggleOpenMarkAsFavorite = function (e) {
    this._markAsFavoriteModeEnabled = e;
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      if (e) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = false;
      } else {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = this.isVOFavorite;
        if (this.isVOFavorite && this._disp.mc_equipmentHolder.getChildByName("eq") && this._disp.mc_equipmentHolder.getChildByName("eq").getChildByName("newClip")) {
          this._disp.mc_equipmentHolder.getChildByName("eq").getChildByName("newClip").visible = false;
        }
      }
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_active.visible = e && this.isVOFavorite;
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_inactive.visible = e && !this.isVOFavorite;
      u.CastleMovieClipHelper.uncacheSafe(this._disp.mc_equipmentHolder);
    }
  };
  AEquipAbleScrollItem.prototype.showSmallFavoriteIcon = function () {
    if (!this._markAsFavoriteModeEnabled && this._disp.mc_equipmentHolder.favoriteDisp && this.isVOFavorite) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_small.visible = this.isVOFavorite;
    }
  };
  AEquipAbleScrollItem.prototype.markAsFavorite = function () {
    this.setVOFav(!this.isVOFavorite);
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_active.visible = this.isVOFavorite;
      this._disp.mc_equipmentHolder.favoriteDisp.mc_star_inactive.visible = !this.isVOFavorite;
    }
    this.dispatchFavUpdate();
  };
  AEquipAbleScrollItem.prototype.setVOFav = function (e) {};
  AEquipAbleScrollItem.prototype.dispatchFavUpdate = function () {};
  AEquipAbleScrollItem.prototype.onEquipLoaded = function (e = null) {
    u.CastleMovieClipHelper.createHitArea(this._disp.mc_equipmentHolder);
  };
  AEquipAbleScrollItem.prototype.onMouseClick = function (t) {
    if (this._markAsFavoriteModeEnabled) {
      this.markAsFavorite();
    }
    e.prototype.onMouseClick.call(this, t);
  };
  Object.defineProperty(AEquipAbleScrollItem.prototype, "locked", {
    get: function () {
      return this._locked;
    },
    set: function (e) {
      if (e) {
        var t = new o.ColorMatrix();
        t.desaturate();
        this._disp.mc_equipmentHolder.useFilters([t.filter]);
        this._disp.mc_equipmentHolder.alpha = 0.5;
      } else {
        this._disp.mc_equipmentHolder.useFilters(l.BitmapFilterHelper.NO_FILTER);
        this._disp.mc_equipmentHolder.alpha = 1;
      }
      c.ButtonHelper.enableButton(this._disp, !e);
      this._locked = e;
    },
    enumerable: true,
    configurable: true
  });
  return AEquipAbleScrollItem;
}(s.ScrollItem);
exports.AEquipAbleScrollItem = p;
r.classImplementsInterfaces(p, "MovieClip");