Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./60.js");
var r = require("./4.js");
var l = require("./226.js");
var c = function () {
  function OfferDescriptionVisualInterfaceButton() {
    this._panelType = 0;
    this._isVisible = false;
    this._offerStyle = 0;
    this._hiddenByABTest = false;
  }
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "name", {
    get: function () {
      return s.ClientConstOffer.OFFER_VISUAL_INTERFACE_BUTTON;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.prototype.registerVisualParameter = function (e) {
    e.addEntry(this.name, this);
  };
  OfferDescriptionVisualInterfaceButton.prototype.parseFromObjectParam = function (e) {
    this._buttonType = e.BT;
    this._panelType = a.int(e.PT);
    this._tooltipId = e.TID;
    this._offerStyle = e.OS ? 1 : 0;
    this._isVisible = false;
  };
  OfferDescriptionVisualInterfaceButton.prototype.execute = function (e) {
    if (this._offerStyle && this._offerStyle == OfferDescriptionVisualInterfaceButton.OFFER_STYLE_OPEN_EMAIL_TRIGGER && e.offerState === l.PrivateOfferStateEnum.QUEST_STARTED) {
      return false;
    }
    if (e.getAdditionalComponentByName(s.ClientConstOffer.OFFER_ADDITIONAL_PRIME_SALE_SKIP) && !r.CastleModel.skipDiscountData.isBestOfferSoFar(e)) {
      return true;
    }
    if (e.offerState === l.PrivateOfferStateEnum.QUEST_STARTED || e.offerState === l.PrivateOfferStateEnum.QUEST_PENDING || e.offerState === l.PrivateOfferStateEnum.OFFER_READY || e.offerState === l.PrivateOfferStateEnum.OFFER_PENDING) {
      if (!this._isVisible) {
        var t = n.castAs(u.CastleLayoutManager.getInstance().getPanel(d.CastleStatusPanel), "CastleStatusPanel");
        if (!t) {
          console.warn("Can not add icon because status panel not there yet!");
          return false;
        }
        this._statusIcon = new p.StatusIconPrivateOffer(this._buttonType, e, this._tooltipId, this._panelType);
        if (this._statusIcon) {
          t.addStatusIcon(this._panelType, this._statusIcon);
          this._isVisible = true;
        }
      }
    } else if (this._isVisible) {
      var i = n.castAs(u.CastleLayoutManager.getInstance().getPanel(d.CastleStatusPanel), "CastleStatusPanel");
      if (i && this._statusIcon) {
        if (this._statusIcon) {
          this._statusIcon.hide();
          i.removeStatusIcon(this._panelType, this._statusIcon);
          this._statusIcon.dispose();
        }
        this._isVisible = false;
      }
    }
    if (this._hiddenByABTest) {
      if (this._statusIcon) {
        this._statusIcon.hide();
      }
      this._isVisible = false;
    }
    return true;
  };
  OfferDescriptionVisualInterfaceButton.prototype.toExecuteInState = function (e) {
    return true;
  };
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "hiddenByABTest", {
    get: function () {
      return this._hiddenByABTest;
    },
    set: function (e) {
      this._hiddenByABTest = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OfferDescriptionVisualInterfaceButton.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  OfferDescriptionVisualInterfaceButton.__initialize_static_members = function () {
    OfferDescriptionVisualInterfaceButton.OFFER_STYLE_OPEN_EMAIL_TRIGGER = 1;
  };
  return OfferDescriptionVisualInterfaceButton;
}();
exports.OfferDescriptionVisualInterfaceButton = c;
var u = require("./17.js");
var d = require("./472.js");
var p = require("./5330.js");
o.classImplementsInterfaces(c, "IOfferDescriptionVisualParameter");
c.__initialize_static_members();