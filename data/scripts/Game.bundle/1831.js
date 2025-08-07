Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./288.js");
var l = require("./50.js");
var c = require("./48.js");
var u = require("./46.js");
var d = require("./24.js");
var p = require("./14.js");
var h = require("./20.js");
var g = require("./76.js");
var C = require("./78.js");
var _ = require("./77.js");
var m = require("./8.js");
var f = require("./362.js");
var O = require("./556.js");
var E = require("./3931.js");
var y = createjs.Point;
var b = function (e) {
  function GachaComponentRewards(t) {
    var i = e.call(this, t) || this;
    m.ButtonHelper.initButtons([i.disp.btn_back], h.ClickFeedbackButtonHover);
    var n = new g.InfiniteScrollListClips(i.disp.rewardList).addMaskMc(i.disp.rewardList.mc_items.mask).addMouseWheelAreaMc(i.disp.parent);
    var o = new _.InfiniteScrollListOptions(E.GachaEventMainRewardItem, "GachaEventMain_RewardContainer", O.GachaEventMainDialog.NAME);
    o.sliderInvisibleWhenNotScrollable = true;
    o.isMultiColumn = true;
    o.itemPaddingX = 60;
    o.itemPaddingY = 60;
    i._rewardList = new C.InfiniteScrollListComponent(n, o);
    i._defaultPos = new y(i.disp.rewardList.x, i.disp.rewardList.y);
    i.disp.visible = false;
    return i;
  }
  n.__extends(GachaComponentRewards, e);
  GachaComponentRewards.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.disp.visible = false;
    this._rewardList.onShow();
  };
  GachaComponentRewards.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._rewardList) {
      this._rewardList.onHide();
    }
  };
  GachaComponentRewards.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    p.CastleComponent.controller.addEventListener(r.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    p.CastleComponent.controller.addEventListener(r.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
  };
  GachaComponentRewards.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    p.CastleComponent.controller.addEventListener(r.GachaEvent.SPIN, this.bindFunction(this.onSpin));
    p.CastleComponent.controller.addEventListener(r.GachaEvent.SPIN_ANIMATION_COMPLETE, this.bindFunction(this.onSpinComplete));
  };
  GachaComponentRewards.prototype.onSpin = function (e) {
    var t = this;
    if (this.disp.visible) {
      this.startRewardAnimation(e);
    } else {
      this.delayedSpin = function () {
        t.startRewardAnimation(e);
      };
    }
  };
  GachaComponentRewards.prototype.startRewardAnimation = function (e) {
    var t = this;
    this.removeAnimations();
    var i = new c.CollectableList();
    var n = [];
    if (e.eventVO.eventId == this.getEventVO().eventId) {
      e.params.forEach(function (e, t) {
        var o = l.CollectableManager.parser.s2cParamList.createList(e.RR);
        if (o) {
          i.addList(o);
          o.list.forEach(function (t) {
            n.push(e.R);
          });
        }
      });
    }
    this._rewardList.updateWithNewData(i.list);
    var o = i.length <= GachaComponentRewards.THRESHOLD_SHOW_RARITY;
    if (o) {
      this.disp.rewardList.x = this._defaultPos.x + (GachaComponentRewards.THRESHOLD_SHOW_RARITY - i.list.length) * 71;
      this.disp.rewardList.y = this._defaultPos.y + 71;
      n.forEach(function (e, i) {
        t.addRarityAnimation(e, i);
      });
    } else {
      this.disp.rewardList.x = this._defaultPos.x;
      this.disp.rewardList.y = this._defaultPos.y;
    }
    var r = o ? 0.2 : 0;
    this._rewardList.items.forEach(function (e, i) {
      if (e.isVisible) {
        var n = t.disp.rewardList["anim_" + i];
        e.disp.alpha = 0;
        a.TweenMax.fromTo(e.disp, 0.5, {
          alpha: 0
        }, {
          alpha: 1,
          delay: r * i,
          ease: s.Linear.easeIn,
          onStart: function () {
            if (n && n.children.length > 0) {
              n.getChildAt(0).doWhenLoaded(function (e) {
                e.currentshownDisplayObject.gotoAndPlay(1);
              });
            }
          }
        });
      }
    });
    this.disp.visible = true;
  };
  GachaComponentRewards.prototype.addRarityAnimation = function (e, t) {
    if (!(t >= GachaComponentRewards.THRESHOLD_SHOW_RARITY)) {
      var i;
      var n;
      var a = this.disp.rewardList["anim_" + t];
      switch (e) {
        case 1:
          i = "_Common";
          break;
        case 2:
          i = "_Rare";
          break;
        case 3:
          i = "_Epic";
          break;
        case 4:
          i = "_Legendary";
          break;
        default:
          i = "_Common";
      }
      var s = "Rewards_Animation_" + this.getEventVO().assetName();
      n = o.BasicModel.basicLoaderData.isItemAssetVersioned(s) ? new d.CastleGoodgameExternalClip(s, u.IsoHelper.view.getAssetFileURL(s), null, 24, false) : new d.CastleGoodgameExternalClip("RewardAnimation" + i, u.IsoHelper.view.getAssetFileURL("Rewards_Animation"), null, 24, false);
      a.addChild(n);
    }
  };
  GachaComponentRewards.prototype.removeAnimations = function () {
    for (var e = 0; e < GachaComponentRewards.THRESHOLD_SHOW_RARITY; e++) {
      var t = this.disp.rewardList["anim_" + e];
      o.MovieClipHelper.clearMovieClip(t);
    }
  };
  GachaComponentRewards.prototype.onSpinComplete = function (e) {
    if (this.delayedSpin) {
      this.delayedSpin();
      this.delayedSpin = null;
    }
  };
  GachaComponentRewards.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_back:
        this.removeAnimations();
        this.disp.visible = false;
    }
  };
  GachaComponentRewards.prototype.getEventVO = function () {
    return this._params[0];
  };
  GachaComponentRewards.THRESHOLD_SHOW_RARITY = 3;
  return GachaComponentRewards;
}(f.AGachaComponent);
exports.GachaComponentRewards = b;