Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./312.js");
var l = require("./32.js");
var c = require("./92.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./2080.js");
var h = createjs.MouseEvent;
var g = createjs.TimerEvent;
var C = function (e) {
  function RingMenuBuilding() {
    var t = this;
    t._buttons = [];
    t._dragRef = undefined;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.RingMenu_Building_Aug24()) || this).infoArea = new f.RingmenuBuildingInfoArea(t.ringMenu);
    t.ringMenu.btn_addSwordBrother.visible = false;
    t.ringMenu.mouseEnabled = true;
    t.ringMenu.bg.mouseChildren = false;
    t.ringMenu.bg.mouseEnabled = false;
    t._updateTimer = new a.Timer(500);
    t._updateTimer.addEventListener(g.TIMER, t.bindFunction(t.timerUpdate));
    return t;
  }
  n.__extends(RingMenuBuilding, e);
  RingMenuBuilding.prototype.show = function () {
    e.prototype.show.call(this);
    this._updateTimer.start();
    this.timerUpdate(null);
    u.CastleModel.allianceHelpRequestData.addEventListener(r.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onHelpRequestDataUpdated));
    this.controller.addEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this._onLevelUp));
    this.controller.dispatchEvent(new c.IsoEvent(c.IsoEvent.ON_SHOW_RING_MENU, [this.targetBuilding]));
    if (a.MobileHelper.isScreenTooSmall()) {
      this._dragRef = undefined;
      this.disp.addEventListener(h.PRESS_MOVE, this.bindFunction(this.onPressMove));
      this.disp.addEventListener(h.MOUSE_UP, this.bindFunction(this.onPressMoveRelease));
    }
  };
  RingMenuBuilding.prototype.onPressMove = function (e) {
    if (this._dragRef) {
      var t = this.disp.globalToLocal(e.stageX, e.stageY);
      var i = t.x - this._dragRef.x;
      var n = t.y - this._dragRef.y;
      if (Math.abs(i) + Math.abs(n) > 10) {
        this.disp.x += i;
        this.disp.y += n;
      }
    } else {
      this._dragRef = this.disp.globalToLocal(e.stageX, e.stageY);
    }
  };
  RingMenuBuilding.prototype.updateMenuPosition = function () {
    var e = this.target;
    if (e && this._dragRef === undefined) {
      var t;
      var i = e.uiPos;
      if (e.vo && e.vo.isInBuildingDistrict) {
        i.y = Math.max(-80, i.y);
      }
      if (e.uiDisp) {
        if (e.uiDisp) {
          t = e.uiDisp.localToGlobal(i);
          this.disp.x = t.x;
          this.disp.y = t.y;
        }
      }
    }
  };
  RingMenuBuilding.prototype.onPressMoveRelease = function () {
    this._dragRef = null;
  };
  RingMenuBuilding.prototype.hide = function () {
    if (this.isVisible()) {
      this._updateTimer.stop();
      if (this._buttons != null) {
        for (var t = 0, i = this._buttons; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.removeEventListeners();
          }
        }
      }
      if (a.MobileHelper.isScreenTooSmall()) {
        this._dragRef = undefined;
        this.disp.removeEventListener(h.PRESS_MOVE, this.bindFunction(this.onPressMove));
        this.disp.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onPressMoveRelease));
      }
      u.CastleModel.allianceHelpRequestData.removeEventListener(r.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onHelpRequestDataUpdated));
      this.controller.removeEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this._onLevelUp));
      e.prototype.hide.call(this);
      _.IsoHelper.view.showRingMenu(false);
      this.controller.dispatchEvent(new c.IsoEvent(c.IsoEvent.ON_HIDE_RING_MENU, []));
    }
  };
  RingMenuBuilding.prototype.onHelpRequestDataUpdated = function (e) {
    this.updateComponent();
  };
  RingMenuBuilding.prototype._onLevelUp = function (e) {
    if (this.targetBuilding) {
      this.updateComponent();
    }
  };
  RingMenuBuilding.prototype.timerUpdate = function (e = null) {
    if (this.targetBuilding && this.targetBuilding.disp) {
      if (this._buttons != null) {
        for (var t = 0, i = this._buttons; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.timerUpdate(e);
          }
        }
      }
      this.infoArea.update();
    }
  };
  RingMenuBuilding.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      var i = {
        OID: this.targetBuilding.vo.objectId
      };
      if (this._buttons != null) {
        for (var n = 0, o = this._buttons; n < o.length; n++) {
          var s = o[n];
          if (s !== undefined && t.target == s.disp) {
            var r = true;
            if (a.currentBrowserInfo.isTouchEvent(t)) {
              r = s.touchClickCount === 1;
            }
            if (r) {
              s.onClick(i, t);
              s.touchClickCount = 0;
            } else {
              this.infoArea.onMouseOver(s);
              s.touchClickCount = 1;
            }
            return;
          }
        }
      }
    }
  };
  RingMenuBuilding.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this._buttons != null) {
      for (var i = 0, n = this._buttons; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && t.target == o.disp) {
          this.infoArea.onMouseOver(o);
          return;
        }
      }
    }
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters([]);
      t.target.useFilters(this.hoverFilter);
    }
  };
  RingMenuBuilding.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.infoArea.onMouseOut();
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters([]);
    }
  };
  RingMenuBuilding.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    m.Iso.renderer.mouse.stopWorldDragging();
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters([]);
    }
  };
  RingMenuBuilding.prototype.initComponent = function () {
    e.prototype.initComponent.call(this);
    if (this.targetBuilding) {
      this.reinitializeButtons();
      this.infoArea.init(this.targetBuilding);
      if (this.visibleAndEnabledButtonsCount == 0) {
        this.hide();
      }
    } else {
      this.hide();
    }
  };
  RingMenuBuilding.prototype.reinitializeButtons = function () {
    var e;
    for (var t = 0, i = this._buttons; t < i.length; t++) {
      (e = i[t]).destroy();
    }
    this.hideAllButtons();
    this.infoArea.init(this.targetBuilding);
    this._buttons = this.targetBuilding.getRingMenuButtons();
    for (var n = 0, o = this._buttons; n < o.length; n++) {
      (e = o[n]).init(this, this.ringMenu, this.targetBuilding);
      e.addEventListeners();
    }
  };
  RingMenuBuilding.prototype.updateComponent = function () {
    if (this._buttons != null) {
      for (var e = 0, t = this._buttons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.init(this, this.ringMenu, this.targetBuilding);
        }
      }
    }
    this.infoArea.update();
    if (this.visibleAndEnabledButtonsCount == 0) {
      this.hide();
    }
  };
  RingMenuBuilding.prototype.hideAllButtons = function () {
    for (var e = 0; e < this.ringMenu.numChildren; e++) {
      var t = this.ringMenu.getChildAt(e);
      if (s.instanceOfClass(t, "BasicButton")) {
        t.visible = false;
      }
    }
  };
  Object.defineProperty(RingMenuBuilding.prototype, "visibleAndEnabledButtonsCount", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this.ringMenu.numChildren; t++) {
        var i = this.ringMenu.getChildAt(t);
        if (s.instanceOfClass(i, "BasicButton") && i.visible && i.enabled) {
          e++;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RingMenuBuilding.prototype, "hoverFilter", {
    get: function () {
      var e = new o.ColorMatrix();
      e.fill(15921906);
      var t = new o.ColorMatrix();
      t.blend(e, 0.35);
      return [t.filter];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RingMenuBuilding.prototype, "downFilter", {
    get: function () {
      var e = new o.ColorMatrix();
      e.fill(0);
      var t = new o.ColorMatrix();
      t.blend(e, 0.35);
      return [t.filter];
    },
    enumerable: true,
    configurable: true
  });
  RingMenuBuilding.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      t.target.useFilters(this.downFilter);
    }
  };
  Object.defineProperty(RingMenuBuilding.prototype, "ringMenu", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  RingMenuBuilding.NAME = "RingMenuBuilding";
  RingMenuBuilding.ACTION_UPGRADE = 0;
  RingMenuBuilding.ACTION_REPAIR = 1;
  RingMenuBuilding.ACTION_DISASSEMBLE = 2;
  RingMenuBuilding.ACTION_INSTANT_BUILD = 3;
  return RingMenuBuilding;
}(p.IsoWorldRingMenu);
exports.RingMenuBuilding = C;
var _ = require("./46.js");
var m = require("./34.js");
var f = require("./2081.js");