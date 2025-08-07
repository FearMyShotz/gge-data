Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./667.js");
var c = createjs.Point;
var u = function () {
  function CastleTieredPrimeDayRewardBoxVE(e, t, i) {
    this._tier = 0;
    this._isCollected = false;
    this._collectableRenderList = [];
    this._rewardVO = i;
    this._disp = e;
    this._tier = t;
    this._isCollected = false;
    this.setupSubBoxes();
    this.setupShadow();
    this.setupRewardBox();
    this.displayRewards();
    this.setupTexts();
  }
  CastleTieredPrimeDayRewardBoxVE.prototype.setupTexts = function () {
    this.textFieldManager.registerTextField(this.activeBoxMC.container_txt.txt_title, new a.LocalizedTextVO("dialog_primeday_paymentTier_worth"));
    this.textFieldManager.registerTextField(this.activeBoxMC.container_txt.txt_price, new a.LocalizedTextVO(this._rewardVO.displayTypeTextID, [this._rewardVO.shownValue, l.CastleHardCurrencyHelper.currencyTextID]));
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.setupSubBoxes = function () {
    var e = [];
    e.push(this._disp.box_t1_small);
    e.push(this._disp.box_t1_big);
    e.push(this._disp.box_t2_small);
    e.push(this._disp.box_t2_big);
    e.push(this._disp.box_t3_small);
    e.push(this._disp.box_t3_big);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.visible = false;
        }
      }
    }
    var o = (this._tier - 1) * 2;
    if (this.isBigBox) {
      o++;
    }
    this._activeBoxMC = e[o];
    this._activeBoxMC.visible = true;
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.setupShadow = function () {
    if (this._isCollected) {
      switch (this._rewardVO.rewardList.length) {
        case 2:
          this._disp.mc_shadows.gotoAndStop("small");
          break;
        case 4:
          this._disp.mc_shadows.gotoAndStop("medium");
          break;
        case 6:
          this._disp.mc_shadows.gotoAndStop("big");
          break;
        default:
          throw new Error("CastleTieredPrimeDayRewardBoxVE.setupShadow() recieved an amount of rewards that are not supported");
      }
    } else {
      this._disp.mc_shadows.gotoAndStop("empty");
    }
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.setupRewardBox = function () {
    switch (this._rewardVO.rewardList.length) {
      case 2:
        this._disp.mc_rewards.gotoAndStop("small");
        this._activeRewardsMC = this._disp.mc_rewards.reward_2;
        break;
      case 4:
        this._disp.mc_rewards.gotoAndStop("medium");
        this._activeRewardsMC = this._disp.mc_rewards.reward_4;
        break;
      case 6:
        this._disp.mc_rewards.gotoAndStop("big");
        this._activeRewardsMC = this._disp.mc_rewards.reward_6;
        break;
      default:
        throw new Error("CastleTieredPrimeDayRewardBoxVE.setupRewardBox() recieved an amount of rewards that are not supported");
    }
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.displayRewards = function () {
    p.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this._activeRewardsMC, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this._rewardVO.rewardList, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED, new c(CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_WIDTH, CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_HEIGHT)), function preRenderFunc(e) {
      if (e.itemVO && e.itemVO.itemType == d.CollectableEnum.GALLANTRY_BOOSTER) {
        e.getRenderer(r.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 3;
        e.getRenderer(r.CollectableRenderOptions.ICON_TRANSFORM).transform.scale = 0.8;
      }
    });
  };
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "smallBoxWidth", {
    get: function () {
      return this._disp.box_t1_small.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "bigBoxWidth", {
    get: function () {
      return this._disp.box_t1_big.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "width", {
    get: function () {
      if (this.isBigBox) {
        return this.bigBoxWidth;
      } else {
        return this.smallBoxWidth;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "isBigBox", {
    get: function () {
      return this._rewardVO.rewardList.length > 4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "activeBoxMC", {
    get: function () {
      return this._activeBoxMC;
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayRewardBoxVE.prototype.destroyCollectableRenderList = function () {
    this.destroyRenderList(this._collectableRenderList);
  };
  CastleTieredPrimeDayRewardBoxVE.prototype.destroyRenderList = function (e) {
    if (e) {
      for (var t = 0; t < e.length; ++t) {
        e[t].destroy();
      }
      e.length = 0;
    }
  };
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTieredPrimeDayRewardBoxVE.prototype, "isCollected", {
    get: function () {
      return this._isCollected;
    },
    set: function (e) {
      this._isCollected = e;
      this.setupShadow();
    },
    enumerable: true,
    configurable: true
  });
  CastleTieredPrimeDayRewardBoxVE.__initialize_static_members = function () {
    CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_WIDTH = 55;
    CastleTieredPrimeDayRewardBoxVE.REWARD_ICON_HEIGHT = 50;
  };
  return CastleTieredPrimeDayRewardBoxVE;
}();
exports.CastleTieredPrimeDayRewardBoxVE = u;
var d = require("./12.js");
var p = require("./25.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();