Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./4.js");
var d = require("./35.js");
var p = require("./14.js");
var h = createjs.Point;
var g = function (e) {
  function CastleTitleRewardComponent(t) {
    var i = this;
    i._alreadyAchieved = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).disp = t;
    i.rewardListComponent = new _.CastleCenteredRewardRendererListComponent(t.mc_rewardList, CastleTitleRewardComponent.REWARD_LIST_ICON_DIM);
    i.itxt_effectDescription = p.CastleComponent.textFieldManager.registerTextField(t.mc_effectReward.txt_description, new s.LocalizedTextVO());
    i.itxt_effectDescription.autoFitToBounds = true;
    return i;
  }
  n.__extends(CastleTitleRewardComponent, e);
  CastleTitleRewardComponent.prototype.show = function (e, t) {
    this.title = e;
    this._alreadyAchieved = t;
    if (e.boni && e.hasEffects()) {
      this.renderByEffect();
    } else {
      this.renderByRewardList();
    }
  };
  CastleTitleRewardComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.rewardListComponent.destroy();
  };
  CastleTitleRewardComponent.prototype.renderByEffect = function () {
    this.disp.mc_effectReward.visible = true;
    this.disp.mc_rewardList.visible = false;
    this.itxt_effectDescription.textContentVO.textId = this.title.descriptionTextVO.textId;
    this.itxt_effectDescription.textContentVO.textReplacements = this.title.descriptionTextVO.textReplacements;
    if (this.title.hasOneOrMoreEffectTypes([d.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL, d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL])) {
      this.showUnitIcon();
    } else {
      this.showEffectIcon();
    }
  };
  CastleTitleRewardComponent.prototype.showUnitIcon = function () {
    this.disp.mc_effectReward.mc_effectIcon.visible = false;
    this.disp.mc_effectReward.mc_item.visible = true;
    this.disp.mc_effectReward.btn_info.visible = true;
    var e = 0;
    var t = this.title.boni[0].effectValue;
    e = a.instanceOfClass(t, "EffectValueWodID") ? r.int(t.firstWodID) : r.int(t.strength);
    var i = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_BASIC, CastleTitleRewardComponent.EFFECT_ICON_DIM);
    i.tooltip.useAmount = false;
    m.CollectableRenderHelper.displaySingleItemComplete(this, new l.CollectableRenderClips(this.disp.mc_effectReward.mc_item).addInfoBtn(this.disp.mc_effectReward.btn_info), new C.CollectableItemUnitVO(e, 1), i);
  };
  CastleTitleRewardComponent.prototype.showEffectIcon = function () {
    this.disp.mc_effectReward.mc_item.visible = false;
    this.disp.mc_effectReward.btn_info.visible = false;
    this.disp.mc_effectReward.mc_effectIcon.visible = false;
    var e = this.title.boni[0].effect.name;
    for (var t = 0, i = this.disp.mc_effectReward.mc_effectIcon.labels; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.name == e) {
        this.disp.mc_effectReward.mc_effectIcon.visible = true;
        this.disp.mc_effectReward.mc_effectIcon.gotoAndStop(e);
        break;
      }
    }
  };
  CastleTitleRewardComponent.prototype.renderByRewardList = function () {
    this.disp.mc_effectReward.visible = false;
    this.disp.mc_rewardList.visible = true;
    var e = u.CastleModel.rewardData.getListById(this.title.rewardID);
    this.rewardListComponent.showRewards(e);
    for (var t = 0; t < 3; t++) {
      this.disp.mc_rewardList["item" + t].mc_checkmark.visible = this._alreadyAchieved;
    }
  };
  CastleTitleRewardComponent.__initialize_static_members = function () {
    CastleTitleRewardComponent.REWARD_LIST_ICON_DIM = new h(40, 27.4);
    CastleTitleRewardComponent.EFFECT_ICON_DIM = new h(34.9, 40);
  };
  return CastleTitleRewardComponent;
}(p.CastleComponent);
exports.CastleTitleRewardComponent = g;
var C = require("./411.js");
var _ = require("./400.js");
var m = require("./25.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();