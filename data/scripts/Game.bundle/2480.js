Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./4.js");
var g = require("./35.js");
var C = require("./43.js");
var _ = require("./8.js");
var m = require("./34.js");
var f = require("./93.js");
var O = require("./2481.js");
var E = require("./2482.js");
var y = function (e) {
  function CastleSearchMemberDialogSearch(t) {
    var i = e.call(this, t) || this;
    i.itxt_memberAmount = i.textFieldManager.registerTextField(i.sublayerDisp.txt_memberAmount, new d.LocalizedTextVO(""));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_member, new d.LocalizedTextVO("dialog_alliance_member"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_name, new d.LocalizedTextVO("generic_name"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_level, new d.LocalizedTextVO("level"));
    i.sublayerDisp.icon_distance.toolTipText = "distance";
    i.sublayerDisp.icon_honor.toolTipText = "honor";
    i._memberListComponent = new s.ItemScrollList(i.sublayerDisp.mc_memberList, i.sublayerDisp);
    i._memberListComponent.scrollItemClass = O.ListMemberSearchItem;
    i._memberListComponent.clear();
    _.ButtonHelper.initBasicButton(i.sublayerDisp.btn_increaseMember);
    _.ButtonHelper.initBasicButton(i.sublayerDisp.mc_memberList.btn_up);
    _.ButtonHelper.initBasicButton(i.sublayerDisp.mc_memberList.btn_down);
    return i;
  }
  n.__extends(CastleSearchMemberDialogSearch, e);
  CastleSearchMemberDialogSearch.prototype.onMouseUp = function (e) {
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.sublayerDisp.btn_increaseMember:
          o.CommandController.instance.executeCommand(b.IngameClientCommands.OPEN_ALLIANCE_BUY_BOOSTER_COMMAND, [this.properties.allianceInfoVO, c.AllianceConst.TYPE_MEMBERS, g.EffectTypeEnum.EFFECT_TYPE_MEMBER]);
      }
    }
  };
  CastleSearchMemberDialogSearch.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.itxt_memberAmount.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_memberAmount.textContentVO.textReplacements = [this.properties.allianceInfoVO.memberAmount, this.properties.allianceInfoVO.memberMax];
    if (h.CastleModel.allianceData.myAllianceVO.isBoostUpgradeable(c.AllianceConst.TYPE_MEMBERS)) {
      if (h.CastleModel.allianceData.hasRight(h.CastleModel.userData.allianceRank, c.AllianceConst.RIGHT_UPGRADE)) {
        _.ButtonHelper.enableButton(this.sublayerDisp.btn_increaseMember, true);
        this.sublayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_raiseMemberLimit";
      } else {
        _.ButtonHelper.enableButton(this.sublayerDisp.btn_increaseMember, false);
        this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_rankToLow";
      }
    } else {
      _.ButtonHelper.enableButton(this.sublayerDisp.btn_increaseMember, false);
      this.sublayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_maxUpgradeLevel";
    }
    this.fillList(this.properties.searchMemberList);
    this._memberListComponent.addEventListener(r.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
  };
  CastleSearchMemberDialogSearch.prototype.fillList = function (e) {
    this._memberListComponent.clear();
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new E.ListMemberSearchItemVO();
          o.listVO = n;
          this._memberListComponent.pushContent(o);
        }
      }
    }
    this._memberListComponent.initList();
  };
  CastleSearchMemberDialogSearch.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._memberListComponent.removeEventListener(r.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
  };
  CastleSearchMemberDialogSearch.prototype.onClickScrollistItem = function (e) {
    var t = p.int(e.scrollItem.itemVO.listVO.playerID);
    D.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(I.CastlePlayerInfoDialog, new f.CastlePlayerInfoDialogProperties(t), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleSearchMemberDialogSearch.prototype.showHelp = function () {
    D.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("help_allianceSearchMember"));
  };
  Object.defineProperty(CastleSearchMemberDialogSearch.prototype, "properties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSearchMemberDialogSearch.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSearchMemberDialogSearch;
}(m.CastleDialogSubLayer);
exports.CastleSearchMemberDialogSearch = y;
var b = require("./29.js");
var D = require("./9.js");
var I = require("./94.js");
l.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");