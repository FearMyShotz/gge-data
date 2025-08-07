Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./27.js");
var l = function (e) {
  function CollectableItemAllianceCrestLayoutVO(t = 0, i = 0) {
    var n = this;
    n._id = -1;
    n._durationInSeconds = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, 1) || this).id = t;
    n._durationInSeconds = i;
    return n;
  }
  n.__extends(CollectableItemAllianceCrestLayoutVO, e);
  CollectableItemAllianceCrestLayoutVO.prototype.parseServerObject = function (e) {
    this.id = e.ACLI;
    this._durationInSeconds = e.D;
  };
  CollectableItemAllianceCrestLayoutVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this._id = a.int(t[0]);
    this._durationInSeconds = a.int(t[1]);
  };
  CollectableItemAllianceCrestLayoutVO.prototype.updateLayoutVO = function () {
    this._layoutVO = s.CastleModel.allianceCrestData.getLayoutVOById(this._id);
  };
  CollectableItemAllianceCrestLayoutVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.id = this._id;
    t.durationInSeconds = this._durationInSeconds;
    return t;
  };
  CollectableItemAllianceCrestLayoutVO.prototype.isCombineAbleWith = function (e) {
    var t = e;
    return !!t && this._id == t.id;
  };
  CollectableItemAllianceCrestLayoutVO.prototype.combineWith = function (e) {
    if (this.isCombineAbleWith(e)) {
      var t = e;
      this._durationInSeconds += t.durationInSeconds;
    }
  };
  Object.defineProperty(CollectableItemAllianceCrestLayoutVO.prototype, "layoutVO", {
    get: function () {
      return this._layoutVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemAllianceCrestLayoutVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateLayoutVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemAllianceCrestLayoutVO.prototype, "durationInSeconds", {
    get: function () {
      return this._durationInSeconds;
    },
    set: function (e) {
      this._durationInSeconds = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceCrestLayoutVO.prototype.getDescriptionTextId = function () {
    var e = "";
    if (this.layoutVO.effects.length > 0) {
      for (var t = 0, i = this.layoutVO.effects; t < i.length; t++) {
        var n = i[t];
        if (e.length > 0) {
          e += "\n";
        }
        e += o.Localize.text("equip_effect_description_" + n.effect.name, n.effectValue.textReplacements);
      }
    }
    return o.Localize.text("dialog_CoARewardPopUp_desc") + "\n" + o.Localize.text("allianceCoat_Layout_desc", [e]) + "\n" + o.Localize.text("dialog_CoALayoutDuration_desc", [r.CastleTimeStringHelper.getFullTimeString(this.layoutVO.maxDuration)]);
  };
  CollectableItemAllianceCrestLayoutVO.prototype.getNameTextId = function () {
    return "allianceCoat_Layout_name_" + this._layoutVO.allianceCoatLayoutID;
  };
  CollectableItemAllianceCrestLayoutVO.__initialize_static_members = function () {
    CollectableItemAllianceCrestLayoutVO.SERVER_KEY = "ACL";
    CollectableItemAllianceCrestLayoutVO.XML_KEY = "allianceCoatLayout";
  };
  return CollectableItemAllianceCrestLayoutVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemAllianceCrestLayoutVO = l;
l.__initialize_static_members();