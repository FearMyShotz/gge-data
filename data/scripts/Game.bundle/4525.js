Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Event;
var o = function () {
  function TreasureMapLoader() {
    this._treasureMapLoaded = false;
    this._treasureMapFrameLoaded = false;
    this._shouldLoadFrame = true;
  }
  TreasureMapLoader.prototype.loadTreasureMapAssets = function (e, t, i, n) {
    var o = this;
    this._shouldLoadFrame = n;
    l.CommandController.instance.executeCommand(s.IngameClientCommands.SWITCH_KINGDOM_COMMAND, u.WorldClassic.KINGDOM_ID);
    this._treasureMapLoadedFunction = e;
    if (this._treasureMapLoaded && this._treasureMapFrameLoaded) {
      this.triggerCallback();
    } else if (i) {
      r.loadAssets(i, r.AssetLoadingFlowType.PARALLEL).then(function (e) {
        o.loadMainTreasureMap(t, n);
      }).catch(function (e) {
        return a.warn("failed to load treasure map assets", e);
      });
    } else {
      this.loadMainTreasureMap(t, n);
    }
  };
  TreasureMapLoader.prototype.loadMainTreasureMap = function (e, t) {
    var i = r.BasicModel.basicLoaderData.loadVersionedItemAsset("Event" + e + "TreasureMap");
    if (i._isLoaded) {
      this.onTreasureMapLibLoaded(null);
    } else {
      i.addEventListener(n.COMPLETE, this.bindFunction(this.onTreasureMapLibLoaded));
    }
    if (t) {
      var o = r.BasicModel.basicLoaderData.loadVersionedItemAsset("Event" + e + "TreasuremapFrame");
      if (o._isLoaded) {
        this.onTreasureMapFrameLoaded(null);
      } else {
        o.addEventListener(n.COMPLETE, this.bindFunction(this.onTreasureMapFrameLoaded));
      }
    } else {
      this.onTreasureMapFrameLoaded(null);
    }
    r.BasicModel.basicLoaderData.assetLoader.start(c.GoodgameBitmapEngine.numConnections);
  };
  TreasureMapLoader.prototype.onTreasureMapLibLoaded = function (e) {
    this._treasureMapLoaded = true;
    this.triggerCallback();
  };
  TreasureMapLoader.prototype.onTreasureMapFrameLoaded = function (e) {
    this._treasureMapFrameLoaded = true;
    this.triggerCallback();
  };
  TreasureMapLoader.prototype.triggerCallback = function () {
    if (this.isLoaded()) {
      if (this._treasureMapLoadedFunction) {
        this._treasureMapLoadedFunction();
      }
      this._treasureMapLoadedFunction = null;
    }
  };
  TreasureMapLoader.prototype.isLoaded = function () {
    return this._treasureMapLoaded && this._shouldLoadFrame && this._treasureMapFrameLoaded || this._treasureMapLoaded && !this._shouldLoadFrame;
  };
  return TreasureMapLoader;
}();
exports.TreasureMapLoader = o;
var a = require("./2.js");
var s = require("./29.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./5.js");