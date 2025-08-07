Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./22.js");
var a = require("./45.js");
var s = function () {
  function OfferDescriptionVisualQuestDialog(e, t = true) {
    this._dialogName = e;
    this._autoShow = t;
  }
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "name", {
    get: function () {
      return i.Constants_Offer.OFFER_VISUAL_QUEST_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
    if (e.AS != null) {
      this._autoShow = e.AS;
    } else {
      this._autoShow = true;
    }
  };
  OfferDescriptionVisualQuestDialog.prototype.execute = function (e) {
    this._autoShow;
    return true;
  };
  OfferDescriptionVisualQuestDialog.prototype.toExecuteInState = function (e) {
    return e === a.PrivateOfferStateEnum.QUEST_STARTED;
  };
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "autoShow", {
    get: function () {
      return this._autoShow;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "dialogName", {
    get: function () {
      return this._dialogName;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestDialog.prototype.dispose = function () {
    this._dialogName = null;
  };
  OfferDescriptionVisualQuestDialog.prototype.getCommandName = function () {
    return "PRIVATE_OFFER_QUEST_DIALOG";
  };
  return OfferDescriptionVisualQuestDialog;
}();
exports.OfferDescriptionVisualQuestDialog = s;