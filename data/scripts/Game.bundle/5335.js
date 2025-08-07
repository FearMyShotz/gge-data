Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./60.js");
var a = require("./341.js");
var s = require("./295.js");
var r = require("./226.js");
var l = function () {
  function OfferDescriptionVisualQuestDialog() {
    this._autoShow = false;
    this._hasBeenAutoShown = false;
  }
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "name", {
    get: function () {
      return o.ClientConstOffer.OFFER_VISUAL_QUEST_DIALOG;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualQuestDialog.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualQuestDialog.prototype.parseFromObjectParam = function (e) {
    this._dialogName = e.DN;
    if (e.AS != null) {
      this._autoShow = !!e.AS;
    } else {
      this._autoShow = true;
    }
    if (e.DC != null) {
      this._dialogCustomization = e.DC;
    }
  };
  OfferDescriptionVisualQuestDialog.prototype.execute = function (e) {
    if (this._autoShow && !this._hasBeenAutoShown) {
      var t = new s.PaymentPopupDialogInfoVO(this._dialogName, new a.CastlePrivateOfferDialogProperties(e), e.getPopupType(), true);
      var i = u.CastlePrivateOfferDialogCreator.getPrivateOfferDialogClass(this._dialogName);
      if (i) {
        c.CastleDialogHandler.getInstance().registerDialogsWithType(i, t.properties, t.blockDialogs, t.priority, 0, t.type);
      }
      this._hasBeenAutoShown = true;
    }
    return true;
  };
  OfferDescriptionVisualQuestDialog.prototype.toExecuteInState = function (e) {
    return e === r.PrivateOfferStateEnum.QUEST_STARTED;
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
  Object.defineProperty(OfferDescriptionVisualQuestDialog.prototype, "dialogCustomization", {
    get: function () {
      return this._dialogCustomization;
    },
    enumerable: true,
    configurable: true
  });
  return OfferDescriptionVisualQuestDialog;
}();
exports.OfferDescriptionVisualQuestDialog = l;
var c = require("./9.js");
var u = require("./665.js");
n.classImplementsInterfaces(l, "IOfferDescriptionVisualParameter");