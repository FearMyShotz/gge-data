Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./104.js");
var l = require("./15.js");
var c = function (e) {
  function CastleComponent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleComponent, e);
  CastleComponent.prototype.destroy = function () {
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(CastleComponent, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleComponent, "dialogHandler", {
    get: function () {
      return u.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleComponent, "layoutManager", {
    get: function () {
      return d.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleComponent, "controller", {
    get: function () {
      return l.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleComponent, "castleEnv", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleComponent;
}(r.CollectableRendererList);
exports.CastleComponent = c;
var u = require("./9.js");
var d = require("./17.js");
s.classImplementsInterfaces(c, "ICollectableRendererList");