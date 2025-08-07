Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = new (require("./2051.js"))();
exports.worker = n;
window.addEventListener("beforeunload", function (e) {
  n.terminate();
});