Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = function (e) {
  function CastleAchievementLevelUpDialog() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.CastleAchievementLevelUp()) || this).textFieldManager.registerTextField(t.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_achv_levelUp_copy"));
    t.itxt_c2 = t.textFieldManager.registerTextField(t.dialogDisp.txt_c2, new s.LocalizedNumberVO(0));
    t.dialogDisp.btn_ok.mouseChildren = false;
    return t;
  }
  n.__extends(CastleAchievementLevelUpDialog, e);
  CastleAchievementLevelUpDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    this.itxt_c2.textContentVO.numberValue = l.CastleModel.castleAchievementData.getAchievementByID(this.dialogProperties.achievementID).rewards.getAmountOrDefaultByType(u.CollectableEnum.C2);
  };
  CastleAchievementLevelUpDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.hide();
    }
  };
  CastleAchievementLevelUpDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleAchievementLevelUpDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  Object.defineProperty(CastleAchievementLevelUpDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAchievementLevelUpDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAchievementLevelUpDialog.__initialize_static_members = function () {
    CastleAchievementLevelUpDialog.NAME = "CastleAchievementLevelUpDialog";
  };
  return CastleAchievementLevelUpDialog;
}(require("./230.js").CastleDialog);
exports.CastleAchievementLevelUpDialog = c;
var u = require("./12.js");
a.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();