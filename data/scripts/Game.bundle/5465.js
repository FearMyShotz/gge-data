Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./5466.js");
var d = require("./140.js");
var p = require("./4.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function CastleTradeMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTradeMessageDialog.NAME) || this;
  }
  n.__extends(CastleTradeMessageDialog, e);
  CastleTradeMessageDialog.prototype.initLoaded = function (t = null) {
    this.dialogDisp.mc_nameEnemy.mc_searchAlliance.visible = false;
    this.dialogDisp.mc_nameOwn.mc_searchAlliance.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new l.LocalizedTextVO("dialog_startAttack_from"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_to, new l.LocalizedTextVO("dialog_startAttack_to"));
    this.itxt_title ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_tradeMessage_title"));
    this.itxt_description ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO("dialog_tradeMessage_description"));
    this.icastleOwn_txt ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_nameOwn.castleName_txt, new c.TextVO(""));
    this.icastleNmy_txt ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_nameEnemy.castleName_txt, new c.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleTradeMessageDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_title.textContentVO.textId = "dialog_tradeMessage_title";
    this.itxt_description.textContentVO.textId = "dialog_tradeMessage_description";
    this._tradeMessageResourceList = new f.CastleResourceListComponent(this.dialogDisp.mc_resources, s.getDefinitionByName("CastleResourceListCompnentItem"));
  };
  CastleTradeMessageDialog.prototype.showLoaded = function (t = null) {
    this.controller.addEventListener(d.CastleMessageDataEvent.GET_TRADE_DATA, this.bindFunction(this.onGetTradeData));
    this.requestTradeData();
    e.prototype.showLoaded.call(this, t);
  };
  CastleTradeMessageDialog.prototype.hideLoaded = function (t = null) {
    this._tradeMessageResourceList.destroy();
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(d.CastleMessageDataEvent.GET_TRADE_DATA, this.bindFunction(this.onGetTradeData));
  };
  CastleTradeMessageDialog.prototype.requestTradeData = function () {
    this.isWaitingForServerMessage = true;
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SMarketCarriageNotifyVO(this.infoProperties.messageVO.messageID));
  };
  CastleTradeMessageDialog.prototype.onGetTradeData = function (e) {
    this.isWaitingForServerMessage = false;
    var t = e.params;
    if (t) {
      this._ownerAreaVO = m.WorldmapObjectFactory.parseWorldMapArea(t[0].gaa.AI[0]);
      this._targetAreaVO = m.WorldmapObjectFactory.parseWorldMapArea(t[0].gaa.AI[1]);
      this.fillUserCastle();
      O.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest1, p.CastleModel.userData.playerCrest);
      this.drawEnemyCastle();
      O.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest0, this._ownerAreaVO.ownerInfo.crest);
      var i = _.CollectableManager.parser.s2cParamList.createList(t[0].R);
      this._tradeMessageResourceList.updateComponent(i, r.Localize.text("dialog_tradeMessage_resourcesSent"));
    } else {
      this.hide();
    }
  };
  CastleTradeMessageDialog.prototype.fillUserCastle = function (e = null) {
    var t = this._targetAreaVO;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder1);
    this.dialogDisp.mc_holder1.addChild(E.WorldmapObjectIconHelper.drawMapObjectIcon(t, new g(100, 75), true, false, true, "panel_action_jumpTo"));
    this.icastleNmy_txt.textContentVO.stringValue = t.areaNameString;
    this.dialogDisp.mc_nameEnemy.mc_dove.visible = false;
    this.dialogDisp.mc_nameEnemy.mc_rank.visible = false;
    this.dialogDisp.mc_nameEnemy.mc_searchAlliance.visible = false;
  };
  CastleTradeMessageDialog.prototype.drawEnemyCastle = function () {
    var e = this._ownerAreaVO;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder0);
    this.dialogDisp.mc_holder0.addChild(E.WorldmapObjectIconHelper.drawMapObjectIcon(e, new g(100, 75), true, false, true, "panel_action_jumpTo"));
    this.icastleOwn_txt.textContentVO.stringValue = e.areaNameString;
    this.dialogDisp.mc_nameOwn.mc_dove.visible = false;
    this.dialogDisp.mc_nameOwn.mc_searchAlliance.visible = false;
    this.dialogDisp.mc_nameOwn.mc_rank.visible = false;
  };
  CastleTradeMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleTradeMessageDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTradeMessageDialog.__initialize_static_members = function () {
    CastleTradeMessageDialog.NAME = "CastleTradeMessage";
  };
  return CastleTradeMessageDialog;
}(h.CastleExternalDialog);
exports.CastleTradeMessageDialog = C;
var _ = require("./50.js");
var m = require("./147.js");
var f = require("./320.js");
var O = require("./61.js");
var E = require("./70.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();