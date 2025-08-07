Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./44.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = function (e) {
  function AllianceMemberScrollItem(t) {
    var i = e.call(this, t) || this;
    i.itxt_honor = i.textFieldManager.registerTextField(t.txt_honor, new u.LocalizedNumberVO(0), new a.InternalGGSTextFieldConfigVO(true));
    i.itxt_level = i.textFieldManager.registerTextField(t.txt_level, new c.TextVO(""), new a.InternalGGSTextFieldConfigVO(true));
    i.itxt_coin = i.textFieldManager.registerTextField(t.txt_don_c1_res, new u.LocalizedNumberVO(0, true), new a.InternalGGSTextFieldConfigVO(true));
    return i;
  }
  n.__extends(AllianceMemberScrollItem, e);
  AllianceMemberScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.fillItem(this.disp, this.allianceMemberScrollItemVO);
  };
  AllianceMemberScrollItem.prototype.fillItem = function (e, t) {
    var i = t.ownerInfoVO;
    if (e && e.mc_bg && i) {
      var n = t.additionalMemberInfoVO;
      if (n) {
        e.mc_bg.visible = n.hasLandmark;
        if (e.mc_bg.visible) {
          e.mc_bg.gotoAndStop(this.getItemBgFrame(n));
        }
        e.btn_name.playerID = i.playerID;
        e.btn_name.toolTipText = this.getItemLandmarkToolTip(n);
        var o = g.CastleModel.allianceData.mayRerank(g.CastleModel.userData.allianceRank, i.allianceRank) && i.playerID != g.CastleModel.userData.playerID;
        e.btn_settings.visible = o;
        C.ButtonHelper.initBasicButtons([e.btn_settings]);
        C.ButtonHelper.initButton(e.btn_name, -1, f.AllianceMemberNameButton);
        C.ButtonHelper.enableButton(e.btn_settings, o);
        e.btn_settings.memberVO = i;
        e.btn_settings.toolTipText = d.Localize.text("dialog_alliance_memberSettings");
        e.icon_rank_area.icon_rank.gotoAndStop(i.allianceRank + 1);
        e.icon_rank_area.toolTipText = d.Localize.text("dialog_alliance_rank" + m.CastleAllianceData.getTextIDForRank(i.allianceRank));
        this.textFieldManager.registerTextField(e.btn_name.txt_playerName, new c.TextVO(i.playerName), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
        e.btn_name.txt_playerName.mouseEnabled = true;
        this.textFieldManager.registerTextField(e.txt_donatedC2, new u.LocalizedNumberVO(n.givenC2, true), new a.InternalGGSTextFieldConfigVO(true));
        this.updateHonor(this.allianceMemberScrollItemVO.honorShown);
        this.updateLegendXP(this.allianceMemberScrollItemVO.legendXPShown);
        this.updateCoin(this.allianceMemberScrollItemVO.coinShown);
        this.textFieldManager.registerTextField(e.txt_dailyfame, new u.LocalizedNumberVO(n.dailyFame, true), new a.InternalGGSTextFieldConfigVO(true));
        e.icon_state.gotoAndStop(n.loginActivity + 1);
        e.icon_state.toolTipText = d.Localize.text("dialog_alliance_loginActivity_state" + n.loginActivity);
        var s = g.CastleModel.userData.castleList.getMainCastleByKingdomID(l.WorldClassic.KINGDOM_ID);
        var r = i.getMainCastlePositionByKingdomID(l.WorldClassic.KINGDOM_ID);
        var h = 0;
        h = s && r ? p.int(t.distanceToTarget) : 0;
        this.textFieldManager.registerTextField(e.txt_distance, new c.TextVO(String(h == 0 ? "" : h)), new a.InternalGGSTextFieldConfigVO(true));
      }
    }
  };
  Object.defineProperty(AllianceMemberScrollItem.prototype, "allianceMemberScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItem.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AllianceMemberScrollItem.prototype.getItemBgFrame = function (e) {
    if (e.capitalCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_CAPITAL;
    } else if (e.metropolCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_METROPOL;
    } else if (e.kingstowerCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_KINGSTOWER;
    } else if (e.laboratoryCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_LABORATORY;
    } else {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_CAPITAL;
    }
  };
  AllianceMemberScrollItem.prototype.getItemLandmarkToolTip = function (e) {
    if (!e.hasLandmark) {
      return null;
    }
    var t = d.Localize.text("dialog_landmarkOwner_Tooltip");
    if (e.capitalCount > 0) {
      if (e.capitalCount == 1) {
        t += "\n" + d.Localize.text("dialog_landmarkOwner_countCapitals_Tooltip_singular");
      } else {
        t += "\n" + d.Localize.text("dialog_landmarkOwner_countCapitals_Tooltip", [e.capitalCount]);
      }
    }
    if (e.metropolCount > 0) {
      if (e.metropolCount == 1) {
        t += "\n" + d.Localize.text(h.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countMetropolis_Tooltip_singular"));
      } else {
        t += "\n" + d.Localize.text(h.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countMetropolis_Tooltip"), [e.metropolCount]);
      }
    }
    if (e.kingstowerCount > 0) {
      if (e.kingstowerCount == 1) {
        t += "\n" + d.Localize.text(h.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countKingtower_Tooltip_singular"));
      } else {
        t += "\n" + d.Localize.text(h.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countKingtower_Tooltip"), [e.kingstowerCount]);
      }
    }
    if (e.monumentCount > 0) {
      if (e.monumentCount == 1) {
        t += "\n" + d.Localize.text("dialog_landmarkOwner_countMonument_Tooltip_singular");
      } else {
        t += "\n" + d.Localize.text("dialog_landmarkOwner_countMonument_Tooltip", [e.monumentCount]);
      }
    }
    if (e.laboratoryCount > 0) {
      if (e.laboratoryCount == 1) {
        t += "\n" + d.Localize.text("dialog_landmarkOwner_countLaboratory_Tooltip_singular");
      } else {
        t += "\n" + d.Localize.text("dialog_landmarkOwner_countLaboratory_Tooltip", [e.laboratoryCount]);
      }
    }
    return t;
  };
  AllianceMemberScrollItem.prototype.updateHonor = function (e) {
    if (this.itxt_honor.textContentVO) {
      this.itxt_honor.textContentVO.numberValue = e ? this.allianceMemberScrollItemVO.ownerInfoVO.honor : this.allianceMemberScrollItemVO.ownerInfoVO.might;
    }
  };
  AllianceMemberScrollItem.prototype.updateLegendXP = function (e) {
    this.itxt_level.textContentVO.stringValue = e ? String(this.allianceMemberScrollItemVO.ownerInfoVO.playerLegendLevel) : String(this.allianceMemberScrollItemVO.ownerInfoVO.playerLevel);
  };
  AllianceMemberScrollItem.prototype.updateCoin = function (e) {
    this.itxt_coin.textContentVO.numberValue = e ? this.allianceMemberScrollItemVO.additionalMemberInfoVO.givenC1 : this.allianceMemberScrollItemVO.additionalMemberInfoVO.givenResources;
  };
  AllianceMemberScrollItem.ITEM_BG_FRAME_CAPITAL = 1;
  AllianceMemberScrollItem.ITEM_BG_FRAME_METROPOL = 2;
  AllianceMemberScrollItem.ITEM_BG_FRAME_KINGSTOWER = 3;
  AllianceMemberScrollItem.ITEM_BG_FRAME_LABORATORY = 4;
  return AllianceMemberScrollItem;
}(o.ScrollItem);
exports.AllianceMemberScrollItem = _;
var m = require("./317.js");
var f = require("./2467.js");
r.classImplementsInterfaces(_, "MovieClip");