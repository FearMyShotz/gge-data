Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./34.js");
var c = require("./473.js");
var u = require("./13.js");
var d = require("./282.js");
var p = require("./280.js");
var h = require("./157.js");
var g = require("./4016.js");
var C = require("./281.js");
var _ = require("./163.js");
var m = require("./4.js");
var f = require("./188.js");
var O = require("./59.js");
var E = function (e) {
  function CastleStormIslandsMainDialogTitles(t, i) {
    var n = e.call(this, t) || this;
    n.mainDialog = i;
    n._collapsibleProperties = new C.GenericCollapsibleItemProperties(new _.LayoutMargin(0, 4, 0, 0));
    var o = new p.AccordionComponentProperties();
    o.onlyOneActiveItem = false;
    o.scrollStrategy = O.DynamicSizeScrollStrategyVertical;
    o.scrollDuration = 0.1;
    o.scrollStepPixels = 100;
    o.disableButtons = true;
    n._accordionComponent = new d.DynamicSliderAccordionComponent(n.subLayerDisp.mc_list, o);
    return n;
  }
  n.__extends(CastleStormIslandsMainDialogTitles, e);
  CastleStormIslandsMainDialogTitles.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.btn_performanceAlliance.actLikeButton = true;
    this.subLayerDisp.btn_performancePlayer.actLikeButton = true;
    this.subLayerDisp.btn_titles.actLikeButton = true;
    this.subLayerDisp.btn_performanceAlliance.gotoAndStop(1);
    this.subLayerDisp.btn_performancePlayer.gotoAndStop(1);
    this.subLayerDisp.btn_titles.gotoAndStop(2);
    this.subLayerDisp.btn_performanceAlliance.mouseChildren = false;
    this.subLayerDisp.btn_performancePlayer.mouseChildren = false;
    this.subLayerDisp.btn_titles.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performanceAlliance.txt_text1, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_performancePlayer.txt_text1, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("myPerformance"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_titles.txt_text, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitles_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new r.LocalizedTextVO("dialog_island_main_stormTitles_desc"));
    this._accordionComponent.clear();
    this.addWarning();
    this.addTitles();
    this._accordionComponent.show();
  };
  CastleStormIslandsMainDialogTitles.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._accordionComponent.hide();
  };
  CastleStormIslandsMainDialogTitles.prototype.addWarning = function () {
    var e = new (a.getDefinitionByName("CastleStormIslandsMainTitles_Warning"))();
    var t = new h.ACollapsibleItem(e, this._collapsibleProperties);
    if (m.CastleModel.userData.isInAlliance) {
      if (m.CastleModel.allianceData.myAllianceVO.currentIslandRank != 1) {
        if (m.CastleModel.allianceData.myAllianceVO.isIslandKing) {
          this.textFieldManager.registerTextField(e.headerMC.txt_warning, new r.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_titleLoss_desc"));
        } else {
          this.textFieldManager.registerTextField(e.headerMC.txt_warning, new r.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_desc"));
        }
        this._accordionComponent.addItem(t);
      } else if (m.CastleModel.allianceData.myAllianceVO.currentIslandRank == 1 && m.CastleModel.userData.aquaPoints <= 0) {
        this.textFieldManager.registerTextField(e.headerMC.txt_warning, new r.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_titleLossPlayer_desc"));
        this._accordionComponent.addItem(t);
      }
    } else {
      this.textFieldManager.registerTextField(e.headerMC.txt_warning, new r.LocalizedTextVO("dialog_island_main_stormTitles_notQualified_noAlliance_desc"));
      this._accordionComponent.addItem(t);
    }
  };
  CastleStormIslandsMainDialogTitles.prototype.addTitles = function () {
    var e = a.getDefinitionByName("CastleStormIslandsMainTitles_Item");
    var t = m.CastleModel.titleData.getTitlesFromSystem(f.ClientConstTitle.ISLAND_TITLE);
    for (var i = t.length - 1; i >= 0; i--) {
      var n = t[i];
      var o = new e();
      var s = new g.CastleStormIslandsMainDialogTitlesItem(o, n, this._collapsibleProperties);
      this._accordionComponent.addItem(s);
    }
  };
  CastleStormIslandsMainDialogTitles.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_performanceAlliance:
        this.mainDialog.setCategory(c.CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE);
        break;
      case this.subLayerDisp.btn_performancePlayer:
        this.mainDialog.setCategory(c.CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER);
        break;
      case this.subLayerDisp.btn_titles:
        this.mainDialog.setCategory(c.CastleStormIslandsMainDialog.TAB_TITLES);
    }
  };
  return CastleStormIslandsMainDialogTitles;
}(l.CastleDialogSubLayer);
exports.CastleStormIslandsMainDialogTitles = E;
o.classImplementsInterfaces(E, "ICollectableRendererList", "ISublayer");