Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./18.js");
var C = require("./39.js");
var _ = require("./26.js");
var m = require("./4.js");
var f = require("./379.js");
var O = require("./8.js");
var E = require("./1813.js");
var y = require("./131.js");
var b = createjs.Event;
var D = createjs.Point;
var I = function (e) {
  function CastleNavigationPanel() {
    return e.call(this, new Library.CastleInterfaceElements.NavigationPanel()) || this;
  }
  n.__extends(CastleNavigationPanel, e);
  CastleNavigationPanel.prototype.init = function () {
    e.prototype.init.call(this);
    new f.CastleFullScreenInputBlocker(this.navigationPanel.mc_block1);
    new f.CastleFullScreenInputBlocker(this.navigationPanel.mc_block2);
    new f.CastleFullScreenInputBlocker(this.navigationPanel.mc_block3);
    this.iinputx = this.textFieldManager.registerTextField(this.navigationPanel.input_x, new p.TextVO(""));
    this.iinputx.autoFitToBounds = true;
    this.iinputy = this.textFieldManager.registerTextField(this.navigationPanel.input_y, new p.TextVO(""));
    this.iinputy.autoFitToBounds = true;
    this.icastlename = this.textFieldManager.registerTextField(this.navigationPanel.input_castleName, new p.TextVO(d.Localize.text("panel_navigation_playername")));
    this.icastlename.autoFitToBounds = true;
    this.icastlename.focusIn.add(this.bindFunction(this.onFocusIn));
    this.icastlename.focusOut.add(this.bindFunction(this.onFocusOut));
    this.iinputx.tabIndex = 150;
    this.iinputy.tabIndex = 151;
    this.icastlename.tabIndex = 152;
    this.iinputx.restrict = "0-9";
    this.iinputy.restrict = "0-9";
    this.eilandPanel = new E.CastleEilandPanel(this.navigationPanel.mc_islandPanel, this);
    this.updateButtons();
  };
  CastleNavigationPanel.prototype.addEventListener = function () {
    this.iinputx.keyUp.add(this.bindFunction(this.onKeyUpXY));
    this.iinputy.keyUp.add(this.bindFunction(this.onKeyUpXY));
    this.icastlename.keyUp.add(this.bindFunction(this.onKeyUpName));
    m.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED, this.bindFunction(this.updateFactionBar));
    this.iinputx.focusOut.add(this.bindFunction(this.onFocusOutXY));
    this.iinputy.focusOut.add(this.bindFunction(this.onFocusOutXY));
  };
  CastleNavigationPanel.prototype.removeEventListener = function () {
    this.iinputx.keyUp.remove(this.bindFunction(this.onKeyUpXY));
    this.iinputy.keyUp.remove(this.bindFunction(this.onKeyUpXY));
    this.icastlename.keyUp.remove(this.bindFunction(this.onKeyUpName));
    m.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.FACTION_EVENT_FACTIONPOINTS_UPDATED, this.bindFunction(this.updateFactionBar));
    this.eilandPanel.removeListeners();
    this.iinputx.focusOut.remove(this.bindFunction(this.onFocusOutXY));
    this.iinputy.focusOut.remove(this.bindFunction(this.onFocusOutXY));
    A.CastleLayoutManager.getInstance().uiStage.removeEventListener(b.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
  };
  CastleNavigationPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.addEventListener();
    this.resetInputText();
    this.updateFactionBar();
    this.updateButtons();
    this.eilandPanel.initIslandPanel();
    this.eilandPanel.panel.visible = this.eilandPanel.isAvailable();
    this.allowCaching = true;
  };
  CastleNavigationPanel.prototype.hide = function () {
    this.removeEventListener();
    e.prototype.hide.call(this);
  };
  CastleNavigationPanel.prototype.updateButtons = function () {
    var e = !m.CastleModel.tutorialData.isTutorialActive;
    var t = C.ClientConstTextIds.NOT_AVAILABLE;
    O.ButtonHelper.enableButton(this.navigationPanel.btn_jumpTo, e);
    O.ButtonHelper.enableButton(this.navigationPanel.btn_playerSearch, e);
    O.ButtonHelper.enableButton(this.navigationPanel.btn_bookmarks, e);
    this.navigationPanel.btn_bookmarks.toolTipText = e ? "Bookmarks_markedLocations_tooltip" : t;
    this.navigationPanel.btn_playerSearch.toolTipText = e ? "panel_navigation_playername" : t;
    this.navigationPanel.btn_jumpTo.toolTipText = e ? "dialog_jumpto_targetSelected" : t;
  };
  CastleNavigationPanel.prototype.onEnterFrame = function (e) {
    this.invalidatedCache = false;
    this.updateCache();
    A.CastleLayoutManager.getInstance().uiStage.removeEventListener(b.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
  };
  CastleNavigationPanel.prototype.onKeyUpName = function (e) {
    if (!m.CastleModel.tutorialData.isTutorialActive) {
      if (e.key == s.Keyboard.ENTER) {
        document.activeElement.blur();
        this.onPlayerSearch();
      }
    }
  };
  CastleNavigationPanel.prototype.onKeyUpXY = function (e) {
    if (!m.CastleModel.tutorialData.isTutorialActive) {
      if (e.key == s.Keyboard.ENTER) {
        document.activeElement.blur();
        this.onJumpTo();
      }
    }
  };
  CastleNavigationPanel.prototype.onFocusOutXY = function (e) {
    this.invalidateCache();
  };
  CastleNavigationPanel.prototype.resetInputText = function () {
    this.iinputx.maxChars = 5;
    this.iinputy.maxChars = 5;
    this.icastlename.maxChars = u.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
    this.iinputx.textContentVO.stringValue = "";
    this.iinputy.textContentVO.stringValue = "";
    this.icastlename.textContentVO.stringValue = d.Localize.text("panel_navigation_playername");
  };
  CastleNavigationPanel.prototype.onFocusIn = function (e) {
    if (this.icastlename.text == d.Localize.text("panel_navigation_playername")) {
      this.icastlename.clearText();
      this.icastlename.maxChars = u.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
    }
    this.icastlename.setSelection(0, this.icastlename.text.length);
    this.invalidateCache();
  };
  CastleNavigationPanel.prototype.onFocusOut = function (e) {
    if (this.icastlename.text == "") {
      this.icastlename.maxChars = u.PlayerConst.CASTLE_NAME_MAX_LENGTH * 2;
      this.icastlename.textContentVO.stringValue = d.Localize.text("panel_navigation_playername");
    }
    this.invalidateCache();
  };
  CastleNavigationPanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.icastlename.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.icastlename.focusOut.remove(this.bindFunction(this.onFocusOut));
  };
  CastleNavigationPanel.prototype.onJumpTo = function () {
    if (this.checkInput(this.iinputx.text, this.iinputy.text)) {
      var e = h.int(h.int(this.iinputx.text));
      var t = h.int(h.int(this.iinputy.text));
      var i = new D(e, t);
      if (e < 0 || t < 0 || e >= g.ClientConstCastle.WORLD_WIDTH || t >= g.ClientConstCastle.WORLD_HEIGHT) {
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(d.Localize.text("generic_alert_information"), d.Localize.text("alert_noAvailableWorldmapPosition")));
        return;
      }
      this.layoutManager.worldmapScreen.camera.centerArea(i);
      var n = r.castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(e, t), "InteractiveMapobject");
      if (n) {
        n.showRingMenu();
      } else {
        var a = r.castAs(m.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(e, t), "InteractiveMapobjectVO");
        if (a && a.ownerInfo && a.ownerInfo.playerID != m.CastleModel.userData.playerID) {
          this.layoutManager.worldmapScreen.delayOpenRingMenu(a);
        }
      }
    }
  };
  CastleNavigationPanel.prototype.onPlayerSearch = function () {
    if (this.icastlename.text != d.Localize.text("panel_navigation_playername")) {
      m.CastleModel.worldmapData.searchPlayerByName(a.TextValide.trimPassword(this.icastlename.text).replace(/&quot;/g, "\""));
    }
  };
  CastleNavigationPanel.prototype.onOpenBookmarks = function () {
    T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleWorldmapBookmarkListDialog);
  };
  CastleNavigationPanel.prototype.updateFactionBar = function (e = null) {
    if (m.CastleModel.kingdomData.activeKingdomID == c.FactionConst.KINGDOM_ID && this.factionEventVO) {
      this.navigationPanel.mc_factionbar.visible = true;
      this.navigationPanel.mc_factionbar.mc_progress_panel.red_bar.scaleX = this.factionEventVO.percentRedFactionPoints * 0.01;
      this.navigationPanel.mc_factionbar.mc_mid.x = this.navigationPanel.mc_factionbar.mc_progress_panel.red_bar.x + this.navigationPanel.mc_factionbar.mc_progress_panel.red_bar.width;
      this.navigationPanel.mc_factionbar.mouseChildren = false;
      this.navigationPanel.mc_factionbar.toolTipText = {
        t: "faction_percentage_score",
        p: [this.factionEventVO.percentRedFactionPoints, this.factionEventVO.percentBlueFactionPoints]
      };
      if (e) {
        this.navigationPanel.updateCacheIfCached();
      }
    } else {
      this.navigationPanel.mc_factionbar.visible = false;
    }
  };
  CastleNavigationPanel.prototype.onClick = function (t) {
    if (!this.isLocked && !this.isWaitingForServerMessage && O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.navigationPanel.btn_jumpTo:
          this.onJumpTo();
          break;
        case this.navigationPanel.btn_playerSearch:
          this.onPlayerSearch();
          break;
        case this.navigationPanel.btn_bookmarks:
          this.onOpenBookmarks();
      }
    }
  };
  CastleNavigationPanel.prototype.checkInput = function (e, t) {
    return e != "" && t != "";
  };
  CastleNavigationPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = this.disp.stage.stageWidth / 2;
    }
  };
  Object.defineProperty(CastleNavigationPanel.prototype, "factionEventVO", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNavigationPanel.prototype, "navigationPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleNavigationPanel.prototype.invalidateCache = function () {
    A.CastleLayoutManager.getInstance().uiStage.addEventListener(b.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    this.invalidatedCache = true;
  };
  CastleNavigationPanel.NAME = "CastleNavigationPanel";
  return CastleNavigationPanel;
}(y.CastlePanel);
exports.CastleNavigationPanel = I;
var T = require("./9.js");
var v = require("./38.js");
var S = require("./1725.js");
var A = require("./17.js");