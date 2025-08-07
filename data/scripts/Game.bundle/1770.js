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
var u = require("./157.js");
var d = require("./8.js");
var p = require("./41.js");
var h = require("./288.js");
var g = require("./824.js");
var C = createjs.MouseEvent;
var _ = function (e) {
  function DifficultyScalingRewardDialogListItemSingleHeader(t, i, n = null) {
    var o = e.call(this, n || new (a.getDefinitionByName("DiffRewSingleHeader"))(), i) || this;
    o._data = t;
    o.fill();
    return o;
  }
  n.__extends(DifficultyScalingRewardDialogListItemSingleHeader, e);
  Object.defineProperty(DifficultyScalingRewardDialogListItemSingleHeader.prototype, "difficulty", {
    get: function () {
      return l.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this._data[0][0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DifficultyScalingRewardDialogListItemSingleHeader.prototype, "rewardArrays", {
    get: function () {
      return this._data[1];
    },
    enumerable: true,
    configurable: true
  });
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.fill = function () {
    this._headerMC.mouseChildren = false;
    this._headerMC.actLikeButton = true;
    h.DifficultyScalingHelper.addDifficultyIcon(this._headerMC.mc0.mc_icon, this.difficulty, 46, 46, null);
    o.MovieClipHelper.clearMovieClip(this._contentMC);
    var e = 0;
    for (var t = 0; t < this.rewardArrays.length; t++) {
      var i = new (a.getDefinitionByName("EventDifficultyRewardListItem"))();
      g.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(i, [0, this.rewardArrays[t][0], this.rewardArrays[t][1], 4]);
      if (i.headerMC && i.headerMC.mc_end) {
        i.headerMC.mc_end.visible = false;
      }
      this._contentMC.addChild(i);
      i.y = e;
      e += i.height;
    }
    if (this.difficulty.difficultyType.difficultyTypeID != c.EventAutoScalingDifficultyTypeVO.EASY_TYPE_ID) {
      var n = new (a.getDefinitionByName("LowerRewardsIncludedMC"))();
      this._contentMC.addChild(n);
      n.y = e;
      o.GoodgameTextFieldManager.getInstance().registerTextField(n.txt_copy, new s.LocalizedTextVO("dialog_difficultyScaling_rewardInfo_desc"));
    }
    this.disp.headerMC.mouseChildren = false;
    this.disp.mouseChildren = true;
    this.disp.headerMC.actLikeButton = true;
    this._contentMC.mask = null;
    p.CastleMovieClipHelper.applyMask(this._contentMC);
    this._contentMC.alpha = 0;
    this._contentMC.visible = false;
    this._contentMC.mask.height = 0;
    this._headerMC.mc_over.visible = false;
    this._headerMC.mc_down.visible = false;
    this.applyStateChange();
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.applyStateChange = function () {
    e.prototype.applyStateChange.call(this);
    this._headerMC.mc_selected.visible = this.isExpanded;
    this._contentMC.visible = this.isExpanded;
    if (this.difficulty) {
      o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_selected, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(s.Localize.text(this.difficulty.name_textID)))).visible = this.isExpanded;
      o.GoodgameTextFieldManager.getInstance().registerTextField(this._headerMC.mc0.txt_unselected, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(s.Localize.text(this.difficulty.name_textID)))).visible = !this.isExpanded;
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.headerMC:
          this.expand(!this.isExpanded, true);
      }
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(C.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(C.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(C.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(C.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseOver = function (e) {
    this._headerMC.mc_over.visible = true;
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseOut = function (e) {
    this._headerMC.mc_over.visible = false;
    this._headerMC.mc_down.visible = false;
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseDown = function (e) {
    this._headerMC.mc_down.visible = true;
    this._headerMC.mc_over.visible = false;
  };
  DifficultyScalingRewardDialogListItemSingleHeader.prototype.onMouseUp = function (e) {
    this._headerMC.mc_down.visible = false;
  };
  return DifficultyScalingRewardDialogListItemSingleHeader;
}(u.ACollapsibleItem);
exports.DifficultyScalingRewardDialogListItemSingleHeader = _;
a.classImplementsInterfaces(_, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");