Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./169.js");
var p = require("./119.js");
var h = require("./15.js");
var g = require("./72.js");
var C = require("./4.js");
var _ = require("./350.js");
var m = require("./73.js");
var f = require("./2193.js");
var O = require("./171.js");
var E = createjs.MouseEvent;
var y = function (e) {
  function CastleLordPicker(t, i, n = false, o = false, a = false) {
    var s = e.call(this) || this;
    s.isBaronPicker = false;
    s._numAllLords = 0;
    s._disp = t;
    s.isBaronPicker = o;
    s._lordList = [];
    s._numAllLords = u.int(s._lordList.length);
    s._disp.visible = i != null;
    s.initComboBox(i, n, a);
    s._lordTooltipTrigger = new T.LordEffectTooltipTrigger(s._disp.btn_equipCommander, true);
    s._lordTooltipTrigger.show();
    s._disp.btn_equipCommander.addEventListener(E.CLICK, s.bindFunction(s.onEquipClick));
    h.CastleBasicController.getInstance().addEventListener(p.CastleEquipmentEvent.EQUIP_SUCCESSFUL, s.bindFunction(s.onEquipOrRename));
    return s;
  }
  n.__extends(CastleLordPicker, e);
  CastleLordPicker.prototype.initComboBox = function (e, t, i) {
    var n;
    if (t === undefined) {
      t = false;
    }
    if (i === undefined) {
      i = false;
    }
    this._lordComboBox = new I.ComboboxComponent(this._disp.mc_lordCombobox, c.Localize.text("equipment_itemType_general"), I.ComboboxComponent.OPEN_UP, 17, 16, -1, CastleLordPicker.MAX_LORDS_TO_SHOW, new f.ComboboxItemRendererLord(i), 0, true, false, 0, "", 0);
    if (e != null) {
      for (var a = 0, s = e; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && (r.isAvailableForMovement || t)) {
          this._lordList.push(r);
          (n = new O.ComboboxItemRendererVO()).data = r;
          n.itemLabel = r.label;
          this._lordComboBox.addItem(n);
        }
      }
    }
    this._lordComboBox.enabled = this._lordList.length > 1;
    if (!this._lordComboBox.enabled) {
      this._lordComboBox.disp.doCache(0, 2);
    }
    this._lordComboBox.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.handleSelectionChanged));
    if (this._lordList.length > 0) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = -1;
    }
  };
  CastleLordPicker.prototype.handleSelectionChanged = function (e) {
    this.updateDisp();
    this.dispatchEvent(new d.BasicPickerEvent(d.BasicPickerEvent.PICKER_CHANGE_VALUE));
  };
  CastleLordPicker.prototype.onEquipOrRename = function (e) {
    var t = this._lordComboBox.selectedId;
    if (!(t < 0)) {
      var i;
      var n = C.CastleModel.lordData.getCommanderByID(this._lordList[t].id);
      if (n) {
        this._lordList[t] = n;
        (i = new O.ComboboxItemRendererVO()).data = n;
        i.itemLabel = n.label;
        this._lordComboBox.changeItemAtIndex(i, t);
        this._lordComboBox.selectItemIndex(t);
      }
    }
  };
  CastleLordPicker.prototype.onEquipClick = function (e) {
    if (!C.CastleModel.tutorialData.isTutorialActive && this.selectedLord && this.canBeEquipped(this.selectedLord)) {
      b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleEquipmentDialog, new _.CastleEquipmentDialogProperties(null, this.selectedLord ? this.selectedLord.id : -1, this.isBaronPicker));
    }
  };
  CastleLordPicker.prototype.canBeEquipped = function (e) {
    return (!r.instanceOfClass(e, "BaronVO") || !e.isDummyBaron) && !!e && !r.instanceOfClass(e, "DefaultLordVO");
  };
  CastleLordPicker.prototype.destroy = function () {
    this._disp.btn_equipCommander.removeEventListener(E.CLICK, this.bindFunction(this.onEquipClick));
    h.CastleBasicController.getInstance().removeEventListener(p.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onEquipOrRename));
    this._lordComboBox.dispose();
    this._lordTooltipTrigger.hide();
  };
  CastleLordPicker.prototype.updateDisp = function () {
    this._disp.btn_equipCommander.mouseEnabled = true;
    var e = this.selectedLord;
    this._disp.btn_equipCommander.actLikeButton = e && e.isAvailableForEquip;
    this.addLordIcon(e);
    this._lordComboBox.disp.doCache();
  };
  CastleLordPicker.prototype.addLordIcon = function (e) {
    s.MovieClipHelper.clearMovieClip(this._disp.mc_lordHolder);
    m.EquipmentIconHelper.addLordIcon(e, this._disp.mc_lordHolder, 27, 30, Library.CastleInterfaceElements.FightScreenHeroLordContainer, true);
    this._disp.mc_lordHolder.mouseChildren = false;
    this._disp.mc_lordHolder.mouseEnabled = false;
  };
  Object.defineProperty(CastleLordPicker.prototype, "selectedLord", {
    get: function () {
      if (this.selectedIndex > -1 && this.selectedIndex < this._lordList.length) {
        return this._lordList[this.selectedIndex];
      } else {
        return this.premiumLord;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "premiumLord", {
    get: function () {
      return C.CastleModel.lordData.getDefaultLordByID(l.TravelConst.COMMANDER_PREMIUM);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "selectedIndex", {
    get: function () {
      return this._lordComboBox.selectedId;
    },
    set: function (e) {
      if (this._lordList.length == 0) {
        e = -1;
      } else {
        if (e >= this._lordList.length) {
          e = 0;
        }
        if (e < 0) {
          e = u.int(this._lordList.length - 1);
        }
      }
      this._lordComboBox.selectItemIndex(e);
      this.updateDisp();
      this.dispatchEvent(new d.BasicPickerEvent(d.BasicPickerEvent.PICKER_CHANGE_VALUE));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLordPicker.prototype, "lordTooltipTrigger", {
    get: function () {
      return this._lordTooltipTrigger;
    },
    enumerable: true,
    configurable: true
  });
  CastleLordPicker.MAX_LORDS_TO_SHOW = 21;
  return CastleLordPicker;
}(g.CastleEventDispatcher);
exports.CastleLordPicker = y;
var b = require("./9.js");
var D = require("./246.js");
var I = require("./178.js");
var T = require("./298.js");