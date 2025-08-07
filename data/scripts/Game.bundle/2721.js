Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function ResearchTreeConnectionDot() {
    this._connectingLines = [];
    var e = new (n.getDefinitionByName("ResearchTree_ConnectorDot"))();
    this._disp = e;
    this._disp.visible = false;
  }
  ResearchTreeConnectionDot.prototype.addConnectingLine = function (e) {
    this._connectingLines.push(e);
    this.validateVisibility();
  };
  ResearchTreeConnectionDot.prototype.validateVisibility = function () {
    var e = this;
    var t = !this._connectingLines.every(function (t) {
      return t.orientation == e._connectingLines[0].orientation;
    });
    this._disp.visible = t;
  };
  Object.defineProperty(ResearchTreeConnectionDot.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ResearchTreeConnectionDot;
}();
exports.ResearchTreeConnectionDot = o;