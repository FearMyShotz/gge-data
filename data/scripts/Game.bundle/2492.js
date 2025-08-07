Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./102.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function CastleAllianceDialogTreasury(t) {
    var i = this;
    i._sublayers = new Map();
    i._tabButtons = new Map();
    i._currentTab = CastleAllianceDialogTreasury.TAB_STORAGE;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(CastleAllianceDialogTreasury, e);
  CastleAllianceDialogTreasury.prototype.init = function () {
    this._tabButtons = new Map();
    this.initTabButton(CastleAllianceDialogTreasury.TAB_STORAGE, this.subLayerDisp.btn_tab_storage, "dialog_alliance_treasury_treasury_header");
    this.initTabButton(CastleAllianceDialogTreasury.TAB_BOOSTER, this.subLayerDisp.btn_tab_booster, "dialog_alliance_treasury_alliBoosters_header");
    this.initTabButton(CastleAllianceDialogTreasury.TAB_SUBSCRIPTIONS, this.subLayerDisp.btn_tab_subscriptions, "dialog_alliance_treasury_subscription_header");
    c.ButtonHelper.enableButton(this.subLayerDisp.btn_tab_subscriptions, l.CastleModel.subscriptionData.isFeatureEnabled());
    this._sublayers = new Map();
    this._sublayers.set(CastleAllianceDialogTreasury.TAB_STORAGE, new h.CastleAllianceDialogTreasuryStorage(this.subLayerDisp.tab_storage));
    this._sublayers.set(CastleAllianceDialogTreasury.TAB_BOOSTER, new p.CastleAllianceDialogTreasuryBooster(this.subLayerDisp.tab_booster));
    this._sublayers.set(CastleAllianceDialogTreasury.TAB_SUBSCRIPTIONS, new g.CastleAllianceDialogTreasurySubscriptions(this.subLayerDisp.tab_subscriptions));
    if (this._sublayers != null) {
      for (var e = 0, t = Array.from(this._sublayers.values()); e < t.length; e++) {
        t[e].onHide();
      }
    }
  };
  CastleAllianceDialogTreasury.prototype.initTabButton = function (e, t, i) {
    c.ButtonHelper.initBasicButton(t, 1.015);
    this.textFieldManager.registerTextField(t.mc_selected.txt_text, new s.LocalizedTextVO(i)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(t.mc_default.txt_text, new s.LocalizedTextVO(i)).autoFitToBounds = true;
    this._tabButtons.set(e, t);
  };
  CastleAllianceDialogTreasury.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    l.CastleModel.allianceData.addEventListener(r.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    if (!this.getSublayer(this._currentTab).isShown) {
      this.getSublayer(this._currentTab).onShow();
    }
    this.updateTabButtons();
  };
  CastleAllianceDialogTreasury.prototype.hide = function () {
    this.getSublayer(this._currentTab).onHide();
    l.CastleModel.allianceData.removeEventListener(r.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdate));
    e.prototype.hide.call(this);
  };
  CastleAllianceDialogTreasury.prototype.showHelp = function () {
    d.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_allianceTreasury"));
  };
  CastleAllianceDialogTreasury.prototype.selectButton = function (e, t) {
    e.mc_selected.visible = t;
    e.mc_default.visible = !t;
  };
  CastleAllianceDialogTreasury.prototype.changeTab = function (e) {
    this._currentTab = e;
    if (this._sublayers != null) {
      for (var t = 0, i = Array.from(this._sublayers.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isShown) {
          n.onHide();
        }
      }
    }
    this.getSublayer(this._currentTab).onShow();
    this.updateTabButtons();
  };
  CastleAllianceDialogTreasury.prototype.updateTabButtons = function () {
    if (this._tabButtons != null) {
      for (var e = 0, t = Array.from(this._tabButtons.values()); e < t.length; e++) {
        var i = t[e];
        this.selectButton(i, false);
      }
    }
    this.selectButton(this._tabButtons.get(this._currentTab), true);
  };
  CastleAllianceDialogTreasury.prototype.getSublayer = function (e) {
    return this._sublayers.get(e);
  };
  CastleAllianceDialogTreasury.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target) && (e.prototype.onClick.call(this, t), this._tabButtons != null)) {
      for (var i = 0, n = Array.from(this._tabButtons.keys()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = this._tabButtons.get(o);
          if (t.target == a) {
            this.changeTab(o);
            break;
          }
        }
      }
    }
  };
  CastleAllianceDialogTreasury.prototype.onAllianceDataUpdate = function (e) {
    if (l.CastleModel.userData.isInAlliance) {
      var t = this.getSublayer(this._currentTab);
      if (t) {
        t.update();
      }
    }
  };
  Object.defineProperty(CastleAllianceDialogTreasury.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogTreasury.TAB_STORAGE = "tab_storage";
  CastleAllianceDialogTreasury.TAB_BOOSTER = "tab_booster";
  CastleAllianceDialogTreasury.TAB_SUBSCRIPTIONS = "tab_subscriptions";
  return CastleAllianceDialogTreasury;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleAllianceDialogTreasury = u;
var d = require("./9.js");
var p = require("./2493.js");
var h = require("./2498.js");
var g = require("./2501.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");