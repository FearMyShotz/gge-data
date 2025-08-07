Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./81.js");
var u = require("./8.js");
var d = require("./120.js");
var p = function (e) {
  function OfficersSchoolUnlockedItems() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OfficersSchoolUnlockedItems, e);
  OfficersSchoolUnlockedItems.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    u.ButtonHelper.initButtons([this.itemMc.unit_mc0.btn_info, this.itemMc.unit_mc1.btn_info, this.itemMc.unit_mc2.btn_info, this.itemMc.unit_mc3.btn_info], E.ClickFeedbackButton);
  };
  OfficersSchoolUnlockedItems.prototype.fill = function () {
    for (var e = 0; e < 4; e++) {
      var t = this.itemMc["unit_mc" + e];
      if (e < this.wodIDs.length) {
        t.visible = true;
        m.WodPicHelper.addUnitPic(l.CastleModel.wodData.getUnitVOByWodId(this.wodIDs[e]), t.mc_icon, 130, 130, l.CastleModel.userData.playerCrest.colorsTwo[0], l.CastleModel.userData.playerCrest.colorsTwo[1]);
        t.mc_icon.mouseChildren = false;
        t.mc_icon.toolTipText = l.CastleModel.wodData.getUnitVOByWodId(this.wodIDs[e]).getNameString();
        var i = r.int(l.CastleModel.officerSchoolData.getUnlockBuildingWodIDByUnitWodID(this.wodIDs[e]));
        var n = l.CastleModel.wodData.getBuildingVOById(i);
        var o = O.castAs(l.CastleModel.areaData.activeArea.isoData.objects.provider.getObjectByType(g.IsoObjectEnum.OFFICER_SCHOOL), "OfficersSchoolBuildingVO");
        var c = !o || n.level > o.level;
        t.mc_locked.visible = c;
        t.mc_locked.toolTipText = a.Localize.text("dialog_trainingProgram_unitUnlock_lock_tooltip", [n.level]);
        _.CastleComponent.textFieldManager.registerTextField(t.mc_text.txt_copy, new s.LocalizedTextVO(c ? "dialog_trainingProgram_unitUnlock_lock" : "dialog_trainingProgram_unitUnlock_unlock"));
      } else {
        t.visible = false;
      }
    }
  };
  Object.defineProperty(OfficersSchoolUnlockedItems.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolUnlockedItems.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.itemMc.unit_mc0.btn_info:
          this.openInfoForWod(this.wodIDs[0]);
          break;
        case this.itemMc.unit_mc1.btn_info:
          this.openInfoForWod(this.wodIDs[1]);
          break;
        case this.itemMc.unit_mc2.btn_info:
          this.openInfoForWod(this.wodIDs[2]);
          break;
        case this.itemMc.unit_mc3.btn_info:
          this.openInfoForWod(this.wodIDs[3]);
      }
    }
  };
  OfficersSchoolUnlockedItems.prototype.openInfoForWod = function (e) {
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleRecruitInfoDialog, new d.CastleRecruitInfoDialogProperties(new h.CollectableItemUnitVO(e).unitVO));
  };
  Object.defineProperty(OfficersSchoolUnlockedItems.prototype, "wodIDs", {
    get: function () {
      return this.data.wodIDs;
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolUnlockedItems;
}(c.AInfiniteScrollListItem);
exports.OfficersSchoolUnlockedItems = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");
var h = require("./411.js");
var g = require("./80.js");
var C = require("./9.js");
var _ = require("./14.js");
var m = require("./63.js");
var f = require("./115.js");
var O = require("./1.js");
var E = require("./36.js");