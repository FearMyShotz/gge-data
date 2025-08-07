Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleExternalStandardOKDialogProperties(t = "dialog_privateOffer_multiChest_reward_title", i = "dialog_privateOffer_multiChest_reward_desc", n = CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION, o = null, a = null) {
    var s = this;
    s._decorationState = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this)._titleTextID = t;
    s._descTextID = i;
    s._decorationState = n;
    s._okBtnCallback = o;
    s._descTextIDParams = a;
    return s;
  }
  n.__extends(CastleExternalStandardOKDialogProperties, e);
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "titleTextID", {
    get: function () {
      return this._titleTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "descTextID", {
    get: function () {
      return this._descTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "decorationState", {
    get: function () {
      return this._decorationState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "okBtnCallback", {
    get: function () {
      return this._okBtnCallback;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExternalStandardOKDialogProperties.prototype, "descTextIDParams", {
    get: function () {
      return this._descTextIDParams;
    },
    enumerable: true,
    configurable: true
  });
  CastleExternalStandardOKDialogProperties.__initialize_static_members = function () {
    CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION = 0;
    CastleExternalStandardOKDialogProperties.ERROR_RED_DECORATION = 1;
  };
  return CastleExternalStandardOKDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleExternalStandardOKDialogProperties = o;
o.__initialize_static_members();