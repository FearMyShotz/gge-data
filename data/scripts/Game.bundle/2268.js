Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ABTest_FirstTimeChallengeCampVsIcon() {
    this.HIDE_CAMP = "hideCamp";
  }
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupTest = function (e) {
    this.setupPrivateOffers();
    if (this._allConcernedPrivateOffers != null) {
      for (var t = 0, i = this._allConcernedPrivateOffers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var s = n.getVisualComponentByName(o.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT);
          var r = n.getVisualComponentByName(o.ClientConstOffer.OFFER_VISUAL_INTERFACE_BUTTON);
          s.hiddenByABTest = a.CastleModel.userData.splitRunData.getBooleanParam(this.HIDE_CAMP);
          r.hiddenByABTest = a.CastleModel.userData.splitRunData.getBooleanParam("hideIcon");
          s.execute(n);
          r.execute(n);
        }
      }
    }
  };
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupPrivateOffers = function () {
    this.setupAllConcernedPrivateOfferIDs();
    this.setupAllConcernedPrivateOffers();
  };
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupAllConcernedPrivateOfferIDs = function () {
    var e = [];
    e.push(111);
    e.push(118);
    e.push(119);
    this._allConcernedPrivateOfferIDs = e;
    return e;
  };
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupAllConcernedPrivateOffers = function () {
    var e;
    this._allConcernedPrivateOffers = [];
    if (this._allConcernedPrivateOfferIDs != null) {
      for (var t = 0, i = this._allConcernedPrivateOfferIDs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (e = a.CastleModel.privateOfferData.getOfferById(n))) {
          this._allConcernedPrivateOffers.push(e);
        }
      }
    }
  };
  return ABTest_FirstTimeChallengeCampVsIcon;
}();
exports.ABTest_FirstTimeChallengeCampVsIcon = n;
var o = require("./60.js");
var a = require("./4.js");