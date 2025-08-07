Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./55.js");
var _ = require("./2499.js");
var m = require("./2500.js");
var f = require("./26.js");
var O = require("./71.js");
var E = require("./4.js");
var y = require("./35.js");
var b = function (e) {
  function CastleAllianceDonateDialog() {
    var t = this;
    t._currentPage = 0;
    t._amountOfResComponents = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceDonateDialog.NAME) || this;
  }
  n.__extends(CastleAllianceDonateDialog, e);
  CastleAllianceDonateDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_left, this.dialogDisp.btn_Right]);
    this._castleSelector = new T.CastleSelectorComponent(this.dialogDisp.castleSelector);
  };
  CastleAllianceDonateDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this._resourceComponents = [];
    this._resourceComponents.push(new v(I.CastleResourceCollectorComponent.WOOD, D.CollectableEnum.WOOD.serverKey), new v(I.CastleResourceCollectorComponent.STONE, D.CollectableEnum.STONE.serverKey), new v(I.CastleResourceCollectorComponent.C1, D.CollectableEnum.C1.serverKey), new v(I.CastleResourceCollectorComponent.C2, D.CollectableEnum.C2.serverKey), new v(I.CastleResourceCollectorComponent.IRON, D.CollectableEnum.IRON.serverKey), new v(I.CastleResourceCollectorComponent.OIL, D.CollectableEnum.OIL.serverKey), new v(I.CastleResourceCollectorComponent.GLASS, D.CollectableEnum.GLASS.serverKey), new v(I.CastleResourceCollectorComponent.COAL, D.CollectableEnum.COAL.serverKey));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new h.LocalizedTextVO("dialog_alliance_donate"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new h.LocalizedTextVO("dialog_alliance_donationInfoText"));
    this._DonatorResComponents = [];
    this._itxt_valueRes = [];
    this._mcDonateBonus = [];
    for (var i = 0; i < 4; i++) {
      this._DonatorResComponents.push(new I.CastleResourceCollectorComponent(this.dialogDisp.getChildByName("mc_donate" + i)));
      this._itxt_valueRes.push(this.textFieldManager.registerTextField(this.dialogDisp.getChildByName("mc_donateBonus_" + i).txt_value, new h.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_ADD)));
      this._mcDonateBonus.push(this.dialogDisp.getChildByName("mc_donateBonus_" + i));
      this._mcDonateBonus[i].toolTipText = "dialog_alliance_depositBonus";
      this._mcDonateBonus[i].mouseChildren = false;
      this._mcDonateBonus[i].visible = false;
    }
    this._amountOfResComponents = g.int(this._DonatorResComponents.length);
    var n = 0;
    if (this._DonatorResComponents != null) {
      for (var s = 0, r = this._DonatorResComponents; s < r.length; s++) {
        var l = p = r[s];
        if (l !== undefined) {
          l.initComponent(100, this._resourceComponents[n].ID, 51 + n);
          l.selectionSlider.setSelectedIndex(0);
          l.setAmountText();
          n++;
        }
      }
    }
    this.dialogDisp.btn_left.visible = this.btnLeftVisibility;
    this.dialogDisp.btn_Right.visible = this.btnRightVisibility;
    if (this._resourceComponents != null) {
      for (var c = 0, u = this._resourceComponents; c < u.length; c++) {
        var p;
        p = u[c];
        if (p !== undefined) {
          p.amount = 0;
        }
      }
    }
    this._castleSelector.castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.selectCastle));
    this._castleSelector.initComponent(E.CastleModel.otherPlayerData.getOwnInfoVO(), E.CastleModel.userData.castleList, E.CastleModel.userData.castleList.getHomeCastle(), [d.FactionConst.KINGDOM_ID]);
    this.controller.addEventListener(O.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    E.CastleModel.specialEventData.addEventListener(f.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    E.CastleModel.specialEventData.addEventListener(f.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  CastleAllianceDonateDialog.prototype.getCurrentValue = function (e) {
    if (this._castleRessourcesVO) {
      switch (e) {
        case I.CastleResourceCollectorComponent.WOOD:
          return g.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(D.CollectableEnum.WOOD));
        case I.CastleResourceCollectorComponent.STONE:
          return g.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(D.CollectableEnum.STONE));
        case I.CastleResourceCollectorComponent.C1:
          return g.int(E.CastleModel.currencyData.c1Amount);
        case I.CastleResourceCollectorComponent.C2:
          return g.int(E.CastleModel.currencyData.c2Amount);
        case I.CastleResourceCollectorComponent.COAL:
          return g.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(D.CollectableEnum.COAL));
        case I.CastleResourceCollectorComponent.OIL:
          return g.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(D.CollectableEnum.OIL));
        case I.CastleResourceCollectorComponent.GLASS:
          return g.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(D.CollectableEnum.GLASS));
        case I.CastleResourceCollectorComponent.IRON:
          return g.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(D.CollectableEnum.IRON));
      }
    }
    return 0;
  };
  CastleAllianceDonateDialog.prototype.getCurrentAllianceSpace = function (e) {
    var t = 0;
    switch (e) {
      case I.CastleResourceCollectorComponent.WOOD:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.WOOD));
        break;
      case I.CastleResourceCollectorComponent.STONE:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.STONE));
        break;
      case I.CastleResourceCollectorComponent.C1:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.C1));
        break;
      case I.CastleResourceCollectorComponent.C2:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.C2));
        break;
      case I.CastleResourceCollectorComponent.COAL:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.COAL));
        break;
      case I.CastleResourceCollectorComponent.OIL:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.OIL));
        break;
      case I.CastleResourceCollectorComponent.GLASS:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.GLASS));
        break;
      case I.CastleResourceCollectorComponent.IRON:
        t = g.int(E.CastleModel.allianceData.myAllianceVO.storage.getAmountOrDefaultByType(D.CollectableEnum.IRON));
    }
    return g.int(Math.max(C.ClientConstUtils.MAX_INT - t, 0));
  };
  CastleAllianceDonateDialog.prototype.storeOldValues = function () {
    var e = 0;
    var t = 0;
    var i = g.int(this._resourceComponents.length);
    if (this._DonatorResComponents != null) {
      for (var n = 0, o = this._DonatorResComponents; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if ((t = this._amountOfResComponents * this._currentPage + e) < i) {
            this._resourceComponents[t].amount = a.getSelectedAmount();
            if (this.disp.stage.focus == a.disp.txt_value) {
              this._resourceComponents[t].amount = parseInt(a.disp.txt_value.text);
            }
          }
          e++;
        }
      }
    }
  };
  CastleAllianceDonateDialog.prototype.setResourcesChanges = function () {
    var e = 0;
    var t = 0;
    var i = 0;
    var n = 0;
    var o = g.int(this._resourceComponents.length);
    if (this._DonatorResComponents != null) {
      for (var a = 0, s = this._DonatorResComponents; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          if ((t = this._amountOfResComponents * this._currentPage + e) < o) {
            r.disp.visible = true;
            n = g.int(this.getCurrentAllianceSpace(this._resourceComponents[t].ID));
            i = g.int(Math.min(this.getCurrentValue(this._resourceComponents[t].ID), n));
            if (this._resourceComponents[t].ID == I.CastleResourceCollectorComponent.C2) {
              r.resetWithValues(i, this._resourceComponents[t].ID, 51 + e, p.Localize.text("dialog_alliance_noPayUser", [c.AllianceConst.MIN_LEVEL_FOR_DONATE_C2]));
              r.enableComponent(E.CastleModel.allianceData.userCanDonateToAlliance);
            } else {
              r.resetWithValues(i, this._resourceComponents[t].ID, 51 + e);
              r.enableComponent(n > 0);
            }
            r.selectionSlider.setSelectedIndex(Math.min(i, this._resourceComponents[t].amount));
            r.setAmountText();
          } else {
            r.disp.visible = false;
          }
          e++;
        }
      }
    }
    this.setDonateBonus();
  };
  CastleAllianceDonateDialog.prototype.setDonateBonus = function () {
    var e = 0;
    var t = 0;
    var i = g.int(this._resourceComponents.length);
    if (this._DonatorResComponents != null) {
      for (var n = 0, o = this._DonatorResComponents; n < o.length; n++) {
        if (o[n] !== undefined) {
          if ((t = this._currentPage * this._amountOfResComponents + e) >= i) {
            this._mcDonateBonus[e].visible = false;
          } else if (this._resourceComponents[t].ID != I.CastleResourceCollectorComponent.C1 && this._resourceComponents[t].ID != I.CastleResourceCollectorComponent.C2) {
            if (E.CastleModel.allianceData.myAllianceVO.getBoostLevel(c.AllianceConst.TYPE_DEPOSIT_BONUS) > 0) {
              this._mcDonateBonus[e].gotoAndStop(1);
              this._itxt_valueRes[e].textContentVO.textReplacements = [String(E.CastleModel.allianceData.myAllianceVO.getCurrentBoostValue(c.AllianceConst.TYPE_DEPOSIT_BONUS, y.EffectTypeEnum.EFFECT_TYPE_RESOURCE_DEPOSIT_BOOST))];
              this._mcDonateBonus[e].visible = true;
            } else {
              this._mcDonateBonus[e].visible = false;
            }
          } else if (this._resourceComponents[t].ID == I.CastleResourceCollectorComponent.C2) {
            var a = s.castAs(E.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_ALLIPRIME), "PrimeAlliBonusEventVO");
            if (a) {
              this._mcDonateBonus[e].gotoAndStop(2);
              this._itxt_valueRes[e].textContentVO.textReplacements = [String([a.primeFactorInPercent])];
              this._mcDonateBonus[e].visible = true;
            } else {
              this._mcDonateBonus[e].visible = false;
            }
          } else {
            this._mcDonateBonus[e].visible = false;
          }
          e++;
        }
      }
    }
  };
  CastleAllianceDonateDialog.prototype.onChangeResources = function (e = null) {
    var t = s.castAs(e.params[0], "CastleResourcesVO");
    if (t && t.castleID == this._castleSelector.selectedCastleVO.objectId) {
      this._castleRessourcesVO = t;
      this.storeOldValues();
      this.setResourcesChanges();
    }
  };
  CastleAllianceDonateDialog.prototype.selectCastle = function (e = null) {
    E.CastleModel.smartfoxClient.sendCommandVO(new m.C2SGetDonationResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
    if (this._DonatorResComponents != null) {
      for (var t = 0, i = this._DonatorResComponents; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.resetValue();
        }
      }
    }
  };
  CastleAllianceDonateDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onDonateForAlliance();
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.storeOldValues();
        this._currentPage--;
        this.dialogDisp.btn_left.visible = this.btnLeftVisibility;
        this.dialogDisp.btn_Right.visible = this.btnRightVisibility;
        this.setResourcesChanges();
        break;
      case this.dialogDisp.btn_Right:
        this.storeOldValues();
        this._currentPage++;
        this.dialogDisp.btn_left.visible = this.btnLeftVisibility;
        this.dialogDisp.btn_Right.visible = this.btnRightVisibility;
        this.setResourcesChanges();
    }
  };
  CastleAllianceDonateDialog.prototype.onDonateForAlliance = function () {
    var e = 0;
    var t = g.int(this._resourceComponents.length);
    var i = new Object();
    var n = false;
    this.storeOldValues();
    e = 0;
    for (; e < t; e++) {
      if (this._resourceComponents[e].amount > 0) {
        i[this._resourceComponents[e].key] = this._resourceComponents[e].amount;
        n = true;
      }
    }
    if (n) {
      E.CastleModel.smartfoxClient.sendCommandVO(new _.C2SAllianceDonateVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID, i));
    }
  };
  CastleAllianceDonateDialog.prototype.hideLoaded = function (t = null) {
    E.CastleModel.specialEventData.removeEventListener(f.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    E.CastleModel.specialEventData.removeEventListener(f.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(O.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeResources));
    e.prototype.hideLoaded.call(this);
    if (this._DonatorResComponents != null) {
      for (var i = 0, n = this._DonatorResComponents; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          a.destroy();
        }
      }
    }
    this._castleRessourcesVO = null;
    this._castleSelector.castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.selectCastle));
  };
  Object.defineProperty(CastleAllianceDonateDialog.prototype, "btnLeftVisibility", {
    get: function () {
      return this._currentPage * this._amountOfResComponents != 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDonateDialog.prototype, "btnRightVisibility", {
    get: function () {
      return this._currentPage * this._amountOfResComponents + this._amountOfResComponents < this._resourceComponents.length;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDonateDialog.prototype.onRefreshSpecialEvents = function (e) {
    if (l.instanceOfClass(e.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.setDonateBonus();
    }
  };
  CastleAllianceDonateDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (l.instanceOfClass(e.specialEventVO, "PrimeAlliBonusEventVO")) {
      this.setDonateBonus();
    }
  };
  CastleAllianceDonateDialog.NAME = "CastleAllianceDonateEx";
  return CastleAllianceDonateDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceDonateDialog = b;
var D = require("./12.js");
var I = require("./319.js");
var T = require("./321.js");
r.classImplementsInterfaces(b, "ICollectableRendererList");
var v = function () {
  function DonationResourceComponent(e, t) {
    this._ID = 0;
    this._amount = 0;
    this._ID = e;
    this._key = t;
  }
  Object.defineProperty(DonationResourceComponent.prototype, "ID", {
    get: function () {
      return this._ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationResourceComponent.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    set: function (e) {
      this._amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationResourceComponent.prototype, "key", {
    get: function () {
      return this._key;
    },
    enumerable: true,
    configurable: true
  });
  return DonationResourceComponent;
}();