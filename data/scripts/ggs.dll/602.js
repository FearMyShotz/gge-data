Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Rectangle;
var a = function () {
  function Link(e, t = false) {
    this.isAnchorLink = t;
    this.rects = [];
    this.linkId = e;
  }
  Link.prototype.startLinkRect = function (e, t) {
    this.rects.push(new i(e, t, 0, 0));
  };
  Link.prototype.endCurrentLinkRect = function (e, t) {
    var n = this.rects[this.rects.length - 1];
    n.right = e;
    n.bottom = t;
  };
  Link.prototype.containsPoint = function (e) {
    for (var t = 0, n = this.rects; t < n.length; t++) {
      if (n[t].containsPoint(e)) {
        return true;
      }
    }
    return false;
  };
  return Link;
}();
exports.Link = a;