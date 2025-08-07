Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ACastleStatusIcon(e, t = ACastleStatusIcon.PRIORITY_LOW) {
    this._priority = 100;
    this._inited = false;
    this.colors = [];
    this.colors.push("#438707");
    this.colors.push("#88D326");
    this.colors.push("#F2CB0C");
    this.colors.push("#EF740F");
    this.colors.push("#CC1C05");
    this._iconClip = ACastleStatusIcon.getAsExternalClip(e);
    this._priority = t;
    this.init();
    this.setVisibility();
    this._allowCaching = true;
  }
  ACastleStatusIcon.prototype.init = function () {
    if (this._iconClip.isLoaded) {
      this.initLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.initLoaded), 3);
    }
  };
  ACastleStatusIcon.prototype.updateRemainingFromTimestamps = function (e, t) {
    var i = d.int(a.CachedTimer.getCachedTimer());
    var n = g.CastleMathHelper.clamp(this.calculateRemainingPercentage(g.CastleMathHelper.clamp((t - i) / (t - e), 0, 1)), 0.01, 1);
    this.setRemainingPercentageTime(n);
  };
  ACastleStatusIcon.prototype.calculateRemainingPercentage = function (e) {
    var t = 1 - e;
    if (t > 0.9) {
      return (t * -99 + 99) / 109.091;
    } else {
      return (1 / (Math.pow(t + 0.0033, 2) + 0.01) + 9.2) / 109.091;
    }
  };
  ACastleStatusIcon.prototype.setRemainingPercentageTime = function (e) {
    if (this.iconDisp && this.iconDisp.barItem && this.iconDisp.barItem.bar) {
      this.iconDisp.barItem.bar.scaleX = e;
      var t = new c.ColorTransform();
      var i = this.colors[Math.min(ACastleStatusIcon.colorCount - 1, Math.floor((1 - e) * ACastleStatusIcon.colorCount))];
      t.color = d.int("0x" + i.substr(1));
      this.iconDisp.barItem.bar.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
      this.updateCache();
    }
  };
  ACastleStatusIcon.prototype.update = function () {
    if (this._iconClip.isLoaded) {
      this.updateLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.updateWhenLoaded), 1);
    }
    this.updateCache(false);
  };
  ACastleStatusIcon.prototype.updateWhenLoaded = function (e = null) {
    this.updateLoaded();
  };
  ACastleStatusIcon.prototype.updateLoaded = function () {};
  Object.defineProperty(ACastleStatusIcon.prototype, "icon", {
    get: function () {
      return this._iconClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.initLoaded = function (e = null) {
    this.icon.visible = false;
    this.createBasicButton();
    this.icon.statusIcon = this;
    this.icon.gotoAndStop(1);
    this._inited = true;
    if (c.MobileHelper.isScreenTooSmall()) {
      this.icon.scaleX = this.icon.scaleY = 0.8;
    }
    this.addEventListenerForVisibility();
  };
  ACastleStatusIcon.prototype.createBasicButton = function () {
    if (u.instanceOfClass(this._iconClip.currentshownDisplayObject, "BasicButton")) {
      this.icon.basicButton = this._iconClip.currentshownDisplayObject;
    } else {
      _.ButtonHelper.initBasicButton(this.icon);
    }
    if (this.icon.basicButton.setCaching) {
      this.icon.basicButton.setCaching(this._allowCaching);
    }
  };
  ACastleStatusIcon.getAsExternalClip = function (e, t = null, i = null) {
    t ||= ACastleStatusIcon.assetFileURL(e);
    return new C.CastleGoodgameExternalClip(e, t, i, 0, false);
  };
  ACastleStatusIcon.assetFileURL = function (e) {
    return s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  ACastleStatusIcon.prototype.disposeLoaded = function () {
    if (this.icon) {
      if (this.icon.parent) {
        this.removeFromContainer(this.icon.parent);
      }
      this.removeEventListenerForVisibility();
      this.removeEventListenerForShowTime();
      this._changedVisibilityCallback = null;
      this.icon.statusIcon = null;
      if (this.icon.basicButton) {
        this.icon.basicButton.removeMouseEventListener();
        this.icon.basicButton = null;
      }
    }
  };
  ACastleStatusIcon.prototype.disposeWhenLoaded = function (e = null) {
    this.disposeLoaded();
  };
  ACastleStatusIcon.prototype.dispose = function () {
    if (this._iconClip.isLoaded) {
      this.disposeLoaded();
    } else {
      this._iconClip.clipLoaded.removeAll();
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.disposeWhenLoaded));
    }
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "changedVisibilityCallback", {
    set: function (e) {
      this._changedVisibilityCallback = e;
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.show = function () {
    if (this._iconClip.isLoaded) {
      this.onShowWhenLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onShowWhenLoaded));
    }
  };
  ACastleStatusIcon.prototype.onShowWhenLoaded = function (e = null) {
    this.showLoaded(e);
    this.updateCache(false);
  };
  ACastleStatusIcon.prototype.updateCache = function (e = true) {
    if (this._allowCaching && this.icon) {
      if (this.icon.cacheCanvas && e) {
        this.icon.updateCache();
      } else {
        this.icon.doCache();
      }
    }
  };
  ACastleStatusIcon.prototype.showLoaded = function (e = null) {
    if (!this.icon.visible) {
      this.icon.visible = true;
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
      this.addEventListenerForShowTime();
      if (this.icon.basicButton) {
        this.icon.basicButton.addMouseEventListener();
      }
    }
  };
  ACastleStatusIcon.prototype.hide = function () {
    if (this._iconClip.isLoaded) {
      this.hideLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.hideLoaded));
    }
  };
  ACastleStatusIcon.prototype.hideLoaded = function (e = null) {
    if (this.icon && this.icon.visible) {
      this.icon.visible = false;
      if (this._changedVisibilityCallback != null) {
        this._changedVisibilityCallback();
      }
      this.removeEventListenerForShowTime();
      if (this.icon.basicButton) {
        this.icon.basicButton.removeMouseEventListener();
      }
      l.MovieClipHelper.stopAllMoviesGotoFrameOne(this.icon);
    }
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "visible", {
    get: function () {
      return !!this.icon && this.icon.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "priority", {
    get: function () {
      return this._priority;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.setPosition = function (e, t) {
    if (this.icon) {
      this.icon.x = e;
      this.icon.y = t;
    }
  };
  ACastleStatusIcon.prototype.setTooltip = function (e, t = null) {
    this._tooltipId = e;
    this._tooltipParams = t;
    if (this._iconClip.isLoaded) {
      this.setTooltipLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.setTooltipLoaded), 1);
    }
  };
  ACastleStatusIcon.prototype.setTooltipLoaded = function (e = null) {
    if (this._tooltipParams) {
      this.icon.toolTipText = {
        t: this._tooltipId,
        p: this._tooltipParams
      };
    } else {
      this.icon.toolTipText = this._tooltipId;
    }
  };
  ACastleStatusIcon.prototype.addToContainer = function (e) {
    this._container = e;
    if (this._iconClip.isLoaded) {
      this.addToContainerLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.addToContainerLoaded), 1);
    }
  };
  ACastleStatusIcon.prototype.addToContainerLoaded = function (e = null) {
    if (this._container) {
      this._container.addChild(this.icon);
    }
  };
  ACastleStatusIcon.prototype.removeFromContainer = function (e) {
    this._container = e;
    if (this._iconClip.isLoaded) {
      this.removeFromContainerLoaded();
    } else {
      this._iconClip.clipLoaded.remove(this.bindFunction(this.addToContainerLoaded));
    }
  };
  ACastleStatusIcon.prototype.removeFromContainerLoaded = function (e = null) {
    if (this._container && this._container.contains(this.icon)) {
      this._container.removeChild(this.icon);
    }
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "width", {
    get: function () {
      return this.icon.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "height", {
    get: function () {
      return this.icon.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "iconDisp", {
    get: function () {
      return this.icon;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.setVisibility = function () {
    if (this._iconClip.isLoaded) {
      this.setVisibilityLoaded();
    } else {
      this._iconClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.setVisibilityWhenLoaded), 1);
    }
    if (this.icon && this.icon.visible) {
      this.updateCache(false);
    }
  };
  ACastleStatusIcon.prototype.setVisibilityLoaded = function () {};
  ACastleStatusIcon.prototype.setVisibilityWhenLoaded = function (e = null) {
    if (!this._inited) {
      this.initLoaded();
    }
    this.setVisibilityLoaded();
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "allowCaching", {
    get: function () {
      return this._allowCaching;
    },
    set: function (e) {
      this._allowCaching = e;
      if (!e && this.icon && this.icon.cacheCanvas) {
        m.CastleMovieClipHelper.uncacheSafe(this.icon);
        if (this.icon.basicButton) {
          this.icon.basicButton.setCaching(false);
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.onClick = function (e = null) {};
  ACastleStatusIcon.prototype.onLayoutStateChanged = function () {
    this.setVisibility();
  };
  ACastleStatusIcon.prototype.addEventListenerForVisibility = function () {};
  ACastleStatusIcon.prototype.removeEventListenerForVisibility = function () {};
  ACastleStatusIcon.prototype.addEventListenerForShowTime = function () {};
  ACastleStatusIcon.prototype.removeEventListenerForShowTime = function () {};
  Object.defineProperty(ACastleStatusIcon.prototype, "controller", {
    get: function () {
      return p.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "layoutManager", {
    get: function () {
      return o.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleStatusIcon.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.prototype.isOutOfTutorial = function () {
    return !h.CastleModel.tutorialData.isTutorialActive;
  };
  Object.defineProperty(ACastleStatusIcon.prototype, "iconClip", {
    get: function () {
      return this._iconClip;
    },
    enumerable: true,
    configurable: true
  });
  ACastleStatusIcon.PRIORITY_WEBSHOP = 2;
  ACastleStatusIcon.PRIORITY_LOWER = 50;
  ACastleStatusIcon.PRIORITY_LOW = 100;
  ACastleStatusIcon.PRIORITY_MIDDLE = 200;
  ACastleStatusIcon.PRIORITY_HIGH = 300;
  ACastleStatusIcon.colorCount = 5;
  return ACastleStatusIcon;
}();
exports.ACastleStatusIcon = n;
var o = require("./17.js");
var a = require("./30.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./6.js");
var p = require("./15.js");
var h = require("./4.js");
var g = require("./213.js");
var C = require("./24.js");
var _ = require("./8.js");
var m = require("./41.js");