Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = function (e) {
  function LongTermPointEventRewardScrollItem(t) {
    var i = this;
    i._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(LongTermPointEventRewardScrollItem, e);
  LongTermPointEventRewardScrollItem.prototype.customFillItem = function () {
    this.destroyCollectableRenderList();
    if (this.longTermPointEventRewardScrollItemVO.collectableList.length > 0) {
      d.RewardRenderHelper.renderCollectableList(this, this.disp, this.longTermPointEventRewardScrollItemVO.collectableList);
    } else {
      s.error("Empty reward list");
    }
    this.changeDecoration();
    this.disp.reward_received_check.visible = this.longTermPointEventRewardScrollItemVO.received;
    this.textFieldManager.registerTextField(this.disp.txt_threshold, new l.LocalizedTextVO("points", [this.longTermPointEventRewardScrollItemVO.thresholdPoints])).autoFitToBounds = true;
  };
  LongTermPointEventRewardScrollItem.prototype.changeDecoration = function () {
    var e = c.int(this.longTermPointEventRewardScrollItemVO.collectableList.length > 1 ? 2 : 1);
    this.longTermPointEventRewardScrollItemVO.skin.textId;
    var t = c.int(this.longTermPointEventRewardScrollItemVO.skin.id * 2 + e);
    try {
      this.disp.decoration.gotoAndStop(t);
    } catch (e) {
      s.error("LongTermPointEventRewardScrollItem: decoration movieclip have no '" + t + "' label");
    }
  };
  LongTermPointEventRewardScrollItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var e = 0; e < this._collectableRenderList.length; ++e) {
        this._collectableRenderList[e].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(LongTermPointEventRewardScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventRewardScrollItem.prototype, "longTermPointEventRewardScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventRewardScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(LongTermPointEventRewardScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventRewardScrollItem;
}(a.ScrollItem);
exports.LongTermPointEventRewardScrollItem = u;
var d = require("./398.js");
r.classImplementsInterfaces(u, "MovieClip", "ICollectableRendererList");