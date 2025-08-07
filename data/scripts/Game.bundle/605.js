Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CastleCommunicationForum(t) {
    var i = this;
    i._currentCategory = CastleCommunicationForum.CAT_NONE;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._subLayers = new Map();
    i._subLayers.set(CastleCommunicationForum.CAT_OVERVIEW, new c.CastleForumOverview(i.subLayerDisp.cat_overview, i));
    i._subLayers.set(CastleCommunicationForum.CAT_NEW_TOPIC, new l.CastleForumNewTopic(i.subLayerDisp.cat_newTopic, i));
    i._subLayers.set(CastleCommunicationForum.CAT_VIEW_TOPIC, new u.CastleForumViewTopic(i.subLayerDisp.cat_viewTopic, i));
    return i;
  }
  n.__extends(CastleCommunicationForum, e);
  CastleCommunicationForum.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.changeCategory(CastleCommunicationForum.CAT_OVERVIEW);
  };
  CastleCommunicationForum.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._currentCategory != CastleCommunicationForum.CAT_NONE) {
      this._subLayers.get(this._currentCategory).hide();
    }
  };
  CastleCommunicationForum.prototype.changeCategory = function (e) {
    if (this._currentCategory != CastleCommunicationForum.CAT_NONE) {
      this._subLayers.get(this._currentCategory).hide();
    }
    this._currentCategory = e;
    this._subLayers.get(e).show(this._params);
  };
  CastleCommunicationForum.prototype.showHelp = function () {
    var e = "";
    switch (this._currentCategory) {
      case CastleCommunicationForum.CAT_NEW_TOPIC:
        e = "help_forum_newTopic";
        break;
      case CastleCommunicationForum.CAT_OVERVIEW:
        e = "help_forum_overview";
        break;
      case CastleCommunicationForum.CAT_VIEW_TOPIC:
        e = "help_forum_topicAnswer";
    }
    if (e != "") {
      r.CastleDialogHandler.getInstance().showHelper("", a.Localize.text(e));
    }
  };
  CastleCommunicationForum.__initialize_static_members = function () {
    CastleCommunicationForum.CAT_OVERVIEW = "cat_overview";
    CastleCommunicationForum.CAT_NEW_TOPIC = "cat_newTopic";
    CastleCommunicationForum.CAT_VIEW_TOPIC = "cat_viewTopic";
    CastleCommunicationForum.CAT_NONE = "cat_none";
  };
  return CastleCommunicationForum;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleCommunicationForum = s;
var r = require("./9.js");
var l = require("./1356.js");
var c = require("./2410.js");
var u = require("./948.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "ISublayer");
s.__initialize_static_members();