Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  return function TutorialListenerObject(e, t, i) {
    this.type = t;
    this.target = e;
    this.listenerFunc = i;
  };
}();
exports.TutorialListenerObject = n;