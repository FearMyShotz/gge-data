Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function FactionStorageBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionStorageBuildingVO, e);
  return FactionStorageBuildingVO;
}(require("./640.js").StorageBuildingVO);
exports.FactionStorageBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO");