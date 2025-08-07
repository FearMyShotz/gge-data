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
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./6.js");
var f = require("./55.js");
var O = require("./1293.js");
var E = require("./243.js");
var y = require("./37.js");
var b = require("./423.js");
var D = require("./26.js");
var I = require("./580.js");
var T = require("./44.js");
var v = require("./4.js");
var S = require("./8.js");
var A = require("./513.js");
var L = require("./2272.js");
var P = createjs.Point;
var M = function (e) {
  function CastleNameCastleDialog() {
    return e.call(this, CastleNameCastleDialog.NAME) || this;
  }
  n.__extends(CastleNameCastleDialog, e);
  Object.defineProperty(CastleNameCastleDialog.prototype, "defaultName", {
    get: function () {
      return this.getInsertTextReplacement();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(A.BasicRenameDialog.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleNameCastleDialog.prototype, "textMaxChars", {
    get: function () {
      return u.PlayerConst.CASTLE_NAME_MAX_LENGTH;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(A.BasicRenameDialog.prototype, "textMaxChars").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleNameCastleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    CastleNameCastleDialog.__initialize_static_members();
    if (!this.nameDialogProperties.worldmapVO || this.nameDialogProperties.worldmapVO.isOwnMapobject) {
      S.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
      if (this.nameDialogProperties.worldmapVO) {
        this.dialogDisp.mc_cood.visible = this.nameDialogProperties.worldmapVO.absAreaPosX >= 0 && this.nameDialogProperties.worldmapVO.absAreaPosY >= 0;
        r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleHolder);
        this.dialogDisp.mc_castleHolder.addChild(Y.WorldmapObjectIconHelper.drawMapObjectIcon(this.nameDialogProperties.worldmapVO, new P(80, 50), true, false, false));
        this.itxt_cood = this.textFieldManager.registerTextField(this.dialogDisp.mc_cood.txt_coordinate, new C.LocalizedTextVO(l.GenericTextIds.VALUE_COORDS, [this.nameDialogProperties.worldmapVO.absAreaPosX, this.nameDialogProperties.worldmapVO.absAreaPosY]));
        this.itxt_cood.autoFitToBounds = true;
        this.initStaticText(this.dialogDisp.txt_title, this.getTextIdByType(L.NameCastleItemVO.TEXT_ID_TYPE_TITLE)).autoFitToBounds = true;
        this.initStaticText(this.dialogDisp.txt_copy, this.getTextIdByType(L.NameCastleItemVO.TEXT_ID_TYPE_DESCRIPTION)).autoFitToBounds = true;
        this.initStaticText(this.dialogDisp.txt_insertTitle, this.getTextIdByType(L.NameCastleItemVO.TEXT_ID_TYPE_INSERT_TITLE)).autoFitToBounds = true;
        if (z.instanceOfClass(this.nameDialogProperties.worldmapVO, "FactionCampMapobjectVO")) {
          var i = v.CastleModel.specialEventData.getActiveEventByEventId(h.EventConst.EVENTTYPE_FACTION).ownFaction == g.FactionConst.BLUE_FACTION ? R.FactionEventVO.BLUE_CREST_VO : R.FactionEventVO.RED_CREST_VO;
          W.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, i);
          W.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest2, i);
        } else {
          W.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, v.CastleModel.userData.playerCrest);
          W.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest2, v.CastleModel.userData.playerCrest);
        }
      }
    } else {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(y.CastleServerMessageArrivedEvent.ARC_ARRIVED, this.bindFunction(this.onServerOk));
    this.controller.addEventListener(E.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.addEventListener(I.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
    this.controller.addEventListener(b.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
    if (this.nameDialogProperties.worldmapVO.kingdomID == g.FactionConst.KINGDOM_ID) {
      v.CastleModel.specialEventData.addEventListener(D.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    }
  };
  CastleNameCastleDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(y.CastleServerMessageArrivedEvent.ARC_ARRIVED, this.bindFunction(this.onServerOk));
    this.controller.removeEventListener(E.CastleEilandEvent.EILAND_RESET, this.bindFunction(this.onEilandReset));
    this.controller.removeEventListener(I.MonumentEvent.MONUMENTS_RESET_WARNING, this.bindFunction(this.onMonumentReset));
    this.controller.removeEventListener(b.LaboratoryEvent.LABORATORY_RESET_WARNING, this.bindFunction(this.onLaboratoryReset));
    if (this.nameDialogProperties.worldmapVO.kingdomID == g.FactionConst.KINGDOM_ID) {
      v.CastleModel.specialEventData.removeEventListener(D.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    }
  };
  CastleNameCastleDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == h.EventConst.EVENTTYPE_FACTION) {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.onEilandReset = function (e) {
    if (this.nameDialogProperties.kingdomID == d.WorldIsland.KINGDOM_ID) {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.onMonumentReset = function (e) {
    if (this.nameDialogProperties.worldmapVO.areaType == p.WorldConst.AREA_TYPE_MONUMENT) {
      a.debug("gonna hide that error dialog");
      this.layoutManager.hideDialog(K.CastleStandardOkDialog);
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.onLaboratoryReset = function (e) {
    if (this.nameDialogProperties.worldmapVO.areaType == p.WorldConst.AREA_TYPE_LABORATORY) {
      a.debug("gonna hide that error dialog");
      this.layoutManager.hideDialog(K.CastleStandardOkDialog);
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.validate = function () {
    var e = this.itxt_insert.text;
    e.substr(0, u.PlayerConst.CASTLE_NAME_MAX_LENGTH);
    if (e.length < o.BasicModel.basicLocalization.getUsernameMinLength) {
      this.alert("dialog_eiland_titleMenu_error", "alert_castlenameTooShort");
    } else {
      if (s.TextValide.isUsernameValide(e) || this.itxt_cood.text == this.itxt_insert.text) {
        return true;
      }
      this.alert("generic_alert_watchout", "errorCode_28");
    }
    return false;
  };
  CastleNameCastleDialog.prototype.sendCommand = function () {
    var e = m.int(this.nameDialogProperties.worldmapVO ? this.nameDialogProperties.worldmapVO.objectId : this.nameDialogProperties.castleID);
    if (this.nameDialogProperties.worldmapVO) {
      var t = this.itxt_insert.text;
      t.substr(0, u.PlayerConst.CASTLE_NAME_MAX_LENGTH);
      v.CastleModel.smartfoxClient.sendCommandVO(new O.C2SRenameCastleVO(e, this.nameDialogProperties.kingdomID, t, 0, this.nameDialogProperties.worldmapVO.areaType));
      S.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    }
  };
  CastleNameCastleDialog.prototype.onServerOk = function (e) {
    var t = JSON.parse(e.params[1]);
    S.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    if (this.nameDialogProperties.castleID == m.int(t.CID)) {
      this.hide();
    }
  };
  CastleNameCastleDialog.prototype.getTextIdByType = function (e) {
    var t = CastleNameCastleDialog.TEXT_ID_LIST.get(f.ClientConstUtils.getClassFromObject(this.nameDialogProperties.worldmapVO));
    if (t) {
      return _.Localize.text(t[e]);
    } else {
      return "";
    }
  };
  CastleNameCastleDialog.prototype.getInsertTextReplacement = function () {
    var e = this.nameDialogProperties.worldmapVO;
    var t = "";
    var i = null;
    switch (true) {
      case z.instanceOfClass(e, "KingdomCastleMapobjectVO"):
      case z.instanceOfClass(e, "CastleMapobjectVO"):
        t = "castle_placeholder";
        i = [v.CastleModel.userData.userName];
        break;
      case z.instanceOfClass(e, "CapitalMapobjectVO"):
        t = "capital_placeholder";
        i = [v.CastleModel.userData.userName];
        break;
      case z.instanceOfClass(e, "MetropolMapobjectVO"):
        t = T.SpecialServerHelper.checkTextIDForSkinText("metropol_name_short");
        i = [v.CastleModel.userData.userName];
        break;
      case z.instanceOfClass(e, "OutpostMapobjectVO"):
        t = "outpost_placeholder";
        i = [v.CastleModel.userData.userName];
        break;
      case z.instanceOfClass(e, "VillageMapobjectVO"):
      case z.instanceOfClass(e, "MonumentMapobjectVO"):
      case z.instanceOfClass(e, "KingstowerMapobjectVO"):
      case z.instanceOfClass(e, "LaboratoryMapobjectVO"):
        t = l.GenericTextIds.VALUE_COORDS;
        i = [this.nameDialogProperties.worldmapVO.absAreaPosX, this.nameDialogProperties.worldmapVO.absAreaPosY];
        break;
      case z.instanceOfClass(e, "FactionCampMapobjectVO"):
        if (CastleNameCastleDialog.isMyFactionMainCamp(e)) {
          t = "faction_camp_placeholder";
          i = [v.CastleModel.userData.userName];
        } else {
          t = l.GenericTextIds.VALUE_COORDS;
          i = [this.nameDialogProperties.worldmapVO.absAreaPosX, this.nameDialogProperties.worldmapVO.absAreaPosY];
        }
    }
    return v.CastleModel.languageData.getTextById(t, i).substr(0, u.PlayerConst.CASTLE_NAME_MAX_LENGTH);
  };
  CastleNameCastleDialog._createTextIdList = function () {
    var e = new Map();
    e.set(B.KingdomCastleMapobjectVO, new L.NameCastleItemVO("kingdomCastle_name", "dialog_nameCastle_copy_kingdomCastle", "dialog_nameCastle_insertTitle"));
    e.set(x.CastleMapobjectVO, new L.NameCastleItemVO("dialog_nameCastle_title", "dialog_nameCastle_copy", "dialog_nameCastle_insertTitle"));
    e.set(V.CapitalMapobjectVO, new L.NameCastleItemVO(T.SpecialServerHelper.checkTextIDForSkinText("capital"), "dialog_nameCastle_copy_capital", "dialog_nameCastle_insertTitle_capital"));
    e.set(k.MetropolMapobjectVO, new L.NameCastleItemVO(T.SpecialServerHelper.checkTextIDForSkinText("metropol"), T.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_copy_metropol"), T.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_insertTitle_metropol")));
    e.set(G.OutpostMapobjectVO, new L.NameCastleItemVO("outpost_name", "dialog_nameCastle_copy_outpost", "dialog_nameCastle_insertTitle_outpost"));
    e.set(H.ResourceIsleMapobjectVO, new L.NameCastleItemVO("resourceIsland_name", "dialog_nameCastle_copy_resourceIsland", "dialog_nameCastle_insertTitle_resourceIsland"));
    e.set(j.VillageMapobjectVO, new L.NameCastleItemVO("village_name", "dialog_nameCastle_copy_village", "dialog_nameVillage_insertTitle"));
    e.set(F.KingstowerMapobjectVO, new L.NameCastleItemVO(T.SpecialServerHelper.checkTextIDForSkinText("kingstower_name"), T.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_copy_kingstower"), T.SpecialServerHelper.checkTextIDForSkinText("dialog_nameCastle_insertTitle_kingstower")));
    e.set(U.MonumentMapobjectVO, new L.NameCastleItemVO("monument_name", "dialog_nameCastle_copy_monument", "dialog_nameCastle_insertTitle_monument"));
    e.set(N.LaboratoryMapobjectVO, new L.NameCastleItemVO("laboratory_name", "dialog_nameCastle_copy_laboratory", "dialog_nameCastle_insertTitle_laboratory"));
    e.set(w.FactionCampMapobjectVO, new L.NameCastleItemVO("faction_camp", "dialog_nameCastle_copy_factionCamp", "dialog_nameCastle_insertTitle_factionCamp"));
    return e;
  };
  CastleNameCastleDialog.isMyFactionMainCamp = function (e) {
    if (!z.instanceOfClass(e, "FactionCampMapobjectVO")) {
      return false;
    }
    var t = v.CastleModel.userData.castleList ? v.CastleModel.userData.castleList.getMainFactionCastle() : null;
    return !!t && t.absAreaPosX == e.absAreaPosX && t.absAreaPosY == e.absAreaPosY;
  };
  Object.defineProperty(CastleNameCastleDialog.prototype, "nameDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleNameCastleDialog.__initialize_static_members = function () {
    CastleNameCastleDialog.TEXT_ID_LIST = CastleNameCastleDialog._createTextIdList();
  };
  CastleNameCastleDialog.NAME = "CastleNameCastle";
  return CastleNameCastleDialog;
}(A.BasicRenameDialog);
exports.CastleNameCastleDialog = M;
var R = require("./202.js");
var V = require("./500.js");
var x = require("./502.js");
var w = require("./597.js");
var B = require("./912.js");
var F = require("./509.js");
var N = require("./705.js");
var k = require("./578.js");
var U = require("./579.js");
var G = require("./501.js");
var H = require("./913.js");
var j = require("./598.js");
var W = require("./61.js");
var Y = require("./70.js");
var K = require("./38.js");
c.classImplementsInterfaces(M, "ICollectableRendererList");
var z = require("./1.js");
M.__initialize_static_members();