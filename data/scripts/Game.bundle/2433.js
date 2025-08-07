Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./100.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./16.js");
var _ = require("./2434.js");
var m = require("./606.js");
var f = require("./296.js");
var O = require("./102.js");
var E = require("./44.js");
var y = require("./4.js");
var b = require("./43.js");
var D = require("./8.js");
var I = require("./34.js");
var T = require("./283.js");
var v = require("./149.js");
var S = require("./1363.js");
var A = require("./1364.js");
var L = createjs.MouseEvent;
var P = function (e) {
  function CastleAllianceDialogDiplomacy(t) {
    var i = this;
    i.startIndexPact = 0;
    i.startIndexNoAttack = 0;
    i.startIndexWar = 0;
    i.autoWarPressed = false;
    i._lastRequestedAllianceInfo = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).subLayerDisp.mc_inWar.toolTipText = "dialog_alliance_inWarList";
    i.subLayerDisp.mc_inWar.actLikeButton = true;
    i.subLayerDisp.mc_noAttack.toolTipText = "dialog_alliance_noAttackList";
    i.subLayerDisp.mc_noAttack.actLikeButton = true;
    i.subLayerDisp.mc_pact.toolTipText = "dialog_alliance_pactList";
    i.subLayerDisp.mc_pact.actLikeButton = true;
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_copy, new p.LocalizedTextVO("dialog_alliance_diplomacyCopy"));
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_aw_desc, new p.LocalizedTextVO("dialog_allianceDiplomacy_autoWar"));
    i.setAutoWarCheckBoxVisability();
    D.ButtonHelper.initCheckBox(i.subLayerDisp.aw_checkbox);
    D.ButtonHelper.initBasicButtons([i.subLayerDisp.mc_PactList.btn_up, i.subLayerDisp.mc_NoAttackList.btn_up, i.subLayerDisp.mc_WarList.btn_up, i.subLayerDisp.mc_PactList.btn_down, i.subLayerDisp.mc_NoAttackList.btn_down, i.subLayerDisp.mc_WarList.btn_down]);
    return i;
  }
  n.__extends(CastleAllianceDialogDiplomacy, e);
  CastleAllianceDialogDiplomacy.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.addListeners();
    this.setAutoWarCheckBoxVisability();
    this.fillAllStatusLists();
  };
  CastleAllianceDialogDiplomacy.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.removeListeners();
  };
  CastleAllianceDialogDiplomacy.prototype.addListeners = function () {
    y.CastleModel.allianceData.addEventListener(O.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    y.CastleModel.allianceData.addEventListener(O.CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED, this.bindFunction(this.onAutoWarUpdate));
    this.subLayerDisp.mc_PactList.addEventListener(L.MOUSE_WHEEL, this.bindFunction(this.pactMouseWheelHandler));
    this.subLayerDisp.mc_NoAttackList.addEventListener(L.MOUSE_WHEEL, this.bindFunction(this.noAttackMouseWheelHandler));
    this.subLayerDisp.mc_WarList.addEventListener(L.MOUSE_WHEEL, this.bindFunction(this.warListMouseWheelHandler));
  };
  CastleAllianceDialogDiplomacy.prototype.removeListeners = function () {
    y.CastleModel.allianceData.removeEventListener(O.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    y.CastleModel.allianceData.removeEventListener(O.CastleAllianceDataEvent.ALLIANCE_AUTO_WAR_UPDATED, this.bindFunction(this.onAutoWarUpdate));
    this.subLayerDisp.mc_PactList.addEventListener(L.MOUSE_WHEEL, this.bindFunction(this.pactMouseWheelHandler));
    this.subLayerDisp.mc_NoAttackList.addEventListener(L.MOUSE_WHEEL, this.bindFunction(this.noAttackMouseWheelHandler));
    this.subLayerDisp.mc_WarList.addEventListener(L.MOUSE_WHEEL, this.bindFunction(this.warListMouseWheelHandler));
  };
  CastleAllianceDialogDiplomacy.prototype.onAutoWarUpdate = function (e) {
    this.setAutoWarCheckBoxVisability();
  };
  CastleAllianceDialogDiplomacy.prototype.setAutoWarCheckBox = function () {
    if (y.CastleModel.allianceData.myAllianceVO && y.CastleModel.allianceData.myAllianceVO.autoWarOn) {
      D.ButtonHelper.setButtonSelected(this.subLayerDisp.aw_checkbox, true);
      this.subLayerDisp.aw_checkbox.toolTipText = "dialog_allianceDiplomacy_autoWar_active_tooltip";
      this.autoWarPressed = true;
    } else {
      D.ButtonHelper.setButtonSelected(this.subLayerDisp.aw_checkbox, false);
      this.subLayerDisp.aw_checkbox.toolTipText = "dialog_allianceDiplomacy_autoWar_inactive_tooltip";
      this.autoWarPressed = false;
    }
  };
  CastleAllianceDialogDiplomacy.prototype.sendAutoWarUpdate = function () {
    var e = 0;
    e = this.autoWarPressed ? 0 : 1;
    y.CastleModel.smartfoxClient.sendCommandVO(new _.C2SSetAutoWar(e));
  };
  CastleAllianceDialogDiplomacy.prototype.onActionListUpdate = function (e) {
    this.fillAllStatusLists();
  };
  CastleAllianceDialogDiplomacy.prototype.setAutoWarCheckBoxVisability = function () {
    var e = g.int(y.CastleModel.userData.allianceRank);
    if (e == u.AllianceConst.RANK_LEADER || e == u.AllianceConst.RANK_COLEADER) {
      this.subLayerDisp.aw_checkbox.visible = true;
      this.subLayerDisp.txt_aw_desc.visible = true;
      this.setAutoWarCheckBox();
    } else {
      this.subLayerDisp.aw_checkbox.visible = false;
      this.subLayerDisp.txt_aw_desc.visible = false;
    }
  };
  CastleAllianceDialogDiplomacy.prototype.showHelp = function () {
    M.CastleDialogHandler.getInstance().showHelper("", d.Localize.text("help_allianceDiplomacy"));
  };
  CastleAllianceDialogDiplomacy.prototype.fillStatusList = function (e, t) {
    a.MovieClipHelper.clearMovieClip(e.mc_holder);
    var i = this.getStatusList(t);
    var n = 0;
    switch (t) {
      case u.AllianceConst.DIPLOMACY_REAL_ALLIED:
        this.startIndexPact = g.int(n = g.int(this.getCorrectIndex(i.length, t)));
        break;
      case u.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        i = i.concat(this.getStatusList(u.AllianceConst.DIPLOMACY_NEUTRAL));
        this.startIndexNoAttack = g.int(n = g.int(this.getCorrectIndex(i.length, t)));
        break;
      case u.AllianceConst.DIPLOMACY_IN_WAR:
        this.startIndexWar = g.int(n = g.int(this.getCorrectIndex(i.length, t)));
    }
    this.fillList(n, i, e.mc_holder);
    e.btn_up.visible = n > 0;
    e.btn_down.visible = n < i.length - CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST;
  };
  CastleAllianceDialogDiplomacy.prototype.fillAllStatusLists = function () {
    this.fillStatusList(this.subLayerDisp.mc_WarList, u.AllianceConst.DIPLOMACY_IN_WAR);
    this.fillStatusList(this.subLayerDisp.mc_NoAttackList, u.AllianceConst.DIPLOMACY_SOFT_ALLIED);
    this.fillStatusList(this.subLayerDisp.mc_PactList, u.AllianceConst.DIPLOMACY_REAL_ALLIED);
  };
  CastleAllianceDialogDiplomacy.prototype.getStatusList = function (e) {
    return this.allianceInfoVO.getStatusListByStatus(e);
  };
  CastleAllianceDialogDiplomacy.prototype.getCorrectIndex = function (e, t) {
    var i = 0;
    switch (t) {
      case u.AllianceConst.DIPLOMACY_REAL_ALLIED:
        i = this.startIndexPact;
        break;
      case u.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        i = this.startIndexNoAttack;
        break;
      case u.AllianceConst.DIPLOMACY_IN_WAR:
        i = this.startIndexWar;
    }
    return g.int(Math.max(Math.min(i, e - CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST), 0));
  };
  CastleAllianceDialogDiplomacy.prototype.fillList = function (e, t, i) {
    var n = 0;
    var o = c.getDefinitionByName("CastleAllianceDiplomacyItem");
    var a = c.getDefinitionByName("Btn_WatchAlliance");
    for (var l = e; l < Math.min(t.length, e + CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST); l++) {
      var d = t[l];
      var p = new o();
      D.ButtonHelper.initBasicButton(p);
      if (p.itxt_value) {
        p.itxt_value.textContentVO.textId = d.allianceName;
      } else {
        p.itxt_value = this.textFieldManager.registerTextField(p.txt_value, new h.TextVO(d.allianceName), new s.InternalGGSTextFieldConfigVO(true));
        p.itxt_value.autoFitToBounds = true;
      }
      p.properties = d;
      p.toolTipText = "dialog_alliance_diplomacyStatus_info";
      p.y = n * 22 + n * CastleAllianceDialogDiplomacy.ITEM_SPACE;
      i.addChild(p);
      if (d.allianceStatusConfirmed == u.AllianceConst.DIPLOMACY_REQUEST) {
        p.gotoAndStop(2);
        var g = new a();
        g.x = CastleAllianceDialogDiplomacy.BUTTON_X;
        g.y = p.y + 11;
        g.properties = d;
        g.toolTipText = "dialog_alliance_newDiplomacyRequest";
        D.ButtonHelper.initBasicButton(g);
        i.addChild(g);
      } else {
        var _ = new r.ColorTransform();
        switch (d.allianceStatus) {
          case u.AllianceConst.DIPLOMACY_IN_WAR:
            _.color = C.ClientConstColor.ALLIANCE_DIPLOMACY_WAR;
            p.itxt_value.color = C.ClientConstColor.GENERIC_WHITE;
            break;
          case u.AllianceConst.DIPLOMACY_SOFT_ALLIED:
            _.color = C.ClientConstColor.ALLIANCE_DIPLOMACY_SOFTALLIED;
            break;
          case u.AllianceConst.DIPLOMACY_REAL_ALLIED:
            _.color = C.ClientConstColor.ALLIANCE_DIPLOMACY_ALLIED;
        }
        p.cc.useFilters([new createjs.ColorFilter(_.redMultiplier, _.greenMultiplier, _.blueMultiplier, _.alphaMultiplier, _.redOffset, _.greenOffset, _.blueOffset, _.alphaOffset)]);
      }
      n++;
    }
  };
  CastleAllianceDialogDiplomacy.prototype.onMouseUp = function (e) {
    if (D.ButtonHelper.isButtonEnabled(e.target)) {
      if (this.isDiplomacyItem(e.target)) {
        M.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(R.CastleAllianceInfoDialog, new v.CastleAllianceInfoDialogProperties(e.target.properties.allianceID, e.target.properties.allianceName, e.target.properties.allianceStatus, e.target.properties.allianceStatusConfirmed, R.CastleAllianceInfoDialog.CAT_DIPLOMACY), b.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
      if (this.isButtonWatchAlliance(e.target)) {
        if (e.target.properties.allianceStatus == u.AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          var t = y.CastleModel.allianceData.getAllianceInfoVOByID(e.target.properties.allianceID);
          if (t && t.isInPeaceNegociations) {
            this.showPeaceOffer(t);
          } else {
            M.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleAllianceRequestDiplomacyDialog, new S.CastleAllianceRequestDiplomacyDialogProperties(e.target.properties.allianceID, e.target.properties.allianceStatus));
          }
        } else if (e.target.properties.allianceStatus == u.AllianceConst.DIPLOMACY_REAL_ALLIED) {
          M.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleAllianceRequestDiplomacyDialog, new S.CastleAllianceRequestDiplomacyDialogProperties(e.target.properties.allianceID, e.target.properties.allianceStatus));
        } else {
          y.CastleModel.allianceData.addEventListener(O.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
          y.CastleModel.allianceData.addEventListener(O.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
          y.CastleModel.smartfoxClient.sendCommandVO(new f.C2SGetAllianceInfoVO(e.target.properties.allianceID));
          this._lastRequestedAllianceInfo = g.int(e.target.properties.allianceID);
        }
      }
      switch (e.target) {
        case this.subLayerDisp.mc_PactList.btn_up:
          this.startIndexPact--;
          this.fillStatusList(this.subLayerDisp.mc_PactList, u.AllianceConst.DIPLOMACY_REAL_ALLIED);
          break;
        case this.subLayerDisp.mc_PactList.btn_down:
          this.startIndexPact++;
          this.fillStatusList(this.subLayerDisp.mc_PactList, u.AllianceConst.DIPLOMACY_REAL_ALLIED);
          break;
        case this.subLayerDisp.mc_NoAttackList.btn_up:
          this.startIndexNoAttack--;
          this.fillStatusList(this.subLayerDisp.mc_NoAttackList, u.AllianceConst.DIPLOMACY_SOFT_ALLIED);
          break;
        case this.subLayerDisp.mc_NoAttackList.btn_down:
          this.startIndexNoAttack++;
          this.fillStatusList(this.subLayerDisp.mc_NoAttackList, u.AllianceConst.DIPLOMACY_SOFT_ALLIED);
          break;
        case this.subLayerDisp.mc_WarList.btn_up:
          this.startIndexWar--;
          this.fillStatusList(this.subLayerDisp.mc_WarList, u.AllianceConst.DIPLOMACY_IN_WAR);
          break;
        case this.subLayerDisp.mc_WarList.btn_down:
          this.startIndexWar++;
          this.fillStatusList(this.subLayerDisp.mc_WarList, u.AllianceConst.DIPLOMACY_IN_WAR);
          break;
        case this.subLayerDisp.mc_inWar:
          M.CastleDialogHandler.getInstance().showHelper(d.Localize.text("dialog_alliance_inWarList"), d.Localize.text("help_inWar"));
          break;
        case this.subLayerDisp.mc_noAttack:
          M.CastleDialogHandler.getInstance().showHelper(d.Localize.text("dialog_alliance_noAttackList"), d.Localize.text("help_noAttack"));
          break;
        case this.subLayerDisp.mc_pact:
          M.CastleDialogHandler.getInstance().showHelper(d.Localize.text("dialog_alliance_pactList"), d.Localize.text("help_pact"));
          break;
        case this.subLayerDisp.aw_checkbox:
          this.sendAutoWarUpdate();
      }
    }
  };
  CastleAllianceDialogDiplomacy.prototype.isButtonWatchAlliance = function (e) {
    return D.ButtonHelper.hasBasicButton(e) && e.toolTipText == "dialog_alliance_newDiplomacyRequest";
  };
  CastleAllianceDialogDiplomacy.prototype.isDiplomacyItem = function (e) {
    return D.ButtonHelper.hasBasicButton(e) && e.toolTipText == "dialog_alliance_diplomacyStatus_info";
  };
  CastleAllianceDialogDiplomacy.prototype.onAllianceDataUpdated = function (e) {
    if (e.allianceInfoVO) {
      if (e.allianceInfoVO.allianceId == this._lastRequestedAllianceInfo) {
        y.CastleModel.allianceData.removeEventListener(O.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
        y.CastleModel.allianceData.removeEventListener(O.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
        if (e.allianceInfoVO.isInPeaceNegociations) {
          this.showPeaceOffer(e.allianceInfoVO);
        }
      }
    } else {
      y.CastleModel.allianceData.removeEventListener(O.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
      y.CastleModel.allianceData.removeEventListener(O.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.onAllianceDataUpdated));
      y.CastleModel.smartfoxClient.sendCommandVO(new f.C2SGetAllianceInfoVO(y.CastleModel.userData.allianceID));
    }
  };
  CastleAllianceDialogDiplomacy.prototype.showPeaceOffer = function (e) {
    if (E.SpecialServerHelper.isCrossplay()) {
      var t = d.Localize.text("dialog_allianceDiplomacy_peaceOffer_copy", [e.allianceName]);
      M.CastleDialogHandler.getInstance().registerDefaultDialogs(T.ModernYesNoDialog, new o.BasicStandardYesNoDialogProperties("attention", t, function () {
        y.CastleModel.smartfoxClient.sendCommandVO(new m.C2SAllianceChangeDiplomacyVO(e.allianceId, u.AllianceConst.DIPLOMACY_NEUTRAL));
      }));
    } else {
      M.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleReceivedPeaceOfferDialog, new A.CastleSuggestPeaceDialogProperties(e.peaceOfferVO));
    }
  };
  Object.defineProperty(CastleAllianceDialogDiplomacy.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogDiplomacy.prototype.warListMouseWheelHandler = function (e) {
    this.startIndexWar += g.int(this.scrollList(e));
    this.fillStatusList(this.subLayerDisp.mc_WarList, u.AllianceConst.DIPLOMACY_IN_WAR);
  };
  CastleAllianceDialogDiplomacy.prototype.noAttackMouseWheelHandler = function (e) {
    this.startIndexNoAttack += g.int(this.scrollList(e));
    this.fillStatusList(this.subLayerDisp.mc_NoAttackList, u.AllianceConst.DIPLOMACY_SOFT_ALLIED);
  };
  CastleAllianceDialogDiplomacy.prototype.pactMouseWheelHandler = function (e) {
    this.startIndexPact += g.int(this.scrollList(e));
    this.fillStatusList(this.subLayerDisp.mc_PactList, u.AllianceConst.DIPLOMACY_REAL_ALLIED);
  };
  CastleAllianceDialogDiplomacy.prototype.scrollList = function (e) {
    var t = 0;
    if (e.delta < 0) {
      t = -1;
    } else if (e.delta > 0) {
      t = 1;
    }
    return t;
  };
  CastleAllianceDialogDiplomacy.__initialize_static_members = function () {
    CastleAllianceDialogDiplomacy.ITEM_SPACE = 5;
    CastleAllianceDialogDiplomacy.MAX_ITEMS_IN_ONE_LIST = 9;
    CastleAllianceDialogDiplomacy.BUTTON_X = 60;
  };
  return CastleAllianceDialogDiplomacy;
}(I.CastleDialogSubLayer);
exports.CastleAllianceDialogDiplomacy = P;
var M = require("./9.js");
var R = require("./132.js");
var V = require("./1365.js");
var x = require("./1368.js");
l.classImplementsInterfaces(P, "ICollectableRendererList", "ISublayer");
P.__initialize_static_members();