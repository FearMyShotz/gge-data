Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleWhaleChestVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleWhaleChestVO, e);
  Object.defineProperty(CastleWhaleChestVO.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_C2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestVO.prototype, "currency", {
    get: function () {
      return s.CollectableEnum.C2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestVO.prototype, "textId_pay", {
    get: function () {
      return "dialog_season_start_payC2_02";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestVO.prototype, "textId_plundermeister", {
    get: function () {
      return "dialog_privateOffer_whaleChest_descripton";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestVO.prototype, "textId_general", {
    get: function () {
      return "dialog_privateOffer_whaleChest_descripton1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestVO.prototype, "textId_savings", {
    get: function () {
      return "dialog_privateOffer_whaleChest_rubySave";
    },
    enumerable: true,
    configurable: true
  });
  return CastleWhaleChestVO;
}(require("./1741.js").ACastleChestVO);
exports.CastleWhaleChestVO = a;
var s = require("./12.js");
o.classImplementsInterfaces(a, "ICastleChestVO");