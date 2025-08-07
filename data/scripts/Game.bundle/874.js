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
var u = require("./3.js");
var d = require("./6.js");
var p = require("./51.js");
var h = require("./21.js");
var g = require("./4.js");
var C = require("./8.js");
var _ = require("./106.js");
var m = require("./11.js");
var f = require("./416.js");
var O = function (e) {
  function CastleResourceBoostDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleResourceBoostDialog.NAME) || this;
  }
  n.__extends(CastleResourceBoostDialog, e);
  CastleResourceBoostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.stonewallBg ||= new y.CastleStonewallBackgroundComponent(this.dialogDisp.bg);
    this.stonewallBg.setTitleByTextId("dialog_resourcesBoost_title");
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new c.LocalizedTextVO("dialog_resourcesBoost_copy"));
    C.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.bg.btn_help]);
    C.ButtonHelper.initButtons([this.dialogDisp.mc_list.item0, this.dialogDisp.mc_list.item1, this.dialogDisp.mc_list.item2, this.dialogDisp.mc_list.item3, this.dialogDisp.mc_list.item4, this.dialogDisp.btn_minus, this.dialogDisp.btn_plus], D.ClickFeedbackButtonHover);
    this.scrollComponent = new I.SimpleScrollComponent(new T.SimpleScrollVO().initByParent(this.dialogDisp).addMouseWheelElements([this.dialogDisp]), new v.SimpleScrollStrategyHorizontal(true));
  };
  CastleResourceBoostDialog.prototype.applyPropertiesLoaded = function (e = null) {
    _.CharacterHelper.createCharacterBig(p.ClientConstCharacter.CHAR_ID_OVERSEER, this.dialogDisp.mc_charPlaceHolder, 212, 179);
    this.dialogDisp.bg.btn_help.toolTipText = "generic_help";
    this.stonewallBg.update();
  };
  CastleResourceBoostDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.availableBoosters = this.getAvailableBoosters();
    var i = this.availableBoosters.length - CastleResourceBoostDialog.MAX_BOOSTERS;
    if (i > 0) {
      this.scrollComponent.init(0, i);
      this.scrollComponent.scrollToValue(0);
      this.scrollComponent.setVisibility(true);
      this.scrollComponent.show();
      this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
      this.dialogDisp.mc_list.x = 0;
    } else {
      this.dialogDisp.mc_list.x = -i * CastleResourceBoostDialog.ITEM_OFFSET;
      this.scrollComponent.init(0, 0);
      this.scrollComponent.scrollToValue(0);
      this.scrollComponent.setVisibility(false);
    }
    g.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onBoosterDataUpdated));
    this.updatBoosters();
  };
  CastleResourceBoostDialog.prototype.onScroll = function () {
    this.updatBoosters();
  };
  CastleResourceBoostDialog.prototype.onBoosterDataUpdated = function (e) {
    this.updatBoosters();
  };
  CastleResourceBoostDialog.prototype.updatBoosters = function () {
    for (var e = 0; e < CastleResourceBoostDialog.MAX_BOOSTERS; e++) {
      var t = this.dialogDisp.mc_list["item" + e];
      var i = e + this.scrollComponent.currentValue;
      if (this.availableBoosters.length <= i) {
        t.visible = false;
      } else {
        t.visible = true;
        var n = this.availableBoosters[i];
        t.resourceType = n.id;
        var s = d.int(n.remainingTimeInSeconds);
        var p = n.id + 1;
        if (s > 0) {
          t.mc_inactive.visible = false;
          t.mc_active.visible = true;
          t.mc_active.info_percent.mcIcon.gotoAndStop(p);
          t.mc_active.info_time.mcIcon.gotoAndStop(p);
          this.textFieldManager.registerTextField(t.mc_active.info_time.txt_value, new u.TextVO(a.TimeStringHelper.getTimeToString(s, a.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, l.Localize.text, false, true, true, false)));
          this.textFieldManager.registerTextField(t.mc_active.info_percent.txt_value, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [r.BoosterConst.OVERSEER_BOOST]));
          t.toolTipText = "dialog_resourcesBoost_extendOverseer";
        } else {
          t.mc_active.visible = false;
          t.mc_inactive.visible = true;
          t.mc_inactive.gotoAndStop(p);
          t.toolTipText = "dialog_resourcesBoost_hireOverseer";
        }
        g.CastleModel.boosterSaleData.handleMc(t.mc_discount, n.id);
      }
    }
  };
  CastleResourceBoostDialog.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.mc_list.item0:
        case this.dialogDisp.mc_list.item1:
        case this.dialogDisp.mc_list.item2:
        case this.dialogDisp.mc_list.item3:
        case this.dialogDisp.mc_list.item4:
          var i = d.int(t.target.resourceType);
          E.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleBuyResourceBoostDialog, new f.CastleBuyResourceBoostDialogProperties(i));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.bg.btn_help:
          E.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_buyResourceBoost"));
      }
    }
  };
  CastleResourceBoostDialog.prototype.getAvailableBoosters = function () {
    var e = [];
    for (var t = 0, i = S.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      var o = g.CastleModel.boostData.getOverseer(n);
      if (o && o.isVisible) {
        e.push(o);
      }
    }
    return e;
  };
  CastleResourceBoostDialog.prototype.hideLoaded = function (t = null) {
    g.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onBoosterDataUpdated));
    e.prototype.hideLoaded.call(this, t);
    if (this.scrollComponent) {
      this.scrollComponent.hide();
      this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
  };
  CastleResourceBoostDialog.NAME = "CastleRessourceBoostEx_T";
  CastleResourceBoostDialog.MAX_BOOSTERS = 5;
  CastleResourceBoostDialog.ITEM_OFFSET = 56;
  return CastleResourceBoostDialog;
}(m.CastleExternalDialog);
exports.CastleResourceBoostDialog = O;
var E = require("./9.js");
var y = require("./875.js");
var b = require("./417.js");
var D = require("./20.js");
var I = require("./95.js");
var T = require("./47.js");
var v = require("./189.js");
var S = require("./86.js");
s.classImplementsInterfaces(O, "ICollectableRendererList");