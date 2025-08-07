Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./102.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./34.js");
var h = require("./2475.js");
var g = require("./2476.js");
var C = require("./2477.js");
var _ = function (e) {
  function CastleSearchMemberDialogApplications(t) {
    var i = e.call(this, t) || this;
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_date, new l.LocalizedTextVO("generic_date"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_name, new l.LocalizedTextVO("generic_name"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_level, new l.LocalizedTextVO("level"));
    i.sublayerDisp.icon_distance.toolTipText = "distance";
    i.sublayerDisp.icon_honor.toolTipText = "honor";
    i._applicationListComponent = new o.ItemScrollList(i.sublayerDisp.mc_applicationList, i.sublayerDisp);
    i._applicationListComponent.scrollItemClass = g.ListAllianceApplicationItem;
    i._applicationListComponent.clear();
    d.ButtonHelper.initBasicButton(i.sublayerDisp.mc_applicationList.btn_up);
    d.ButtonHelper.initBasicButton(i.sublayerDisp.mc_applicationList.btn_down);
    return i;
  }
  n.__extends(CastleSearchMemberDialogApplications, e);
  CastleSearchMemberDialogApplications.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.fillList(this.properties.applicationList);
    this._applicationListComponent.addEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
    u.CastleModel.allianceData.addEventListener(c.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.bindFunction(this.onApplicationListUpdated));
  };
  CastleSearchMemberDialogApplications.prototype.onApplicationListUpdated = function (e) {
    this.properties.applicationList = e.params[0];
    this.fillList(this.properties.applicationList);
  };
  CastleSearchMemberDialogApplications.prototype.fillList = function (e) {
    this._applicationListComponent.clear();
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new C.ListAllianceApplicationItemVO();
          o.listVO = n;
          this._applicationListComponent.pushContent(o);
        }
      }
    }
    this._applicationListComponent.initList();
  };
  CastleSearchMemberDialogApplications.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._applicationListComponent.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
    u.CastleModel.allianceData.removeEventListener(c.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.bindFunction(this.onApplicationListUpdated));
  };
  CastleSearchMemberDialogApplications.prototype.onClickScrollistItem = function (e) {
    m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleAllianceReadApplicationDialog, new h.CastleAllianceReadApplicationDialogProperties(e.scrollItem.itemVO.listVO));
  };
  CastleSearchMemberDialogApplications.prototype.showHelp = function () {
    m.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_allianceOpenRequests"));
  };
  Object.defineProperty(CastleSearchMemberDialogApplications.prototype, "properties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSearchMemberDialogApplications.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSearchMemberDialogApplications;
}(p.CastleDialogSubLayer);
exports.CastleSearchMemberDialogApplications = _;
var m = require("./9.js");
var f = require("./2478.js");
s.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");