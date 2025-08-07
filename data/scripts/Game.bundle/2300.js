Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./271.js");
var l = require("./2301.js");
var c = require("./418.js");
var u = require("./4.js");
var d = require("./281.js");
var p = require("./163.js");
var h = require("./1294.js");
var g = require("./2302.js");
var C = require("./2303.js");
var _ = function (e) {
  function OptionsDialogOptions() {
    return e.call(this) || this;
  }
  n.__extends(OptionsDialogOptions, e);
  OptionsDialogOptions.prototype.createItems = function () {
    var e = new g.OptionsDialogOptionsItem(s.Localize.text("dialog_options_title"), OptionsDialogOptions.ITEM_PROPERTIES);
    e.addOption(s.Localize.text("dialog_options_animationsText"), u.CastleModel.gfxData.animationActive, this.bindFunction(this.toggleAnimationActive));
    e.addOption(s.Localize.text("dialog_options_questnoteText"), u.CastleModel.settingsData.questReminderActive, this.bindFunction(this.toggleQuestreminderActive));
    e.addOption(s.Localize.text("dialog_options_mapMovementArrows"), u.CastleModel.settingsData.worldmapMovementsVisible, this.bindFunction(this.toggleWorldMapMovementsVisible));
    e.addOption(s.Localize.text("dialog_options_mapMarketBarrows"), u.CastleModel.settingsData.mapFilter2Active, this.bindFunction(this.toggleMapMarketBarrows));
    e.addOption(s.Localize.text("dialog_options_mapPVPAttacks"), u.CastleModel.settingsData.mapFilter0Active, this.bindFunction(this.toggleMapPVPAttacks));
    e.addOption(s.Localize.text("dialog_options_mapPVPAttacksAlliance"), u.CastleModel.settingsData.mapFilter1Active, this.bindFunction(this.toggleMapPvPAttacksAlliance));
    e.addOption(s.Localize.text("dialog_options_attackAlert"), u.CastleModel.gfxData.alertFrameVisible, this.bindFunction(this.toggleAlertFrameVisible));
    e.addOption(s.Localize.text("dialog_options_showVipFlag_v2"), u.CastleModel.settingsData.showVIPFlagToOthers, this.bindFunction(this.toggleShowVIPFlag));
    e.addOption(s.Localize.text("dialog_options_showOfflineToFriends"), u.CastleModel.settingsData.showOfflineForFriends, this.bindFunction(this.toggleShowOfflineForFriends));
    var t = new C.OptionsDialogRubyConfirmationItem(OptionsDialogOptions.ITEM_PROPERTIES);
    var i = [];
    i.push(e);
    i.push(t);
    return i;
  };
  OptionsDialogOptions.prototype.toggleAnimationActive = function (e) {
    u.CastleModel.gfxData.animationActive = e;
    u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SClientSideTrackingVO(r.ClientConstTracking.ANIMATION_TRACKING_KEY, u.CastleModel.gfxData.animationActive));
  };
  OptionsDialogOptions.prototype.toggleQuestreminderActive = function (e) {
    u.CastleModel.settingsData.questReminderActive = e;
  };
  OptionsDialogOptions.prototype.toggleWorldMapMovementsVisible = function (e) {
    u.CastleModel.settingsData.worldmapMovementsVisible = e;
  };
  OptionsDialogOptions.prototype.toggleMapMarketBarrows = function (e) {
    u.CastleModel.armyData.resetAndRemove();
    o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SMovementFilterOptionEvent(a.MovementFilterConst.RESOURCE_TRANSPORTS, e));
  };
  OptionsDialogOptions.prototype.toggleMapPVPAttacks = function (e) {
    u.CastleModel.armyData.resetAndRemove();
    o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SMovementFilterOptionEvent(a.MovementFilterConst.PLAYER_PVP_ATTACKS, e));
  };
  OptionsDialogOptions.prototype.toggleMapPvPAttacksAlliance = function (e) {
    u.CastleModel.armyData.resetAndRemove();
    o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SMovementFilterOptionEvent(a.MovementFilterConst.ALLIANCE_PVP_ATTACKS, e));
  };
  OptionsDialogOptions.prototype.toggleAlertFrameVisible = function (e) {
    u.CastleModel.gfxData.alertFrameVisible = e;
  };
  OptionsDialogOptions.prototype.toggleShowVIPFlag = function (e) {
    u.CastleModel.settingsData.showVIPFlagToOthers = e;
  };
  OptionsDialogOptions.prototype.toggleShowOfflineForFriends = function (e) {
    u.CastleModel.settingsData.showOfflineForFriends = e;
  };
  OptionsDialogOptions.__initialize_static_members = function () {
    OptionsDialogOptions.ITEM_PROPERTIES = new d.GenericCollapsibleItemProperties(new p.LayoutMargin(0, 8, 0, 0));
  };
  return OptionsDialogOptions;
}(h.AOptionsDialogContentCreator);
exports.OptionsDialogOptions = _;
_.__initialize_static_members();