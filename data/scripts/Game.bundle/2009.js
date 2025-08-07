Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  return function CollectableRenderOptionsIcon() {
    this.dimension = new n(42, 42);
    this.unitLevelDimension = new n(15, 15);
    this.unitLevelOffset = new n(15, 15);
    this.useSmallBoosterIcons = false;
    this.renderAsBroken = false;
    this.useFavIcon = false;
    this.useDropShadowIcon = false;
    this.selfLoadlevelIndicator = true;
    this.showMysteryBoxDrawCounter = true;
  };
}();
exports.CollectableRenderOptionsIcon = o;