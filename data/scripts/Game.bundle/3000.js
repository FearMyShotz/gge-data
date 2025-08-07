Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./647.js");
var s = require("./795.js");
var r = require("./796.js");
var l = require("./1030.js");
var c = function (e) {
  function RingMenuButtonCrafting() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._currentQueueID = 1;
    return t;
  }
  n.__extends(RingMenuButtonCrafting, e);
  RingMenuButtonCrafting.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_crafting;
    this._disp.visible = n instanceof a.ACraftingBuildingVE && n.buildingVO.buildingState.isFunctionally;
    if (this._disp.visible) {
      var o = this.targetBuilding.craftingBuildingVO.craftingQueueId;
      this._disp.gotoAndStop(o);
      this._currentQueueID = o;
    }
  };
  RingMenuButtonCrafting.prototype.onClick = function (e, t) {
    this.parent.hide();
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(r.CastleRefineryToolsmithDialog, new l.CastleRefineryToolsmithDialogProperties(this._currentQueueID));
  };
  RingMenuButtonCrafting.prototype.getInfoText = function () {
    switch (this._currentQueueID) {
      case s.CraftingQueueVO.QUEUE_REFINERY:
        return "ringmenu_building_refinery";
      case s.CraftingQueueVO.QUEUE_TOOLSMITH:
        return "ringmenu_building_toolsmith";
      case s.CraftingQueueVO.QUEUE_DRAGONHOARD:
        return "ringmenu_building_dragonhoard";
      case s.CraftingQueueVO.QUEUE_DRAGONBREATH:
        return "ringmenu_building_dragonbreathforge";
    }
  };
  return RingMenuButtonCrafting;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonCrafting = c;
var u = require("./9.js");
o.classImplementsInterfaces(c, "IRingMenuButton");