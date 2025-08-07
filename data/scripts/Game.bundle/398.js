Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RewardRenderHelper() {}
  RewardRenderHelper.renderCollectableList = function (e, t, i) {
    e.destroyCollectableRenderList();
    var n = i.length > 1;
    t.item0.visible = t.item1.visible = n;
    t.item.visible = !n;
    if (t.btn_info) {
      t.btn_info.visible = false;
    }
    if (n) {
      t.item0.btn_info.actLikeButton = true;
      t.item0.addChild(t.item0.btn_info);
      t.item1.btn_info.actLikeButton = true;
      t.item1.addChild(t.item1.btn_info);
      var a = [];
      a.push(t.item0.item);
      a.push(t.item1.item);
      o.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(e, new l.CollectableRenderClipsList().createByItemMcList(a).addIconMcs("mc_icon").addInfoBtns("parent.btn_info").addTextfields("txt_text"), i, new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT));
    } else {
      t.item.btn_info.actLikeButton = true;
      o.CollectableRenderHelper.displaySingleItemAndAddToRenderList(e, new r.CollectableRenderClips(t.item.item).addInfoBtn(t.item.btn_info), i.getItemByIndex(0), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT));
      t.item.btn_info.x = 20;
      t.item.addChild(t.item.btn_info);
    }
  };
  RewardRenderHelper.renderBasicInviteAFriendReward = function (e, t, i, n, a = true) {
    if (a) {
      e.destroyCollectableRenderList();
    }
    var s = i.getRewardCollectableList().length > 1;
    t.bg_two_items.visible = t.item0.visible = t.item1.visible = s;
    t.bg_single_item.visible = t.item.visible = !s;
    t.bg_reward_check.visible = t.icon_reward_check.visible = n;
    if (t.btn_info) {
      t.btn_info.visible = false;
    }
    if (s) {
      t.item0.btn_info.actLikeButton = true;
      t.item0.addChild(t.item0.btn_info);
      t.item1.btn_info.actLikeButton = true;
      t.item1.addChild(t.item1.btn_info);
      var u = [];
      u.push(t.item0.item);
      u.push(t.item1.item);
      o.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(e, new l.CollectableRenderClipsList().createByItemMcList(u).addIconMcs("mc_icon").addInfoBtns("parent.btn_info").addTextfields("txt_text"), i.getRewardCollectableList(), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT));
    } else {
      t.item.btn_info.actLikeButton = true;
      o.CollectableRenderHelper.displaySingleItemAndAddToRenderList(e, new r.CollectableRenderClips(t.item.item).addInfoBtn(t.item.btn_info), i.getRewardCollectableList().getItemByIndex(0), new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT));
      t.item.btn_info.x = 20;
      t.item.addChild(t.item.btn_info);
    }
    if (n) {
      t.icon_reward_check.toolTipText = "dialog_primeday_specialoffer_rewardtitle";
    }
  };
  RewardRenderHelper.renderInviteAFriendLevelReward = function (e, t, i, n) {
    RewardRenderHelper.renderBasicInviteAFriendReward(e, t, i, n);
    t.tf_title.defaultCacheScale = 2;
    if (i.friendCount == 1) {
      a.GoodgameTextFieldManager.getInstance().registerTextField(t.tf_title, new s.LocalizedTextVO("dialog_referFriend_inviteDialog_condition_levelFriends_singular", [i.friendLevel])).verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    } else {
      a.GoodgameTextFieldManager.getInstance().registerTextField(t.tf_title, new s.LocalizedTextVO("dialog_referFriend_inviteDialog_condition_levelFriends", [i.friendCount, i.friendLevel])).verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
  };
  RewardRenderHelper.renderInviteAFriendPaymentReward = function (e, t, i, n, o = true) {
    RewardRenderHelper.renderBasicInviteAFriendReward(e, t, i, n, o);
    if (i.friendCount == 1) {
      a.GoodgameTextFieldManager.getInstance().registerTextField(t.tf_title, new s.LocalizedTextVO("dialog_referFriend_inviteDialog_paymentRewards_always")).autoFitToBounds = true;
    } else {
      a.GoodgameTextFieldManager.getInstance().registerTextField(t.tf_title, new s.LocalizedTextVO("dialog_referFriend_inviteDialog_paymentRewards_once", [i.friendCount])).autoFitToBounds = true;
    }
  };
  return RewardRenderHelper;
}();
exports.RewardRenderHelper = n;
var o = require("./25.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./31.js");
var l = require("./67.js");
var c = require("./19.js");
var u = require("./42.js");