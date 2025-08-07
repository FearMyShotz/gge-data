Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./92.js");
var r = require("./8.js");
var l = function (e) {
  function WorldMapCastleInfoMenu() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.RingMenu_CastleInfo_Charge()) || this).buttons = new Map();
    t.register(new P.ButtonVisitCastleComponent(t.ringMenu.btn_visitcastle));
    t.register(new d.ButtonAttackComponent(t.ringMenu.btn_attack));
    t.register(new C.ButtonAttackVillageComponent(t.ringMenu.btn_attackVillage));
    t.register(new g.ButtonAttackResourceIsleComponent(t.ringMenu.btn_attackResourceIsle));
    t.register(new p.ButtonAttackKingstowerComponent(t.ringMenu.btn_attackKingstower));
    t.register(new T.ButtonSpyComponent(t.ringMenu.btn_spymenu));
    t.register(new _.ButtonAutoSpyComponent(t.ringMenu.btn_autoSpy));
    t.register(new b.ButtonPlagueMonkComponent(t.ringMenu.btn_plagueMonk));
    t.register(new O.ButtonConquerComponent(t.ringMenu.btn_conquer));
    t.register(new m.ButtonBookmarkComponent(t.ringMenu.btn_bookmark));
    t.register(new y.ButtonGiftComponent(t.ringMenu.btn_gift));
    t.register(new A.ButtonTradeComponent(t.ringMenu.btn_trademenu));
    t.register(new I.ButtonSendTroopsComponent(t.ringMenu.btn_sendTroups));
    t.register(new D.ButtonPlayerInfoComponent(t.ringMenu.btn_showPlayerInfo));
    t.register(new v.ButtonSupportDefenceComponent(t.ringMenu.btn_supportDefence));
    t.register(new E.ButtonDefenceComponent(t.ringMenu.btn_defence));
    t.register(new f.ButtonConquerAttackComponent(t.ringMenu.btn_attackAndConquer));
    t.register(new h.ButtonAttackLandmarkComponent(t.ringMenu.btn_attackMonument));
    t.register(new L.ButtonUpgradeLandmarkComponent(t.ringMenu.btn_upgradeMonument));
    t.register(new c.ButtonAlienRerollComponent(t.ringMenu.btn_reroll));
    t.register(new S.ButtonTauntComponent(t.ringMenu.btn_taunt));
    r.ButtonHelper.initBasicButton(t.ringMenu.btn_attackCollector);
    t.register(new u.ButtonAttackCollectorComponent(t.ringMenu.btn_attackCollector));
    t.ringMenu.btn_attack_charge_effect.visible = false;
    t.ringMenu.btn_attack_charge_pvp.visible = false;
    return t;
  }
  n.__extends(WorldMapCastleInfoMenu, e);
  WorldMapCastleInfoMenu.prototype.register = function (e) {
    this.buttons.set(e.targetMC, e);
  };
  WorldMapCastleInfoMenu.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (this.worldMapTarget) {
      this.initButtons();
    }
  };
  WorldMapCastleInfoMenu.prototype.onClick = function (t) {
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      var i = this.buttons.get(t.target);
      if (i) {
        i.onClick();
      }
      this.hide();
    }
  };
  WorldMapCastleInfoMenu.prototype.onMouseOver = function (t) {
    var i;
    e.prototype.onMouseOver.call(this, t);
    this.hideInfoTexts();
    var n = this.buttons.get(t.target);
    if (n) {
      i = n.infoTextId;
      this.showInfoText(o.Localize.text(i));
    }
  };
  WorldMapCastleInfoMenu.prototype.initComponent = function () {
    if (this.target) {
      e.prototype.initComponent.call(this);
      this.initButtons();
    }
  };
  WorldMapCastleInfoMenu.prototype.initButtons = function () {
    this.hideInfoTexts();
    if (this.buttons != null) {
      for (var e = 0, t = Array.from(this.buttons.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.targetWMO = this.worldMapTarget.worldmapObjectVO;
          i.initAsRingmenuButton();
        }
      }
    }
  };
  WorldMapCastleInfoMenu.prototype.showInfoText = function (e) {
    this.textFieldManager.registerTextField(this.ringMenu.mc_infoText.txt_info, new a.TextVO(e));
    this.ringMenu.mc_infoText.visible = true;
  };
  WorldMapCastleInfoMenu.prototype.hideInfoTexts = function () {
    this.ringMenu.mc_infoText.visible = false;
  };
  Object.defineProperty(WorldMapCastleInfoMenu.prototype, "ringMenu", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapCastleInfoMenu.prototype.updateMenuPosition = function () {
    if (this._target && this.worldMapTarget.worldmapObjectVO.isVisibleOnMap) {
      e.prototype.updateMenuPosition.call(this);
    } else {
      this.hide();
    }
  };
  WorldMapCastleInfoMenu.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.hideInfoTexts();
  };
  WorldMapCastleInfoMenu.prototype.hide = function () {
    this.disposeButtons();
    e.prototype.hide.call(this);
    this.controller.dispatchEvent(new s.IsoEvent(s.IsoEvent.HIDE_PANEL_INFO, []));
  };
  WorldMapCastleInfoMenu.prototype.disposeButtons = function () {
    if (this.buttons != null) {
      for (var e = 0, t = Array.from(this.buttons.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i) {
          i.destroy();
        }
      }
    }
  };
  WorldMapCastleInfoMenu.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    if (this.buttons != null) {
      for (var t = 0, i = Array.from(this.buttons.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
  };
  WorldMapCastleInfoMenu.prototype.hideWithSpecificMapObject = function (e) {
    return e == this.worldMapTarget && (this.hide(), true);
  };
  WorldMapCastleInfoMenu.NAME = "WorldMapCastleinfoMenu";
  return WorldMapCastleInfoMenu;
}(require("./1875.js").WorldMapRingMenu);
exports.WorldMapCastleInfoMenu = l;
var c = require("./4178.js");
var u = require("./4186.js");
var d = require("./618.js");
var p = require("./4187.js");
var h = require("./4188.js");
var g = require("./4189.js");
var C = require("./4190.js");
var _ = require("./4191.js");
var m = require("./1354.js");
var f = require("./4192.js");
var O = require("./1876.js");
var E = require("./1235.js");
var y = require("./1340.js");
var b = require("./1404.js");
var D = require("./4193.js");
var I = require("./4194.js");
var T = require("./1862.js");
var v = require("./1402.js");
var S = require("./4195.js");
var A = require("./4199.js");
var L = require("./4200.js");
var P = require("./4201.js");