Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./831.js");
var c = require("./3785.js");
var u = require("./241.js");
var d = function (e) {
  function OpenLongTermPointEventDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenLongTermPointEventDialogCommand, e);
  OpenLongTermPointEventDialogCommand.prototype.openDialog = function () {
    new g.UpdateDynamicTopXDataService().updateDynamicTopXForVO(this._eventVO);
    this._dialogProperties.updateEventVO(this._eventVO);
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.LongTermPointEventDialog, this._dialogProperties);
  };
  OpenLongTermPointEventDialogCommand.prototype.addAssets = function (e) {
    this._eventVO = r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
    r.CastleModel.smartfoxClient.sendCommandVO(new u.C2SPointEventGetPointsVO(a.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT));
    this._dialogProperties = new c.LongTermPointEventProperties(this._eventVO);
    this.loadSeasonAssets(this._dialogProperties);
    this.loadPointEventAssets(this._dialogProperties, h.LongTermPointEventDialog.TAB_ICONS_IDS);
  };
  OpenLongTermPointEventDialogCommand.prototype.loadPointEventAssets = function (e, t) {
    for (var i = s.int(t.length), n = 0, o = e.eventVO.skin, a = 0; a < i; a++) {
      var r;
      var c;
      var u = "";
      if (a == l.LongTermPointEventClientConst.GENERAL_TAB_ID) {
        c = o.assetName;
        r = l.LongTermPointEventClientConst.eventNamePrefix + o.textSuffix;
        u = l.LongTermPointEventClientConst.eventDescriptionPrefix + o.textSuffix;
      } else {
        n = s.int(t[a]);
        c = l.LongTermPointEventClientConst.pointEventAssetNames.get(n);
        r = l.LongTermPointEventClientConst.tabToolTipPrefix + c.toLowerCase();
      }
      var d = l.LongTermPointEventClientConst.eventAssetFilePrefix + c;
      var p = l.LongTermPointEventClientConst.tabPrefix + c.toLowerCase();
      var h = l.LongTermPointEventClientConst.iconPrefix + c.toLowerCase();
      var g = l.LongTermPointEventClientConst.teaserPrefix + c;
      e.addEventAsset(n, c, h, p, g, r, u);
      this.loadAsset(g, g);
      this.loadAsset(p, d);
    }
  };
  OpenLongTermPointEventDialogCommand.prototype.loadSeasonAssets = function (e) {
    var t = l.LongTermPointEventClientConst.SEASON_PREFIX + e.eventVO.skin.assetName + l.LongTermPointEventClientConst.SEASON_SUFFIX;
    var i = t;
    e.seasonAssetName = i;
    e.seasonClassName = t;
    this.loadAsset(t, i);
  };
  return OpenLongTermPointEventDialogCommand;
}(require("./1061.js").OpenDialogWithAdditionalExternalAssetsCommand);
exports.OpenLongTermPointEventDialogCommand = d;
var p = require("./9.js");
var h = require("./3787.js");
var g = require("./1786.js");
o.classImplementsInterfaces(d, "ISimpleCommand");