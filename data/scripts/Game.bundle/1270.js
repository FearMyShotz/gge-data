Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./57.js");
var s = function () {
  function GeneralsHubBasicAnimationsHandler(e) {
    this._animationsLoadedSignal = new a.Signal();
    this._disp = e;
  }
  GeneralsHubBasicAnimationsHandler.prototype.loadAnimations = function () {
    var e = this;
    if (this.animationAssets) {
      o.loadAssets(this.animationAssets, o.AssetLoadingFlowType.PARALLEL).then(function (t) {
        e.initialize();
        e.startAnimations();
        e._animationsLoadedSignal.dispatch();
        e.isLoaded = true;
      }).catch(function (e) {
        return n.warn("failed to load general hub animations", e);
      });
    } else {
      console.error("Generals Hub Animations are not set!");
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.initialize = function () {};
  GeneralsHubBasicAnimationsHandler.prototype.startAnimations = function () {};
  GeneralsHubBasicAnimationsHandler.prototype.stopAnimations = function () {};
  GeneralsHubBasicAnimationsHandler.prototype.playAnimationByName = function (e, t = 0) {
    if (this.animations) {
      this.iterateAnimations(this.animations, this.bindFunction(this.playAnimation), e, t);
    } else {
      console.error("Generals Hub no animations placeholders were set!");
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.playAnimation = function (e, t = 0) {
    e.visible = true;
    if (t != 0) {
      e.children[0].gotoAndPlay(t);
    } else {
      e.children[0].play();
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.stopAnimationByName = function (e, t = 0) {
    if (this.animations) {
      this.iterateAnimations(this.animations, this.bindFunction(this.stopAnimation), e, t);
    } else {
      console.error("Generals Hub no animations placeholders were set!");
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.stopAnimation = function (e, t) {
    var i = this;
    if (t === undefined) {
      t = 0;
    }
    e.visible = false;
    if (this.isLoaded) {
      if (t != 0) {
        e.children[0].gotoAndStop(t);
      } else {
        e.children[0].stop();
      }
    } else {
      this.animationsLoadedSignal.addOnce(function () {
        return i.stopAnimation(e, t);
      });
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.iterateAnimations = function (e, t, i = "", n = 0) {
    e.forEach(function (e) {
      if (i != "") {
        if (e.name == i) {
          t(e, n);
        }
      } else {
        t(e, n);
      }
    });
  };
  Object.defineProperty(GeneralsHubBasicAnimationsHandler.prototype, "animationsLoadedSignal", {
    get: function () {
      return this._animationsLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubBasicAnimationsHandler.prototype.reset = function () {
    this.stopAnimations();
  };
  return GeneralsHubBasicAnimationsHandler;
}();
exports.GeneralsHubBasicAnimationsHandler = s;