Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./2421.js");
var u = require("./37.js");
var d = require("./53.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./34.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleAllianceDialogABG(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_title, new l.LocalizedTextVO("dialog_alliance_centersOfPower_title"));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_capitals.txt_name, new l.LocalizedTextVO("capital_" + d.ABGHelper.skinName));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_capitals.txt_copy, new l.LocalizedTextVO("capital_desc_" + d.ABGHelper.skinName));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_metropols.txt_name, new l.LocalizedTextVO("metropol_" + d.ABGHelper.skinName));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_metropols.txt_copy, new l.LocalizedTextVO("metropol_desc_" + d.ABGHelper.skinName));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_kingstower.txt_name, new l.LocalizedTextVO("kingstower_" + d.ABGHelper.skinName));
    i.textFieldManager.registerTextField(i.subLayerDisp.mc_kingstower.txt_copy, new l.LocalizedTextVO("kingstower_desc_" + d.ABGHelper.skinName));
    i.subLayerDisp.btn_detail.toolTipText = "btn_centersOfPowerOverview";
    h.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_detail]);
    i.subLayerDisp.mc_capitals.mc_icon.addChild(y.WorldmapObjectIconHelper.drawMapObjectIcon(new m.CapitalMapobjectVO(), new C(100, 90), true, false, false));
    i.subLayerDisp.mc_metropols.mc_icon.addChild(y.WorldmapObjectIconHelper.drawMapObjectIcon(new O.MetropolMapobjectVO(), new C(100, 90), true, false, false));
    i.subLayerDisp.mc_kingstower.mc_icon.addChild(y.WorldmapObjectIconHelper.drawMapObjectIcon(new f.KingstowerMapobjectVO(), new C(100, 90), true, false, false));
    return i;
  }
  n.__extends(CastleAllianceDialogABG, e);
  CastleAllianceDialogABG.prototype.onMouseUp = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_detail:
          E.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleAllianceCentersOfPowerDialog);
      }
    }
  };
  CastleAllianceDialogABG.prototype.showHelp = function () {
    E.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_allianceManagement"));
  };
  CastleAllianceDialogABG.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(u.CastleServerMessageArrivedEvent.CPE_ARRIVED, this.bindFunction(this.onCPEArrived));
    a.BasicModel.smartfoxClient.sendCommandVO(new c.C2SAllianceBattleGroundGetCentersOfPowerVO(p.CastleModel.userData.allianceID));
  };
  CastleAllianceDialogABG.prototype.onCPEArrived = function (e) {
    this.controller.removeEventListener(u.CastleServerMessageArrivedEvent.CPE_ARRIVED, this.bindFunction(this.onCPEArrived));
    var t = e.params[0];
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_capitals.txt_allianceOwn, new l.LocalizedTextVO("ownedByAlliance_XY", [t[s.CommKeys.CAPITAL_AMOUNT], 1]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_capitals.txt_playerLimit, new l.LocalizedTextVO("playerLimit_X", [t[s.CommKeys.CAPITAL_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_metropols.txt_allianceOwn, new l.LocalizedTextVO("ownedByAlliance_XY", [t[s.CommKeys.CITY_STATES_AMOUNT], t[s.CommKeys.CITY_STATES_ALLIANCE_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_metropols.txt_playerLimit, new l.LocalizedTextVO("playerLimit_X", [t[s.CommKeys.CITY_STATES_PLAYER_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_kingstower.txt_allianceOwn, new l.LocalizedTextVO("ownedByAlliance_XY", [t[s.CommKeys.TOWER_AMOUNT], t[s.CommKeys.TOWER_ALLIANCE_LIMIT]]));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_kingstower.txt_playerLimit, new l.LocalizedTextVO("playerLimit_X", [t[s.CommKeys.TOWER_PLAYER_LIMIT]]));
  };
  CastleAllianceDialogABG.prototype.hide = function () {
    e.prototype.hide.call(this);
  };
  return CastleAllianceDialogABG;
}(g.CastleDialogSubLayer);
exports.CastleAllianceDialogABG = _;
var m = require("./499.js");
var f = require("./508.js");
var O = require("./577.js");
var E = require("./9.js");
var y = require("./70.js");
var b = require("./2422.js");
o.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");