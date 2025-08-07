Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./16.js");
var s = require("./1173.js");
var r = function (e) {
  function CastleMultiInfoBuildingPanelVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.items = [];
    return t;
  }
  n.__extends(CastleMultiInfoBuildingPanelVO, e);
  CastleMultiInfoBuildingPanelVO.prototype.addInfoItem = function (e, t, i, n = a.ClientConstColor.FONT_DEFAULT_COLOR, o = false, r = false, l = false) {
    var c = new s.CastleMultiBuildingInfoPanelItemVO();
    c.iconClass = e;
    c.tooltipText = t;
    c.textVO = i;
    c.isVisibleInInfoDialog = o;
    c.textColor = n;
    c.useSubscription = r;
    c.isAdditionalEffect = l;
    this.items.push(c);
  };
  return CastleMultiInfoBuildingPanelVO;
}(o.ScrollItemVO);
exports.CastleMultiInfoBuildingPanelVO = r;