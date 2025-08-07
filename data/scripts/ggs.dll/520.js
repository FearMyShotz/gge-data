Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function InterfaceVersions() {
    this.assets = {};
    if (InterfaceVersions._instance) {
      throw new Error("use InterfaceVersions.instance instead.");
    }
  }
  Object.defineProperty(InterfaceVersions, "instance", {
    get: function () {
      if (!InterfaceVersions._instance) {
        this._instance = new InterfaceVersions();
        this._instance.fill();
      }
      return this._instance;
    },
    enumerable: true,
    configurable: true
  });
  InterfaceVersions.prototype.getPath = function (e) {
    return this.assets[e];
  };
  InterfaceVersions.prototype.fill = function () {
    this.assets.CastleInterfaceElements = "interface/CastleInterfaceElements/CastleInterfaceElements--1747745314190";
    this.assets.CastleStartscreen4 = "interface/CastleStartscreen4/CastleStartscreen4--1750923294631";
    this.assets.CastleStartscreen3 = "interface/CastleStartscreen3/CastleStartscreen3--1693828816067";
    this.assets.CastleStartscreen2 = "interface/CastleStartscreen2/CastleStartscreen2--1679043072895";
    this.assets.CastleStartscreen_O = "interface/CastleStartscreen_O/CastleStartscreen_O--1651238657710";
    this.assets.CastleInterfaceElements_Icons = "interface/CastleInterfaceElements_Icons/CastleInterfaceElements_Icons--1741600114432";
    this.assets.CastleInterfaceElements_Shared = "interface/CastleInterfaceElements_Shared/CastleInterfaceElements_Shared--1710420450312";
    this.assets.CastleStartscreen = "interface/CastleStartscreen/CastleStartscreen--1645175515102";
    this.assets.KoreaTableCell = "interface/fonts/korea/KoreaTableCell/KoreaTableCell--1640007345013";
  };
  return InterfaceVersions;
}();
exports.InterfaceVersions = i;