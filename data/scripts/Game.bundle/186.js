Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableRenderer(e, t) {
    this._renderer = new Map();
    this._onIconLoadedSignal = new r.Signal();
    this._isFinishedRendering = false;
    this._clips = e;
    this._options = t;
    this.initComponents();
  }
  CollectableRenderer.prototype.destroy = function () {
    this.onIconLoadedSignal.removeAll();
    this.removeListener();
    this.destroyItemVE();
  };
  CollectableRenderer.prototype.addListener = function () {
    this.removeListener();
    if (this._renderer != null) {
      for (var e = 0, t = Array.from(this._renderer.values()); e < t.length; e++) {
        t[e].addListener();
      }
    }
  };
  CollectableRenderer.prototype.removeListener = function () {
    if (this._renderer != null) {
      for (var e = 0, t = Array.from(this._renderer.values()); e < t.length; e++) {
        t[e].removeListener();
      }
    }
  };
  CollectableRenderer.prototype.updateWithNewVO = function (e) {
    this.changeItemVO(e);
    this.update();
  };
  CollectableRenderer.prototype.update = function () {
    this.reset();
    this.removeListener();
    if (this.itemVO && this.itemVO.itemType != a.CollectableEnum.UNKNOWN) {
      this.addListener();
      if (this._renderer != null) {
        for (var e = 0, t = Array.from(this._renderer.values()); e < t.length; e++) {
          t[e].update();
        }
      }
    } else if (this.clips.itemMc) {
      this.clips.itemMc.visible = false;
    }
  };
  CollectableRenderer.prototype.changeItemVO = function (e) {
    this._itemVO = e;
    this.createItemVE();
  };
  CollectableRenderer.prototype.destroyItemVE = function () {
    if (this._itemVE) {
      this._itemVE.destroy();
      this._itemVE = null;
    }
  };
  CollectableRenderer.prototype.createItemVE = function () {
    this.destroyItemVE();
    this._itemVE = s.CollectableHelper.createVE(this.itemVO, this);
  };
  CollectableRenderer.prototype.setVisibility = function (e) {
    if (this.clips.itemMc) {
      this.clips.itemMc.visible = e;
    }
    if (this._renderer != null) {
      for (var t = 0, i = Array.from(this._renderer.values()); t < i.length; t++) {
        i[t].setVisibility(e);
      }
    }
  };
  CollectableRenderer.prototype.reset = function () {
    if (this.clips.itemMc) {
      this.clips.itemMc.visible = true;
    }
    if (this._renderer != null) {
      for (var e = 0, t = Array.from(this._renderer.values()); e < t.length; e++) {
        t[e].reset();
      }
    }
  };
  CollectableRenderer.prototype.initComponents = function () {
    this.reset();
    this.removeListener();
    this._renderer = new Map();
    var e;
    var t = 0;
    for (var i = 0; i < 32; ++i) {
      t = 1 << i;
      if (this.options.containsRenderOption(t) && (e = o.ClientConstCollectable.RENDERER_CLASS_DIC.get(t))) {
        this._renderer.set(t, new e());
        this._renderer.get(t).init(this);
      }
    }
    this.addListener();
  };
  CollectableRenderer.prototype.getRenderer = function (e) {
    return this._renderer.get(e);
  };
  CollectableRenderer.prototype.onIconLoaded = function () {
    if (this._renderer != null) {
      for (var e = 0, t = Array.from(this._renderer.values()); e < t.length; e++) {
        t[e].onLoadedIcon();
      }
    }
    this._isFinishedRendering = true;
    this.onIconLoadedSignal.dispatch(this);
  };
  Object.defineProperty(CollectableRenderer.prototype, "itemVO", {
    get: function () {
      return this._itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "clips", {
    get: function () {
      return this._clips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "itemVE", {
    get: function () {
      return this._itemVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "options", {
    get: function () {
      return this._options;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "onIconLoadedSignal", {
    get: function () {
      return this._onIconLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableRenderer.prototype, "isFinishedRendering", {
    get: function () {
      return this._isFinishedRendering;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRenderer;
}();
exports.CollectableRenderer = n;
var o = require("./86.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./57.js");