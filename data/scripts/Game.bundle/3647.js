Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleSoftChestVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSoftChestVO, e);
  Object.defineProperty(CastleSoftChestVO.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Currency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "currency", {
    get: function () {
      return s.CollectableEnum.C1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_pay", {
    get: function () {
      return "dialog_season_start_payC1_02";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_plundermeister", {
    get: function () {
      return "dialog_privateOffer_softChest_descripton";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_general", {
    get: function () {
      return "dialog_privateOffer_softChest_descripton1";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoftChestVO.prototype, "textId_savings", {
    get: function () {
      return "dialog_privateOffer_softChest_rubySave";
    },
    enumerable: true,
    configurable: true
  });
  return CastleSoftChestVO;
}(require("./1741.js").ACastleChestVO);
exports.CastleSoftChestVO = a;
var s = require("./12.js");
o.classImplementsInterfaces(a, "ICastleChestVO");