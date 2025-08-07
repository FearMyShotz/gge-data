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
var g = require("./275.js");
var C = require("./4408.js");
var _ = require("./734.js");
var m = require("./26.js");
var f = require("./4.js");
var O = require("./24.js");
var E = require("./8.js");
var y = require("./11.js");
var b = createjs.EventDispatcher;
var D = function (e) {
  function CastleCoinColossusDonateDialog() {
    var t = this;
    t._bonusCoins = 0;
    t._points = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleCoinColossusDonateDialog.NAME) || this;
  }
  n.__extends(CastleCoinColossusDonateDialog, e);
  CastleCoinColossusDonateDialog.prototype.init = function () {
    e.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this._coinDonator = new T.CastleResourceCollectorComponent(this.dialogDisp.mc_donate);
    this._coinDonator.dispatcher = new b();
    this._coinDonator.notifyValueChange = true;
    this.itxtpoint = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new p.TextVO(""));
    var t = new O.CastleGoodgameExternalClip("ResourcePointsIcon", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ResourcePointsIcon"));
    if (t.isLoaded) {
      this.onPointIconLoaded(t);
    } else {
      t.clipLoaded.addOnce(this.bindFunction(this.onPointIconLoaded));
    }
    if (this._coinDonator) {
      this._coinDonator.selectionSlider.setSelectedIndex(0);
    }
    this.initCollectorListeners();
    this.setValues(this._bonusCoins);
    this.setTexts();
  };
  CastleCoinColossusDonateDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_eventCoinColossus_donateCoins_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_label_points, new d.LocalizedTextVO("colossus_donateResource_labelPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_donate, new d.LocalizedTextVO("dialog_eventCoinColossus_donateCoins_copy", [CastleCoinColossusDonateDialog.COINS_FOR_POINTS, CastleCoinColossusDonateDialog.FIVE_COLOSSUS_POINTS]));
  };
  CastleCoinColossusDonateDialog.prototype.onPointIconLoaded = function (e) {
    var t = e.asDisplayObject();
    this.dialogDisp.mc_empty.addChild(t);
    a.MovieClipHelper.scaleToFit(this.dialogDisp.mc_empty, 55, 55);
  };
  CastleCoinColossusDonateDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    this._points = h.int(h.int(this.properties.eventVO.ownPoints));
    this._bonusCoins = 0;
    var t = f.CastleModel.userData.castleList.listOfCastlesWithoutAreaTypesAndEventCamps([c.WorldConst.AREA_TYPE_CAPITAL, c.WorldConst.AREA_TYPE_METROPOL]);
    var i = new I.CastleListVO();
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.areaType != c.WorldConst.AREA_TYPE_CAPITAL && a.kingdomID != u.WorldIsland.KINGDOM_ID && a.controllerWorldMapOwnerInfoVO.playerID == f.CastleModel.userData.playerID) {
          i.addCastle(a, a.kingdomID);
        }
      }
    }
    if (this._coinDonator) {
      this._coinDonator.initComponent(f.CastleModel.currencyData.c1Amount, T.CastleResourceCollectorComponent.C1, 51);
      this._coinDonator.selectionSlider.setSelectedIndex(0);
    }
    E.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    this.setValues(this._bonusCoins);
  };
  CastleCoinColossusDonateDialog.prototype.setValues = function (e) {
    var t = s.castAs(f.CastleModel.specialEventData.getActiveEventByAnyEventId(g.ClientConstEvent.COLOSSUS_EVENTS), "ColossusEventVO");
    if (t) {
      if (e > 0) {
        var i = h.int(l.ColossusConst.getResourcePointsForCoins(e) * t.getConversionRateForEvent());
        this.itxtpoint.textContentVO.stringValue = this._points + " (+ " + i + ")";
        if (this._points >= l.ColossusConst.MIN_POINTS && e > 0 || this._points == 0 && i >= l.ColossusConst.MIN_POINTS) {
          this.donateButton.enableButton = true;
          this.dialogDisp.btn_ok.toolTipText = null;
        } else {
          this.donateButton.enableButton = false;
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [l.ColossusConst.MIN_POINTS]
          };
        }
      } else {
        this.itxtpoint.textContentVO.stringValue = String(this._points);
        this.donateButton.enableButton = false;
        if (this._points >= l.ColossusConst.MIN_POINTS) {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minCoin"
          };
        } else {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [l.ColossusConst.MIN_POINTS]
          };
        }
      }
    } else {
      this.hide();
    }
  };
  CastleCoinColossusDonateDialog.prototype.initCollectorListeners = function () {
    this._bonusCoins = 0;
    if (this._coinDonator) {
      this._coinDonator.dispatcher.addEventListener(_.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeCoins));
    }
  };
  CastleCoinColossusDonateDialog.prototype.removeCollectorListeners = function () {
    this._coinDonator.dispatcher.removeEventListener(_.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeCoins));
    this._coinDonator.resetValue();
  };
  CastleCoinColossusDonateDialog.prototype.show = function () {
    e.prototype.show.call(this);
    f.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.initCollectorListeners();
  };
  CastleCoinColossusDonateDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    f.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.removeCollectorListeners();
  };
  CastleCoinColossusDonateDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventType == "Colossus") {
      this.hide();
    }
  };
  CastleCoinColossusDonateDialog.prototype.onValueChangeCoins = function (e) {
    this._bonusCoins = e.newValue;
    this.setValues(this._bonusCoins);
  };
  CastleCoinColossusDonateDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onDonate();
      }
    }
  };
  CastleCoinColossusDonateDialog.prototype.onDonate = function () {
    if (this._coinDonator.getSelectedAmount() > 0) {
      f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SColossusCoinDepositResourcesVO(this._coinDonator.getSelectedAmount()));
      this.donateButton.enableButton = false;
    }
  };
  Object.defineProperty(CastleCoinColossusDonateDialog.prototype, "donateButton", {
    get: function () {
      return this.dialogDisp.btn_ok.basicButton;
    },
    enumerable: true,
    configurable: true
  });
  CastleCoinColossusDonateDialog.__initialize_static_members = function () {
    CastleCoinColossusDonateDialog.NAME = "CastleCoinColossusDonateDialog";
    CastleCoinColossusDonateDialog.COINS_FOR_POINTS = 460;
    CastleCoinColossusDonateDialog.FIVE_COLOSSUS_POINTS = 5;
  };
  return CastleCoinColossusDonateDialog;
}(y.CastleExternalDialog);
exports.CastleCoinColossusDonateDialog = D;
var I = require("./373.js");
var T = require("./319.js");
r.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();