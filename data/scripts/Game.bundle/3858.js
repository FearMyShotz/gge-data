Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./100.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./57.js");
var d = require("./237.js");
var p = require("./81.js");
var h = require("./133.js");
var g = require("./298.js");
var C = require("./73.js");
var _ = require("./115.js");
var m = function (e) {
  function AttackDialogLordSelectionItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackDialogLordSelectionItem, e);
  AttackDialogLordSelectionItem.prototype.initLoaded = function () {
    this._onClickSignal = new u.Signal();
    this._lordTooltipTrigger = new g.LordEffectTooltipTrigger(this.getItemMc().mc_lordHolder);
    this._clickFeedBack = new d.ClickFeedbackHoverBehaviour(this.getItemMc());
  };
  AttackDialogLordSelectionItem.prototype.fill = function () {
    e.prototype.fill.call(this);
    if (!this._itxt_name || this._itxt_name && !this._itxt_name.textContentVO) {
      this._itxt_name = a.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_name, new c.TextVO(""), new s.InternalGGSTextFieldConfigVO(true));
    }
    this._lordVO = this.data;
    this.updateLord();
    this._itxt_name.textContentVO.stringValue = this._lordVO.label;
    this.getItemMc().icon_rubies.visible = this._lordVO.id == l.TravelConst.COMMANDER_PREMIUM;
    this.getItemMc().bgNumber.visible = this._lordVO.id == l.TravelConst.COMMANDER_PREMIUM;
    this.setSelected(_.AttackDialogController.getInstance().selectedLord.id == this.lordVO.id);
  };
  AttackDialogLordSelectionItem.prototype.updateLord = function () {
    o.MovieClipHelper.clearMovieClip(this.getItemMc().mc_lordHolder);
    C.EquipmentIconHelper.addLordIcon(this._lordVO, this.getItemMc().mc_lordHolder, 58, -1, null, false);
    try {
      this._lordTooltipTrigger.setProperties(this._lordVO, this.attackVO.sourceArea, this.attackVO.targetArea, this._lordVO.isBaron ? h.LordEffectHelper.STRATEGY_DEFENCE_PVP : h.LordEffectHelper.getFilterStrategyAttackOrDefence(this.attackVO.targetArea.ownerInfo.playerID, true));
    } catch (e) {
      throw this.attackVO.targetArea.ownerInfo ? new Error(e) : new Error("Target Area OwnerInfo is null, area: " + r.getQualifiedClassName(this.attackVO.targetArea));
    }
    this.getItemMc().mc_lordHolder.doCache();
  };
  AttackDialogLordSelectionItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._lordTooltipTrigger.show();
    this._clickFeedBack.addEventListener();
  };
  AttackDialogLordSelectionItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._lordTooltipTrigger.hide();
    this._clickFeedBack.removeEventListener();
    this.onClickSignal.removeAll();
    this._lordVO = null;
  };
  AttackDialogLordSelectionItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.onClickSignal.dispatch(this.lordVO);
  };
  Object.defineProperty(AttackDialogLordSelectionItem.prototype, "onClickSignal", {
    get: function () {
      return this._onClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogLordSelectionItem.prototype.onEquipOrRename = function (e) {
    this.updateLord();
  };
  AttackDialogLordSelectionItem.prototype.setSelected = function (e) {
    this.getItemMc().mc_selected.visible = e;
  };
  Object.defineProperty(AttackDialogLordSelectionItem.prototype, "lordVO", {
    get: function () {
      return this._lordVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogLordSelectionItem.prototype, "attackVO", {
    get: function () {
      return _.AttackDialogController.getInstance().attackVO;
    },
    enumerable: true,
    configurable: true
  });
  return AttackDialogLordSelectionItem;
}(p.AInfiniteScrollListItem);
exports.AttackDialogLordSelectionItem = m;