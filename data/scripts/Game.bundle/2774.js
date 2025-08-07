Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./60.js");
var c = require("./4.js");
var u = function (e) {
  function IsoDataObjectGroupTreasureChest() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupTreasureChest, e);
  IsoDataObjectGroupTreasureChest.prototype.initObjects = function () {
    this.resetList();
    if (this.isoData.areaData.isMyHomeCastle) {
      var e = c.CastleModel.privateOfferData.getPrivateOffersWithVisualParamter(l.ClientConstOffer.OFFER_VISUAL_TREASURE_CHEST);
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = n.getDescriptionByName(l.ClientConstOffer.VISUAL_COMPONENT_CONTAINER).visuals.get(l.ClientConstOffer.OFFER_VISUAL_TREASURE_CHEST);
            if (o.isVisible && o.isTreasureChestVisibleByArea(this.isoData.areaData.areaInfo.areaType)) {
              var s = new (a.getDefinitionByName(o.objectType + r.ClientConstCastle.GROUP_SURROUNDINGS + "VO"))();
              this.initObjectVO(s, n);
              this._list.push(s);
            }
          }
        }
      }
    }
  };
  IsoDataObjectGroupTreasureChest.prototype.initObjectVO = function (e, t) {
    e.offerVO = t;
    e.init(this.isoData);
    var i = s.int(o.MathBase.random(0, 3, true));
    var n = this.isoData.areaData.isMyHomeCastle ? r.ClientConstCastle.TREASURECHEST_POSITIONS_HOME_CASTLE : r.ClientConstCastle.TREASURECHEST_POSITIONS;
    e.posOffset.x = n[i][0];
    e.posOffset.y = n[i][1];
    e.updateData();
  };
  return IsoDataObjectGroupTreasureChest;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupTreasureChest = u;