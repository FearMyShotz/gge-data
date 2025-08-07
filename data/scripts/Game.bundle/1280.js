Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./15.js");
var s = require("./4.js");
var r = require("./73.js");
var l = require("./1281.js");
var c = function (e) {
  function EquipmentDragMovement(t, i, n = null) {
    var o = e.call(this, t, i) || this;
    o._sourceSlotMC = n;
    return o;
  }
  n.__extends(EquipmentDragMovement, e);
  EquipmentDragMovement.prototype.createEquipableMC = function (e) {
    this._draggedEquipableMC = r.EquipmentIconHelper.addEquipmentIcon(this._draggedEquipableVO, null, l.AEquipableDragMovement.MAX_WIDTH, l.AEquipableDragMovement.MAX_HEIGHT);
    this.createFavoriteIcon();
  };
  Object.defineProperty(EquipmentDragMovement.prototype, "draggedEquipmentVO", {
    get: function () {
      return this._draggedEquipableVO;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDragMovement.prototype.startDrag = function () {
    if (this._sourceSlotMC) {
      if (this._sourceSlotMC.slotVO) {
        this._sourceSlotMC.slotVO.equipmentVO = null;
      }
      o.MovieClipHelper.clearMovieClip(this._sourceSlotMC.mc_itemHolder);
    }
    this.equipmentData.startDrag(this.draggedEquipmentVO, this._sourceLocation);
    l.AEquipableDragMovement.layoutManager.nativeCursor.startDrag(this._draggedEquipableMC);
  };
  EquipmentDragMovement.prototype.stopDrag = function (e, t = null) {
    l.AEquipableDragMovement.layoutManager.nativeCursor.stopDrag(this._draggedEquipableMC);
    if (t) {
      r.EquipmentIconHelper.addEquipmentIcon(this._draggedEquipableVO, t.mc_itemHolder, l.AEquipableDragMovement.MAX_WIDTH + 3, l.AEquipableDragMovement.MAX_HEIGHT + 3, null, true, true, false, true, true);
    }
    this.equipmentData.stopDrag(this.draggedEquipmentVO, this._sourceLocation, e);
  };
  Object.defineProperty(EquipmentDragMovement.prototype, "equipmentData", {
    get: function () {
      return s.CastleModel.equipData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDragMovement.prototype, "controller", {
    get: function () {
      return a.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentDragMovement;
}(l.AEquipableDragMovement);
exports.EquipmentDragMovement = c;