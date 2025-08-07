Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./104.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./8.js");
var p = createjs.MouseEvent;
var h = function (e) {
  function CastleDialogSubLayer(t) {
    var i = e.call(this) || this;
    i._isSublayerActive = false;
    i.buttonArray = [];
    i._disp = t;
    i._disp.visible = false;
    return i;
  }
  n.__extends(CastleDialogSubLayer, e);
  CastleDialogSubLayer.prototype.show = function (e) {
    this._params = e;
    this._disp.addEventListener(p.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(p.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.addEventListener(p.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.addEventListener(p.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(p.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._isSublayerActive = this._disp.visible = true;
  };
  CastleDialogSubLayer.prototype.onMouseWheel = function (e) {};
  CastleDialogSubLayer.prototype.hide = function () {
    this._disp.removeEventListener(p.CLICK, this.bindFunction(this.onClick));
    this._disp.removeEventListener(p.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.removeEventListener(p.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener(p.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(p.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._isSublayerActive = this._disp.visible = false;
    this.destroyCollectableRenderList();
    if (this.buttonArray != null) {
      for (var e = 0, t = this.buttonArray; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.resetHoverState();
        }
      }
    }
  };
  CastleDialogSubLayer.prototype.onClick = function (e) {};
  CastleDialogSubLayer.prototype.onMouseUp = function (e) {};
  CastleDialogSubLayer.prototype.onMouseDown = function (e) {};
  CastleDialogSubLayer.prototype.onMouseOver = function (e) {};
  CastleDialogSubLayer.prototype.onMouseOut = function (e) {};
  CastleDialogSubLayer.prototype.showHelp = function () {};
  Object.defineProperty(CastleDialogSubLayer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer, "dialogHandler", {
    get: function () {
      return g.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer.prototype, "layoutManager", {
    get: function () {
      return C.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer.prototype, "controller", {
    get: function () {
      return c.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDialogSubLayer.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogSubLayer.prototype.destroy = function () {};
  Object.defineProperty(CastleDialogSubLayer.prototype, "isSublayerActive", {
    get: function () {
      return this._isSublayerActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogSubLayer.prototype.initBasicButtons = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          d.ButtonHelper.initBasicButton(n);
          n.mouseChildren = false;
          this.buttonArray.push(n.basicButton);
        }
      }
    }
  };
  Object.defineProperty(CastleDialogSubLayer.prototype, "subLayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleDialogSubLayer.prototype.isOutOfTutorial = function () {
    return u.CastleModel.userData.userXP >= r.TutorialConst.LAST_TUTORIAL_STEP_XP;
  };
  Object.defineProperty(CastleDialogSubLayer.prototype, "castleEnv", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDialogSubLayer;
}(l.CollectableRendererList);
exports.CastleDialogSubLayer = h;
var g = require("./9.js");
var C = require("./17.js");
s.classImplementsInterfaces(h, "ICollectableRendererList", "ISublayer");