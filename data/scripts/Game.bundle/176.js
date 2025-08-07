Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleDataHolder() {
    this.showObjectIDs = false;
    this.showEffectTypeIDs = false;
    this.cheatShowConstructionItemIDs = false;
    this.gbdParsed = false;
    this.requestUptOnWorldmapSwitch = false;
  }
  Object.defineProperty(CastleDataHolder, "instance", {
    get: function () {
      if (CastleDataHolder._instance == null) {
        CastleDataHolder._instance = new CastleDataHolder();
      }
      return CastleDataHolder._instance;
    },
    enumerable: true,
    configurable: true
  });
  return CastleDataHolder;
}();
exports.CastleDataHolder = n;