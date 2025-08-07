Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOf_IDynamicSizeSlider = function instanceOf_IDynamicSizeSlider(e) {
  return e.setSize !== undefined && e.minSize !== undefined;
};