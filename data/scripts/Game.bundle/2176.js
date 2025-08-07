Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./34.js");
var l = require("./3.js");
var c = function (e) {
  function CastleRecruitInfoDialogUnit(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleRecruitInfoDialogUnit, e);
  CastleRecruitInfoDialogUnit.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    p.ButtonHelper.initBasicButtons([this.sublayerDisp.mc_level.btn_left, this.sublayerDisp.mc_level.btn_right]);
    this.sublayerDisp.mc_infoMarchspeed.toolTipText = "marchspeed";
    this.sublayerDisp.mc_infoMarchspeed.mouseChildren = false;
    this.soldierVO = t[0];
    var i = this.soldierVO.meleeAttack > this.soldierVO.rangeAttack;
    u.WodPicHelper.addSoldierAttackEffectIcon(this.soldierVO, this.sublayerDisp.mc_infoAttackPower.mc_icon, 40, 40);
    o.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_infoDefencMelee.mc_icon);
    o.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_infoDefenceRange.mc_icon);
    u.WodPicHelper.addIcon(Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceMelee, this.sublayerDisp.mc_infoDefencMelee.mc_icon, 40, 40);
    u.WodPicHelper.addIcon(Library.CastleInterfaceElements_Icons.Icon_UnitCombatDefenceRange, this.sublayerDisp.mc_infoDefenceRange.mc_icon, 40, 40);
    this.sublayerDisp.mc_infoUnitLootPower.visible = this.soldierVO.lootValue > 0;
    this.sublayerDisp.mc_infoMarchspeed.visible = this.soldierVO.unitSpeed > 0;
    this.sublayerDisp.mc_infoFoodConsumption.visible = this.soldierVO.foodSupply > 0;
    this.sublayerDisp.mc_infoMeadConsumption.visible = this.soldierVO.meadSupply > 0;
    this.sublayerDisp.mc_infoBeefConsumption.visible = this.soldierVO.beefSupply > 0;
    this.sublayerDisp.mc_level.visible = this.soldierVO.level > 0 || this.soldierVO.upgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_left.visible = this.soldierVO.downgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_right.visible = this.soldierVO.upgradeWodID > 0;
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoAttackPower.txt_value, new s.TextVO(String(i ? this.soldierVO.meleeAttack : this.soldierVO.rangeAttack)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoDefenceRange.txt_value, new s.TextVO(String(this.soldierVO.rangeDefence)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoDefencMelee.txt_value, new s.TextVO(String(this.soldierVO.meleeDefence)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoUnitLootPower.txt_value, new s.TextVO(String(this.soldierVO.lootValue)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoMarchspeed.txt_value, new s.TextVO(String(this.soldierVO.unitSpeed)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoFoodConsumption.txt_value, new s.TextVO(String(this.soldierVO.foodSupply)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoMeadConsumption.txt_value, new s.TextVO(String(this.soldierVO.meadSupply)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoBeefConsumption.txt_value, new s.TextVO(String(this.soldierVO.beefSupply)));
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_level.txt_level, new l.LocalizedTextVO("building_level", [this.soldierVO.level]));
    this.sublayerDisp.mc_infoAttackPower.toolTipText = i ? "attackpower_melee" : "attackpower_range";
    this.sublayerDisp.mc_infoAttackPower.mouseChildren = false;
    this.sublayerDisp.mc_infoDefenceRange.toolTipText = "rangedefence";
    this.sublayerDisp.mc_infoDefenceRange.mouseChildren = false;
    this.sublayerDisp.mc_infoDefencMelee.toolTipText = "meleedefence";
    this.sublayerDisp.mc_infoDefencMelee.mouseChildren = false;
    this.sublayerDisp.mc_infoUnitLootPower.toolTipText = "lootpower";
    this.sublayerDisp.mc_infoUnitLootPower.mouseChildren = false;
    this.sublayerDisp.mc_infoFoodConsumption.toolTipText = "foodwastage";
    this.sublayerDisp.mc_infoFoodConsumption.mouseChildren = false;
    this.sublayerDisp.mc_infoMeadConsumption.toolTipText = "meadwastage";
    this.sublayerDisp.mc_infoMeadConsumption.mouseChildren = false;
    this.sublayerDisp.mc_infoBeefConsumption.toolTipText = "beefwastage";
    this.sublayerDisp.mc_infoBeefConsumption.mouseChildren = false;
  };
  CastleRecruitInfoDialogUnit.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.sublayerDisp.mc_level.btn_left:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitInfoDialog, new C.CastleRecruitInfoDialogProperties(d.CastleModel.wodData.getUnitVOByWodId(this.soldierVO.downgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(g.CastleRecruitInfoDialog);
        break;
      case this.sublayerDisp.mc_level.btn_right:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitInfoDialog, new C.CastleRecruitInfoDialogProperties(d.CastleModel.wodData.getUnitVOByWodId(this.soldierVO.upgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(g.CastleRecruitInfoDialog);
    }
  };
  Object.defineProperty(CastleRecruitInfoDialogUnit.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRecruitInfoDialogUnit;
}(r.CastleDialogSubLayer);
exports.CastleRecruitInfoDialogUnit = c;
var u = require("./63.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./9.js");
var g = require("./115.js");
var C = require("./120.js");
a.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");