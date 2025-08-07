Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./375.js");
var h = require("./659.js");
var g = require("./279.js");
var C = require("./280.js");
var _ = require("./163.js");
var m = require("./322.js");
var f = require("./59.js");
var O = require("./8.js");
var E = function (e) {
  function SamuraiDaimyoEventDialogContracts(t) {
    var i = this;
    i._receivedContractData = false;
    i._receivedAreaData = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SamuraiDaimyoEventDialogContracts, e);
  SamuraiDaimyoEventDialogContracts.prototype.init = function () {
    O.ButtonHelper.initButton(this.subLayerDisp.mc_questInfo.btn_showMe, -1, L.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("allianceContracts"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_questInfo.txt_rewardsTitle, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("rewards"))).autoFitToBounds = true;
    this.subLayerDisp.mc_questInfo.btn_showMe.toolTipText = "dialog_questInfo_showMe";
    this._selection = new A.SamuraiDaimyoEventDialogContractsSelection(this.subLayerDisp.mc_questList, new g.AccordionComponentProperties(g.AccordionComponentProperties.SCROLL_DURATION, 48, true, true, f.DynamicSizeScrollStrategyVertical));
    this._rewards = new v.SeasonLeagueSimpleRewardsComponent(this.subLayerDisp.mc_questInfo, true, false);
  };
  SamuraiDaimyoEventDialogContracts.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(h.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.addEventListener(h.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._selection.onSelection.add(this.bindFunction(this.onContractSelection));
    this._selection.show();
    this._receivedContractData = false;
    this._receivedAreaData = false;
    d.CastleModel.samuraiDaimyoData.server.requestGDC();
    d.CastleModel.samuraiDaimyoData.server.requestGDA();
  };
  SamuraiDaimyoEventDialogContracts.prototype.hide = function () {
    this.controller.removeEventListener(h.SamuraiDaimyoEvent.ON_CONTRACTS_UPDATED, this.bindFunction(this.onContractsUpdated));
    this.controller.removeEventListener(h.SamuraiDaimyoEvent.ON_AREAS_UPDATED, this.bindFunction(this.onAreasUpdated));
    this._selection.onSelection.remove(this.bindFunction(this.onContractSelection));
    this._selection.hide();
    e.prototype.hide.call(this);
  };
  SamuraiDaimyoEventDialogContracts.prototype.updateContractSelection = function () {
    if (this._receivedAreaData && this._receivedContractData) {
      this._selection.clear();
      var e = new C.GenericCollapsibleItemProperties(new _.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2);
      this._selection.addItem(new S.SamuraiDaimyoEventDialogContractsCategory(p.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, e));
      this._selection.addItem(new S.SamuraiDaimyoEventDialogContractsCategory(p.SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP, e));
      for (var t = 0, i = this._selection.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
      this._selection.onItemChangeComplete();
      this._selection.reselectPreviousContract();
    }
  };
  SamuraiDaimyoEventDialogContracts.prototype.updateContractInfo = function () {
    var e = this.subLayerDisp.mc_questInfo;
    var t = this._selection.getSelectedContract();
    var i = t.getXmlContractVO();
    var n = c.int(t.progressVO.points);
    var o = i.shogunPoints;
    this.textFieldManager.registerTextField(e.txt_name, t.getNameTextVO()).autoFitToBounds = true;
    this.textFieldManager.registerTextField(e.txt_rank, t.getRankTextVO()).autoFitToBounds = true;
    this.textFieldManager.registerTextField(e.txt_desc, t.getDescriptionTextVO());
    this.textFieldManager.registerTextField(e.txt_info, new l.LocalizedTextVO("contracts_condition_score", [o - n])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(e.mc_progress.txt_text, new l.LocalizedTextVO("numbersXY", [n, o])).autoFitToBounds = true;
    new m.SimpleProgressBarComponent(e.mc_progress, 310).setProgressByPercent(n / o);
    var a = new D.CollectableList();
    a.addItem(b.CollectableHelper.createVO(y.CollectableEnum.WAR_EFFORT_POINTS, i.warEffortPoints));
    this._rewards.updateWithNewData(a);
  };
  SamuraiDaimyoEventDialogContracts.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.mc_questInfo.btn_showMe:
        this.onShowMeButtonClicked();
    }
  };
  SamuraiDaimyoEventDialogContracts.prototype.onShowMeButtonClicked = function () {
    var e = this._selection.getSelectedContract();
    var t = e.getXmlContractVO();
    var i = d.CastleModel.samuraiDaimyoData.server.getArea(e.contractType, t.rank);
    var n = new T.DaimyoCastleMapObjectVO();
    n.parseAreaInfo([s.WorldConst.AREA_TYPE_DAIMYO_CASTLE, i.x, i.y]);
    a.CommandController.instance.executeCommand(I.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, n);
  };
  SamuraiDaimyoEventDialogContracts.prototype.onContractsUpdated = function (e) {
    this._receivedContractData = true;
    this.updateContractSelection();
  };
  SamuraiDaimyoEventDialogContracts.prototype.onContractSelection = function () {
    this.updateContractInfo();
  };
  SamuraiDaimyoEventDialogContracts.prototype.onAreasUpdated = function (e) {
    this._receivedAreaData = true;
    this.updateContractSelection();
  };
  return SamuraiDaimyoEventDialogContracts;
}(require("./35.js").CastleDialogSubLayer);
exports.SamuraiDaimyoEventDialogContracts = E;
o.classImplementsInterfaces(E, "ICollectableRendererList", "ISublayer");
var y = require("./12.js");
var b = require("./45.js");
var D = require("./48.js");
var I = require("./29.js");
var T = require("./527.js");
var v = require("./301.js");
var S = require("./3744.js");
var A = require("./3746.js");
var L = require("./36.js");