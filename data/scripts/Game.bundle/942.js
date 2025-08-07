Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function PackageTabComponent(e, t) {
    this.disp = e;
    this.onTabChanged = t;
    this.tabs = [];
  }
  PackageTabComponent.prototype.addTab = function (e, t, i) {
    this.tabs.push(new s(e, t, i));
  };
  PackageTabComponent.prototype.init = function () {
    this.defaultTab = this.tabs[0];
    if (this.tabs != null) {
      for (var e = 0, t = this.tabs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.disp.toolTipText = i.toolTip;
          a.ButtonHelper.initBasicButton(i.disp);
        }
      }
    }
  };
  PackageTabComponent.prototype.updateTabsEnablement = function (e) {
    if (this.tabs != null) {
      for (var t = 0, i = this.tabs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = false;
          if (e != null) {
            for (var s = 0, r = e; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined && n.filterFunction(l)) {
                o = true;
                break;
              }
            }
          }
          a.ButtonHelper.enableButton(n.disp, o);
          n.disp.toolTipText = o ? n.toolTip : "alert_not_available";
        }
      }
    }
  };
  PackageTabComponent.prototype.show = function () {
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    this.selectedTab = this.defaultTab;
  };
  PackageTabComponent.prototype.hide = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  PackageTabComponent.prototype.onClick = function (e) {
    if (a.ButtonHelper.isButtonEnabled(e.target) && this.tabs != null) {
      for (var t = 0, i = this.tabs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e.target == n.disp) {
          this.selectedTab = n;
          return;
        }
      }
    }
  };
  Object.defineProperty(PackageTabComponent.prototype, "selectedTab", {
    set: function (e) {
      this._selectedTab = e;
      this.updateTabFrames();
      this.onTabChanged();
    },
    enumerable: true,
    configurable: true
  });
  PackageTabComponent.prototype.updateTabFrames = function () {
    if (this.tabs != null) {
      for (var e = 0, t = this.tabs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.disp.gotoAndStop(this.getTabFrame(i));
        }
      }
    }
  };
  PackageTabComponent.prototype.getTabFrame = function (e) {
    if (this._selectedTab == e) {
      return PackageTabComponent.SELECTED_TAB_FRAME;
    } else {
      return PackageTabComponent.DEFAULT_TAB_FRAME;
    }
  };
  PackageTabComponent.prototype.isPackageInCurrentTab = function (e) {
    return !!this._selectedTab.filterFunction(e);
  };
  Object.defineProperty(PackageTabComponent.prototype, "isFilterReset", {
    get: function () {
      return this._selectedTab == this.defaultTab;
    },
    enumerable: true,
    configurable: true
  });
  PackageTabComponent.__initialize_static_members = function () {
    PackageTabComponent.DEFAULT_TAB_FRAME = 2;
    PackageTabComponent.SELECTED_TAB_FRAME = 1;
  };
  return PackageTabComponent;
}();
exports.PackageTabComponent = o;
var a = require("./8.js");
var s = function () {
  return function Tab(e, t, i) {
    this.disp = e;
    this.toolTip = t;
    this.filterFunction = i;
  };
}();
o.__initialize_static_members();