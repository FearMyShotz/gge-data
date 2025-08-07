Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = function (e) {
  function ButtonVisitCastleComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonVisitCastleComponent, e);
  ButtonVisitCastleComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeVisited;
  };
  Object.defineProperty(ButtonVisitCastleComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonVisitCastleComponent.prototype.onClick = function () {
    o.CommandController.instance.executeCommand(l.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, this._worldMapObjectVO);
  };
  Object.defineProperty(ButtonVisitCastleComponent.prototype, "infoTextId", {
    get: function () {
      if (s.instanceOfClass(this._worldMapObjectVO, "FactionCampMapobjectVO")) {
        return "ringmenu_visit_camp";
      } else {
        return "ringmenu_visit_castle";
      }
    },
    enumerable: true,
    configurable: true
  });
  return ButtonVisitCastleComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonVisitCastleComponent = r;
var l = require("./29.js");
a.classImplementsInterfaces(r, "IWorldMapObjectRingmenuButtonComponent");