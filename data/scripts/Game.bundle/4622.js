Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./15.js");
var o = require("./383.js");
var a = require("./1309.js");
var s = require("./4623.js");
var r = function () {
  function AutoSellVO() {
    this._equipments = new a.AutoSellEquipmentsVO();
    this._gems = new s.AutoSellGemsVO();
  }
  AutoSellVO.prototype.parseASG = function (e) {
    this.equipments.parseASG(e.ECS);
    this.gems.parseASG(e.GCS);
  };
  AutoSellVO.prototype.sendConfigToServer = function () {
    this.equipments.sendConfigToServer();
    this.gems.sendConfigToServer();
  };
  AutoSellVO.prototype.applyNewConfig = function (e) {
    this.equipments.copy(e.equipments);
    this.gems.copy(e.gems);
    n.CastleBasicController.getInstance().dispatchEvent(new o.SubscriptionEvent(o.SubscriptionEvent.ON_AUTO_SELL_CONFIG_UPDATED));
  };
  AutoSellVO.prototype.clone = function () {
    var e = new AutoSellVO();
    e._equipments.copy(this._equipments);
    e._gems.copy(this._gems);
    return e;
  };
  AutoSellVO.prototype.isAnyEnabled = function () {
    return this._equipments.isAnyActive() || this._gems.isAnyActive();
  };
  Object.defineProperty(AutoSellVO.prototype, "equipments", {
    get: function () {
      return this._equipments;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoSellVO.prototype, "gems", {
    get: function () {
      return this._gems;
    },
    enumerable: true,
    configurable: true
  });
  return AutoSellVO;
}();
exports.AutoSellVO = r;