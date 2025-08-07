Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = function () {
  function ABGTowerConnectionsComponent(e, t, i, o) {
    n.MovieClipHelper.clearMovieClip(e);
    this._disp = e;
    this._connectionComponents = [];
    for (var s = 0; s < ABGTowerConnectionsComponent.CONNECTION_AMOUNT; s++) {
      var r = new a.ABGTowerConnectionStateComponent(t, i, true);
      r.disp.x = s * (i + o);
      this._connectionComponents.push(r);
      this._disp.addChild(r.disp);
    }
  }
  ABGTowerConnectionsComponent.prototype.setConnections = function (e) {
    for (var t = 0; t < this._connectionComponents.length; t++) {
      var i = this._connectionComponents[t];
      var n = e.length > t ? e[t] : null;
      i.setConnection(n);
    }
  };
  ABGTowerConnectionsComponent.CONNECTION_AMOUNT = 5;
  return ABGTowerConnectionsComponent;
}();
exports.ABGTowerConnectionsComponent = o;
var a = require("./424.js");