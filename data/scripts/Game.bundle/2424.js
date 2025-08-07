Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./28.js");
var d = require("./21.js");
var p = require("./53.js");
var h = require("./4.js");
var g = require("./81.js");
var C = require("./8.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleAllianceCentersOfPowerDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleAllianceCentersOfPowerDialogItem, e);
  CastleAllianceCentersOfPowerDialogItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (y.instanceOfClass(this.wmo, "MetropolMapobjectVO")) {
      h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    }
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.fill = function () {
    var e = this.getItemMc();
    C.ButtonHelper.initButtons([e.btn_goTo], D.ClickFeedbackButton);
    e.mc_icon.addChild(E.WorldmapObjectIconHelper.drawMapObjectIcon(this.wmo, new _(78, 62), true, false, false));
    O.CastleComponent.textFieldManager.registerTextField(e.txt_areaName, new r.TextVO(this.wmo.areaNameString));
    O.CastleComponent.textFieldManager.registerTextField(e.txt_playerName, new r.TextVO(this.playerName));
    e.mc_collectionTime.toolTipText = "depletion_influence_tt";
    e.mc_allInfluence.toolTipText = "currency_name_AllianceInfluence";
    e.mc_attack.toolTipText = "kingstower_worldmap_tooltip_" + p.ABGHelper.skinName;
    e.btn_goTo.toolTipText = "jumpTo";
    e.mc_collectionTime.visible = y.instanceOfClass(this.wmo, "MetropolMapobjectVO");
    e.mc_collectionTime.mouseChildren = false;
    e.mc_allInfluence.visible = y.instanceOfClass(this.wmo, "CapitalMapobjectVO");
    e.mc_allInfluence.mouseChildren = false;
    e.mc_attack.visible = y.instanceOfClass(this.wmo, "KingstowerMapobjectVO");
    e.mc_attack.mouseChildren = false;
    if (y.instanceOfClass(this.wmo, "MetropolMapobjectVO")) {
      this.onUpdateTimer();
    }
    if (y.instanceOfClass(this.wmo, "CapitalMapobjectVO")) {
      O.CastleComponent.textFieldManager.registerTextField(e.txt_value, new c.LocalizedNumberVO(this.additionalInformation));
    }
    if (y.instanceOfClass(this.wmo, "KingstowerMapobjectVO")) {
      O.CastleComponent.textFieldManager.registerTextField(e.txt_value, new l.LocalizedTextVO("relicequip_dialog_relicIncrease_value_single", [this.additionalInformation]));
    }
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.onUpdateTimer = function (e = null) {
    O.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_value, new r.TextVO(a.TimeStringHelper.getHoureMinutesTimeString(Math.max(this.additionalInformation - (b.CachedTimer.getCachedTimer() - this.dataGainTime) * u.ClientConstTime.MILLISEC_2_SEC))));
  };
  CastleAllianceCentersOfPowerDialogItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.getItemMc().btn_goTo) {
      s.CommandController.instance.executeCommand(f.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.wmo);
    }
  };
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "wmo", {
    get: function () {
      if (this.data) {
        return this.data[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "playerName", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "additionalInformation", {
    get: function () {
      return this.data[2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceCentersOfPowerDialogItem.prototype, "dataGainTime", {
    get: function () {
      return this.data[3];
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceCentersOfPowerDialogItem;
}(g.AInfiniteScrollListItem);
exports.CastleAllianceCentersOfPowerDialogItem = m;
var f = require("./29.js");
var O = require("./14.js");
var E = require("./70.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");
var y = require("./1.js");
var b = require("./30.js");
var D = require("./36.js");