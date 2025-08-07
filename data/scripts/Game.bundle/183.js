Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTreasureMapEvent(t, i, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).treasureMapVO = i;
    return a;
  }
  n.__extends(CastleTreasureMapEvent, e);
  CastleTreasureMapEvent.__initialize_static_members = function () {
    CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED = "treasuremap_data_updated";
    CastleTreasureMapEvent.UNIT_TRANSFER_DATA_UPDATED = "unit_transfer_data_updated";
    CastleTreasureMapEvent.UNIT_TRANSFER_WERE_SEND = "unit_transfer_were_send";
    CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED = "resource_transfer_data_updated";
    CastleTreasureMapEvent.RESOURCE_TRANSFER_WERE_SEND = "resource_transfer_were_send";
  };
  return CastleTreasureMapEvent;
}(createjs.Event);
exports.CastleTreasureMapEvent = o;
o.__initialize_static_members();