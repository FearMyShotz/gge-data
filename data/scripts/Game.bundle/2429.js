Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ButtonDeleteAllianceBookmarkComponent(e) {
    this._button = e;
    u.ButtonHelper.initBasicButton(this._button);
  }
  ButtonDeleteAllianceBookmarkComponent.prototype.init = function (e) {
    this._bookmark = e;
    var t = e.creatorPlayerID == s.CastleModel.userData.playerID;
    var i = l.int(s.CastleModel.otherPlayerData.getOwnInfoVO().allianceRank);
    var n = s.CastleModel.allianceData.hasRight(i, r.AllianceConst.RIGHT_MANAGE_BOOKMARKS);
    u.ButtonHelper.enableButton(this._button, t || n);
    if (u.ButtonHelper.isButtonEnabled(this._button)) {
      this._button.toolTipText = "Bookmarks_Menu_eraseBookmark_tooltip";
    } else {
      this._button.toolTipText = "dialog_unavailable_onlyForGenerals_tooltip";
    }
  };
  ButtonDeleteAllianceBookmarkComponent.prototype.onClick = function () {
    o.CastleDialogHandler.getInstance().registerDefaultDialogs(a.CastleDeleteAllianceBookmarkDialog, new c.CastleBookmarkPasserProperties(this._bookmark));
  };
  ButtonDeleteAllianceBookmarkComponent.prototype.destroy = function () {
    this._bookmark = null;
  };
  return ButtonDeleteAllianceBookmarkComponent;
}();
exports.ButtonDeleteAllianceBookmarkComponent = n;
var o = require("./9.js");
var a = require("./2430.js");
var s = require("./4.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./522.js");
var u = require("./8.js");