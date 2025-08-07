Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = function (e) {
  function InviteAFriendRewardScrollItem(t) {
    var i = this;
    i._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(InviteAFriendRewardScrollItem, e);
  InviteAFriendRewardScrollItem.prototype.customFillItem = function () {
    this.destroyCollectableRenderList();
    l.RewardRenderHelper.renderInviteAFriendLevelReward(this, this.disp, this.inviteScrollItemVO.rewardVO, s.CastleModel.inviteFriendsData.hasRewardBeenReceived(this.inviteScrollItemVO.rewardVO.id));
  };
  InviteAFriendRewardScrollItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList) {
      for (var e = 0; e < this._collectableRenderList.length; ++e) {
        this._collectableRenderList[e].destroy();
      }
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(InviteAFriendRewardScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InviteAFriendRewardScrollItem.prototype, "inviteScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  InviteAFriendRewardScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  InviteAFriendRewardScrollItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
  };
  return InviteAFriendRewardScrollItem;
}(o.ScrollItem);
exports.InviteAFriendRewardScrollItem = r;
var l = require("./398.js");
a.classImplementsInterfaces(r, "MovieClip", "ICollectableRendererList");