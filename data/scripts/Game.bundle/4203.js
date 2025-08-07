Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1875.js");
var a = createjs.Point;
var s = function (e) {
  function WorldMapMovementRingMenu(t) {
    var i = e.call(this, t) || this;
    i.isPermanent = true;
    return i;
  }
  n.__extends(WorldMapMovementRingMenu, e);
  WorldMapMovementRingMenu.prototype.updateMenuPosition = function () {
    if (this.interactiveMapmovementTarget && this.interactiveMapmovementTarget.disp) {
      var e = this.interactiveMapmovementTarget.movementIconContainer.getBounds(null);
      var t = new a(this.interactiveMapmovementTarget.movementIconContainer.x + e.x + e.width / 2, this.interactiveMapmovementTarget.movementIconContainer.y + e.y + e.height / 2);
      var i = this.disp.stage.localToGlobal(t);
      this.disp.x = i.x * this.layoutManager.worldmapScreen.camera.viewPortZoom;
      this.disp.y = i.y * this.layoutManager.worldmapScreen.camera.viewPortZoom;
    } else {
      this.hide();
    }
  };
  WorldMapMovementRingMenu.prototype.initComponent = function () {
    e.prototype.initComponent.call(this);
    this.hideInfoTexts();
  };
  WorldMapMovementRingMenu.prototype.hideInfoTexts = function () {};
  Object.defineProperty(WorldMapMovementRingMenu.prototype, "interactiveMapmovementTarget", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  return WorldMapMovementRingMenu;
}(o.WorldMapRingMenu);
exports.WorldMapMovementRingMenu = s;