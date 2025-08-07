Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3080.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./355.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./81.js");
var f = require("./8.js");
var O = require("./1591.js");
var E = require("./120.js");
var y = createjs.Point;
var b = function (e) {
  function OfficersSchoolEffectItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OfficersSchoolEffectItem, e);
  OfficersSchoolEffectItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    f.ButtonHelper.initButtons([this.itemMc.btn_ok, this.itemMc.btn_active, this.itemMc.btn_unlock, this.itemMc.mc_unit0.btn_info, this.itemMc.mc_unit1.btn_info], P.ClickFeedbackButton);
  };
  OfficersSchoolEffectItem.prototype.fill = function () {
    a.MovieClipHelper.clearMovieClip(this.itemMc.mc_event);
    this.itemMc.mc_event.addChild(g.EventIconHelper.createEventIconByEventID(this.vo.eventID, new y(70, 70)));
    this.itemMc.mc_event.toolTipText = "event_title_" + this.vo.eventID;
    this.itemMc.mc_event.mouseChildren = false;
    for (var e = 0; e < 2; e++) {
      var t = this.itemMc["mc_unit" + e];
      if (this.vo.wodIDs.length >= e + 1) {
        t.visible = true;
        S.WodPicHelper.addUnitPic(_.CastleModel.wodData.getUnitVOByWodId(this.vo.wodIDs[e]), t.mc_icon, 78, 78, _.CastleModel.userData.playerCrest.colorsTwo[0], _.CastleModel.userData.playerCrest.colorsTwo[1]);
        t.mc_icon.mouseChildren = false;
        t.mc_icon.toolTipText = _.CastleModel.wodData.getUnitVOByWodId(this.vo.wodIDs[e]).getNameString();
      } else {
        t.visible = false;
      }
    }
    this.itemMc.btn_unlock.visible = !this.vo.isLockedAgainstRefresh;
    this.itemMc.btn_active.visible = this.vo.isLockedAgainstRefresh;
    this.itemMc.btn_unlock.toolTipText = "dialog_trainingProgram_lock_tooltip";
    this.itemMc.btn_unlock.toolTipText = "dialog_trainingProgram_lock_tooltip";
    this.itemMc.btn_ok.toolTipText = "dialog_trainingProgram_activate_tooltip";
    T.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_copy, new l.LocalizedTextVO("dialog_trainingProgram_effect_" + this.vo.effectVO.name, [this.vo.bonusVO.strength]));
    T.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_cost.txt_cost, new c.LocalizedNumberVO(this.vo.getCost().amount));
    this.addCollectableMc(this.itemMc.mc_cost.mc_icon);
    T.CastleComponent.textFieldManager.registerTextField(this.itemMc.btn_ok.txt_copy, new r.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_trainingProgram_activateEffect_button")));
  };
  OfficersSchoolEffectItem.prototype.addCollectableMc = function (e) {
    var t = new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_ICON, new y(30, 30));
    t.tooltip.useAmount = false;
    var i = new p.CollectableRenderClips();
    i.addIconMc(e);
    v.CollectableRenderHelper.displaySingleItemComplete(this, i, this.vo.getCost(), t);
  };
  Object.defineProperty(OfficersSchoolEffectItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolEffectItem.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.itemMc.btn_ok:
          this.onClickBuy();
          break;
        case this.itemMc.btn_unlock:
          this.sendLockItem();
          break;
        case this.itemMc.btn_active:
          this.sendUnlockItem();
          break;
        case this.itemMc.mc_unit0.btn_info:
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleRecruitInfoDialog, new E.CastleRecruitInfoDialogProperties(new D.CollectableItemUnitVO(this.vo.wodIDs[0]).unitVO));
          break;
        case this.itemMc.mc_unit1.btn_info:
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleRecruitInfoDialog, new E.CastleRecruitInfoDialogProperties(new D.CollectableItemUnitVO(this.vo.wodIDs[1]).unitVO));
      }
    }
  };
  OfficersSchoolEffectItem.prototype.onClickBuy = function () {
    T.CastleComponent.layoutManager.showDialog(A.ModernCostConfirmationDialog, new O.ModernCostConfirmationDialogProperties("dialog_trainingProgram_activateProgram_header", u.Localize.text("dialog_trainingProgram_activateProgram_desc", [this.vo.prolongDurationInHours]), this.vo.getCost(), this.bindFunction(this.onConfirmBuy)));
  };
  OfficersSchoolEffectItem.prototype.onConfirmBuy = function () {
    s.BasicModel.smartfoxClient.sendCommandVO(new d.C2SActivateTrainingProgramVO(this.vo.slotID));
  };
  OfficersSchoolEffectItem.prototype.sendLockItem = function () {
    this.vo.isLockedAgainstRefresh = true;
    this.fill();
  };
  OfficersSchoolEffectItem.prototype.sendUnlockItem = function () {
    this.vo.isLockedAgainstRefresh = false;
    this.fill();
  };
  Object.defineProperty(OfficersSchoolEffectItem.prototype, "vo", {
    get: function () {
      return this.data.vo;
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolEffectItem;
}(m.AInfiniteScrollListItem);
exports.OfficersSchoolEffectItem = b;
var D = require("./411.js");
var I = require("./9.js");
var T = require("./14.js");
var v = require("./25.js");
var S = require("./63.js");
var A = require("./1592.js");
var L = require("./115.js");
var P = require("./36.js");
o.classImplementsInterfaces(b, "ICollectableRendererList");