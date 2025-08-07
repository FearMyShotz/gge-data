Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./769.js");
var d = function (e) {
  function CastleResearchCompleteDialog() {
    return e.call(this, CastleResearchCompleteDialog.NAME) || this;
  }
  n.__extends(CastleResearchCompleteDialog, e);
  CastleResearchCompleteDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], y.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_researchTower_completePopup_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new a.LocalizedTextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_researchTower_completePopup_jumpTo")));
  };
  CastleResearchCompleteDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.researchVO;
    h.ResearchIconHelper.addResearchIcon(i.groupVO, this.dialogDisp.mc_icon);
    this.updateColorOfDisp(this.dialogDisp.content_research_tower_skill_color);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(i.descriptionTextId, i.descriptionTextReplacements));
    this.dialogDisp.mc_icon.mouseChildren = false;
    this.dialogDisp.mc_icon.toolTipText = i.groupVO.toolTip;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_level.txt_copy, new a.LocalizedTextVO("numbersXY", [i.level, i.groupVO.maxLevel]));
  };
  CastleResearchCompleteDialog.prototype.onClick = function (e) {
    if (l.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onClickShowButton();
          this.hide();
      }
    }
  };
  CastleResearchCompleteDialog.prototype.updateColorOfDisp = function (e) {
    var t;
    var i = this.dialogProperties.researchVO;
    t = !i.groupVO || this.isLocked ? b.ResearchTreeItem.LOCKED : i.groupVO.isFullyResearched ? b.ResearchTreeItem.GREEN : i.groupVO.currentLevel == 0 ? b.ResearchTreeItem.NORMAL : b.ResearchTreeItem.YELLOW;
    e.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
  };
  CastleResearchCompleteDialog.prototype.onClickShowButton = function () {
    if (r.CastleModel.researchData.isResearchTowerBuilt) {
      this.jumpToResearch();
    } else if (this.layoutManager.isInMyCastle && r.CastleModel.areaData.activeArea.isMyMainCastle && r.CastleModel.kingdomData.activeKingdomID == f.WorldClassic.KINGDOM_ID) {
      this.onJoinMainCastle(null);
    } else {
      this.controller.addEventListener(m.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
      r.CastleModel.smartfoxClient.sendCommandVO(new O.C2SJoinCastleVO(r.CastleModel.userData.castleList.getHomeCastle().objectId, f.WorldClassic.KINGDOM_ID));
    }
  };
  CastleResearchCompleteDialog.prototype.onJoinMainCastle = function (e) {
    this.controller.removeEventListener(m.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    if (castAs(_.Iso.renderer.objects.provider.getObjectByType(C.IsoObjectEnum.RESEARCH_TOWER), "ABasicBuildingVE")) {
      this.jumpToResearch();
    }
  };
  CastleResearchCompleteDialog.prototype.jumpToResearch = function () {
    var e = this.findNextResearch();
    var t = this.layoutManager.getDialog(g.CastleResearchDialog);
    if (t && t.isVisible()) {
      t.openNextResearch(e, this.dialogProperties.researchVO);
    } else {
      p.CastleDialogHandler.getInstance().registerDialogs(g.CastleResearchDialog, new u.CastleResearchDialogProperties(e, this.dialogProperties.researchVO));
    }
  };
  CastleResearchCompleteDialog.prototype.findNextResearch = function () {
    if (this.dialogProperties.researchVO.level < this.dialogProperties.researchVO.groupVO.maxLevel) {
      return this.dialogProperties.researchVO.groupVO.getResearchByLevel(this.dialogProperties.researchVO.level + 1);
    }
    if (this.dialogProperties.researchVO.nextResearch) {
      return this.dialogProperties.researchVO.nextResearch;
    }
    var e;
    var t = Array.from(r.CastleModel.researchData.groupVOs.values());
    for (var i = 0, n = t; i < n.length; i++) {
      if ((s = n[i]) !== undefined && (e = s).tabId == this.dialogProperties.researchVO.groupVO.tabId && e.isResearchable) {
        return e.topResearch;
      }
    }
    for (var o = 0, a = t; o < a.length; o++) {
      var s;
      if ((s = a[o]) !== undefined && (e = s).tabId != this.dialogProperties.researchVO.groupVO.tabId && e.isResearchable) {
        return e.topResearch;
      }
    }
  };
  Object.defineProperty(CastleResearchCompleteDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchCompleteDialog.NAME = "ModernResearchComplete";
  return CastleResearchCompleteDialog;
}(c.CastleExternalDialog);
exports.CastleResearchCompleteDialog = d;
var p = require("./9.js");
var h = require("./630.js");
var g = require("./450.js");
var C = require("./80.js");
var _ = require("./33.js");
var m = require("./37.js");
var f = require("./5.js");
var O = require("./159.js");
var E = require("./13.js");
var y = require("./20.js");
var b = require("./1474.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");