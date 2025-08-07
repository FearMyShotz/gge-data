Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./31.js");
var r = require("./19.js");
var l = createjs.Point;
var c = function (e) {
  function RewardScrollItem(t) {
    var i = this;
    i._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(RewardScrollItem, e);
  RewardScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.destroyCollectableRenderList();
    var t = new s.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info);
    u.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, t, this.rewardScrollItemVO.collectableItem, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED, RewardScrollItem.TARGET_SIZE), this.bindFunction(this.preRenderFunc));
  };
  RewardScrollItem.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      e.getRenderer(r.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 0;
    }
  };
  Object.defineProperty(RewardScrollItem.prototype, "rewardScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  RewardScrollItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var e = 0; e < this._collectableRenderList.length; ++e) {
        this._collectableRenderList[e].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(RewardScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  RewardScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  RewardScrollItem.__initialize_static_members = function () {
    RewardScrollItem.TARGET_SIZE = new l(55, 55);
  };
  return RewardScrollItem;
}(o.ScrollItem);
exports.RewardScrollItem = c;
var u = require("./25.js");
a.classImplementsInterfaces(c, "MovieClip", "ICollectableRendererList");
c.__initialize_static_members();