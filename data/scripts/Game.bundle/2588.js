Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./28.js");
var l = require("./103.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./108.js");
var p = require("./64.js");
var h = require("./275.js");
var g = function (e) {
  function ShadowareaMapobjectVO() {
    var t = e.call(this) || this;
    t.name = "Shadow";
    t._isVisibleOnMap = true;
    return t;
  }
  n.__extends(ShadowareaMapobjectVO, e);
  ShadowareaMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = u.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var o = this.assetFileURL(C.WorldmapObjectIconHelper.FILE_NAME_SHADOW_EVENT);
    var a = new d.CastleDisplayObjectClipContainer();
    var s = n == "Classic" ? "ShadowMapObjectBackground_" : "ShadowCampBackground_";
    a.addItem(this.getAsExternalClip(s + n, o));
    a.addItem(this.getAsExternalClip("Shadow_Mapobject", o));
    a.asDisplayObject().scaleX = a.asDisplayObject().scaleY /= h.CastleWorldmapConst.ZOOM_MAX;
    return a;
  };
  ShadowareaMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._attackCooldownEndTimestamp = c.CachedTimer.getCachedTimer() + e[3] * r.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = e[4];
    this._spyInfoReceivingTime = c.CachedTimer.getCachedTimer() * r.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(l.EventInstanceMapper.getEvent(p.VisualVOEvent, p.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(ShadowareaMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.ownerInfo.playerID != a.ShadowUnitConst.DEFAULT_OWNER_ID && this.collectorEvent != null) {
        return s.Localize.text("collector_event_camp_" + this.collectorEvent.collectInfoVO.collectorEventSkinName);
      } else {
        return s.Localize.text("ShadowUnitCamp");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ShadowareaMapobjectVO.prototype, "collectorEvent", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return ShadowareaMapobjectVO;
}(require("./205.js").ContainerBuilderMapobjectVO);
exports.ShadowareaMapobjectVO = g;
var C = require("./70.js");
var _ = require("./101.js");
o.classImplementsInterfaces(g, "IDetailViewAble", "IWorldmapObjectVO");