Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function EventOverviewDetailEnum(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._detailViewClass = i;
    return n;
  }
  n.__extends(EventOverviewDetailEnum, e);
  EventOverviewDetailEnum.prototype.createView = function () {
    return new this._detailViewClass();
  };
  EventOverviewDetailEnum.__initialize_static_members = function () {
    EventOverviewDetailEnum.DETAILS_NONE = new EventOverviewDetailEnum("details_none", r.EventOverviewDetailsNone);
    EventOverviewDetailEnum.DETAILS_FACTION_INVASION = new EventOverviewDetailEnum("details_factionInvasion", s.EventOverviewDetailsFactionInvasion);
    EventOverviewDetailEnum.DETAILS_POINT_EVENT_DEFAULT = new EventOverviewDetailEnum("details_pointEventDefault", l.EventOverviewDetailsPointEventDefault);
    EventOverviewDetailEnum.DETAILS_POINT_EVENT_NEXT_REWARD_LIST = new EventOverviewDetailEnum("details_pointEventNextRewardList", c.EventOverviewDetailsPointEventNextRewardList);
    EventOverviewDetailEnum.DETAILS_TREASURE_MAP = new EventOverviewDetailEnum("details_treasureMap", u.EventOverviewDetailsTreasureMap);
  };
  return EventOverviewDetailEnum;
}(o.BasicEnum);
exports.EventOverviewDetailEnum = a;
var s = require("./2102.js");
var r = require("./2103.js");
var l = require("./2104.js");
var c = require("./2105.js");
var u = require("./2106.js");
a.__initialize_static_members();