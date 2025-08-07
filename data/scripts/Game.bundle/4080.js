Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./35.js");
var h = createjs.MouseEvent;
var g = require("./698.js");
var C = function (e) {
  function CastleAchievementDialogCategoryList(t) {
    var i = this;
    i.currentTopIndex = 0;
    i._refHeight = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._touchScrollHelper = new g.TouchScrollHelper();
    return i;
  }
  n.__extends(CastleAchievementDialogCategoryList, e);
  CastleAchievementDialogCategoryList.prototype.show = function (t) {
    this.achievementSeries = d.CastleModel.castleAchievementData.getAchievementSeriesByCategory(t[0]);
    this.currentTopIndex = 0;
    this.refreshList();
    this.sublayerDisp.addEventListener(h.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    e.prototype.show.call(this, t);
    this.initBasicButtons([this.sublayerDisp.btn_up, this.sublayerDisp.btn_down]);
    if (s.currentBrowserInfo.isMobile) {
      this._touchScrollHelper.setup(this.sublayerDisp);
      this.sublayerDisp.addEventListener(h.PRESS_MOVE, this.bindFunction(this.handleTouchScrooll));
      this._refHeight = this.sublayerDisp.height / 4;
    }
  };
  CastleAchievementDialogCategoryList.prototype.refreshList = function () {
    for (var e = 0; e < CastleAchievementDialogCategoryList.VISIBLE_ITEMS; ++e) {
      var t = this.sublayerDisp["achv_item" + e];
      if (this.currentTopIndex + e >= this.achievementSeries.length) {
        t.visible = false;
      } else {
        t.visible = true;
        var i = this.achievementSeries[this.currentTopIndex + e];
        var n = "achievementDesc_" + i.achievementSeriesID + (i.useSingularTextID() ? "_singular" : "");
        var s = l.Localize.text(n, i.generateDescriptionParameter());
        if (i.achievementInProgress.unlocksDifficulty > 0) {
          s += " " + l.Localize.text("achievementSingleStep_" + i.achievementInProgress.achievementID);
        }
        if (t.ifirstRefresh) {
          t.itxt_name.textContentVO.stringValue = i.nameString;
          t.itxt_desc.textContentVO.stringValue = s;
          t.itxt_level.textContentVO.textId = "building_level";
          t.itxt_level.textContentVO.textReplacements = [i.level];
          t.itxt_points.textContentVO.numberValue = i.achievementInProgress.achievementPoints;
        } else {
          t.ifirstRefresh = true;
          t.itxt_name = this.textFieldManager.registerTextField(t.txt_name, new c.TextVO(i.nameString));
          t.itxt_name.mouseEnabled = false;
          t.itxt_desc = this.textFieldManager.registerTextField(t.txt_desc, new c.TextVO(s));
          t.itxt_desc.mouseEnabled = false;
          t.itxt_level = this.textFieldManager.registerTextField(t.txt_level, new l.LocalizedTextVO("building_level", [i.level]));
          t.itxt_level.mouseEnabled = false;
          t.itxt_level.autoFitToBounds = true;
          t.itxt_points = this.textFieldManager.registerTextField(t.txt_points, new r.LocalizedNumberVO(i.achievementInProgress.achievementPoints));
          t.itxt_points.mouseEnabled = false;
          t.itxt_points.autoFitToBounds = true;
        }
        t.mc_progressBar.scaleX = Math.max(Math.min(i.achievementInProgress.totalCurrentProgress / i.achievementInProgress.totalMaxProgress, 1), 0);
        t.mc_done.visible = i.isSerieFinished;
        t.mc_points_tooltip.toolTipText = {
          t: "points",
          p: [i.achievementInProgress.achievementPoints]
        };
        if (i.achievementInProgress.hasYellowBar) {
          t.mc_progressBar.visible = true;
          t.mc_noProgressBar.visible = false;
          t.mc_progressBarOverlay.toolTipText = new l.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new r.LocalizedNumberVO(i.achievementInProgress.totalCurrentProgress), new r.LocalizedNumberVO(i.achievementInProgress.totalMaxProgress)]);
          if (i.hideIconText) {
            t.imc_achievement_value = this.textFieldManager.registerTextField(t.mc_achievement_value, new c.TextVO(""));
          } else {
            t.imc_achievement_value = this.textFieldManager.registerTextField(t.mc_achievement_value, new r.LocalizedNumberVO(Number(i.getYellowBarString()), true));
          }
        } else {
          t.mc_progressBar.visible = false;
          t.mc_noProgressBar.visible = true;
          t.mc_progressBarOverlay.toolTipText = null;
          t.imc_achievement_value = this.textFieldManager.registerTextField(t.mc_achievement_value, new c.TextVO(""));
        }
        a.MovieClipHelper.clearMovieClip(t.mc_iconHolder);
        t.mc_iconHolder.addChild(i.displayDisp);
        t.mc_iconHolder.mouseChildren = false;
        if (i.currentSeriesStep == 1) {
          t.mc_medal.gotoAndStop(1);
        } else if (i.isSerieFinished) {
          t.mc_medal.gotoAndStop(3);
        } else {
          t.mc_medal.gotoAndStop(2);
        }
        this.checkArrows();
      }
    }
  };
  CastleAchievementDialogCategoryList.prototype.hide = function () {
    this.sublayerDisp.removeEventListener(h.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    if (s.currentBrowserInfo.isMobile) {
      this._touchScrollHelper.dispose();
      this.sublayerDisp.removeEventListener(h.PRESS_MOVE, this.bindFunction(this.handleTouchScrooll));
      this._refHeight = 0;
    }
    e.prototype.hide.call(this);
  };
  CastleAchievementDialogCategoryList.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.sublayerDisp.btn_up:
        this.scrollUp();
        break;
      case this.sublayerDisp.btn_down:
        this.scrollDown();
    }
  };
  CastleAchievementDialogCategoryList.prototype.handleTouchScrooll = function (e) {
    if (s.currentBrowserInfo.isTouchEvent(e)) {
      var t = e.stageY - this._touchScrollHelper.touchStageRefPoint.y;
      if (Math.abs(t) > this._refHeight) {
        if (t > 0) {
          this.scrollUp();
        } else {
          this.scrollDown();
        }
        this._touchScrollHelper.touchStageRefPoint.y = e.stageY;
      }
    }
  };
  CastleAchievementDialogCategoryList.prototype.onMouseWheel_0 = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.delta < 0) {
      this.scrollUp();
    } else if (t.delta > 0) {
      this.scrollDown();
    }
  };
  CastleAchievementDialogCategoryList.prototype.scrollUp = function () {
    if (!(this.currentTopIndex <= 0)) {
      this.currentTopIndex = u.int(Math.max(0, this.currentTopIndex - 1));
      this.refreshList();
    }
  };
  CastleAchievementDialogCategoryList.prototype.scrollDown = function () {
    if (!(this.currentTopIndex >= this.achievementSeries.length - CastleAchievementDialogCategoryList.VISIBLE_ITEMS)) {
      this.currentTopIndex = u.int(Math.min(this.achievementSeries.length - CastleAchievementDialogCategoryList.VISIBLE_ITEMS, this.currentTopIndex + 1));
      this.refreshList();
    }
  };
  CastleAchievementDialogCategoryList.prototype.checkArrows = function () {
    this.sublayerDisp.btn_down.visible = this.currentTopIndex + CastleAchievementDialogCategoryList.VISIBLE_ITEMS < this.achievementSeries.length;
    this.sublayerDisp.btn_up.visible = this.currentTopIndex > 0;
  };
  Object.defineProperty(CastleAchievementDialogCategoryList.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementDialogCategoryList.__initialize_static_members = function () {
    CastleAchievementDialogCategoryList.VISIBLE_ITEMS = 3;
  };
  return CastleAchievementDialogCategoryList;
}(p.CastleDialogSubLayer);
exports.CastleAchievementDialogCategoryList = C;
s.classImplementsInterfaces(C, "ICollectableRendererList", "ISublayer");
C.__initialize_static_members();