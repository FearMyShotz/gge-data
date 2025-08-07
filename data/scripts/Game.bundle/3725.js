Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./1095.js");
var u = require("./41.js");
var d = require("./288.js");
var p = require("./824.js");
var h = function (e) {
  function DifficultyScalingRewardDialogListItemDoubleHeader(t, i) {
    return e.call(this, t, i, new (a.getDefinitionByName("DiffRewDoubleHeader"))()) || this;
  }
  n.__extends(DifficultyScalingRewardDialogListItemDoubleHeader, e);
  Object.defineProperty(DifficultyScalingRewardDialogListItemDoubleHeader.prototype, "difficulties", {
    get: function () {
      return [l.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this._data[0][0]), l.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this._data[0][1])];
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardDialogListItemDoubleHeader.prototype.fill = function () {
    d.DifficultyScalingHelper.addDifficultyIcon(this._headerMC.mc0.mc_icon, this.difficulties[0], 46, 46, null);
    d.DifficultyScalingHelper.addDifficultyIcon(this._headerMC.mc1.mc_icon, this.difficulties[1], 46, 46, null);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_copy, new s.LocalizedTextVO(this.difficulties[0].name_textID));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc1.txt_copy, new s.LocalizedTextVO(this.difficulties[1].name_textID));
    o.MovieClipHelper.clearMovieClip(this._contentMC);
    var e = 0;
    for (var t = 0; t < this.rewardArrays.length; t++) {
      var i = new (a.getDefinitionByName("EventDifficultyRewardListItem"))();
      p.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(i, [0, this.rewardArrays[t][0], this.rewardArrays[t][1], 4]);
      this._contentMC.addChild(i);
      i.mc_end.visible = false;
      i.y = e;
      e += i.height + 6;
    }
    if (this.difficulties[1].difficultyType.difficultyTypeID != c.EventAutoScalingDifficultyTypeVO.EASY_TYPE_ID) {
      var n = new (a.getDefinitionByName("LowerRewardsIncludedMC"))();
      this._contentMC.addChild(n);
      n.y = e;
      o.GoodgameTextFieldManager.getInstance().registerTextField(n.txt_copy, new s.LocalizedTextVO("dialog_difficultyScaling_rewardInfo_desc"));
    }
    this.disp.headerMC.mouseChildren = false;
    this.disp.mouseChildren = true;
    this.disp.headerMC.actLikeButton = true;
    this._contentMC.mask = null;
    u.CastleMovieClipHelper.applyMask(this._contentMC);
    this._contentMC.alpha = 0;
    this._contentMC.visible = false;
    this._contentMC.mask.height = 0;
    this.applyStateChange();
  };
  DifficultyScalingRewardDialogListItemDoubleHeader.prototype.applyStateChange = function () {
    e.prototype.applyStateChange.call(this);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_selected, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(s.Localize.text(this.difficulties[0].name_textID)))).visible = this.isExpanded;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_unselected, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(s.Localize.text(this.difficulties[0].name_textID)))).visible = !this.isExpanded;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc1.txt_selected, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(s.Localize.text(this.difficulties[1].name_textID)))).visible = this.isExpanded;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc1.txt_unselected, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(s.Localize.text(this.difficulties[1].name_textID)))).visible = !this.isExpanded;
  };
  return DifficultyScalingRewardDialogListItemDoubleHeader;
}(require("./1770.js").DifficultyScalingRewardDialogListItemSingleHeader);
exports.DifficultyScalingRewardDialogListItemDoubleHeader = h;
a.classImplementsInterfaces(h, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");