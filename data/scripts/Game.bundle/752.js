Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./57.js");
var c = require("./393.js");
var u = require("./172.js");
var d = require("./4.js");
var p = require("./40.js");
var h = require("./82.js");
var g = require("./47.js");
var C = require("./59.js");
var _ = require("./8.js");
var m = createjs.TimerEvent;
var f = require("./5.js");
var O = function (e) {
  function ModernHighscoreComponent(t, i, n, o, a) {
    var r = this;
    r._items = [];
    r._requestTimer = new s.Timer(ModernHighscoreComponent.TIME_TO_REQUEST_NEW_DATA, 0);
    r._numberOfItems = 0;
    r._highscoreId = 0;
    r._leagueId = 0;
    r._searchedValue = "";
    r._rankOffsetOnServerRequest = 3;
    r._hasRequestedOwnRank = false;
    r._hasScrollValueChanged = false;
    r._currentRank = 1;
    r._maxRank = 0;
    r._requestDataEnabled = true;
    r._onItemsUpdated = new l.Signal();
    r._onDataReceived = new l.Signal();
    CONSTRUCTOR_HACK;
    (r = e.call(this, t) || this)._numberOfItems = i;
    r._itemClass = n;
    r._highscoreId = o;
    r._leagueId = a;
    r._maxRank = i;
    r.init();
    return r;
  }
  n.__extends(ModernHighscoreComponent, e);
  ModernHighscoreComponent.prototype.init = function () {
    if (this.disp) {
      this._scrollComponent = new h.ModernSliderScrollComponent(new g.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new C.DynamicSizeScrollStrategyVertical(true, this.numberOfItems));
      this._scrollComponent.triggerSignalOnlyOnValueChanged = true;
    }
    if (this.disp) {
      for (var e = 0; e < this.numberOfItems; ++e) {
        this._items.push(new this.itemClass(this.disp.getChildByName("mc_item" + e), this));
      }
    }
  };
  ModernHighscoreComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._currentRank = 1;
    this._requestTimer.start();
    if (this._scrollComponent) {
      this._scrollComponent.show();
    }
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this.reset();
  };
  ModernHighscoreComponent.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    if (this._scrollComponent) {
      this._scrollComponent.hide();
    }
    this._requestTimer.stop();
  };
  ModernHighscoreComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    d.CastleModel.highscoreData.addEventListener(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.addEventListener(m.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    }
  };
  ModernHighscoreComponent.prototype.removeEventListener = function () {
    d.CastleModel.highscoreData.removeEventListener(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onRankDataReceived));
    this._requestTimer.removeEventListener(m.TIMER, this.bindFunction(this.onRequestTimerUpdate));
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    }
    e.prototype.removeEventListener.call(this);
  };
  ModernHighscoreComponent.prototype.reset = function () {
    this._currentData = null;
    this.updateScrollValues(0);
    this.hideAllItems();
    this.updateItems();
  };
  ModernHighscoreComponent.prototype.requestOwnRankFromServer = function () {
    this.requestDataFromServer(-1);
  };
  ModernHighscoreComponent.prototype.requestCurrentRankFromServer = function () {
    this.requestDataFromServer(this._currentRank);
  };
  ModernHighscoreComponent.prototype.requestDataFromServer = function (e = -1, t = "") {
    if (this.requestDataEnabled) {
      var i = e;
      if (i >= 0) {
        i += this._rankOffsetOnServerRequest;
      }
      d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetHighscoreVO(t != "" ? t : "" + i, this.highscoreId, this.leagueId));
      this._hasScrollValueChanged = false;
      this._hasRequestedOwnRank = e < 0;
    }
  };
  ModernHighscoreComponent.prototype.hideAllItems = function () {
    if (this.items != null) {
      for (var e = 0, t = this.items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.setVisibility(false);
        }
      }
    }
  };
  ModernHighscoreComponent.prototype.updateItems = function (e = null) {
    if (e) {
      this._currentData = e;
    }
    if (this._currentData && this._emptyText) {
      if (this._currentData.LR == 0) {
        this._emptyText.visible = true;
      } else {
        this._emptyText.visible = false;
      }
    }
    if (this._currentData && this._maxRank != this._currentData.LR) {
      this.updateScrollValues(this._currentData.LR);
    }
    if (this._currentData) {
      this._searchedValue = this._currentData.SV;
    }
    if (this._hasRequestedOwnRank && this._currentData && this._currentData.L.length > 0) {
      this._hasRequestedOwnRank = false;
      this._currentRank = this.getRankFromData(0);
      if (this._scrollComponent) {
        this._scrollComponent.scrollToValue(this._currentRank, false);
      }
    }
    for (var t = 0; t < this.numberOfItems; ++t) {
      var i = this._currentRank + t;
      var n = t < this.items.length ? this.items[t] : null;
      if (n) {
        n.updateWithNewData(i, this.getEntryFromRankData(i));
        if (n.name && this._searchedValue && n.name == this._searchedValue) {
          n.setItemIndicatorSearchedName();
        }
      }
    }
    this.onItemsUpdated.dispatch();
  };
  ModernHighscoreComponent.prototype.updateScrollValues = function (e = -1) {
    if (this._maxRank >= 0) {
      this._maxRank = e;
    }
    if (this._scrollComponent) {
      this._scrollComponent.setVisibility(this._maxRank > this.numberOfItems);
      this._scrollComponent.init(1, o.MathBase.max(1, this._maxRank - this.numberOfItems + 1), this.numberOfItems, this.numberOfItems);
      this._scrollComponent.scrollToValue(this._currentRank, false);
    }
  };
  ModernHighscoreComponent.prototype.getEntryFromRankData = function (e) {
    if (!this._currentData) {
      return null;
    }
    for (var t = 0; t < this._currentData.L.length; ++t) {
      if (e == this.getRankFromData(t)) {
        return this._currentData.L[t];
      }
    }
    return null;
  };
  ModernHighscoreComponent.prototype.getRawDataList = function () {
    if (this._currentData) {
      return this._currentData.L;
    } else {
      return null;
    }
  };
  ModernHighscoreComponent.prototype.onClick = function (t) {
    if (_.ButtonHelper.isButtonEnabled(t.target) && (e.prototype.onClick.call(this, t), this._scrollComponent)) {
      switch (t.target) {
        case this._scrollComponent.scrollVO.minButton:
        case this._scrollComponent.scrollVO.minusButton:
        case this._scrollComponent.scrollVO.plusButton:
        case this._scrollComponent.scrollVO.maxButton:
          this.requestDataFromServer(this._currentRank);
      }
    }
  };
  ModernHighscoreComponent.prototype.onRankDataReceived = function (e) {
    var t = e.params[0];
    if (t.LT == this.highscoreId && (!(this.leagueId >= 0) || t.LID == this.leagueId)) {
      this.updateItems(t);
      this.onDataReceived.dispatch();
    }
  };
  ModernHighscoreComponent.prototype.onScrollValueChanged = function () {
    if (this._currentRank != this._scrollComponent.currentValue) {
      this._hasScrollValueChanged = true;
    }
    this._currentRank = r.int(this._scrollComponent.currentValue);
    this.updateItems();
  };
  ModernHighscoreComponent.prototype.onRequestTimerUpdate = function (e) {
    if (this._hasScrollValueChanged) {
      this.requestDataFromServer(this._currentRank);
    }
  };
  Object.defineProperty(ModernHighscoreComponent.prototype, "numberOfItems", {
    get: function () {
      return this._numberOfItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "highscoreId", {
    get: function () {
      return this._highscoreId;
    },
    set: function (e) {
      this._highscoreId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "leagueId", {
    get: function () {
      return this._leagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "maxRank", {
    get: function () {
      return this._maxRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "requestDataEnabled", {
    get: function () {
      return this._requestDataEnabled;
    },
    set: function (e) {
      this._requestDataEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "onItemsUpdated", {
    get: function () {
      return this._onItemsUpdated;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "onDataReceived", {
    get: function () {
      return this._onDataReceived;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "currentData", {
    get: function () {
      return this._currentData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernHighscoreComponent.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  ModernHighscoreComponent.prototype.setEmptyText = function (e) {
    this._emptyText = e;
  };
  ModernHighscoreComponent.prototype.getRankFromData = function (e) {
    if (this.highscoreId == f.HighscoreConst.ALLIANCE_AQUA_POINTS) {
      return this._currentData.L[e][1];
    } else {
      return this._currentData.L[e][0];
    }
  };
  Object.defineProperty(ModernHighscoreComponent.prototype, "rankOffsetOnServerRequest", {
    get: function () {
      return this._rankOffsetOnServerRequest;
    },
    set: function (e) {
      this._rankOffsetOnServerRequest = e;
    },
    enumerable: true,
    configurable: true
  });
  ModernHighscoreComponent.TIME_TO_REQUEST_NEW_DATA = 500;
  return ModernHighscoreComponent;
}(p.CastleItemRenderer);
exports.ModernHighscoreComponent = O;
a.classImplementsInterfaces(O, "ICollectableRendererList");