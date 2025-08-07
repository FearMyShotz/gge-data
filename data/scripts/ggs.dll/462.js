Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualQuestAcceptDialog(e, t = true) {
    this._autoShow = false;
    this._dialogName = e;
    this._autoShow = t;
  }
  Object.defineProperty(OfferDescriptionVisualQuestAcceptDialog.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_QUEST_ACCEPT_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestAcceptDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
    if (e.AS != null) {
      this._autoShow = e.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.execute = function (e) {
    return true;
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.toExecuteInState = function (e) {
    return e === a.PrivateOfferStateEnum.QUEST_PENDING;
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
  OfferDescriptionVisualQuestAcceptDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualQuestAcceptDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_VISUAL_ACCEPT_DIALOG";
  };
  return OfferDescriptionVisualQuestAcceptDialog;
}();
exports.OfferDescriptionVisualQuestAcceptDialog = s;