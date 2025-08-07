Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./4.js");
var g = require("./222.js");
var C = require("./43.js");
var _ = require("./8.js");
var m = require("./34.js");
var f = require("./93.js");
var O = createjs.MouseEvent;
var E = createjs.Point;
var y = function (e) {
  function CastleAllianceInfoDialogMemberlist(t) {
    var i = this;
    i._currentStartItem = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(i.sublayerDisp.txt_member, new d.LocalizedTextVO("dialog_alliance_member"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_rank, new d.LocalizedTextVO("rank"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_playerName, new d.LocalizedTextVO("generic_name"));
    i.textFieldManager.registerTextField(i.sublayerDisp.txt_playerLevel, new d.LocalizedTextVO("level"));
    i.itxt_memberAmount = i.textFieldManager.registerTextField(i.sublayerDisp.txt_memberAmount, new d.LocalizedTextVO(""));
    i.sublayerDisp.icon_honor.toolTipText = "playerMight";
    i.sublayerDisp.icon_distance.toolTipText = c.Localize.text("distance");
    _.ButtonHelper.initBasicButton(i.sublayerDisp.btn_up);
    _.ButtonHelper.initBasicButton(i.sublayerDisp.btn_down);
    return i;
  }
  n.__extends(CastleAllianceInfoDialogMemberlist, e);
  CastleAllianceInfoDialogMemberlist.prototype.fillList = function () {
    this.sublayerDisp.btn_up.visible = this._currentStartItem > 0;
    this.sublayerDisp.btn_down.visible = this._currentStartItem < this.MAX_ITEM_INDEX && this.allianceInfoVO.memberAmount > CastleAllianceInfoDialogMemberlist.NUM_ITEMS;
    a.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_memberList);
    for (var e = this._currentStartItem; e < CastleAllianceInfoDialogMemberlist.NUM_ITEMS + this._currentStartItem; e++) {
      var t;
      if (this.allianceInfoVO.memberAmount > e) {
        var i = this.allianceInfoVO.memberList[e];
        r.getDefinitionByName("CastleAllianceInfoMemberListItem");
        t = new (r.getDefinitionByName("CastleAllianceInfoMemberListItem"))();
        this.fillItem(t, i);
        t.y = (e - this._currentStartItem) * 30;
        this.sublayerDisp.mc_memberList.addChild(t);
      }
    }
  };
  CastleAllianceInfoDialogMemberlist.prototype.fillItem = function (e, t) {
    e.icon_rank_area.icon_rank.gotoAndStop(t.allianceRank + 1);
    e.icon_rank_area.toolTipText = c.Localize.text("dialog_alliance_rank" + b.CastleAllianceData.getTextIDForRank(t.allianceRank));
    if (e.btn_memberName.itxt_playerName) {
      e.btn_memberName.itxt_playerName.textContentVO.stringValue = t.playerName;
    } else {
      e.btn_memberName.itxt_playerName = this.textFieldManager.registerTextField(e.btn_memberName.txt_playerName, new p.TextVO(t.playerName));
    }
    e.btn_memberName.playerID = t.playerID;
    e.btn_memberName.txt_playerName.mouseEnabled = true;
    _.ButtonHelper.initBasicButton(e.btn_memberName);
    e.itxt_level = this.textFieldManager.registerTextField(e.txt_level, new u.LocalizedNumberVO(t.playerLevel));
    e.itxt_honor = this.textFieldManager.registerTextField(e.txt_honor, new u.LocalizedNumberVO(t.might, true));
    var i = h.CastleModel.userData.castleList.getMainCastleByKingdomID(l.WorldClassic.KINGDOM_ID);
    var n = t.getMainCastlePositionByKingdomID(l.WorldClassic.KINGDOM_ID);
    var o = 0;
    o = i && n ? Math.round(g.MapHelper.getShortestDistance(n, new E(i.absAreaPosX, i.absAreaPosY))) : 0;
    if (e.itxt_distance) {
      e.itxt_distance.textContentVO.numberValue = o;
    } else {
      e.itxt_distance = this.textFieldManager.registerTextField(e.txt_distance, new u.LocalizedNumberVO(o));
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "MAX_ITEM_INDEX", {
    get: function () {
      return this.allianceInfoVO.memberAmount - CastleAllianceInfoDialogMemberlist.NUM_ITEMS;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogMemberlist.prototype.onMouseWheel_0 = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.delta < 0) {
      this.currentStartItem = this._currentStartItem - CastleAllianceInfoDialogMemberlist.STEPSIZE;
      this.fillList();
    } else if (t.delta > 0) {
      this.currentStartItem = this._currentStartItem + CastleAllianceInfoDialogMemberlist.STEPSIZE;
      this.fillList();
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "currentStartItem", {
    set: function (e) {
      this._currentStartItem = e;
      if (this._currentStartItem > this.MAX_ITEM_INDEX) {
        this._currentStartItem = this.MAX_ITEM_INDEX;
      }
      if (this._currentStartItem < 0) {
        this._currentStartItem = 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogMemberlist.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._currentStartItem = 0;
    this.itxt_memberAmount.textContentVO.textId = o.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_memberAmount.textContentVO.textReplacements = [this.allianceInfoVO.memberAmount, this.allianceInfoVO.memberMax];
    this.fillList();
    this.sublayerDisp.parent.addEventListener(O.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
  };
  CastleAllianceInfoDialogMemberlist.prototype.hide = function () {
    this.sublayerDisp.parent.removeEventListener(O.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    e.prototype.hide.call(this);
  };
  CastleAllianceInfoDialogMemberlist.prototype.onMouseUp = function (e) {
    switch (e.target) {
      case this.sublayerDisp.btn_editAnouncement:
        break;
      case this.sublayerDisp.btn_up:
        this.currentStartItem = this._currentStartItem - CastleAllianceInfoDialogMemberlist.STEPSIZE;
        this.fillList();
        break;
      case this.sublayerDisp.btn_down:
        this.currentStartItem = this._currentStartItem + CastleAllianceInfoDialogMemberlist.STEPSIZE;
        this.fillList();
    }
    if (e.target.playerID) {
      D.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(I.CastlePlayerInfoDialog, new f.CastlePlayerInfoDialogProperties(e.target.playerID), C.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogMemberlist.__initialize_static_members = function () {
    CastleAllianceInfoDialogMemberlist.STEPSIZE = 1;
    CastleAllianceInfoDialogMemberlist.NUM_ITEMS = 8;
  };
  return CastleAllianceInfoDialogMemberlist;
}(m.CastleDialogSubLayer);
exports.CastleAllianceInfoDialogMemberlist = y;
var b = require("./317.js");
var D = require("./9.js");
var I = require("./94.js");
s.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");
y.__initialize_static_members();