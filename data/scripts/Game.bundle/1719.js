Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./264.js");
var d = require("./4.js");
var p = require("./1718.js");
var h = createjs.Point;
var g = function (e) {
  function FactionAttackPvpBox(t) {
    var i = e.call(this, t) || this;
    i.itxt_header.textContentVO.textId = "dialog_faction_camps_header";
    i.itxt_description.textContentVO.textId = "dialog_faction_camps_copy";
    return i;
  }
  n.__extends(FactionAttackPvpBox, e);
  FactionAttackPvpBox.prototype.show = function () {
    e.prototype.show.call(this);
    this.updateIcon();
  };
  FactionAttackPvpBox.prototype.updateIcon = function () {
    o.MovieClipHelper.clearMovieClip(this._disp.mc_icon);
    var e = new m.FactionCampMapobjectVO();
    var t = c.int(d.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_FACTION).otherFactionKingPlayerId);
    e.ownerInfo = d.CastleModel.otherPlayerData.getOwnerInfoVO(t);
    this._disp.mc_icon.addChild(O.WorldmapObjectIconHelper.drawMapObjectIcon(e, p.AFactionAttackBox.ICON_SIZE, true, false, false));
  };
  Object.defineProperty(FactionAttackPvpBox.prototype, "defaultShowMeButtonTooltip", {
    get: function () {
      return "dialog_faction_camps_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AFactionAttackBox.prototype, "defaultShowMeButtonTooltip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionAttackPvpBox.prototype.onClickShowMe = function () {
    if (!_.FlashBlockHelper.checkFlashBlock(r.FactionConst.KINGDOM_ID)) {
      f.CastleLayoutManager.getInstance().hideDialog(E.FactionEventMainDialog);
      var e = d.CastleModel.userData.castleList.getMainCastleByKingdomID(r.FactionConst.KINGDOM_ID);
      var t = e ? e.absAreaPos : new h(0, 0);
      a.CommandController.instance.executeCommand(C.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [r.FactionConst.KINGDOM_ID, t.x, t.y]);
      d.CastleModel.smartfoxClient.sendCommandVO(new u.C2SFindNextMapObjectVO(s.WorldConst.AREA_TYPE_FACTION_CAMP, r.FactionConst.KINGDOM_ID, -3));
    }
  };
  return FactionAttackPvpBox;
}(p.AFactionAttackBox);
exports.FactionAttackPvpBox = g;
var C = require("./29.js");
var _ = require("./160.js");
var m = require("./597.js");
var f = require("./17.js");
var O = require("./70.js");
var E = require("./662.js");