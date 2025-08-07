Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./18.js");
var o = function () {
  function CastleAdvancedFightScreenConnectorHandler(e, t, i, n, o = null) {
    this._connectorType = 0;
    this._displayType = 0;
    this._fightItemContainer = e;
    this._connectors = t;
    this._connectorType = i;
    this._displayType = n;
    this._fightItemVO = o;
  }
  CastleAdvancedFightScreenConnectorHandler.prototype.show = function () {
    this.visible(true);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.reset = function () {
    this.visible(false);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.displayComponent = function (e) {
    switch (this.connectorType) {
      case CastleAdvancedFightScreenConnectorHandler.UNITRIGHT:
      case CastleAdvancedFightScreenConnectorHandler.UNITFRONT:
      case CastleAdvancedFightScreenConnectorHandler.UNITLEFT:
        e.castleadvancedTroopSelection.showUnitList(e.getFilteredArray(a.CastleFightDialog.SHOP_CATEGORY_UNITS), this._fightItemContainer, e.sourceArea, e, this.getFlankTypeByCurrentConnectorType(), this._fightItemVO);
        break;
      case CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT:
      case CastleAdvancedFightScreenConnectorHandler.TOOLFRONT:
      case CastleAdvancedFightScreenConnectorHandler.TOOLLEFT:
        e.castleadvancedTroopSelection.showToolList(s.instanceOfClass(e, "CastleDefenceDialog") ? e.getWallAndGateShopArray() : e.getFilteredArray(a.CastleFightDialog.SHOP_CATEGORY_TOOLS), this._fightItemContainer, e.sourceArea, e, this.getFlankTypeByCurrentConnectorType(), this._fightItemVO);
    }
    if (e.castleadvancedTroopSelection.isListEmpty()) {
      this.hideAll(e);
    } else {
      e.castleLayer.doCache();
      e.castleLayer.mouseEnabled = false;
    }
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.getFlankTypeByCurrentConnectorType = function () {
    switch (this.connectorType) {
      case CastleAdvancedFightScreenConnectorHandler.TOOLLEFT:
      case CastleAdvancedFightScreenConnectorHandler.UNITLEFT:
        return n.ClientConstCastle.FLANK_LEFT;
      case CastleAdvancedFightScreenConnectorHandler.TOOLFRONT:
      case CastleAdvancedFightScreenConnectorHandler.UNITFRONT:
        return n.ClientConstCastle.FLANK_MIDDLE;
      case CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT:
      case CastleAdvancedFightScreenConnectorHandler.UNITRIGHT:
        return n.ClientConstCastle.FLANK_RIGHT;
      default:
        return -1;
    }
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.hideAll = function (e) {
    this.reset();
    this.hideComponent(e);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.hideComponent = function (e) {
    e.castleadvancedTroopSelection.hide();
    r.CastleMovieClipHelper.uncacheSafe(e.castleLayer);
    e.castleLayer.mouseEnabled = true;
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.visible = function (e) {
    this._fightItemContainer.highlighted = e;
    this.updateConnectorsVisibility(e);
  };
  CastleAdvancedFightScreenConnectorHandler.prototype.updateConnectorsVisibility = function (e) {
    for (var t = 0; t < this._connectors.length; t++) {
      this._connectors[t].visible = e;
    }
  };
  Object.defineProperty(CastleAdvancedFightScreenConnectorHandler.prototype, "connectors", {
    get: function () {
      return this._connectors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedFightScreenConnectorHandler.prototype, "connectorType", {
    get: function () {
      return this._connectorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedFightScreenConnectorHandler.prototype, "isVisible", {
    get: function () {
      var e = true;
      if (this.connectors != null) {
        for (var t = 0, i = this.connectors; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            if (!n.visible) {
              e = false;
            }
          }
        }
      }
      return e && this._fightItemContainer.highlighted;
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedFightScreenConnectorHandler.TOOLLEFT = 1;
  CastleAdvancedFightScreenConnectorHandler.TOOLRIGHT = 2;
  CastleAdvancedFightScreenConnectorHandler.TOOLFRONT = 3;
  CastleAdvancedFightScreenConnectorHandler.UNITLEFT = 4;
  CastleAdvancedFightScreenConnectorHandler.UNITRIGHT = 5;
  CastleAdvancedFightScreenConnectorHandler.UNITFRONT = 6;
  return CastleAdvancedFightScreenConnectorHandler;
}();
exports.CastleAdvancedFightScreenConnectorHandler = o;
var a = require("./376.js");
var s = require("./1.js");
var r = require("./41.js");