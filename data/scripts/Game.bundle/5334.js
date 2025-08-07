Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./341.js");
var s = require("./226.js");
var r = function () {
  function OfferDescriptionVisualQuestAcceptDialog() {
    this._autoShow = false;
  }
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestAcceptDialog.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
    if (e.AS != null) {
      this._autoShow = !!e.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.execute = function (e) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(this._dialogName, new a.CastlePrivateOfferDialogProperties(e));
    return true;
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.toExecuteInState = function (e) {
    return e === s.PrivateOfferStateEnum.QUEST_PENDING;
  };
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualQuestAcceptDialog;
}();
exports.OfferDescriptionVisualQuestAcceptDialog = r;
var l = require("./9.js");
n.classImplementsInterfaces(r, "IOfferDescriptionVisualParameter");