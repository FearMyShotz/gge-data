Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function MysteryBoxOpeningDialogProperties(t, i, n, o, a, s, r) {
    var l = e.call(this) || this;
    l._lootBoxVO = t;
    l._selectedKey = i;
    l._progressValue = n;
    l._oldProgressValue = o;
    l.barTimesFilled = a;
    l._rewards = s;
    l._rewardIds = r;
    return l;
  }
  n.__extends(MysteryBoxOpeningDialogProperties, e);
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "boxId", {
    get: function () {
      return this._lootBoxVO.lootBoxID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "boxRarity", {
    get: function () {
      return this._lootBoxVO.rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "boxName", {
    get: function () {
      return this._lootBoxVO.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "tombolaId", {
    get: function () {
      return this._lootBoxVO.lootBoxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "selectedKey", {
    get: function () {
      return this._selectedKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "progressValue", {
    get: function () {
      return this._progressValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "oldProgressValue", {
    get: function () {
      return this._oldProgressValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "rewards", {
    get: function () {
      return this._rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MysteryBoxOpeningDialogProperties.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  return MysteryBoxOpeningDialogProperties;
}(require("./2.js").BasicProperties);
exports.MysteryBoxOpeningDialogProperties = o;