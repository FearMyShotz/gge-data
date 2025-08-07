Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./141.js");
var p = function (e) {
  function CastleTitleScrollItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxt_threshold = i.textFieldManager.registerTextField(i._disp.txt_threshold, new r.LocalizedNumberVO(0));
    i.itxt_threshold_bold = i.textFieldManager.registerTextField(i._disp.txt_threshold_bold, new r.LocalizedNumberVO(0));
    i.itxt_title = i.textFieldManager.registerTextField(i._disp.txt_title, new l.LocalizedTextVO(""));
    i.itxt_title_bold = i.textFieldManager.registerTextField(i._disp.txt_title_bold, new l.LocalizedTextVO(""));
    i.itxt_reward = i.textFieldManager.registerTextField(i._disp.txt_reward, new l.LocalizedTextVO(""));
    i.itxt_reward_bold = i.textFieldManager.registerTextField(i._disp.txt_reward_bold, new l.LocalizedTextVO(""));
    i.itxt_threshold.autoFitToBounds = true;
    i.itxt_threshold_bold.autoFitToBounds = true;
    i.itxt_reward.autoFitToBounds = true;
    i.itxt_reward_bold.autoFitToBounds = true;
    i._disp.mc_checkmark.visible = false;
    i._disp.mc_selected.visible = false;
    i._disp.mouseChildren = false;
    i._disp.actLikeButton = true;
    return i;
  }
  n.__extends(CastleTitleScrollItem, e);
  CastleTitleScrollItem.prototype.customFillItem = function () {
    this.setTexts();
    this.setColor();
    this._disp.mc_selected.visible = this.titleScrollItemVO.selected;
  };
  CastleTitleScrollItem.prototype.setTexts = function () {
    if (this.titleScrollItemVO.title.isTopXTitle) {
      var e = c.int(this.titleScrollItemVO.title.topX);
      if (e > 1) {
        d.CastleTextFieldHelper.safeSetText(this.itxt_threshold, "Ranking_Topx", [e]);
        d.CastleTextFieldHelper.safeSetText(this.itxt_threshold_bold, "Ranking_Topx", [e]);
      } else {
        d.CastleTextFieldHelper.safeSetText(this.itxt_threshold, "Ranking_Top1");
        d.CastleTextFieldHelper.safeSetText(this.itxt_threshold_bold, "Ranking_Top1");
      }
    } else {
      var t = this.titleScrollItemVO.title.threshold;
      d.CastleTextFieldHelper.safeSetNumber(this.itxt_threshold, Math.max(0, t));
      d.CastleTextFieldHelper.safeSetNumber(this.itxt_threshold_bold, Math.max(0, t));
    }
    this.itxt_title.textContentVO.textId = this.titleScrollItemVO.title.textID;
    this.itxt_title_bold.textContentVO.textId = this.titleScrollItemVO.title.textID;
    this.itxt_reward.textContentVO.textId = this.titleScrollItemVO.title.descriptionTextVO.textId;
    this.itxt_reward.textContentVO.textReplacements = this.titleScrollItemVO.title.descriptionTextVO.textReplacements;
    this.itxt_reward_bold.textContentVO.textId = this.titleScrollItemVO.title.descriptionTextVO.textId;
    this.itxt_reward_bold.textContentVO.textReplacements = this.titleScrollItemVO.title.descriptionTextVO.textReplacements;
    this.itxt_threshold.visible = !this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_threshold_bold.visible = this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_title.visible = !this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_title_bold.visible = this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_reward.visible = !this.titleScrollItemVO.title.isTopXTitle;
    this.itxt_reward_bold.visible = this.titleScrollItemVO.title.isTopXTitle;
  };
  CastleTitleScrollItem.prototype.setColor = function () {
    this._disp.mc_checkmark.visible = false;
    var e = u.CastleModel.titleData.getHighestTitleEverHeldByThisUser(this.titleScrollItemVO.title.titleSystem);
    var t = u.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(this.titleScrollItemVO.title.titleSystem);
    if (this.titleScrollItemVO.title.topX == 1) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_TOP1);
    } else if (this.titleScrollItemVO.title.isTopXTitle) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_TOPX);
    } else if (t && this.titleScrollItemVO.title.titleID == t.titleID) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_CURRENT);
    } else if (e && this.titleScrollItemVO.title.orderInSystem <= e.orderInSystem || t && this.titleScrollItemVO.title.orderInSystem <= t.orderInSystem) {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_REACHED);
    } else {
      this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_NOT_REACHED);
    }
    if (this.titleScrollItemVO.title.orderInSystem <= t.orderInSystem || t && this.titleScrollItemVO.title.orderInSystem <= t.orderInSystem) {
      this._disp.mc_checkmark.visible = true;
      if (this.disp.mc_color.currentFrame == CastleTitleScrollItem.FRAME_NOT_REACHED) {
        this.disp.mc_color.gotoAndStop(CastleTitleScrollItem.FRAME_REACHED);
      }
    }
  };
  Object.defineProperty(CastleTitleScrollItem.prototype, "titleScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleScrollItem.__initialize_static_members = function () {
    CastleTitleScrollItem.FRAME_NOT_REACHED = 1;
    CastleTitleScrollItem.FRAME_REACHED = 2;
    CastleTitleScrollItem.FRAME_CURRENT = 3;
    CastleTitleScrollItem.FRAME_TOPX = 4;
    CastleTitleScrollItem.FRAME_TOP1 = 5;
  };
  return CastleTitleScrollItem;
}(a.ScrollItem);
exports.CastleTitleScrollItem = p;
s.classImplementsInterfaces(p, "MovieClip");
p.__initialize_static_members();