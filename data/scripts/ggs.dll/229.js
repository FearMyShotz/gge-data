Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToURL = function navigateToURL(e, t = "_blank") {
  if (typeof e != "string" && "url" in e) {
    e = e.url;
  }
  window.open(e, t);
};