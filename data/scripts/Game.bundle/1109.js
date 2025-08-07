Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./1110.js");
var h = require("./4.js");
var g = require("./306.js");
var C = require("./68.js");
var _ = require("./9.js");
var m = require("./3881.js");
var f = require("./3917.js");
var O = function (e) {
  function CastleCheatPanel() {
    var t = this;
    t.tabIndex = -1;
    t.isTabActive = false;
    t.enteredCheats = [];
    t.enteredCheatsArrowPosY = [-75, -57, -42, -25, -10];
    t.historyTabIndex = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.CheatPanel()) || this).i_cheat_txt_input = t.textFieldManager.registerTextField(t.panel.mc_moveArea.txt_input_cheat, new u.TextVO(""));
    return t;
  }
  n.__extends(CastleCheatPanel, e);
  Object.defineProperty(CastleCheatPanel, "isTravelCheatActive", {
    get: function () {
      return CastleCheatPanel.isTravelBoostActive || CastleCheatPanel.isQuickAttackActive;
    },
    enumerable: true,
    configurable: true
  });
  CastleCheatPanel.prototype.updatePosition = function () {
    e.prototype.updatePosition.call(this);
    if (this.disp && this.disp.stage) {
      this.disp.x = 0;
      this.disp.y = this.disp.stage.stageHeight - this.panel.height - 100;
    }
  };
  CastleCheatPanel.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.i_cheat_txt_input.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.i_cheat_txt_input.focusOut.remove(this.bindFunction(this.onFocusOut));
    CastleCheatPanel.isQuickAttackActive = false;
    CastleCheatPanel.isTravelBoostActive = false;
    if (this.env.isTest && this.lagInformationPanel) {
      this.lagInformationPanel.destroy();
    }
  };
  CastleCheatPanel.prototype.onAddedToStage = function (t) {
    e.prototype.onAddedToStage.call(this, t);
    this.i_cheat_txt_input.keyUp.add(this.bindFunction(this.handleEnter));
    this.fadeInPanel();
  };
  CastleCheatPanel.prototype.onRemovedFromStage = function (t) {
    e.prototype.onRemovedFromStage.call(this, t);
    this.i_cheat_txt_input.keyUp.remove(this.bindFunction(this.handleEnter));
  };
  CastleCheatPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.panel.mc_moveArea.btn_travelboost.basicButton = new o.BasicButton(this.panel.mc_moveArea.btn_travelboost, true);
    this.panel.mc_moveArea.btn_send.basicButton = new o.BasicButton(this.panel.mc_moveArea.btn_send, true);
    this.panel.mc_moveArea.btn_quickAttack.basicButton = new o.BasicButton(this.panel.mc_moveArea.btn_quickAttack, true);
    this.panel.mc_moveArea.btn_fps.basicButton = new o.BasicButton(this.panel.mc_moveArea.btn_fps, true);
    this.panel.mc_moveArea.mc_units1.basicButton = new o.BasicButton(this.panel.mc_moveArea.mc_units1, true);
    r.MovieClipHelper.clearMovieClip(this.panel.mc_moveArea.mc_units1);
    D.WodPicHelper.addUnitPic(h.CastleModel.wodData.createVObyWOD(714, E.CastleWodData.TYPE_UNIT), this.panel.mc_moveArea.mc_units1, 30, 26, h.CastleModel.userData.playerCrest.colorsTwo[0], h.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.panel.mc_moveArea.mc_units1.alpha = 1;
    this.panel.mc_moveArea.btn_travelboost.toolTipText = "Travelboost";
    this.panel.mc_moveArea.btn_quickAttack.toolTipText = "QuickAttack";
    this.panel.mc_moveArea.btn_send.toolTipText = "send";
    this.panel.mc_moveArea.mc_units1.toolTipText = "gets 500 Rankrewardmelee";
    this.panel.mc_moveArea.btn_fps.toolTipText = "Cheat / Bot Dialog";
    this.panel.mc_moveArea.btn_setAll.toolTipText = "Fill Storage + Grant C1/C2";
    var t = g.CastleVersionInformation.versionInstance.versionText;
    this.panel.mc_moveArea.txt_buildinfo.text = t;
    this.panel.mc_moveArea.txt_buildinfo.selectable = true;
    if (this.env.versionInformation.serverXMLVersion == this.env.versionInformation.itemXmlVersion) {
      this.panel.mc_moveArea.txt_buildinfo.textColor = 10066329;
    } else {
      this.panel.mc_moveArea.txt_buildinfo.textColor = 16746751;
    }
    a.BasicModel.instanceProxy.getInstancesForActualCountry();
    this.panel.mc_moveArea.txt_serverName.text = c.Localize.text(a.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId);
    if (s.EnvGlobalsHandler.globals.isTest) {
      this.lagInformationPanel = new f.CastleLagInformationPanel();
      this.panel.addChild(this.lagInformationPanel);
      this.lagInformationPanel.initialize();
    } else {
      this.panel.mc_moveArea.mc_units1.visible = false;
      this.panel.mc_moveArea.btn_setAll.visible = false;
    }
    this.panel.mc_moveArea.mc_tab.visible = false;
    this.allowCaching = true;
    this.i_cheat_txt_input.focusIn.add(this.bindFunction(this.onFocusIn));
    this.i_cheat_txt_input.focusOut.add(this.bindFunction(this.onFocusOut));
  };
  CastleCheatPanel.prototype.onFocusIn = function (e) {
    I.CastleLayoutManager.getInstance().dispatchEvent(new T.CastleLayoutManagerEvent(T.CastleLayoutManagerEvent.LOCK_CAMERA, [true]));
  };
  CastleCheatPanel.prototype.onFocusOut = function (e) {
    I.CastleLayoutManager.getInstance().dispatchEvent(new T.CastleLayoutManagerEvent(T.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
  };
  CastleCheatPanel.prototype.onCursorOver = function (t) {
    e.prototype.onCursorOver.call(this, t);
    this.isTabActive = false;
    this.fitCheats = [];
    this.tabIndex = -1;
  };
  Object.defineProperty(CastleCheatPanel.prototype, "panel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCheatPanel.prototype.handleEnter = function (e) {
    if (e.key == l.Keyboard.ENTER && !this.layoutManager.isDialogVisible(y.CastleStandardOkDialog)) {
      this.handleCommand();
    }
    if (e.key == l.Keyboard.DOWN || e.key == l.Keyboard.UP) {
      this.handleTab(e);
    } else {
      this.endTabbing();
    }
    if (e.key == l.Keyboard.PAGE_UP || e.key == l.Keyboard.PAGE_DOWN) {
      this.handleCommandHistory(e.key == l.Keyboard.PAGE_UP);
    } else {
      this.panel.mc_moveArea.mc_tab.visible = false;
    }
  };
  CastleCheatPanel.prototype.handleCommandHistory = function (e) {
    if (this.enteredCheats.length !== 0) {
      if (this.historyTabIndex == 0 && e) {
        this.historyTabIndex = d.int(this.enteredCheats.length - 1);
      } else if (this.historyTabIndex != this.enteredCheats.length - 1 || e) {
        if (e) {
          this.historyTabIndex--;
        } else {
          this.historyTabIndex++;
        }
      } else {
        this.historyTabIndex = 0;
      }
      this.i_cheat_txt_input.textContentVO.stringValue = this.enteredCheats[this.historyTabIndex];
      this.panel.mc_moveArea.mc_tab.visible = true;
      var t = "";
      for (var i = 0, n = d.int(Math.max(Math.min(this.historyTabIndex - 2, this.enteredCheats.length - 5), 0)); n < this.enteredCheats.length && i < 5 && !(n >= this.enteredCheats.length); n++) {
        if (t.length > 0) {
          t += "\n";
        }
        t += this.enteredCheats[n].substring(0, 14) + (this.enteredCheats[n].length > 14 ? "..." : "");
        if (this.historyTabIndex == n) {
          this.panel.mc_moveArea.mc_tab.mc_arrow.y = this.enteredCheatsArrowPosY[i];
        }
        i++;
      }
      this.panel.mc_moveArea.mc_tab.txt_textTab.text = t;
    }
  };
  CastleCheatPanel.prototype.show = function () {
    e.prototype.show.call(this);
    if (l.MobileHelper.isScreenTooSmall()) {
      this.fadeOutPanel();
    }
  };
  CastleCheatPanel.prototype.doShowFPS = function () {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CheatBotCollectionDialog);
  };
  CastleCheatPanel.prototype.handleTab = function (e) {
    if (this.isTabActive) {
      if (e.key == l.Keyboard.DOWN) {
        this.tabIndex++;
      } else {
        this.tabIndex--;
      }
      if (this.tabIndex > this.fitCheats.length - 1) {
        this.tabIndex = 0;
      }
      if (this.tabIndex < 0) {
        this.tabIndex = d.int(this.fitCheats.length - 1);
      }
      //!ST panel.mc_moveArea.txt_input_cheat.text =  fitCheats[ tabIndex ]
      this.i_cheat_txt_input.textContentVO.stringValue = this.fitCheats[this.tabIndex];
      this.panel.mc_moveArea.txt_input_cheat.setSelection(0, this.panel.mc_moveArea.txt_input_cheat.text.length);
    }
    if (!this.isTabActive) {
      this.fitCheats = [];
      var t = this.i_cheat_txt_input.text;
      if (CastleCheatPanel.CHEAT_TABLE != null) {
        for (var i = 0, n = CastleCheatPanel.CHEAT_TABLE; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && o.toLowerCase().indexOf(t.toLowerCase()) != -1) {
            this.fitCheats.push(o);
          }
        }
      }
      if (this.fitCheats.length > 0) {
        this.i_cheat_txt_input.textContentVO.stringValue = this.fitCheats[0];
        this.tabIndex = 0;
        this.isTabActive = true;
      }
    }
  };
  CastleCheatPanel.prototype.endTabbing = function () {
    this.isTabActive = false;
    this.fitCheats = [];
    this.tabIndex = -1;
  };
  CastleCheatPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.panel.mc_switchArea.btn_hide:
        this.fadeOutPanel();
        I.CastleLayoutManager.getInstance().dispatchEvent(new T.CastleLayoutManagerEvent(T.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
        break;
      case this.panel.mc_switchArea.btn_show:
        this.fadeInPanel();
        break;
      case this.panel.mc_moveArea.btn_send:
        this.handleCommand();
        I.CastleLayoutManager.getInstance().dispatchEvent(new T.CastleLayoutManagerEvent(T.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
        break;
      case this.panel.mc_moveArea.btn_travelboost:
        this.switchTravelBoost();
        break;
      case this.panel.mc_moveArea.btn_quickAttack:
        this.switchQuickAttack();
        break;
      case this.panel.mc_moveArea.mc_units1:
        h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/troops 500 714"));
        break;
      case this.panel.mc_moveArea.btn_fps:
        this.doShowFPS();
        break;
      case this.panel.mc_moveArea.btn_setAll:
        if (h.CastleModel.currencyData.c2Amount < 874999) {
          h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/grant premium " + h.CastleModel.userData.userName + " 125000"));
        }
        if (h.CastleModel.currencyData.c1Amount < 874999) {
          h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/grant chips " + h.CastleModel.userData.userName + " 125000"));
        }
        h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/fillStorage"));
    }
  };
  CastleCheatPanel.prototype.handleCommand = function () {
    var e = this.i_cheat_txt_input.text.trim();
    this.enteredCheats.push(e);
    this.historyTabIndex = d.int(this.enteredCheats.length - 1);
    b.ClientCheatsHelper.performCommand(e);
  };
  CastleCheatPanel.prototype.switchTravelBoost = function () {
    CastleCheatPanel.isTravelBoostActive = !CastleCheatPanel.isTravelBoostActive;
    if (CastleCheatPanel.isTravelBoostActive) {
      this.panel.mc_moveArea.btn_travelboost.useFilters(C.BitmapFilterHelper.FILTER_GLOW_CHEAT_SELECTED, false, 1);
      h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/travelBoost on"));
    } else {
      this.panel.mc_moveArea.btn_travelboost.useFilters(C.BitmapFilterHelper.NO_FILTER);
      h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/travelBoost off"));
    }
  };
  CastleCheatPanel.prototype.switchQuickAttack = function () {
    CastleCheatPanel.isQuickAttackActive = !CastleCheatPanel.isQuickAttackActive;
    if (CastleCheatPanel.isQuickAttackActive) {
      this.panel.mc_moveArea.btn_quickAttack.useFilters(C.BitmapFilterHelper.FILTER_GLOW_CHEAT_SELECTED, false, 1);
      h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/quickAttack 3"));
    } else {
      this.panel.mc_moveArea.btn_quickAttack.useFilters(C.BitmapFilterHelper.NO_FILTER);
      h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SBugReportVO("/quickAttack 0"));
    }
  };
  CastleCheatPanel.prototype.fadeInPanel = function () {
    this.panel.mc_moveArea.x = 0;
    this.panel.mc_moveArea.y = 0;
    this.panel.mc_switchArea.x = this.panel.mc_moveArea.width - 5;
    this.panel.mc_switchArea.y = 0;
    this.panel.mc_switchArea.btn_hide.visible = true;
    this.panel.mc_switchArea.btn_show.visible = false;
    this.updateCache();
  };
  CastleCheatPanel.prototype.fadeOutPanel = function () {
    this.panel.mc_moveArea.x = -this.panel.mc_moveArea.width - 10;
    this.panel.mc_moveArea.y = 0;
    this.panel.mc_switchArea.x = 0;
    this.panel.mc_switchArea.y = 0;
    this.panel.mc_switchArea.btn_hide.visible = false;
    this.panel.mc_switchArea.btn_show.visible = true;
    this.updateCache();
  };
  CastleCheatPanel.__initialize_static_members = function () {
    CastleCheatPanel.NAME = "CastleCheatPanel";
    CastleCheatPanel.CHEAT_TABLE = ["/grant", "/grant chips", "/grant XP", "/grant premium", "/resources", "/resources wood", "/resources stone", "/resources food", "/boost", "/moneyBoost", "/giveAll", "/setAll", "/fame", "/honor", "/troops", "/killRats", "/hitMeHard", "/clearmoat", "/setKeep", "/payuser", "/noob"];
  };
  CastleCheatPanel.isTravelBoostActive = false;
  CastleCheatPanel.isQuickAttackActive = false;
  return CastleCheatPanel;
}(require("./131.js").CastlePanel);
exports.CastleCheatPanel = O;
var E = require("./56.js");
var y = require("./38.js");
var b = require("./196.js");
var D = require("./63.js");
var I = require("./17.js");
var T = require("./91.js");
O.__initialize_static_members();