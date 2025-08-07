Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayObjectBounds = function getDisplayObjectBounds(e) {
  return (e instanceof createjs.Shape ? e.graphics.bounds : e.getBounds()) || new createjs.Rectangle(0, 0, 0, 0);
};