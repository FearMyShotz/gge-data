Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./16.js");
var h = require("./218.js");
var g = require("./159.js");
var C = require("./37.js");
var _ = require("./219.js");
var m = require("./160.js");
var f = require("./4.js");
var O = require("./24.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./263.js");
var D = function (e) {
  function CastleDesertedTroopsDialog() {
    var t = this;
    t.hospitalAreaID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleDesertedTroopsDialog.NAME) || this;
  }
  n.__extends(CastleDesertedTroopsDialog, e);
  CastleDesertedTroopsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.disp.visible = false;
    this.itxt_troopCount = this.textFieldManager.registerTextField(this.dialogDisp.mc_troopCount.txt_value, new l.LocalizedNumberVO(0));
    this.itxt_troopCount.color = p.ClientConstColor.GENERIC_RED;
    this.itxt_description = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO(""));
    this.itxt_btnDescription = this.textFieldManager.registerTextField(this.dialogDisp.btn_hospitalLink.txt_value, new c.LocalizedTextVO(""));
    this.dialogDisp.btn_overseerLink.visible = false;
    E.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_hospitalLink, this.dialogDisp.btn_ok]);
  };
  CastleDesertedTroopsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO(this.infoProperties.messageVO.isBeef ? "dialog_desertedTroops_beefUnits_title" : this.infoProperties.messageVO.isMead ? "dialog_desertedTroops_meadUnits_title" : "dialog_desertedTroops_title"));
    this.dialogDisp.mc_troopCount.toolTipText = this.infoProperties.messageVO.isBeef ? "dialog_desertedTroops_beefUnits_tooltip" : this.infoProperties.messageVO.isMead ? "dialog_desertedTroops_meadUnits_tooltip" : "dialog_desertedTroops_tooltip";
    this.itxt_troopCount.textContentVO.numberValue = this.infoProperties.messageVO.dieCount;
    if (this.infoProperties.isCamp) {
      this.itxt_description.textContentVO.textId = "dialog_factionEvent_desertedTroops_copy";
    } else if (this.infoProperties.messageVO.isMead) {
      this.itxt_description.textContentVO.textId = "dialog_desertedTroops_meadUnits_copy";
    } else if (this.infoProperties.messageVO.isBeef) {
      this.itxt_description.textContentVO.textId = "dialog_desertedTroops_beefUnits_copy";
    } else {
      this.itxt_description.textContentVO.textId = "dialog_desertedTroops_copy";
    }
    this.dialogDisp.btn_hospitalLink.visible = this.dialogDisp.overseerHolder.visible = this.infoProperties.isHospitalEnabled;
    if (this.infoProperties.isHospitalEnabled) {
      this.initNursePicture();
      this.hospitalAreaID = this.findHospitalAreaID();
      E.ButtonHelper.enableButton(this.dialogDisp.btn_hospitalLink, false);
      if (this.hospitalAreaID != -1) {
        if (f.CastleModel.userCastleListDetailed.getCastlesWithHospitalsList().length == 0) {
          f.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetDetailedCastleListVO());
          this.controller.addEventListener(_.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleDataUpdated));
        } else {
          this.checkForHospital();
        }
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.btn_hospitalLink.txt_value, new c.LocalizedTextVO("target_not_owned")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
        this.dialogDisp.btn_hospitalLink.mc_hospitalAvailable.gotoAndStop(2);
      }
    }
    this.dialogDisp.mc_mead.visible = false;
  };
  CastleDesertedTroopsDialog.prototype.initNursePicture = function () {
    this.charIcon = new O.CastleGoodgameExternalClip(CastleDesertedTroopsDialog.CHAR_ICON_NURSE_ASSET_NAME, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleDesertedTroopsDialog.CHAR_ICON_NURSE_ASSET_NAME), null, 0, false);
    if (this.charIcon.isLoaded) {
      this.onClipLoaded(this.charIcon);
    } else {
      this.charIcon.clipLoaded.add(this.bindFunction(this.onClipLoaded));
    }
  };
  CastleDesertedTroopsDialog.prototype.onClipLoaded = function (e) {
    this.dialogDisp.overseerHolder.addChild(e.currentshownDisplayObject);
  };
  CastleDesertedTroopsDialog.prototype.findHospitalAreaID = function () {
    switch (this.infoProperties.messageVO.areaType) {
      case r.WorldConst.AREA_TYPE_KINGS_TOWER:
      case r.WorldConst.AREA_TYPE_MONUMENT:
      case r.WorldConst.AREA_TYPE_LABORATORY:
      case r.WorldConst.AREA_TYPE_VILLAGE:
      case r.WorldConst.AREA_TYPE_ISLE_RESOURCE:
        return u.int(f.CastleModel.userData.castleList.getMainCastleByKingdomID(this.infoProperties.messageVO.kingdomID).objectId);
      default:
        var e = f.CastleModel.userData.castleList.getCastleVOByID(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID);
        e ||= f.CastleModel.userData.villageList.getVillageByID(this.infoProperties.messageVO.areaID, this.infoProperties.messageVO.kingdomID);
        if (e && !e.isUnderConquerControl) {
          return u.int(this.infoProperties.messageVO.areaID);
        }
    }
    return -1;
  };
  CastleDesertedTroopsDialog.prototype.onCastleDataUpdated = function (e = null) {
    this.controller.removeEventListener(_.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onCastleDataUpdated));
    this.checkForHospital();
  };
  CastleDesertedTroopsDialog.prototype.checkForHospital = function () {
    var e = f.CastleModel.userCastleListDetailed.getVObyCastleID(this.hospitalAreaID, this.infoProperties.messageVO.kingdomID);
    var t = !!e && e.hasHospital;
    if (t) {
      this.dialogDisp.btn_hospitalLink.mc_hospitalAvailable.gotoAndStop(1);
      this.itxt_btnDescription.textContentVO.textId = "dialog_desertedTroops_medicus";
    } else {
      this.dialogDisp.btn_hospitalLink.mc_hospitalAvailable.gotoAndStop(2);
      if (this.infoProperties.isCamp) {
        this.itxt_btnDescription.textContentVO.textId = "dialog_factionEvent_medicus_noHospital";
      } else {
        this.itxt_btnDescription.textContentVO.textId = "dialog_desertedTroops_medicus_noHospital";
      }
    }
    if (this.dialogDisp.btn_hospitalLink.cacheCanvas) {
      this.dialogDisp.btn_hospitalLink.updateCache();
    }
    E.ButtonHelper.enableButton(this.dialogDisp.btn_hospitalLink, t);
  };
  CastleDesertedTroopsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_hospitalLink:
          if (m.FlashBlockHelper.checkFlashBlock(this.infoProperties.messageVO.kingdomID)) {
            return;
          }
          f.CastleModel.smartfoxClient.sendCommandVO(new g.C2SJoinCastleVO(this.hospitalAreaID, this.infoProperties.messageVO.kingdomID));
          this.controller.addEventListener(C.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToHospitalLocation));
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  CastleDesertedTroopsDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.charIcon) {
      if (this.charIcon.currentshownDisplayObject && this.charIcon.currentshownDisplayObject.parent == this.dialogDisp.overseerHolder) {
        this.dialogDisp.overseerHolder.removeChild(this.charIcon.currentshownDisplayObject);
      }
      this.charIcon.dispose();
    }
  };
  CastleDesertedTroopsDialog.prototype.onSwitchedToHospitalLocation = function (e) {
    this.controller.removeEventListener(C.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToHospitalLocation));
    I.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleRecruitDialog, new b.CastleRecruitDialogProperties(d.ClientConstCastle.CATEGORY_HOSPITAL));
  };
  Object.defineProperty(CastleDesertedTroopsDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDesertedTroopsDialog.NAME = "CastleDesertedTroopsExt_R";
  CastleDesertedTroopsDialog.CHAR_ICON_NURSE_ASSET_NAME = "CharNurseIcon";
  return CastleDesertedTroopsDialog;
}(y.CastleExternalDialog);
exports.CastleDesertedTroopsDialog = D;
var I = require("./9.js");
var T = require("./225.js");
s.classImplementsInterfaces(D, "ICollectableRendererList");