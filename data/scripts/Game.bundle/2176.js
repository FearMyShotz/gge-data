Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./9.js");
var d = require("./8.js");
var p = function (e) {
  function CastleRecruitInfoDialogTool(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleRecruitInfoDialogTool, e);
  CastleRecruitInfoDialogTool.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    d.ButtonHelper.initBasicButtons([this.sublayerDisp.mc_level.btn_left, this.sublayerDisp.mc_level.btn_right]);
    this.toolVO = t[0];
    this.sublayerDisp.mc_infoMarchspeed.toolTipText = "marchspeed";
    this.sublayerDisp.mc_infoMarchspeed.mouseChildren = false;
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_infoMarchspeed.txt_value, new r.TextVO(String(this.toolVO.unitSpeed)));
    this.sublayerDisp.mctoolTipText = this.toolVO.getTooltipString();
    this.textFieldManager.registerTextField(this.sublayerDisp.txt_copy, new s.LocalizedTextVO(this.toolVO.getShortInfoString())).autoFitToBounds = true;
    var i = l.int(this.toolVO.effectTypes.length);
    for (var n = [this.sublayerDisp.mc_tool_info, this.sublayerDisp.mc_tool_info2], o = 0; o < n.length; ++o) {
      n[o].visible = o < i;
      if (!(o >= i)) {
        h.WodPicHelper.addToolEffectIcon(this.toolVO, n[o].mc_icon, 40, 40, o);
        n[o].toolTipText = this.toolVO.getTooltipString(1, o);
        n[o].mouseChildren = false;
        this.textFieldManager.registerTextField(n[o].txt_value, this.toolVO.getBonusString(o)).autoFitToBounds = true;
      }
    }
    this.sublayerDisp.mc_waveLimit.visible = this.toolVO.amountPerWave > 0 && !this.toolVO.isOffenseSupportTool;
    this.sublayerDisp.mc_waveLimit.toolTipText = "amountPerWave";
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_waveLimit.txt_value, new a.LocalizedNumberVO(this.toolVO.amountPerWave));
    this.sublayerDisp.mc_level.visible = this.toolVO.level > 0 || this.toolVO.upgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_left.visible = this.toolVO.downgradeWodID > 0;
    this.sublayerDisp.mc_level.btn_right.visible = this.toolVO.upgradeWodID > 0;
    this.textFieldManager.registerTextField(this.sublayerDisp.mc_level.txt_level, new s.LocalizedTextVO("building_level", [this.toolVO.level]));
  };
  CastleRecruitInfoDialogTool.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.sublayerDisp.mc_level.btn_left:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitInfoDialog, new C.CastleRecruitInfoDialogProperties(c.CastleModel.wodData.getUnitVOByWodId(this.toolVO.downgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(g.CastleRecruitInfoDialog);
        break;
      case this.sublayerDisp.mc_level.btn_right:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRecruitInfoDialog, new C.CastleRecruitInfoDialogProperties(c.CastleModel.wodData.getUnitVOByWodId(this.toolVO.upgradeWodID)));
        this.layoutManager.hideDialogWithDialogKey(g.CastleRecruitInfoDialog);
    }
  };
  Object.defineProperty(CastleRecruitInfoDialogTool.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRecruitInfoDialogTool;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleRecruitInfoDialogTool = p;
var h = require("./63.js");
var g = require("./113.js");
var C = require("./120.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");