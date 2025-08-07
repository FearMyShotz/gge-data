Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = require("./86.js");
var s = require("./4.js");
var r = require("./52.js");
var l = require("./3292.js");
var c = function () {
  function CraftingMaterialBagVO(e = null) {
    this._bagID = 0;
    this._rareness = 0;
    this._size = 0;
    this._focusedMaterialID = 0;
    if (e) {
      this.fillFromParamXML(e);
    }
  }
  CraftingMaterialBagVO.prototype.fillFromParamXML = function (e) {
    this._bagID = parseInt(o.CastleXMLUtils.getValueOrDefault("bagID", e, "0"));
    this._rareness = parseInt(o.CastleXMLUtils.getValueOrDefault("rareness", e, "0"));
    this._size = parseInt(o.CastleXMLUtils.getValueOrDefault("size", e, "0"));
    this._focusedMaterialID = parseInt(o.CastleXMLUtils.getValueOrDefault("focusedMaterialID", e, "0"));
    this._content = [];
    for (var t = 0, i = s.CastleModel.currencyData.getXmlCurrenciesByIdRange(s.CastleModel.currencyData.getCurrencyRangeByID(r.ClientConstCurrency.ID_RANGE_CRAFTING_MATERIAL)); t < i.length; t++) {
      var n = i[t];
      var c = parseInt(o.CastleXMLUtils.getValueOrDefault(a.ClientConstCollectable.XML_PREFIX_ADD + n.name, e, "0"));
      var u = parseInt(o.CastleXMLUtils.getValueOrDefault("variable" + n.name, e, "0")) + c;
      if (c || u) {
        this._content.push(new l.CraftingMaterialBagContentVO(c, u, n));
        if (n.id == this._focusedMaterialID) {
          this._focusedMaterialContent = this._content[this._content.length - 1];
        }
      }
    }
    this._content.sort(this.bindFunction(this.sortContentByRareness));
    this.validate();
    this._color = [];
    this._color.push(CraftingMaterialBagVO.RARENESS_COLORS[this.rareness - 1]);
  };
  CraftingMaterialBagVO.prototype.validate = function () {
    if (this.focused && !this.focusedMaterialContent) {
      console.warn("bagID " + this.bagID + " has focusedMaterialID " + this._focusedMaterialID + " but does not contain materials of this type");
      this._focusedMaterialContent = new l.CraftingMaterialBagContentVO(0, 0, s.CastleModel.currencyData.getXmlCurrencyById(this._focusedMaterialID));
    }
    if (this.rareness > CraftingMaterialBagVO.RARENESS_COLORS.length) {
      console.warn("bagID " + this.bagID + " has invalid rareness " + this.rareness + ". Using max rareness " + CraftingMaterialBagVO.RARENESS_COLORS.length + " instead.");
      this._rareness = n.int(CraftingMaterialBagVO.RARENESS_COLORS.length);
    }
    if (this.focusedMaterialContent && this.focusedMaterialContent.craftingMaterial.rareness != this.rareness) {
      console.warn("bagID " + this.bagID + " has rareness " + this.rareness + " that doesn't match rareness " + this.focusedMaterialContent.craftingMaterial.rareness + " of its focused material. Using the material rareness instead.");
      this._rareness = n.int(this.focusedMaterialContent.craftingMaterial.rareness);
    }
  };
  CraftingMaterialBagVO.prototype.sortContentByRareness = function (e, t) {
    return n.int(t.craftingMaterial.rareness - e.craftingMaterial.rareness);
  };
  Object.defineProperty(CraftingMaterialBagVO.prototype, "bagID", {
    get: function () {
      return this._bagID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "rareness", {
    get: function () {
      return this._rareness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "size", {
    get: function () {
      return this._size;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "focused", {
    get: function () {
      return this._focusedMaterialID > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "focusedMaterialContent", {
    get: function () {
      return this._focusedMaterialContent;
    },
    enumerable: true,
    configurable: true
  });
  CraftingMaterialBagVO.prototype.getContent = function (e = true) {
    if (e) {
      return this._content.filter(this.bindFunction(this.getFillt));
    } else {
      return this._content;
    }
  };
  CraftingMaterialBagVO.prototype.getFillt = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return this._focusedMaterialContent != e;
  };
  Object.defineProperty(CraftingMaterialBagVO.prototype, "assetName", {
    get: function () {
      return "MaterialBag_" + this.size + (this.focused ? "_Focused" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "nameTextID", {
    get: function () {
      if (this.focused) {
        return "ciMaterialSack_" + CraftingMaterialBagVO.SIZE_NAMES[this.size - 1] + "_Focused";
      } else {
        return "ciMaterialSack_" + CraftingMaterialBagVO.SIZE_NAMES[this.size - 1] + "_" + CraftingMaterialBagVO.RARENESS_NAMES[this.rareness - 1];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "color", {
    get: function () {
      return this._color;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagVO.prototype, "minMaterials", {
    get: function () {
      var e = 0;
      if (this._content != null) {
        for (var t = 0, i = this._content; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e += n.minValue;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CraftingMaterialBagVO.__initialize_static_members = function () {
    CraftingMaterialBagVO.RARENESS_COLORS = [8816262, 6983196, 9058259, 15687936];
    CraftingMaterialBagVO.SIZE_NAMES = ["small", "medium", "large", "huge"];
    CraftingMaterialBagVO.RARENESS_NAMES = ["common", "rare", "epic", "legendary"];
  };
  return CraftingMaterialBagVO;
}();
exports.CraftingMaterialBagVO = c;
c.__initialize_static_members();