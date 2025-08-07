Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./23.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./14.js");
var d = require("./42.js");
var p = function (e) {
  function CastleScoreBarComponent(t, i) {
    var n = e.call(this) || this;
    n.disp = t;
    n._scorebarProperties = i;
    n.displayRewardList();
    n.setLabels();
    n.setDescriptions();
    return n;
  }
  n.__extends(CastleScoreBarComponent, e);
  CastleScoreBarComponent.prototype.displayRewardList = function () {
    var e;
    var t;
    this.destroyCollectableRenderList();
    for (var i = 0; i < this.numTotalRewards; i++) {
      var n = this._scorebarProperties.getReward(i);
      var o = this.disp["reward" + i];
      var a = n.length;
      this.setTagsVisibility(i, a);
      var r = o["tags" + a];
      if (r) {
        for (var u = 0; u < a; ++u) {
          var d;
          var p = r["tag" + u];
          var C = n.getItemByIndex(u);
          if (p.mc_unit.getChildByName(CastleScoreBarComponent.EQUIPMENT_NAME)) {
            p.mc_unit.removeChild(p.mc_unit.getChildByName(CastleScoreBarComponent.EQUIPMENT_NAME));
          }
          (e = new l.CollectableRenderClips(p.mc_unit)).addIconMc(p.mc_unit.mc_empty);
          e.addInfoBtn(p.btn_info);
          if (s.instanceOfClass(C, "ACollectableItemEquipmentVO") && C.equipmentVO && !e.equipmentBackgroundMc && C.itemType.serverKey != h.CollectableEnum.EQUIPMENT_RARENESS.serverKey) {
            (d = new Library.CastleInterfaceElements.CastleEquipment_Item()).name = CastleScoreBarComponent.EQUIPMENT_NAME;
            d.x = p.mc_unit.mc_empty.x;
            d.y = p.mc_unit.mc_empty.y;
            p.mc_unit.addChild(d);
            p.mc_unit.addChild(p.mc_unit.mc_empty);
            e.addEquipmentBgMc(d);
          }
          var _ = new c.CollectableRenderOptions(this.scorebarProperties.collectableRenderOption, this.scorebarProperties.rewardIconDimension);
          _.tooltip.showEquipmentCountdown = false;
          t = g.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, e, C, _, this.scorebarProperties.preRenderFunc);
          if (d) {
            d.width = d.height = t.options.icon.dimension.x + CastleScoreBarComponent.EQ_FRAME_OFFSET;
          }
        }
        o.mouseChildren = true;
      }
    }
  };
  CastleScoreBarComponent.prototype.setTagsVisibility = function (e, t) {
    for (var i = 1; i <= this._scorebarProperties.maxItemsPerReward; ++i) {
      if (this.disp["reward" + e]["tags" + i]) {
        this.disp["reward" + e]["tags" + i].visible = i == t;
      }
    }
  };
  CastleScoreBarComponent.prototype.setLabels = function () {
    if (this._scorebarProperties.hasLabels()) {
      var e = undefined;
      for (var t = 0; t < this.numThresholdRewards + this.numRankRewards; t++) {
        if (this.disp["reward" + t].mc_text && t < this._scorebarProperties.numLabels) {
          (e = this.disp["reward" + t].mc_text.tf_text).text = "";
          o.GoodgameTextFieldManager.getInstance().registerTextField(e, this._scorebarProperties.getLabel(t)).autoFitToBounds = true;
        }
      }
    }
  };
  CastleScoreBarComponent.prototype.setDescriptions = function () {
    if (this._scorebarProperties.hasDecriptions()) {
      for (var e = 0; e < this.numThresholdRewards + this.numRankRewards; e++) {
        var t = o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp["reward" + e].txt_copy, this._scorebarProperties.getDescription(e));
        t.autoFitToBounds = true;
        t.verticalAlign = d.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      }
    }
  };
  CastleScoreBarComponent.prototype.update = function (e) {
    if (e) {
      u.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this._scorebarProperties.getOwnPointsText(e.ownPoints));
      this.scoreBarProgress = e;
      this.updateThresholdRewards();
      this.updateRankRewards();
    }
  };
  CastleScoreBarComponent.prototype.updateThresholdRewards = function () {
    for (var e = 0; e < this.numThresholdRewards; e++) {
      this.updateReward(e, this._scorebarProperties.thresholdProgress(e, this.scoreBarProgress.pointThresholds, this.scoreBarProgress.ownPoints));
    }
  };
  CastleScoreBarComponent.prototype.updateRankRewards = function () {
    for (var e = this.numThresholdRewards; e < this.numTotalRewards; e++) {
      var t = e - this.numThresholdRewards;
      if (this.scoreBarProgress.topX.length == 0) {
        this.hideReward(e);
      } else if (t >= this.scoreBarProgress.topX.length) {
        this.updateReward(e, this.scoreBarProgress.ownRank == 1 ? 1 : 0);
      } else {
        this.updateReward(e, this.rankProgress(t));
      }
    }
  };
  CastleScoreBarComponent.prototype.hideReward = function (e) {
    var t = this.disp["bar" + e];
    if (t) {
      t.scaleX = 0;
    }
    var i = this.disp["reward" + e];
    if (i) {
      i.visible = false;
    }
    var n = this.disp.progressBG;
    if (n) {
      n.visible = false;
    }
  };
  CastleScoreBarComponent.prototype.updateReward = function (e, t) {
    var i = this.disp["bar" + e];
    this.setProgressBar(i, t);
    var n = t == 1;
    this.setRewardReached(e, n);
    this.setTooltip(e, n);
  };
  CastleScoreBarComponent.prototype.setProgressBar = function (e, t) {
    if (e) {
      switch (this._scorebarProperties.orientation) {
        case CastleScoreBarComponent.ORIENTATION_HORIZONTAL:
          r.TweenMax.killTweensOf(e);
          if (t == 1 || t == 0) {
            e.scaleX = t;
          } else {
            r.TweenMax.fromTo(e, 0.2, {
              scaleX: e.scaleX
            }, {
              scaleX: t
            });
          }
          break;
        case CastleScoreBarComponent.ORIENTATION_VERTICAL:
          r.TweenMax.killTweensOf(e);
          if (t == 1 || t == 0) {
            e.scaleY = t;
          } else {
            r.TweenMax.fromTo(e, 0.2, {
              scaleY: e.scaleY
            }, {
              scaleY: t
            });
          }
      }
    }
  };
  CastleScoreBarComponent.prototype.setRewardReached = function (e, t) {
    var i = this.disp["reward" + e];
    var n = this._scorebarProperties.getReward(e);
    var o = i["tags" + n.length];
    if (o) {
      if (i.mc_tooltip && i.mc_tooltip.totalFrames > 1) {
        i.mc_tooltip.gotoAndStop(t ? 2 : 1);
      }
      for (var a = 0; a < n.length; ++a) {
        var s = o["tag" + a];
        if (s && s.frame) {
          s.frame.visible = t;
        }
      }
      if (i.frame) {
        i.frame.visible = t;
      }
    }
  };
  CastleScoreBarComponent.prototype.setTooltip = function (e, t) {
    var i = this.disp["reward" + e];
    if (i.mc_toolTipHitBox) {
      i.mc_toolTipHitBox.toolTipText = this._scorebarProperties.getToolTip(e, t);
    } else {
      i.toolTipText = this._scorebarProperties.getToolTip(e, t);
    }
  };
  Object.defineProperty(CastleScoreBarComponent.prototype, "numTotalRewards", {
    get: function () {
      return this.numThresholdRewards + this.numRankRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreBarComponent.prototype, "numThresholdRewards", {
    get: function () {
      return this._scorebarProperties.numThresholdRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleScoreBarComponent.prototype, "numRankRewards", {
    get: function () {
      return this._scorebarProperties.numRankRewards;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreBarComponent.prototype.rankProgress = function (e) {
    if (this.scoreBarProgress.ownRank <= this.scoreBarProgress.topX[e] && this.scoreBarProgress.ownRank > 0) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleScoreBarComponent.prototype.executeFullUpdate = function () {
    this.displayRewardList();
    this.setLabels();
    this.setDescriptions();
    this.update(this.scoreBarProgress);
  };
  Object.defineProperty(CastleScoreBarComponent.prototype, "scorebarProperties", {
    get: function () {
      return this._scorebarProperties;
    },
    enumerable: true,
    configurable: true
  });
  CastleScoreBarComponent.ORIENTATION_HORIZONTAL = 0;
  CastleScoreBarComponent.ORIENTATION_VERTICAL = 1;
  CastleScoreBarComponent.EQ_FRAME_OFFSET = 4;
  CastleScoreBarComponent.EQUIPMENT_NAME = "eqbg";
  return CastleScoreBarComponent;
}(u.CastleComponent);
exports.CastleScoreBarComponent = p;
var h = require("./12.js");
var g = require("./25.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");