Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./274.js");
var _ = require("./532.js");
var m = require("./4409.js");
var f = require("./736.js");
var O = require("./26.js");
var E = require("./71.js");
var y = require("./4.js");
var b = require("./24.js");
var D = require("./8.js");
var I = require("./11.js");
var T = createjs.EventDispatcher;
var v = function (e) {
  function CastleColossusDonateDialog() {
    var t = this;
    t._points = 0;
    t._bonusStone = 0;
    t._bonusWood = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleColossusDonateDialog.NAME) || this;
  }
  n.__extends(CastleColossusDonateDialog, e);
  CastleColossusDonateDialog.prototype.init = function () {
    e.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this._castleSelector = new P.CastleSelectorComponent(this.dialogDisp.mc_selectSource);
    this._woodDonator = new L.CastleResourceCollectorComponent(this.dialogDisp.mc_donateWood);
    this._woodDonator.dispatcher = new T();
    this._woodDonator.notifyValueChange = true;
    this._stoneDonator = new L.CastleResourceCollectorComponent(this.dialogDisp.mc_donateStone);
    this._stoneDonator.dispatcher = new T();
    this._stoneDonator.notifyValueChange = true;
    this.itxtpoint = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new h.TextVO(""));
    var t = new b.CastleGoodgameExternalClip("ResourcePointsIcon", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ResourcePointsIcon"), null, 0, false);
    if (t.isLoaded) {
      this.onPointIconLoaded(t);
    } else {
      t.clipLoaded.addOnce(this.bindFunction(this.onPointIconLoaded));
    }
    this.initCollectorListeners();
    this.setValues(this._bonusWood, this._bonusStone);
    this.setTexts();
  };
  CastleColossusDonateDialog.prototype.initCollectorListeners = function () {
    this._bonusStone = this._bonusWood = 0;
    if (this._woodDonator && this._stoneDonator) {
      this._woodDonator.dispatcher.addEventListener(f.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeWood));
      this._stoneDonator.dispatcher.addEventListener(f.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeStone));
    }
  };
  CastleColossusDonateDialog.prototype.removeCollectorListeners = function () {
    this._woodDonator.dispatcher.removeEventListener(f.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeWood));
    this._stoneDonator.dispatcher.removeEventListener(f.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeStone));
    this._woodDonator.resetValue();
    this._stoneDonator.resetValue();
  };
  CastleColossusDonateDialog.prototype.onPointIconLoaded = function (e) {
    var t = e.asDisplayObject();
    this.dialogDisp.mc_empty.addChild(t);
    s.MovieClipHelper.scaleToFit(this.dialogDisp.mc_empty, 55, 55);
  };
  CastleColossusDonateDialog.prototype.onValueChangeWood = function (e) {
    this._bonusWood = e.newValue;
    this.setValues(this._bonusWood, this._bonusStone);
  };
  CastleColossusDonateDialog.prototype.onValueChangeStone = function (e) {
    this._bonusStone = e.newValue;
    this.setValues(this._bonusWood, this._bonusStone);
  };
  CastleColossusDonateDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    this._points = g.int(g.int(this.properties.eventVO.ownPoints));
    this._bonusStone = this._bonusWood = 0;
    var t = y.CastleModel.userData.castleList.listOfCastlesWithoutAreaTypesAndEventCamps([u.WorldConst.AREA_TYPE_CAPITAL, u.WorldConst.AREA_TYPE_METROPOL]);
    var i = new A.CastleListVO();
    if (t != null) {
      for (var n = 0, a = t; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined && s.areaType != u.WorldConst.AREA_TYPE_CAPITAL && s.kingdomID != d.WorldIsland.KINGDOM_ID && s.controllerWorldMapOwnerInfoVO.playerID == y.CastleModel.userData.playerID) {
          i.addCastle(s, s.kingdomID);
        }
      }
    }
    this._castleSelector.initComponent(y.CastleModel.otherPlayerData.getOwnInfoVO(), i);
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this.onSelectCastle();
    this.controller.addEventListener(E.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    if (this._woodDonator) {
      this._woodDonator.selectionSlider.setSelectedIndex(0);
    }
    if (this._stoneDonator) {
      this._stoneDonator.selectionSlider.setSelectedIndex(0);
    }
    D.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    this.setValues(this._bonusWood, this._bonusStone);
  };
  CastleColossusDonateDialog.prototype.show = function () {
    e.prototype.show.call(this);
    y.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.initCollectorListeners();
  };
  CastleColossusDonateDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    y.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.removeCollectorListeners();
  };
  CastleColossusDonateDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
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
  CastleColossusDonateDialog.prototype.onDonate = function () {
    if (this._woodDonator.getSelectedAmount() > 0 || this._stoneDonator.getSelectedAmount() > 0) {
      y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SColossusDepositResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID, this._stoneDonator.getSelectedAmount(), this._woodDonator.getSelectedAmount()));
      this.donateButton.enableButton = false;
    }
  };
  Object.defineProperty(CastleColossusDonateDialog.prototype, "donateButton", {
    get: function () {
      return this.dialogDisp.btn_ok.basicButton;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusDonateDialog.prototype.onSelectCastle = function (e = null) {
    y.CastleModel.smartfoxClient.sendCommandVO(new _.C2SGetCastleResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
    this.resetComponents();
  };
  CastleColossusDonateDialog.prototype.resetComponents = function () {
    this._woodDonator.resetValue();
    this._stoneDonator.resetValue();
    this._bonusStone = this._bonusWood = 0;
    this.setValues(0, 0);
  };
  CastleColossusDonateDialog.prototype.onChangeRessources = function (e = null) {
    var t = r.castAs(e.params[0], "CastleResourcesVO");
    if (t && t.castleID == this._castleSelector.selectedCastleVO.objectId) {
      var i = g.int(this._woodDonator ? this._woodDonator.getSelectedAmount() : 0);
      var n = g.int(this._stoneDonator ? this._stoneDonator.getSelectedAmount() : 0);
      this._castleResourcesVO = t;
      var o = g.int(this._castleResourcesVO.resources.getAmountOrDefaultByType(S.CollectableEnum.WOOD));
      var a = g.int(this._castleResourcesVO.resources.getAmountOrDefaultByType(S.CollectableEnum.STONE));
      this._woodDonator.initComponent(o, L.CastleResourceCollectorComponent.WOOD, 51);
      this._woodDonator.selectionSlider.setSelectedIndex(Math.min(o, i));
      this._stoneDonator.initComponent(a, L.CastleResourceCollectorComponent.STONE, 52);
      this._stoneDonator.selectionSlider.setSelectedIndex(Math.min(a, n));
    }
  };
  CastleColossusDonateDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventType == "Colossus") {
      this.hide();
    }
  };
  CastleColossusDonateDialog.prototype.setTexts = function () {
    this.dialogDisp.btn_ok.toolTipText = {
      t: "colossus_donate_minPoints",
      p: [0]
    };
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new p.LocalizedTextVO("colossus_donateResource_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_label_points, new p.LocalizedTextVO("colossus_donateResource_labelPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_donate, new p.LocalizedTextVO("colossus_donateResource_copy", [CastleColossusDonateDialog.WOOD_EQUIVALENT_MIN_DECO, CastleColossusDonateDialog.STONE_EQUIVALENT_MIN_DECO, CastleColossusDonateDialog.MIN_DECO_DEPOSIT]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new p.LocalizedTextVO("dialog_startAttack_from"));
  };
  CastleColossusDonateDialog.prototype.setValues = function (e, t) {
    var i = r.castAs(y.CastleModel.specialEventData.getActiveEventByAnyEventId(C.ClientConstEvent.COLOSSUS_EVENTS), "ColossusEventVO");
    if (i) {
      if (e > 0 || t > 0) {
        var n = g.int(c.ColossusConst.calcResourcePointsForResources(e, t) * i.getConversionRateForEvent());
        this.itxtpoint.textContentVO.stringValue = this._points + " (+ " + n + ")";
        if (this._points >= c.ColossusConst.MIN_POINTS && (e > 0 || t > 0) || this._points == 0 && n >= c.ColossusConst.MIN_POINTS) {
          this.donateButton.enableButton = true;
          this.dialogDisp.btn_ok.toolTipText = null;
        } else {
          this.donateButton.enableButton = false;
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [c.ColossusConst.MIN_POINTS]
          };
        }
      } else {
        this.itxtpoint.textContentVO.stringValue = String(this._points);
        this.donateButton.enableButton = false;
        if (this._points >= c.ColossusConst.MIN_POINTS) {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minWoodStone"
          };
        } else {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [c.ColossusConst.MIN_POINTS]
          };
        }
      }
    } else {
      this.hide();
    }
  };
  CastleColossusDonateDialog.__initialize_static_members = function () {
    CastleColossusDonateDialog.NAME = "CastleColossusDonateDialog";
    CastleColossusDonateDialog.WOOD_EQUIVALENT_MIN_DECO = 500;
    CastleColossusDonateDialog.STONE_EQUIVALENT_MIN_DECO = 340;
    CastleColossusDonateDialog.MIN_DECO_DEPOSIT = 10;
  };
  return CastleColossusDonateDialog;
}(I.CastleExternalDialog);
exports.CastleColossusDonateDialog = v;
var S = require("./12.js");
var A = require("./373.js");
var L = require("./319.js");
var P = require("./321.js");
l.classImplementsInterfaces(v, "ICollectableRendererList");
v.__initialize_static_members();