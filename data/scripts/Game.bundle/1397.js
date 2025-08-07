Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./37.js");
var d = require("./53.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./24.js");
var C = require("./76.js");
var _ = require("./77.js");
var m = require("./8.js");
var f = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformanceAlliance(t, i) {
    var n = this;
    n.currentSorting = "";
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).mainDialog = i;
    var o = new _.InfiniteScrollListOptions(n.scrollListItemClass, n.scrollListItemAssetName, y.CastleAllianceBattleGroundEventDialog.NAME);
    o.itemPaddingY = 2;
    o.useSmoothScroll = true;
    n._scrollList = new O.InfiniteScrollListComponent(new C.InfiniteScrollListClips(n.subLayerDisp.mc_list).addMaskMc(n.subLayerDisp.mc_list.mc_mask).addSliderMc(n.subLayerDisp.mc_list.mc_slider).addItemContainerMc(n.subLayerDisp.mc_list.mc_items), o);
    n.subLayerDisp.mc_top_bg.addChild(new g.CastleGoodgameExternalClip("ABG_AlliancePerformance_BG_" + d.ABGHelper.skinName, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(y.CastleAllianceBattleGroundEventDialog.NAME), null, 0, false));
    m.ButtonHelper.initBasicButtons([n.subLayerDisp.btn_left, n.subLayerDisp.btn_right]);
    return n;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformanceAlliance, e);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemAssetName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "sortTypes", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "defaultSortType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this.currentSorting == "") {
      this.currentSorting = this.defaultSortType;
    }
    this.subLayerDisp.mc_level.toolTipText = "level";
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_name, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("generic_playerName")));
    this.subLayerDisp.btn_alliance.actLikeButton = true;
    this.subLayerDisp.btn_right.actLikeButton = true;
    this.subLayerDisp.btn_left.actLikeButton = true;
    this.subLayerDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.gotoAndStop(1);
    this.subLayerDisp.btn_player.gotoAndStop(2);
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    this.subLayerDisp.btn_right.mouseChildren = false;
    this.subLayerDisp.btn_left.mouseChildren = false;
    if (this.subLayerDisp.btn_tower) {
      if (this.subLayerDisp.btn_tower.txt_text) {
        this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
      } else if (this.subLayerDisp.btn_tower.txt_text1) {
        this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text1, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
      }
    }
    if (this.subLayerDisp.btn_alliance.txt_text) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    }
    if (this.subLayerDisp.btn_alliance.txt_text1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_alliance.txt_text1, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("alliancePerformance"))).autoFitToBounds = true;
    }
    if (this.subLayerDisp.btn_player.txt_text) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    }
    if (this.subLayerDisp.btn_player.txt_text1) {
      this.textFieldManager.registerTextField(this.subLayerDisp.btn_player.txt_text1, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("myPerformance")));
    }
    this.controller.addEventListener(u.CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED, this.bindFunction(this.onInformationArrived));
    this.sendPerformanceCommand();
    this._scrollList.onShow();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.sendPerformanceCommand = function () {};
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.updateDialogElements = function () {};
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(u.CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED, this.bindFunction(this.onInformationArrived));
    this._scrollList.onHide();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onInformationArrived = function (e) {
    this.alliancePerformanceVOs = h.CastleModel.allianceBattlegroundData.alliancePerformanceVOs;
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.updateDialog = function () {
    this.updateItems();
    this.updateDialogElements();
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_top, new r.LocalizedTextVO("topContributor_colon"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_top_name, new s.TextVO(this.alliancePerformanceVOs[0].playerName));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_top_points, new l.LocalizedNumberVO(this.getPointsFromVO(this.alliancePerformanceVOs[0])));
    E.CrestHelper.setCrestGraphics(this.subLayerDisp.mc_playercrest, this.alliancePerformanceVOs[0].crestVO);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.updateItems = function () {
    var e = [];
    this.sortPerformances();
    for (var t = 0; t < this.alliancePerformanceVOs.length; t++) {
      var i = {
        vo: this.alliancePerformanceVOs[t],
        rank: t + 1
      };
      i.points = this.getPointsFromVO(this.alliancePerformanceVOs[t]);
      e.push(i);
    }
    this._scrollList.updateWithNewData(e);
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.sortPerformances = function () {};
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.getPointsFromVO = function (e) {
    return 0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_left:
        this.onClickLeft();
        break;
      case this.subLayerDisp.btn_right:
        this.onClickRight();
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onClickLeft = function () {
    var e = c.int(this.sortTypes.indexOf(this.currentSorting));
    this.currentSorting = e == 0 ? this.sortTypes[this.sortTypes.length - 1] : this.sortTypes[e - 1];
    this.updateDialog();
  };
  CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype.onClickRight = function () {
    var e = c.int(this.sortTypes.indexOf(this.currentSorting));
    if (e == this.sortTypes.length - 1) {
      this.currentSorting = this.sortTypes[0];
    } else {
      this.currentSorting = this.sortTypes[e + 1];
    }
    this.updateDialog();
  };
  return CastleAllianceBattlegroundEventDialogPerformanceAlliance;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogPerformanceAlliance = f;
o.classImplementsInterfaces(f, "ICollectableRendererList", "ISublayer");
var O = require("./78.js");
var E = require("./61.js");
var y = require("./249.js");