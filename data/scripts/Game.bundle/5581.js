Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSagaMapNodeVO() {
    this._active = 0;
    this._sagaMapID = 0;
    this._level = 0;
    this._legendLevel = 0;
    this._highlight = 0;
  }
  CastleSagaMapNodeVO.prototype.parseXML = function (e) {
    this._active = parseInt(s.CastleXMLUtils.getValueOrDefault("active", e, "0"));
    this._sagaMapID = parseInt(e.sagamapID || "");
    this._level = parseInt(s.CastleXMLUtils.getValueOrDefault("level", e, "0"));
    this._legendLevel = parseInt(s.CastleXMLUtils.getValueOrDefault("legendlevel", e, "0"));
    this._highlight = parseInt(s.CastleXMLUtils.getValueOrDefault("highlight", e, "0"));
    this.parseElements(e.elements || "");
    this._highlightType = s.CastleXMLUtils.getValueOrDefault("highlightType", e, "");
  };
  CastleSagaMapNodeVO.prototype.parseElements = function (e) {
    this._unlocks = new o.CollectableList();
    if (e != "") {
      var t = e.split(",");
      if (t != null) {
        for (var i = 0, n = t; i < n.length; i++) {
          var s = n[i];
          if (s !== undefined) {
            var r = new a.CollectableItemUnlockVO();
            r.parseXmlObject(s);
            this._unlocks.addItem(r);
          }
        }
      }
    }
  };
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "active", {
    get: function () {
      return this._active;
    },
    enumerable: true,
    configurable: true
  });
  CastleSagaMapNodeVO.prototype.getId = function () {
    return this._sagaMapID;
  };
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "legendLevel", {
    get: function () {
      return this._legendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "highlight", {
    get: function () {
      return this._highlight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "highlightType", {
    get: function () {
      return this._highlightType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "unlocks", {
    get: function () {
      return this._unlocks;
    },
    enumerable: true,
    configurable: true
  });
  CastleSagaMapNodeVO.__initialize_static_members = function () {
    CastleSagaMapNodeVO.HIGHLIGHT_TYPE_NONE = "";
    CastleSagaMapNodeVO.HIGHLIGHT_TYPE_UNLOCK = "unlock";
    CastleSagaMapNodeVO.HIGHLIGHT_TYPE_REMINDER = "reminder";
  };
  return CastleSagaMapNodeVO;
}();
exports.CastleSagaMapNodeVO = n;
var o = require("./48.js");
var a = require("./1624.js");
var s = require("./22.js");
require("./1.js").classImplementsInterfaces(n, "ICastleXmlNode");
n.__initialize_static_members();