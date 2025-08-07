Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function EventPackageCategoryFilterRelationVO() {}
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "relationID", {
    get: function () {
      return this._relationID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "categoryID", {
    get: function () {
      return this._categoryID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "filterID", {
    get: function () {
      return this._filterID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "subFilterID", {
    get: function () {
      return this._subFilterID;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageCategoryFilterRelationVO.prototype.fillFromParamXML = function (e) {
    this._relationID = parseInt(n.CastleXMLUtils.getValueOrDefault("relationID", e, "-1", true));
    this._categoryID = parseInt(n.CastleXMLUtils.getValueOrDefault("categoryID", e, "-1", true));
    this._filterID = parseInt(n.CastleXMLUtils.getValueOrDefault("filterID", e, "-1", true));
    this._subFilterID = parseInt(n.CastleXMLUtils.getValueOrDefault("subFilterID", e, "-1", false));
  };
  return EventPackageCategoryFilterRelationVO;
}();
exports.EventPackageCategoryFilterRelationVO = o;