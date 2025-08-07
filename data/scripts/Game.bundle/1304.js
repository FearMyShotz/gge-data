Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./4.js");
var l = require("./198.js");
var c = require("./8.js");
var u = require("./73.js");
var d = require("./41.js");
var p = require("./353.js");
var h = function (e) {
  function EquipmentScrollItem(t) {
    var i;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    t.actLikeButton = true;
    return i;
  }
  n.__extends(EquipmentScrollItem, e);
  EquipmentScrollItem.prototype.customFillItem = function () {
    var e = this.equipmentScrollItemVO.locked;
    u.EquipmentIconHelper.addEquipmentIcon(this.equipmentScrollItemVO.equipmentVO, this._disp.mc_equipmentHolder, EquipmentScrollItem.MAX_WIDTH, EquipmentScrollItem.MAX_HEIGHT, this.bindFunction(this.onEquipLoaded), true, false, r.CastleModel.equipData.isEquipableNew(this.equipmentScrollItemVO.equipmentVO), !e, this.equipmentScrollItemVO.favIconByEQRenderer);
    this.setRarityColor();
    this.locked = e;
    this.disp.actLikeButton = !e;
    this.fillFavoriteInfo();
    if (this.disp.cacheCanvas) {
      this.disp.updateCache();
    }
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "isVOFavorite", {
    get: function () {
      return !!this.equipmentScrollItemVO && !!this.equipmentScrollItemVO.equipmentVO && this.equipmentScrollItemVO.equipmentVO.isFavorite;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.setVOFav = function (e) {
    this.equipmentScrollItemVO.equipmentVO.isFavorite = e;
  };
  EquipmentScrollItem.prototype.dispatchFavUpdate = function () {
    p.CastleEquipmentFavoritesMicroservice.Instance.equipmentItemUpdatedSignal.dispatch(this.equipmentScrollItemVO.equipmentVO);
  };
  EquipmentScrollItem.prototype.onEquipLoaded = function (e = null) {
    d.CastleMovieClipHelper.createHitArea(this._disp.mc_equipmentHolder);
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "equipmentScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.onRollOver = function (t) {
    var i = this._disp.mc_equipmentHolder.children[0];
    u.EquipmentIconHelper.updateEquipmentIconCache(i, EquipmentScrollItem.MAX_WIDTH * EquipmentScrollItem.MOUSE_OVER_SCALE, EquipmentScrollItem.MAX_HEIGHT * EquipmentScrollItem.MOUSE_OVER_SCALE, EquipmentScrollItem.MOUSE_OVER_SCALE);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
    }
    var n = this.equipmentScrollItemVO.getCurrentLordCallback ? this.equipmentScrollItemVO.getCurrentLordCallback() : null;
    u.EquipmentIconHelper.showToolTip(this._disp, this.equipmentScrollItemVO.equipmentVO, n);
    this.isRollOut = false;
    e.prototype.onRollOver.call(this, t);
  };
  EquipmentScrollItem.prototype.onRollOut = function (t) {
    var i = this._disp.mc_equipmentHolder.children[0];
    u.EquipmentIconHelper.updateEquipmentIconCache(i, EquipmentScrollItem.MAX_WIDTH, EquipmentScrollItem.MAX_HEIGHT, 1);
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
    }
    u.EquipmentIconHelper.hideEquipmentToolTip();
    this.isRollOut = true;
    e.prototype.onRollOut.call(this, t);
  };
  EquipmentScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    var i = s.currentBrowserInfo.getTouchEvent(t);
    if (i && i.isLongPressed && !this._markAsFavoriteModeEnabled) {
      this.onRollOver(t);
    }
  };
  EquipmentScrollItem.prototype.onTouchUp = function (t) {
    if (this._markAsFavoriteModeEnabled) {
      e.prototype.onTouchUp.call(this, t);
      if (!this.isRollOut) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = false;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = true;
      }
    }
  };
  EquipmentScrollItem.prototype.onTouchDown = function (t) {
    if (this._markAsFavoriteModeEnabled) {
      e.prototype.onTouchDown.call(this, t);
      if (this._disp.mc_equipmentHolder.favoriteDisp) {
        this._disp.mc_equipmentHolder.favoriteDisp.mc_down.visible = true;
        this._disp.mc_equipmentHolder.favoriteDisp.mc_hover.visible = false;
      }
    }
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.setRarityColor = function () {
    switch (this.equipmentScrollItemVO.equipmentVO.rarity) {
      case l.BasicEquipmentVO.RARITY_COMMON:
        this._disp.gotoAndStop(1);
        break;
      case l.BasicEquipmentVO.RARITY_RARE:
        this._disp.gotoAndStop(2);
        break;
      case l.BasicEquipmentVO.RARITY_EPIC:
        this._disp.gotoAndStop(3);
        break;
      case l.BasicEquipmentVO.RARITY_LEGENDARY:
        this._disp.gotoAndStop(4);
        break;
      case l.BasicEquipmentVO.RARITY_UNIQUE:
        this._disp.gotoAndStop(5);
    }
  };
  Object.defineProperty(EquipmentScrollItem.prototype, "lordAway", {
    set: function (e) {
      this.locked = false;
      if (e) {
        if (this._disp.mc_lock) {
          this._disp.mc_lock.visible = true;
        }
        c.ButtonHelper.setMouseOverScale(this._disp, 1);
        this._disp.toolTipText = "dialog_equipment_lordNotAvailable";
      } else {
        if (this._disp.mc_lock) {
          this._disp.mc_lock.visible = false;
        }
        c.ButtonHelper.setMouseOverScale(this._disp, EquipmentScrollItem.MOUSE_OVER_SCALE);
        this._disp.toolTipText = null;
      }
      this._locked = e;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    a.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder);
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      a.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder.favoriteDisp);
      this._disp.mc_equipmentHolder.favoriteDisp = null;
    }
  };
  EquipmentScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._disp.mc_equipmentHolder.favoriteDisp) {
      a.MovieClipHelper.clearMovieClip(this._disp.mc_equipmentHolder.favoriteDisp);
      this._disp.mc_equipmentHolder.favoriteDisp = null;
    }
  };
  EquipmentScrollItem.MAX_WIDTH = 55;
  EquipmentScrollItem.MAX_HEIGHT = 55;
  EquipmentScrollItem.MOUSE_OVER_SCALE = 1.05;
  return EquipmentScrollItem;
}(require("./1305.js").AEquipAbleScrollItem);
exports.EquipmentScrollItem = h;
s.classImplementsInterfaces(h, "MovieClip");