Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./28.js");
var r = require("./103.js");
var l = require("./30.js");
var c = require("./4.js");
var u = require("./109.js");
var d = require("./64.js");
var p = require("./276.js");
var h = function (e) {
  function PlagueareaMapobjectVO() {
    var t = e.call(this) || this;
    t.name = "Shadow";
    t._isVisibleOnMap = true;
    return t;
  }
  n.__extends(PlagueareaMapobjectVO, e);
  PlagueareaMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = c.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var o = this.assetFileURL("ShadowEvent");
    var a = new u.CastleDisplayObjectClipContainer();
    var s = n == "Classic" ? "ShadowMapObjectBackground_" : "ShadowCampBackground_";
    a.addItem(this.getAsExternalClip(s + n, o));
    a.addItem(this.getAsExternalClip("Shadow_Mapobject", o));
    a.asDisplayObject().scaleX = a.asDisplayObject().scaleY /= p.CastleWorldmapConst.ZOOM_MAX;
    return a;
  };
  PlagueareaMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._attackCooldownEndTimestamp = l.CachedTimer.getCachedTimer() + e[3] * s.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = e[4];
    this._spyInfoReceivingTime = l.CachedTimer.getCachedTimer() * s.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(r.EventInstanceMapper.getEvent(d.VisualVOEvent, d.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(PlagueareaMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return a.Localize.text("PlaguemonkCamp");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PlagueareaMapobjectVO;
}(require("./205.js").ContainerBuilderMapobjectVO);
exports.PlagueareaMapobjectVO = h;
var g = require("./101.js");
o.classImplementsInterfaces(h, "IDetailViewAble", "IWorldmapObjectVO");