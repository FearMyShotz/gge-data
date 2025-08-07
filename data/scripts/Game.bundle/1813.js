Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEilandPanel(e, t) {
    this._panel = e;
    this._parentPanel = t;
  }
  CastleEilandPanel.prototype.addListeners = function () {
    C.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateIslandPanel));
  };
  CastleEilandPanel.prototype.removeListeners = function () {
    C.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateIslandPanel));
  };
  CastleEilandPanel.prototype.initIslandPanel = function () {
    this.itxt_countdown = this.textFieldManager.registerTextField(this.panel.mc_countdown.txt_countdown, new d.TextVO(""), new s.InternalGGSTextFieldConfigVO(true));
    this.itxt_countdown.autoFitToBounds = true;
    this.panel.mc_countdown.mouseChildren = false;
    this.panel.mc_countdown.toolTipText = "countdown_aquamarin_tooltip";
    this.panel.mc_aquaPoints.mouseChildren = false;
    this.panel.mc_aquaPoints.toolTipText = C.CastleModel.userData.isInAlliance ? "aquamarin_points_tooltip" : "aquamarin_points_noAlliance_tooltip";
    this.updateIslandPanel(null);
    this.addListeners();
  };
  CastleEilandPanel.prototype.isAvailable = function () {
    return C.CastleModel.kingdomData.activeKingdomID == l.WorldIsland.KINGDOM_ID;
  };
  CastleEilandPanel.prototype.updateIslandPanel = function (e) {
    if (this.isAvailable() && this.panel.visible) {
      var t = r.TimeStringHelper.getTimeToString(C.CastleModel.kingdomData.getKingdomVOByID(l.WorldIsland.KINGDOM_ID).resetTime, r.TimeStringHelper.TWO_TIME_FORMAT, c.Localize.text, false, true);
      if (C.CastleModel.userData.aquaPoints < 0) {
        C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetAquaPoints());
      }
      this.itxt_countdown.textContentVO.stringValue = t;
      this.itxt_aquaPoints ||= this.textFieldManager.registerTextField(this.panel.mc_aquaPoints.txt_aquaPoints, new u.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE), new s.InternalGGSTextFieldConfigVO(true));
      if (C.CastleModel.userData.isInAlliance && C.CastleModel.allianceData.myAllianceVO) {
        this.itxt_aquaPoints.textContentVO.textReplacements = [C.CastleModel.userData.aquaPoints, C.CastleModel.allianceData.myAllianceVO.aquaPoints];
        this.itxt_aquaPoints.color = p.ClientConstColor.FONT_DEFAULT_COLOR;
      } else {
        this.itxt_aquaPoints.textContentVO.textReplacements = [C.CastleModel.userData.aquaPoints, "-"];
        this.itxt_aquaPoints.color = p.ClientConstColor.GENERIC_RED;
      }
      if (e && this._parentPanel) {
        this._parentPanel.updateCache();
      }
    }
  };
  Object.defineProperty(CastleEilandPanel.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandPanel.prototype, "panel", {
    get: function () {
      return this._panel;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandPanel;
}();
exports.CastleEilandPanel = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./16.js");
var h = require("./1597.js");
var g = require("./21.js");
var C = require("./4.js");