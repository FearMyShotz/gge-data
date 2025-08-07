Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./3996.js");
var c = require("./312.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./35.js");
var h = require("./3997.js");
var g = require("./3999.js");
var C = function (e) {
  function CastleAllianceActionOverviewDialogHelpRequest(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleAllianceActionOverviewDialogHelpRequest, e);
  CastleAllianceActionOverviewDialogHelpRequest.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new s.LocalizedTextVO("dialog_allianceHelp_menu_copy"));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_helpAll.txt_helpAll, new s.LocalizedTextVO("dialog_allianceHelp_menu_helpAll")).autoFitToBounds = true;
    this.initBasicButtons([this.subLayerDisp.mc_list.btn_up, this.subLayerDisp.mc_list.btn_down, this.subLayerDisp.mc_list.item0.btn_help, this.subLayerDisp.mc_list.item1.btn_help, this.subLayerDisp.mc_list.item2.btn_help, this.subLayerDisp.mc_list.item3.btn_help, this.subLayerDisp.btn_helpAll]);
    this.updateHelpAllButton();
    this.createList();
    u.CastleModel.allianceHelpRequestData.addEventListener(c.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.updateHelpAllButton = function () {
    var e = false;
    for (var t = 0, i = u.CastleModel.allianceHelpRequestData.visibleRequests; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && !n.isOwnPlayer) {
        e = true;
        break;
      }
    }
    d.ButtonHelper.enableButton(this.subLayerDisp.btn_helpAll, e);
    this.subLayerDisp.btn_helpAll.toolTipText = e ? null : "dialog_allianceHelp_all_disabled_tooltip";
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_helpAll:
          u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SAllianceHelpAllRequestVO());
      }
    }
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.createList = function () {
    if (this.requestItemList) {
      this.requestItemList.clear();
      this.requestItemList.remove();
    }
    this.requestItemList = new o.ItemScrollList(this.subLayerDisp.mc_list, this.subLayerDisp.mc_list);
    this.requestItemList.scrollItemClass = h.AllianceHelpRequestScrollItem;
    var e = r.int(this.requestItemList.currentStartIndex);
    this.requestItemList.clear();
    var t = u.CastleModel.allianceHelpRequestData.visibleRequests;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined && a) {
          var s = new g.AllianceHelpRequestScrollItemVO();
          s.allianceRequestVO = a;
          this.requestItemList.pushContent(s);
        }
      }
    }
    e = r.int(Math.max(0, Math.min(e, this.requestItemList.voList.length - 1)));
    this.requestItemList.initList(e);
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.requestItemList) {
      this.requestItemList.clear();
    }
    u.CastleModel.allianceHelpRequestData.removeEventListener(c.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.onListUpdate = function (e) {
    this.createList();
    this.updateHelpAllButton();
  };
  return CastleAllianceActionOverviewDialogHelpRequest;
}(p.CastleDialogSubLayer);
exports.CastleAllianceActionOverviewDialogHelpRequest = C;
a.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");