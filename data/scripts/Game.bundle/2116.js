Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./290.js");
var r = require("./8.js");
var l = require("./40.js");
var c = createjs.MovieClip;
var u = function (e) {
  function ASimpleComboboxComponentItem() {
    var t = this;
    t._onItemClicked = new a.Signal();
    t._onFillContentCompleted = new a.Signal();
    t._dispCreator = new s.DispCreatorComponent();
    CONSTRUCTOR_HACK;
    (t = e.call(this, new c()) || this).init();
    return t;
  }
  n.__extends(ASimpleComboboxComponentItem, e);
  ASimpleComboboxComponentItem.prototype.init = function () {
    this._dispCreator.init(this.disp);
    r.ButtonHelper.initBasicButton(this.disp, 1);
  };
  ASimpleComboboxComponentItem.prototype.destroy = function () {
    this._dispCreator.destroy();
    this._onFillContentCompleted.removeAll();
    this._onItemClicked.removeAll();
    e.prototype.destroy.call(this);
  };
  ASimpleComboboxComponentItem.prototype.updateDisp = function () {
    this._dispCreator.reset();
    this._dispCreator.onLoadedSignal.add(this.bindFunction(this.onAllClipsLoaded));
    this._dispCreator.switchCreationState(true);
    this.createDisp();
    this._dispCreator.switchCreationState(false);
    this._dispCreator.onLoadedSignal.remove(this.bindFunction(this.onAllClipsLoaded));
  };
  ASimpleComboboxComponentItem.prototype.createDisp = function () {};
  ASimpleComboboxComponentItem.prototype.triggerOnFillContentCompleted = function () {
    this._onFillContentCompleted.dispatch(this);
  };
  ASimpleComboboxComponentItem.prototype.triggerOnItemClicked = function () {
    this._onItemClicked.dispatch(this);
  };
  ASimpleComboboxComponentItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.isEnabled) {
      this.triggerOnItemClicked();
    }
  };
  ASimpleComboboxComponentItem.prototype.onAllClipsLoaded = function () {
    this.triggerOnFillContentCompleted();
  };
  Object.defineProperty(ASimpleComboboxComponentItem.prototype, "onFillContentCompleted", {
    get: function () {
      return this._onFillContentCompleted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASimpleComboboxComponentItem.prototype, "dispCreator", {
    get: function () {
      return this._dispCreator;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASimpleComboboxComponentItem.prototype, "onItemClicked", {
    get: function () {
      return this._onItemClicked;
    },
    enumerable: true,
    configurable: true
  });
  return ASimpleComboboxComponentItem;
}(l.CastleItemRenderer);
exports.ASimpleComboboxComponentItem = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");