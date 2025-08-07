Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./24.js");
var u = function () {
  function ColossusEventDelegator(e) {
    this._eventID = 0;
    this._eventID = e;
  }
  ColossusEventDelegator.prototype.showLoaded = function (e) {
    var t;
    var i;
    switch (this._eventID) {
      case r.EventConst.EVENTTYPE_COLOSSUS:
        t = "dialog_eventColossus_copytext";
        i = "CastleColossusChar";
        break;
      case r.EventConst.EVENTTYPE_HORSE_COLOSSUS:
        t = "dialog_eventColossusrider_copytext";
        i = "CastleColossusRiderChar";
        break;
      case r.EventConst.EVENTTYPE_COIN_COLOSSUS:
        t = "dialog_eventCoinColossus_copytext";
        i = "CastleColossusCoinChar";
    }
    this.textFieldManager.registerTextField(e.txt_copy_colossus, new l.LocalizedTextVO(t));
    a.MovieClipHelper.clearMovieClip(e.placeHolder);
    var o = new c.CastleGoodgameExternalClip(i, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false);
    e.placeHolder.addChild(o.asDisplayObject());
  };
  Object.defineProperty(ColossusEventDelegator.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ColossusEventDelegator;
}();
exports.ColossusEventDelegator = u;
s.classImplementsInterfaces(u, "IEventDelegator");