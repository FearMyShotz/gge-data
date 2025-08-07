Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./69.js");
var o = function () {
  function AEquipableDragMovement(e, t) {
    this._sourceLocation = t;
    this._draggedEquipableVO = e;
    this.createEquipableMC(e);
  }
  AEquipableDragMovement.prototype.createFavoriteIcon = function () {
    var e = new s.CastleGoodgameExternalClip("Equipment_Favorite", r.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_Favorite"), null, 0, false);
    if (e.isLoaded) {
      this.onFavoriteClipLoaded(e);
    } else {
      e.clipLoaded.add(this.bindFunction(this.onFavoriteClipLoaded));
    }
  };
  AEquipableDragMovement.prototype.onFavoriteClipLoaded = function (e) {
    if (e) {
      e.clipLoaded.remove(this.bindFunction(this.onFavoriteClipLoaded));
      this._draggedEquipableMC.favoriteDisp = e.children[0];
      this._draggedEquipableMC.addChild(e.asDisplayObject());
    }
    if (this._draggedEquipableMC.favoriteDisp) {
      this._draggedEquipableMC.favoriteDisp.mc_star_small.visible = this._draggedEquipableVO.isFavorite;
      this._draggedEquipableMC.favoriteDisp.mc_hover.visible = false;
      this._draggedEquipableMC.favoriteDisp.mc_star_active.visible = false;
      this._draggedEquipableMC.favoriteDisp.mc_star_inactive.visible = false;
    }
  };
  AEquipableDragMovement.prototype.createEquipableMC = function (e) {
    throw new n.AbstractMethodError();
  };
  AEquipableDragMovement.prototype.startDrag = function () {
    throw new n.AbstractMethodError();
  };
  AEquipableDragMovement.prototype.stopDrag = function (e, t = null) {
    throw new n.AbstractMethodError();
  };
  Object.defineProperty(AEquipableDragMovement.prototype, "sourceLocation", {
    get: function () {
      return this._sourceLocation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableDragMovement.prototype, "draggedEquipableVO", {
    get: function () {
      return this._draggedEquipableVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableDragMovement.prototype, "sourceSlotMC", {
    get: function () {
      return this._sourceSlotMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableDragMovement, "layoutManager", {
    get: function () {
      return a.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AEquipableDragMovement.MAX_WIDTH = 53;
  AEquipableDragMovement.MAX_HEIGHT = 53;
  return AEquipableDragMovement;
}();
exports.AEquipableDragMovement = o;
var a = require("./17.js");
var s = require("./24.js");
var r = require("./2.js");