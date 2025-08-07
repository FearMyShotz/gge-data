Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ConstructionItemsActionProperties(t, i, n, o, a = -1) {
    var s = e.call(this) || this;
    s.lostAndFoundID = 0;
    s._constructionItemVO = t;
    s._slotVO = i;
    s._buildingVO = n;
    s._hideCallback = o;
    s.lostAndFoundID = a;
    return s;
  }
  n.__extends(ConstructionItemsActionProperties, e);
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "buildingVO", {
    get: function () {
      return this._buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "constructionItemVO", {
    get: function () {
      return this._constructionItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsActionProperties.prototype, "hideCallback", {
    get: function () {
      return this._hideCallback;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemsActionProperties;
}(require("./2.js").BasicProperties);
exports.ConstructionItemsActionProperties = o;