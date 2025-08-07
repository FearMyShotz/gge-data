Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ButtonJumpToAllianceBookmark(e) {
    this._button = e;
  }
  ButtonJumpToAllianceBookmark.prototype.init = function (e) {
    this._wmoVO = e;
    this.controller.addEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    d.ButtonHelper.initBasicButton(this._button);
    if (this._button.txt_label) {
      this.textFieldManager.registerTextField(this._button.txt_label, new l.LocalizedTextVO("Bookmarks_Menu_jumpTo_copy")).autoFitToBounds = true;
    }
    d.ButtonHelper.enableButton(this._button, this.isEnabled);
    this._button.toolTipText = this.toolTipText;
  };
  ButtonJumpToAllianceBookmark.prototype.onLevelUp = function (e) {
    d.ButtonHelper.enableButton(this._button, this.isEnabled);
    this._button.toolTipText = this.toolTipText;
  };
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "isEnabled", {
    get: function () {
      var e = this._wmoVO.kingdomID;
      return u.CastleModel.userData.userLevel >= u.CastleModel.kingdomData.getKingdomVOByID(e).minLevel && u.CastleModel.userData.castleList.hasCastleInKingdom(e) && !u.CastleModel.tutorialData.isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "toolTipText", {
    get: function () {
      var e = this._wmoVO.kingdomID;
      if (u.CastleModel.userData.userLevel >= u.CastleModel.kingdomData.getKingdomVOByID(e).minLevel) {
        if (u.CastleModel.userData.castleList.hasCastleInKingdom(this._wmoVO.kingdomID)) {
          return "";
        } else {
          return "dialog_kingdom_notYetAvailable";
        }
      } else {
        return "errorCode_12";
      }
    },
    enumerable: true,
    configurable: true
  });
  ButtonJumpToAllianceBookmark.prototype.onClick = function () {
    s.CommandController.instance.executeCommand(o.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this._wmoVO);
  };
  ButtonJumpToAllianceBookmark.prototype.destroy = function () {
    this.controller.removeEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this._wmoVO = null;
  };
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "controller", {
    get: function () {
      return c.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonJumpToAllianceBookmark.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ButtonJumpToAllianceBookmark;
}();
exports.ButtonJumpToAllianceBookmark = n;
var o = require("./29.js");
var a = require("./32.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./8.js");