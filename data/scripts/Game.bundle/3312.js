Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./24.js");
var l = function (e) {
  function CollectableItemAllianceCrestLayoutVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemAllianceCrestLayoutVE, e);
  CollectableItemAllianceCrestLayoutVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
  };
  CollectableItemAllianceCrestLayoutVE.prototype.iconCreate = function () {
    this.dispCreator.addClip(new r.CastleGoodgameExternalClip(this.getAssetName(), o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getAssetName())));
  };
  CollectableItemAllianceCrestLayoutVE.prototype.tooltipCreate = function () {
    var e = o.TimeStringHelper.getTimeToString(this.collVO.durationInSeconds, o.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, s.Localize.text);
    return s.Localize.text("allianceCoat_Layout_name_" + this.collVO.layoutVO.allianceCoatLayoutID) + "\n" + e;
  };
  Object.defineProperty(CollectableItemAllianceCrestLayoutVE.prototype, "collVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceCrestLayoutVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  CollectableItemAllianceCrestLayoutVE.prototype.getAssetName = function () {
    return "Collectable_AllianceLayout_" + this.collVO.layoutVO.allianceCoatLayoutID;
  };
  CollectableItemAllianceCrestLayoutVE.prototype.textfieldUpdate = function () {
    this.textfieldSetText(o.TimeStringHelper.getTimeToString(this.collVO.durationInSeconds, o.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, s.Localize.text));
  };
  CollectableItemAllianceCrestLayoutVE.prototype.textfieldSetTextAsNumber = function (e) {
    this.textfieldSetText(o.TimeStringHelper.getTimeToString(this.collVO.durationInSeconds, o.TimeStringHelper.ONE_TIME_FORMAT_ADVANCED, s.Localize.text));
  };
  return CollectableItemAllianceCrestLayoutVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemAllianceCrestLayoutVE = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");