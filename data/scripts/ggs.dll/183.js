Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  return function ServerErrorVO(e, t, n = "") {
    this.error = e;
    this.params = t;
    this.commandId = n;
  };
}();
exports.ServerErrorVO = i;