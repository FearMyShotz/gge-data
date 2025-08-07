Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function InfoCatalogTopicVO(e, t, i = null, n = null) {
    this._topicType = e;
    this._textId = t;
    this._textReplacements = i;
    this._data = n;
  }
  Object.defineProperty(InfoCatalogTopicVO.prototype, "topicType", {
    get: function () {
      return this._topicType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicVO.prototype, "textId", {
    get: function () {
      return this._textId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicVO.prototype, "textReplacements", {
    get: function () {
      return this._textReplacements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfoCatalogTopicVO.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  return InfoCatalogTopicVO;
}();
exports.InfoCatalogTopicVO = n;