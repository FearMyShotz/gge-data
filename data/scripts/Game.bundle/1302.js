Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./4.js");
var r = require("./1281.js");
var l = function (e) {
  function GemDragMovement(t, i, n = null) {
    var o = e.call(this, t, i) || this;
    o._sourceSlotMC = n;
    return o;
  }
  n.__extends(GemDragMovement, e);
  GemDragMovement.prototype.createEquipableMC = function (e) {
    this._draggedEquipableMC = c.CastleGemRenderer.renderAsset(this.draggedGemVO);
    this.createFavoriteIcon();
  };
  Object.defineProperty(GemDragMovement.prototype, "draggedGemVO", {
    get: function () {
      return this._draggedEquipableVO;
    },
    enumerable: true,
    configurable: true
  });
  GemDragMovement.prototype.startDrag = function () {
    if (this._sourceSlotMC) {
      this._sourceSlotMC.gemVO = null;
      a.MovieClipHelper.clearMovieClip(this._sourceSlotMC.mc_itemHolder);
    }
    if (u.instanceOfClass(this.draggedGemVO, "RelicGemVO")) {
      this.gemData.startRelicDrag(this.draggedGemVO, this._sourceLocation);
    } else {
      this.gemData.startDrag(this.draggedGemVO, this._sourceLocation);
    }
    r.AEquipableDragMovement.layoutManager.nativeCursor.startDrag(this._draggedEquipableMC);
  };
  GemDragMovement.prototype.stopDrag = function (e, t = null) {
    r.AEquipableDragMovement.layoutManager.nativeCursor.stopDrag(this._draggedEquipableMC);
    if (t) {
      t.mc_itemHolder.addChild(this._draggedEquipableMC);
      this._draggedEquipableMC.children.forEach(function (e) {
        if (u.instanceOfClass(e, "CastleGoodgameExternalClip")) {
          var t = e;
          if (!t.cacheCanvas && t.clipColor && t.clipColor.length && t.currentshownDisplayObject) {
            t.clipColor.forEach(function (e) {
              e.colorClip(t.currentshownDisplayObject);
            });
          }
        }
      });
      t.gemVO = this.draggedGemVO;
    }
    if (u.instanceOfClass(this.draggedGemVO, "RelicGemVO")) {
      this.gemData.stopRelicDrag(this.draggedGemVO, this._sourceLocation, e);
    } else {
      this.gemData.stopDrag(this.draggedGemVO, this._sourceLocation, e);
    }
  };
  Object.defineProperty(GemDragMovement.prototype, "gemData", {
    get: function () {
      return s.CastleModel.gemData;
    },
    enumerable: true,
    configurable: true
  });
  GemDragMovement.prototype.resizeGem = function (e = null) {
    e.clipSizeComponent = new o.ClipSizeComponent(r.AEquipableDragMovement.MAX_WIDTH, r.AEquipableDragMovement.MAX_HEIGHT);
  };
  return GemDragMovement;
}(r.AEquipableDragMovement);
exports.GemDragMovement = l;
var c = require("./248.js");
var u = require("./1.js");