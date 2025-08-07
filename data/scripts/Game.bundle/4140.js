Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./39.js");
var y = require("./4141.js");
var b = require("./21.js");
var D = require("./192.js");
var I = require("./26.js");
var T = require("./32.js");
var v = require("./4.js");
var S = require("./68.js");
var A = require("./24.js");
var L = require("./4142.js");
var P = require("./847.js");
var M = createjs.MovieClip;
var R = createjs.Container;
var V = createjs.Event;
var x = createjs.MouseEvent;
var w = createjs.Rectangle;
var B = function (e) {
  function CastleKingdomOverviewScreen() {
    var t = this;
    t._screenIsLoaded = false;
    t.kingdomToolTip = new Library.CastleInterfaceElements.InfoTooltip_Kingdom();
    CONSTRUCTOR_HACK;
    var i = (t = e.call(this, CastleKingdomOverviewScreen.initScreenClip()) || this).disp;
    if (i.isLoaded) {
      t.initAfterLoaded(i);
    } else {
      i.clipLoaded.addOnce(t.bindFunction(t.initAfterLoaded));
    }
    return t;
  }
  n.__extends(CastleKingdomOverviewScreen, e);
  CastleKingdomOverviewScreen.initScreenClip = function () {
    return new A.CastleGoodgameExternalClip(CastleKingdomOverviewScreen.SCREEN_ASSET_NAME, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleKingdomOverviewScreen.SCREEN_ASSET_NAME), null, 0, false, d.getDefinitionByName("LoadingAnimation"));
  };
  CastleKingdomOverviewScreen.prototype.initAfterLoaded = function (e = null) {
    this._screenIsLoaded = true;
    this.screenDisp.addChild(this.kingdomToolTip);
    this.kingdomToolTip.visible = false;
    this.kingdomToolTip.mouseEnabled = false;
    this.kingdomToolTip.txt_line1.defaultCacheScale = 2;
    this.kingdomToolTip.txt_line2.defaultCacheScale = 2;
    this.screenDisp.mc_clouds.mouseEnabled = false;
    this.show();
  };
  CastleKingdomOverviewScreen.prototype.show = function () {
    if (this._screenIsLoaded) {
      this.drawBG();
      this.updateKingdomMap();
      e.prototype.show.call(this);
      this.screenDisp.addEventListener(x.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.screenDisp.addEventListener(x.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.disp.addEventListener(x.CLICK, this.bindFunction(this.onClick));
      v.CastleModel.kingdomData.addEventListener(D.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
      v.CastleModel.specialEventData.addEventListener(I.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventFinished));
      this.controller.addEventListener(T.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
      v.CastleModel.smartfoxClient.sendCommandVO(new y.C2SLeaveAreaVO());
    }
  };
  CastleKingdomOverviewScreen.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.screenDisp.removeEventListener(x.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.screenDisp.removeEventListener(x.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(x.CLICK, this.bindFunction(this.onClick));
    v.CastleModel.kingdomData.removeEventListener(D.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    v.CastleModel.specialEventData.removeEventListener(I.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventFinished));
    this.controller.removeEventListener(T.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
    v.CastleModel.timerData.removeEventListener(b.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleKingdomOverviewScreen.prototype.onEventFinished = function (e) {
    if (p.instanceOfClass(e.specialEventVO, "FactionEventVO")) {
      this.updateKingdomMap();
    }
  };
  CastleKingdomOverviewScreen.prototype.onKingdomDataUpdated = function (e) {
    this.updateKingdomMap();
  };
  CastleKingdomOverviewScreen.prototype.updateKingdomMap = function () {
    for (var e = 0; e < this.screenDisp.numChildren; e++) {
      var t = this.screenDisp.getChildAt(e);
      if (this.isMcKingdomMC(t)) {
        var i = this.getKingdomVOByKingdomMCName(t.name);
        this.updateLock(i);
        t.useFilters(S.BitmapFilterHelper.NO_FILTER, false);
        t.actLikeButton = true;
        if (t.mc_glow) {
          t.mc_glow.useFilters(S.BitmapFilterHelper.NO_FILTER, true);
        }
        t.mouseEnabled = true;
        t.mouseChildren = false;
        t.mc_crest.scaleX = t.mc_crest.scaleY = 0.5;
        var n = t[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + i.kID];
        if (n) {
          n.scaleX = n.scaleY = 0.5;
          n.visible = v.CastleModel.kingdomData.isKingdomUnlocked(i.kID);
          if (n.visible) {
            this.setFlagColor(n);
          }
          n.doCache();
        }
      }
    }
    this.screenDisp.mc_royal_capital_crest.visible = false;
  };
  CastleKingdomOverviewScreen.prototype.setFlagColor = function (e) {
    for (var t = v.CastleModel.userData.playerCrest.colorsTwo, i = 0; i < t.length; i++) {
      var n = new c.ColorTransform();
      n.color = t[i];
      e["cc" + i].useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
    }
  };
  CastleKingdomOverviewScreen.prototype.updateLock = function (e) {
    if (e) {
      var t = u.castAs(this.screenDisp["mc_lock_" + e.kID], "MovieClip");
      if (t) {
        this.setKingdomLockTxtLevel(e, t);
        var i = u.castAs(t.lvl_Bg, "MovieClip");
        if (i) {
          i.visible = !e.isBlockedByServer;
        }
        t.mouseChildren = false;
        t.mouseEnabled = false;
        t.visible = !this.hasMinLevel(e) && this.isKingdomActive(e) || e.isBlockedByServer;
        if (e.kID == g.FactionConst.KINGDOM_ID) {
          this.screenDisp.mc_clouds.visible = !this.isKingdomActive(e);
        }
      }
      var n = u.castAs(this.screenDisp[CastleKingdomOverviewScreen.MC_RUBY_LOCK_PREFIX + e.kID], "MovieClip");
      if (n) {
        n.mouseChildren = false;
        n.mouseEnabled = false;
        n.visible = e.canBeUnlockedEarlyWithC2 && !e.isPaid && v.CastleModel.userData.userLevel >= e.minPremiumUnlockLevel && v.CastleModel.userData.userLevel < e.minNonPremiumUnlockLevel;
      }
    }
  };
  CastleKingdomOverviewScreen.prototype.setKingdomLockTxtLevel = function (e, t) {
    if (e.isBlockedByServer) {
      this.textFieldManager.registerTextField(t.txt_level, new O.TextVO(" "));
    } else {
      this.textFieldManager.registerTextField(t.txt_level, new f.NumberVO(e.minLevel));
    }
  };
  CastleKingdomOverviewScreen.prototype.onTimerUpdate = function (e) {
    this.setResetTimerTooltip();
  };
  CastleKingdomOverviewScreen.prototype.onClick = function (e) {
    if (this.isMcKingdomMC(e.target)) {
      var t = this.getKingdomVOByKingdomMCName(e.target.name);
      if (!this.isKingdomActive(t) || t.isBlockedByServer) {
        return;
      }
      if (!this.isKingdomVOClickable(t) && t.kID != g.FactionConst.KINGDOM_ID) {
        var i = new L.CastleKingdomTeaserProperties(t);
        s.CommandController.instance.executeCommand(F.IngameClientCommands.OPEN_KINGDOM_TEASER, i);
        return;
      }
      if (t.hasTimer && t.resetTime <= 0) {
        s.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_SERVER_ERROR, new r.ServerErrorVO(1, []));
        return;
      }
      if (t.kID == g.FactionConst.KINGDOM_ID) {
        s.CommandController.instance.executeCommand(F.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
        return;
      }
      if (t.kID == C.WorldIsland.KINGDOM_ID) {
        N.CastleDialogHandler.getInstance().registerDefaultDialogs(G.CastleStormIslandsMainDialog, new H.CastleStormIslandsMainDialogProperties(G.CastleStormIslandsMainDialog.TAB_MAIN));
        return;
      }
      v.CastleModel.kingdomData.tempTargetSpaceID = t.kID;
      N.CastleDialogHandler.getInstance().registerDefaultDialogs(k.CastleHandleKingdomDialog, new U.CastleHandleKingdomDialogProperties(t));
    }
    if (e.target == this.screenDisp.btn_close) {
      this.hide();
    }
  };
  CastleKingdomOverviewScreen.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this.isMcKingdomMC(t.target)) {
      var i = this.getKingdomVOByKingdomMCName(t.target.name);
      if (this.isKingdomActive(i)) {
        var n = t.target.mc_glow ? t.target.mc_glow.filters : t.target.filters;
        n = n.concat(S.BitmapFilterHelper.FILTER_GLOW_KINGDOM_OVERVIEW);
        if (t.target.mc_glow) {
          t.target.mc_glow.useFilters(n, true, 1);
        } else {
          t.target.useFilters(n, true, 1);
        }
        if (t.target.mc_crest) {
          t.target.mc_crest.scaleX = t.target.mc_crest.scaleY = 0.6;
        }
        if (t.target[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + i.kID]) {
          t.target[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + i.kID].scaleY = t.target[CastleKingdomOverviewScreen.MC_FLAG_PREFIX + i.kID].scaleX = 0.6;
        }
        this.showKingdomToolTip(t.target, i);
      }
    }
  };
  CastleKingdomOverviewScreen.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.kingdomToolTip.visible = false;
    this.updateKingdomMap();
    if (t.target == this.screenDisp.mc_kingdom_4) {
      v.CastleModel.timerData.removeEventListener(b.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  CastleKingdomOverviewScreen.prototype.getKingdomVOByKingdomMCName = function (e) {
    var t = parseInt(e.slice(CastleKingdomOverviewScreen.MC_KINGDOM_PREFIX.length));
    return v.CastleModel.kingdomData.getKingdomVOByID(t);
  };
  CastleKingdomOverviewScreen.prototype.isKingdomVOClickable = function (e) {
    return this.hasMinLevel(e) && this.isKingdomActive(e) && v.CastleModel.kingdomData.isKingdomUnlockable(e);
  };
  CastleKingdomOverviewScreen.prototype.hasMinLevel = function (e) {
    return v.CastleModel.userData.userLevel >= e.minLevel;
  };
  CastleKingdomOverviewScreen.prototype.isKingdomActive = function (e) {
    return e.kID != g.FactionConst.KINGDOM_ID || v.CastleModel.specialEventData.isEventActive(h.EventConst.EVENTTYPE_FACTION);
  };
  CastleKingdomOverviewScreen.prototype.showKingdomToolTip = function (e, t) {
    this._itxtKingdomName = this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line1, new O.TextVO(t.kingdomNameString));
    this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new O.TextVO(""));
    if (this.isKingdomActive(t)) {
      if (v.CastleModel.kingdomData.isKingdomUnlockable(t)) {
        if (v.CastleModel.userData.userLevel >= t.minLevel) {
          if (t.isPaid) {
            if (t.kID == C.WorldIsland.KINGDOM_ID) {
              this.setResetTimerTooltip();
              v.CastleModel.timerData.addEventListener(b.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
            }
          } else {
            this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new m.LocalizedTextVO("kingdom_isLocked"));
          }
        } else {
          this.setRequiredLevelToolTip(t);
        }
      } else {
        this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new m.LocalizedTextVO("kingdom_needOtherKingdoms"));
      }
    }
    if (t.isBlockedByServer) {
      this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new m.LocalizedTextVO("alert_not_available"));
    }
    this.kingdomToolTip.x = e.x + e.mc_crest.x;
    if (t.kID == g.FactionConst.KINGDOM_ID && this.screenDisp.stage.stageHeight <= 600 && this.screenDisp.stage.stageWidth <= 800) {
      this.kingdomToolTip.x += this._itxtKingdomName.textWidth / 2;
    }
    this.kingdomToolTip.y = Math.max(e.y + e.mc_crest.y, this.kingdomToolTip.height + 20);
    this.kingdomToolTip.mouseEnabled = false;
    this.kingdomToolTip.mouseChildren = false;
    this.kingdomToolTip.visible = true;
  };
  CastleKingdomOverviewScreen.prototype.setRequiredLevelToolTip = function (e) {
    if (e.canBeUnlockedEarlyWithC2 && this.hasMinLevelToBuy(e)) {
      if (!e.isPaid) {
        this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new m.LocalizedTextVO("kingdom_unlockable"));
      }
    } else {
      this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new m.LocalizedTextVO(E.ClientConstTextIds.LEVEL_NEEDED, [e.minLevel]));
    }
  };
  CastleKingdomOverviewScreen.prototype.hasMinLevelToBuy = function (e) {
    return v.CastleModel.userData.userLevel >= e.minPremiumUnlockLevel;
  };
  CastleKingdomOverviewScreen.prototype.setResetTimerTooltip = function () {
    var e = _.Localize.text("kingdom_islandResetTimer_2") + "\n" + l.TimeStringHelper.getTimeToString(v.CastleModel.kingdomData.getKingdomVOByID(C.WorldIsland.KINGDOM_ID).resetTime, l.TimeStringHelper.TWO_TIME_FORMAT, _.Localize.text, false, true);
    this.textFieldManager.registerTextField(this.kingdomToolTip.txt_line2, new O.TextVO(e));
  };
  CastleKingdomOverviewScreen.prototype.updatePosition = function () {
    var e = new w(0, 0, 800, 600);
    var t = this.screenDisp.stage;
    if (t) {
      var i = t.stageHeight / e.height;
      this.screenDisp.x = -e.left * i - e.width * i / 2 + t.stageWidth / 2;
      this.screenDisp.y = 0;
      this.screenDisp.scaleX = this.screenDisp.scaleY = i;
    }
    this.resizeBG();
  };
  CastleKingdomOverviewScreen.prototype.drawBG = function () {
    if (!this._bg) {
      this._bg = new R();
      this._bg.graphics.beginFill(5148064, 1);
      this._bg.graphics.drawRect(0, 0, 1, 1);
      this._bg.graphics.endFill();
      this._bg.addEventListener(V.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
      this.screenDisp.addChildAt(this._bg, 0);
    }
  };
  CastleKingdomOverviewScreen.prototype.onBGAddedToStage = function (e) {
    this._bg.removeEventListener(V.ADDED_TO_STAGE, this.bindFunction(this.onBGAddedToStage));
    this.resizeBG();
  };
  CastleKingdomOverviewScreen.prototype.resizeBG = function () {
    if (this._bg && this._bg.stage) {
      this._bg.width = this._bg.stage.stageWidth / this.screenDisp.scaleX;
      this._bg.height = this._bg.stage.stageHeight / this.screenDisp.scaleY;
      this._bg.x = -this.screenDisp.x / this.screenDisp.scaleX;
    }
    if (this.screenDisp && this.screenDisp.getChildByName("bitmap_1")) {
      this.screenDisp.getChildByName("bitmap_1").doCache();
    }
  };
  Object.defineProperty(CastleKingdomOverviewScreen.prototype, "screenDisp", {
    get: function () {
      return this.disp.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleKingdomOverviewScreen.prototype.isMcKingdomMC = function (e) {
    return e instanceof M && e.name && e.name.indexOf(CastleKingdomOverviewScreen.MC_KINGDOM_PREFIX) > -1;
  };
  CastleKingdomOverviewScreen.prototype.onUserLevelUp = function (e) {
    this.updateKingdomMap();
  };
  CastleKingdomOverviewScreen.NAME = "CastleKingdomOverviewScreen";
  CastleKingdomOverviewScreen.SCREEN_ASSET_NAME = "CastleKingdomOverview";
  CastleKingdomOverviewScreen.MC_KINGDOM_PREFIX = "mc_kingdom_";
  CastleKingdomOverviewScreen.MC_FLAG_PREFIX = "mc_kingdomFlag_";
  CastleKingdomOverviewScreen.MC_RUBY_LOCK_PREFIX = "mc_rubyLock_";
  return CastleKingdomOverviewScreen;
}(P.CastleScreen);
exports.CastleKingdomOverviewScreen = B;
var F = require("./29.js");
var N = require("./9.js");
var k = require("./1756.js");
var U = require("./1766.js");
var G = require("./474.js");
var H = require("./1125.js");