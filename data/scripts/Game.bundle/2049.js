Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = new (require("./2050.js"))();
exports.worker = n;
window.addEventListener("beforeunload", function (e) {
  n.terminate();
});