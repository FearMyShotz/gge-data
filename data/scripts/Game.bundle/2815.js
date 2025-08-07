Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./84.js");
var a = function (e) {
  function IsoViewObjectGroupJudgements() {
    var t = this;
    t._spotContainers = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoViewObjectGroupJudgements, e);
  IsoViewObjectGroupJudgements.prototype.destroy = function () {
    this.resetSpots();
    e.prototype.destroy.call(this);
  };
  IsoViewObjectGroupJudgements.prototype.resetSpots = function () {
    if (this.spotContainers != null) {
      for (var e = 0, t = Array.from(this.spotContainers.values()); e < t.length; e++) {
        var i = t[e];
        this.destroyObject(i);
      }
    }
    this._spotContainers = new Map();
    this.isoRenderer.objects.invalidateCompleteObjectsList();
  };
  IsoViewObjectGroupJudgements.prototype.initObjects = function () {
    this.resetList();
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.judgements.list, this.list);
    this.resetSpots();
    this.initSpots();
    this.updateSpots();
    this.assignJudgementEventsToSpots();
  };
  IsoViewObjectGroupJudgements.prototype.initSpots = function () {
    var e;
    for (var t = o.CastleEnum.getEnumListByClass(s.JudgementSpotEnum), i = 0; i < t.length; i++) {
      e = t[i];
      var n = this.createSpotVE(e);
      if (n) {
        this.addObjectToLayer(n);
      }
      this.spotContainers.set(e, n);
    }
    this.isoRenderer.objects.invalidateCompleteObjectsList();
  };
  IsoViewObjectGroupJudgements.prototype.assignJudgementEventsToSpots = function () {
    if (this.list != null) {
      for (var e = 0, t = this.list; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = i.judgementEventVO.spotType;
          var o = this.spotContainers.get(n);
          if (o) {
            o.elementContainer.addChild(i.elementContainer);
          }
        }
      }
    }
  };
  IsoViewObjectGroupJudgements.prototype.updateSpots = function () {
    for (var e = 0, t = o.CastleEnum.getEnumListByClass(s.JudgementSpotEnum); e < t.length; e++) {
      var i = t[e];
      var n = this.spotContainers.get(i);
      if (n) {
        n.updateSpot();
      }
    }
    this.assignJudgementEventsToSpots();
  };
  IsoViewObjectGroupJudgements.prototype.createSpotVE = function (e) {
    if (!e.veClass) {
      return null;
    }
    var t = new r.SpotJudgementVO();
    t.init(this.isoData);
    var i = new e.veClass();
    i.init(t);
    return i;
  };
  IsoViewObjectGroupJudgements.prototype.fillInCompleteList = function (t) {
    e.prototype.fillInCompleteList.call(this, t);
    if (this.spotContainers != null) {
      for (var i = 0, n = Array.from(this.spotContainers.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o) {
          t.push(o);
        }
      }
    }
  };
  Object.defineProperty(IsoViewObjectGroupJudgements.prototype, "spotContainers", {
    get: function () {
      return this._spotContainers;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupJudgements;
}(require("./302.js").AIsoViewObjectGroupSimpleList);
exports.IsoViewObjectGroupJudgements = a;
var s = require("./773.js");
var r = require("./2816.js");