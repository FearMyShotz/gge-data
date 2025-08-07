Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./32.js");
var c = require("./92.js");
var u = require("./4.js");
var d = require("./89.js");
var p = function (e) {
  function CastlePanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastlePanelButton, e);
  CastlePanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    _.CastleComponent.controller.addEventListener(l.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListChanged));
  };
  CastlePanelButton.prototype.removeEventListener = function () {
    _.CastleComponent.controller.removeEventListener(l.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListChanged));
    e.prototype.removeEventListener.call(this);
  };
  CastlePanelButton.prototype.updateOnVisible = function () {
    this.iconMc.gotoAndStop(u.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID ? 2 : 1);
  };
  CastlePanelButton.prototype.isButtonVisible = function () {
    return C.CastleLayoutManager.STATE_WORLDMAP == _.CastleComponent.layoutManager.currentState || _.CastleComponent.layoutManager.currentState == C.CastleLayoutManager.STATE_KINGDOMMAP;
  };
  CastlePanelButton.prototype.getButtonTooltip = function () {
    var e = h.castAs(u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
    if (u.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID) {
      if (e && e.isSpectator) {
        return "panel_action_castle_spectator";
      } else {
        return "panel_action_camp";
      }
    } else {
      return "panel_action_castle";
    }
  };
  Object.defineProperty(CastlePanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Castle;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePanelButton.prototype.onButtonClicked = function () {
    _.CastleComponent.controller.dispatchEvent(new c.IsoEvent(c.IsoEvent.HIDE_PANEL_INFO, []));
    a.CommandController.instance.executeCommand(g.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, u.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel);
  };
  CastlePanelButton.prototype.onCastleListChanged = function (e) {
    this.update();
  };
  return CastlePanelButton;
}(d.APanelButton);
exports.CastlePanelButton = p;
var h = require("./1.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
var g = require("./29.js");
var C = require("./17.js");
var _ = require("./14.js");