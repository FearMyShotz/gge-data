Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function TutorialStepVO() {
    this._id = 0;
  }
  TutorialStepVO.prototype.parseData = function (e) {
    this._attributes = new Map();
    this._id = parseInt(o.CastleXMLUtils.getValueOrDefault("tutorialStepID", e, "-1"));
    this._command = o.CastleXMLUtils.getValueOrDefault("action", e, "");
    for (var t = 0, i = Object.keys(e); t < i.length; t++) {
      var n = i[t];
      if (["id", "action"].indexOf(n) == -1) {
        var a = e[n];
        this._attributes.set(n, a);
      }
    }
    return this;
  };
  Object.defineProperty(TutorialStepVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialStepVO.prototype, "command", {
    get: function () {
      return this._command;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialStepVO.prototype, "attributes", {
    get: function () {
      return this._attributes;
    },
    enumerable: true,
    configurable: true
  });
  TutorialStepVO.prototype.getIntAttribute = function (e, t) {
    if (this._attributes.has(e)) {
      return parseInt(this._attributes.get(e));
    } else {
      return t;
    }
  };
  return TutorialStepVO;
}();
exports.TutorialStepVO = n;
var o = require("./22.js");