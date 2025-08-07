Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function CastleAchievementPopupDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.CastleAchievementPopup_G()) || this).itxt_level = t.textFieldManager.registerTextField(t.dialogDisp.txt_level, new a.LocalizedTextVO(""));
    t.itxt_name = t.textFieldManager.registerTextField(t.dialogDisp.txt_name, new a.LocalizedTextVO(""));
    t.itxt_points = t.textFieldManager.registerTextField(t.dialogDisp.txt_points, new a.LocalizedTextVO(""));
    t.itxt_unlock = t.textFieldManager.registerTextField(t.dialogDisp.mc_addition.txt_copy, new a.LocalizedTextVO(""));
    t.itxt_achievement_value = t.textFieldManager.registerTextField(t.dialogDisp.txt_achievement_value, new s.TextVO(""));
    return t;
  }
  n.__extends(CastleAchievementPopupDialog, e);
  CastleAchievementPopupDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    var t = r.CastleModel.castleAchievementData.getAchievementByID(this.dialogProperties.achievementID);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_icon_placeholder);
    this.dialogDisp.mc_icon_placeholder.addChild(t.displayDisp);
    this.itxt_level.textContentVO.textId = "building_level";
    this.itxt_level.textContentVO.textReplacements = [t.achievementSeriesNumber];
    this.itxt_name.textContentVO.textId = t.achievementSerieVO.nameString;
    this.itxt_points.textContentVO.textId = "points";
    this.itxt_points.textContentVO.textReplacements = [t.achievementPoints];
    if (t.hasYellowBar) {
      this.itxt_achievement_value.textContentVO.stringValue = String(t.totalMaxProgress);
    } else {
      this.itxt_achievement_value.textContentVO.stringValue = "-";
    }
    if (t.hasDifficultyUnlock) {
      this.dialogDisp.mc_addition.visible = true;
      this.itxt_unlock.textContentVO.textId = "achievementSingleStep_" + t.achievementID;
    } else {
      this.dialogDisp.mc_addition.visible = false;
    }
  };
  Object.defineProperty(CastleAchievementPopupDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementPopupDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementPopupDialog.__initialize_static_members = function () {
    CastleAchievementPopupDialog.NAME = "CastleAchievementPopupDialog";
  };
  return CastleAchievementPopupDialog;
}(require("./3465.js").CastleIngameMessagePopup);
exports.CastleAchievementPopupDialog = l;
l.__initialize_static_members();