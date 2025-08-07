Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./67.js");
var s = require("./104.js");
var r = require("./19.js");
var l = require("./25.js");
var c = createjs.Point;
var u = function () {
  function DifficultyScalingRewardDialogListItemHelper() {}
  DifficultyScalingRewardDialogListItemHelper.fillRewardMC = function (e, t, i = null) {
    var u = t[0];
    var d = t[1];
    var p = t[2];
    var h = t[3];
    e.mc_rank1.visible = h == 0;
    e.mc_rank2.visible = h == 1;
    e.mc_rank3.visible = h == 2;
    e.btn_left.visible = false;
    e.btn_right.visible = false;
    if (d <= 0 && u > 0) {
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy2, new o.LocalizedTextVO("rank_promotion_value", [u]));
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new o.LocalizedTextVO(" "));
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy1, new o.LocalizedTextVO(" "));
    } else {
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new o.LocalizedTextVO("points_noValue"));
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy1, new o.TextVO(o.Localize.number(d, false))).autoFitToBounds = true;
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy2, new o.LocalizedTextVO(" "));
    }
    var g = i || new s.CollectableRendererList();
    l.CollectableRenderHelper.displayMultipleItemsComplete(g, new a.CollectableRenderClipsList(e, "mc_reward_").addItemMcs("mc_reward").addInfoBtns("parent.btn_info").addBuildingLevelMc("mc_reward.mc_buildingLevel"), p, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_DEFAULT, new c(50, 50)));
  };
  return DifficultyScalingRewardDialogListItemHelper;
}();
exports.DifficultyScalingRewardDialogListItemHelper = u;