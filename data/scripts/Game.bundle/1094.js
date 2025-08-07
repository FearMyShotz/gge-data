Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./28.js");
var h = require("./46.js");
var g = require("./30.js");
var C = require("./355.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./27.js");
var O = require("./24.js");
var E = require("./157.js");
var y = require("./14.js");
var b = require("./8.js");
var D = createjs.Point;
var I = function (e) {
  function GlobalEffectEventDialogListItem(t, i) {
    var n = e.call(this, new (l.getDefinitionByName("GlobalEffectEventListItem"))(), i) || this;
    n._data = t;
    n.fill();
    return n;
  }
  n.__extends(GlobalEffectEventDialogListItem, e);
  GlobalEffectEventDialogListItem.prototype.updateTimer = function () {
    f.CastleTimeStringHelper.setEventTime(this.disp.headerMC.txt_time, this.remainingTimeInSeconds);
  };
  GlobalEffectEventDialogListItem.prototype.fill = function () {
    b.ButtonHelper.initButton(this.disp.mc_boost.btn_buy, 1, P.ClickFeedbackButtonHover);
    a.MovieClipHelper.clearMovieClip(this.disp.headerMC.mc_icon);
    var e = "Global_Effect_Icon_" + this.globalEffectVO.globalEffectID;
    if (r.BasicModel.basicLoaderData.isItemAssetVersioned(e)) {
      var t = new O.CastleGoodgameExternalClip(e, h.IsoHelper.view.getAssetFileURL(e));
      t.clipSizeComponent = new s.ClipSizeComponent(52, 52);
      this.disp.headerMC.mc_icon.addChild(t);
    }
    y.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_title, new c.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("globaleffect_name_" + this.globalEffectVO.name)));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.headerMC.txt_copy, new u.LocalizedTextVO("globaleffect_desc_" + this.globalEffectVO.name, [this.globalEffectVO.bonus.strength]));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.txt_copy, new u.LocalizedTextVO("dialog_globalEffects_desc"));
    this.disp.headerMC.mc_new.visible = this.isNew;
    this.disp.headerMC.mc_boosted.visible = this.isBoosted;
    y.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.txt_kingdoms, new c.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_kingdoms")));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.contentMC.txt_events, new c.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_events")));
    for (var i = 0; i < 5; i++) {
      a.MovieClipHelper.clearMovieClip(this.disp.contentMC["mc_kindom" + i]);
      if (i < this.globalEffectVO.displayKingdomIDs.length) {
        this.disp.contentMC["mc_kindom" + i].addChild(new O.CastleGoodgameExternalClip("GlobEff_KingdomIcon_" + this.globalEffectVO.displayKingdomIDs[i], r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(T.GlobalEffectEventDialog.NAME), null, 0, false));
        this.disp.contentMC["mc_kindom" + i].toolTipText = m.CastleModel.kingdomData.getKingdomVOByID(this.globalEffectVO.displayKingdomIDs[i]).kingdomNameString;
        this.disp.contentMC["mc_kindom" + i].mouseChildren = false;
      }
    }
    this.disp.contentMC.mc_small.visible = this.useSmallEventMC;
    this.disp.contentMC.mc_big.visible = !this.useSmallEventMC;
    var n = 0;
    for (var o = d.int(this.useSmallEventMC ? 6 : 12), l = 0; l < o; l++) {
      var p = l < this.eventsToShow.length;
      var g = this.useEventMC["mc_event" + l];
      g.visble = p;
      a.MovieClipHelper.clearMovieClip(g);
      if (p) {
        g.addChild(C.EventIconHelper.createEventIconByEventID(this.eventsToShow[n].eventId, new D(50, 50)));
        g.mouseChildren = false;
        g.toolTipText = "event_title_" + this.eventsToShow[n].eventId;
        n++;
      }
    }
    this.disp.mc_boost.visible = !this.isBoosted && this.isBoostAble;
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_boost.txt_copy, new u.LocalizedTextVO("globaleffect_desc_" + this.globalEffectVO.name, [this.boostStrength]));
    y.CastleComponent.textFieldManager.registerTextField(this.disp.mc_boost.btn_buy.txt_copy, new S.CastleLocalizedNumberVO(this.boostC2));
    this.updateTimer();
    this.disp.headerMC.mouseChildren = false;
    this.disp.mouseChildren = true;
    this.disp.headerMC.actLikeButton = true;
    this.applyStateChange();
  };
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boosterY", {
    get: function () {
      if (this.isExpanded) {
        if (this.useSmallEventMC) {
          return 270;
        } else {
          return 340;
        }
      } else {
        return 70;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "eventsToShow", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventsByIds(this.globalEffectVO.displayEventIDs);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "useSmallEventMC", {
    get: function () {
      return this.eventsToShow.length <= 6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "useEventMC", {
    get: function () {
      if (this.useSmallEventMC) {
        return this.disp.contentMC.mc_small;
      } else {
        return this.disp.contentMC.mc_big;
      }
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectEventDialogListItem.prototype.applyStateChange = function () {
    e.prototype.applyStateChange.call(this);
    this.disp.mc_boost.y = this.boosterY;
    if (this.isExpanded) {
      this.disp.headerMC.mc_selected.visible = true;
      this.disp.headerMC.mc_arrow.visible = false;
    } else {
      this.disp.headerMC.mc_selected.visible = false;
      this.disp.headerMC.mc_arrow.visible = true;
    }
  };
  GlobalEffectEventDialogListItem.prototype.onClick = function (t) {
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.headerMC:
          this.expand(!this.isExpanded, true);
          break;
        case this.disp.mc_boost.btn_buy:
          A.CastleDialogHandler.getInstance().registerDialogs(L.ModernYesNoDialog, new a.BasicStandardYesNoDialogProperties("dialog_globalEffect_boostBuy_title", "dialog_globalEffect_boostBuy", this.bindFunction(this.onBuy)));
      }
    }
  };
  GlobalEffectEventDialogListItem.prototype.onBuy = function (e = null) {
    if (m.CastleModel.currencyData.c2Amount >= this.boostC2) {
      r.BasicModel.smartfoxClient.sendCommandVO(new M.C2SActivateGlobalEffectBuffVO(this.globalEffectVO.globalEffectID));
    } else {
      A.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleNoMoneyC2Dialog, new V.CastleNoMoneyC2DialogProperties());
    }
  };
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "height", {
    get: function () {
      var e = this.disp.mc_boost.visible ? this.disp.mc_boost.height : 0;
      if (this.isExpanded) {
        return this.contentMC.y + this.useEventMC.y + this.useEventMC.height + e;
      } else {
        return this._headerMC.height + e;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.ACollapsibleItem.prototype, "height").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "globalEffectVO", {
    get: function () {
      return this._data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "remainingTimeInSeconds", {
    get: function () {
      return (this._data[1] - g.CachedTimer.getCachedTimer()) * p.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boostStrength", {
    get: function () {
      if (this.boostEvent) {
        return this.boostEvent.getBoostValueForGlobalEffect(this.globalEffectVO.globalEffectID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boostC2", {
    get: function () {
      if (this.boostEvent) {
        return this.boostEvent.getBoostC2CostForGlobalEffect(this.globalEffectVO.globalEffectID);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "isBoostAble", {
    get: function () {
      return !!this.boostEvent && this.boostEvent.isEffectBoostable(this.globalEffectVO.globalEffectID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "isBoosted", {
    get: function () {
      return !!this.boostEvent && this.boostEvent.isEffectBoostable(this.globalEffectVO.globalEffectID) && m.CastleModel.globalEffectData.isEffectBoosted(this.globalEffectVO.globalEffectID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "boostEvent", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventByEventId(v.EventConst.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalEffectEventDialogListItem.prototype, "isNew", {
    get: function () {
      return !this._data[2];
    },
    enumerable: true,
    configurable: true
  });
  return GlobalEffectEventDialogListItem;
}(E.ACollapsibleItem);
exports.GlobalEffectEventDialogListItem = I;
var T = require("./1769.js");
var v = require("./5.js");
var S = require("./85.js");
var A = require("./9.js");
var L = require("./283.js");
var P = require("./20.js");
var M = require("./3724.js");
var R = require("./138.js");
var V = require("./135.js");
o.classImplementsInterfaces(I, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");