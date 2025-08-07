Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function SublayerSwitcher(e = null) {
    this.sublayers = new Map();
    this._activeTab = 0;
    this.isShown = false;
    this._autoUpdateTabs = true;
    this.onSwitched = new a.Signal();
    this._activeTab = -1;
    this.isShown = false;
    this.createPropertiesFunction = e;
  }
  SublayerSwitcher.prototype.add = function (e, t, i) {
    if (!i) {
      throw new Error("Sublayer must be specified.");
    }
    var o = new r();
    o.button = t;
    o.sublayer = i;
    s.ButtonHelper.initBasicButton(t);
    if (this.sublayers.get(e)) {
      throw new Error("A sublayer with the ID " + e + " already exists, it cannot be added twice.");
    }
    this.sublayers.set(e, o);
    if (this.isShown && t) {
      t.addEventListener(n.CLICK, this.bindFunction(this.onClick));
      t.gotoAndStop(SublayerSwitcher.TAB_DEFAULT_FRAME);
    }
    i.disp.visible = false;
  };
  SublayerSwitcher.prototype.switchTo = function (e) {
    if (e < 0) {
      throw new Error("Cannot switch to tab (null).");
    }
    if (e != this._activeTab) {
      if (this._activeTab >= 0) {
        this.hideCurrentSublayer();
      }
      this.showTab(e);
      if (this.isShown) {
        this.onSwitched.dispatch(e);
      }
    }
  };
  Object.defineProperty(SublayerSwitcher.prototype, "activeTab", {
    get: function () {
      return this._activeTab;
    },
    enumerable: true,
    configurable: true
  });
  SublayerSwitcher.prototype.show = function () {
    this.isShown = true;
    if (this.sublayers != null) {
      for (var e = 0, t = Array.from(this.sublayers.keys()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var o = this.getInfo(i).button;
          if (o) {
            o.addEventListener(n.CLICK, this.bindFunction(this.onClick));
          }
        }
      }
    }
    this.showCurrentSublayer();
    this.updateTabButtons();
  };
  SublayerSwitcher.prototype.hide = function () {
    if (this.sublayers != null) {
      for (var e = 0, t = Array.from(this.sublayers.keys()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var o = this.getInfo(i).button;
          if (o) {
            o.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
          }
        }
      }
    }
    this.hideCurrentSublayer();
    this.isShown = false;
  };
  SublayerSwitcher.prototype.showHelp = function () {
    this.getInfo(this.activeTab).sublayer.showHelp();
  };
  SublayerSwitcher.prototype.getInfo = function (e) {
    return this.sublayers.get(e);
  };
  SublayerSwitcher.prototype.getSublayerByID = function (e) {
    return this.sublayers.get(e).sublayer;
  };
  SublayerSwitcher.prototype.addOnSwitchedListener = function (e) {
    this.onSwitched.add(e);
  };
  SublayerSwitcher.prototype.removeOnSwitchedListener = function (e) {
    this.onSwitched.remove(e);
  };
  SublayerSwitcher.prototype.onClick = function (e) {
    if (s.ButtonHelper.isButtonEnabled(e.target) && this.sublayers != null) {
      for (var t = 0, i = Array.from(this.sublayers.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e.target == this.getInfo(n).button) {
          this.switchTo(n);
          return;
        }
      }
    }
  };
  SublayerSwitcher.prototype.showTab = function (e) {
    this._activeTab = e;
    this.showCurrentSublayer();
    this.updateTabButtons();
  };
  SublayerSwitcher.prototype.showCurrentSublayer = function () {
    if (this.isShown) {
      var e = null;
      if (this.createPropertiesFunction) {
        e = this.createPropertiesFunction(this._activeTab);
      }
      var t = this.getInfo(this._activeTab).sublayer;
      t.disp.visible = true;
      t.show(e);
    }
  };
  SublayerSwitcher.prototype.hideCurrentSublayer = function () {
    if (this.isShown) {
      var e = this.getInfo(this._activeTab).sublayer;
      e.disp.visible = false;
      e.hide();
    }
  };
  SublayerSwitcher.prototype.updateTabButtons = function () {
    if (this.isShown && this._autoUpdateTabs && this.sublayers != null) {
      for (var e = 0, t = Array.from(this.sublayers.keys()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = this.getInfo(i).button;
          if (n) {
            n.gotoAndStop(this._activeTab == i ? SublayerSwitcher.TAB_ACTIVE_FRAME : SublayerSwitcher.TAB_DEFAULT_FRAME);
          }
        }
      }
    }
  };
  Object.defineProperty(SublayerSwitcher.prototype, "autoUpdateTabs", {
    get: function () {
      return this._autoUpdateTabs;
    },
    set: function (e) {
      this._autoUpdateTabs = e;
    },
    enumerable: true,
    configurable: true
  });
  SublayerSwitcher.__initialize_static_members = function () {
    SublayerSwitcher.TAB_ACTIVE_FRAME = 2;
    SublayerSwitcher.TAB_DEFAULT_FRAME = 1;
  };
  return SublayerSwitcher;
}();
exports.SublayerSwitcher = o;
var a = require("./57.js");
var s = require("./8.js");
var r = function () {
  return function SublayerInfo() {};
}();
o.__initialize_static_members();