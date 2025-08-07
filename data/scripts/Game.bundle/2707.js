Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./81.js");
var c = require("./237.js");
var u = require("./5.js");
var d = require("./1469.js");
var p = require("./490.js");
var h = require("./46.js");
var g = function (e) {
  function CIBuildingListItem() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.isSmallItem = false;
    return t;
  }
  n.__extends(CIBuildingListItem, e);
  CIBuildingListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this.itxt_name = s.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_name, new r.LocalizedTextVO(""));
    this.itxt_name.autoFitToBounds = true;
    this.itxt_name.mouseEnabled = false;
    if (this.getItemMc().txt_level) {
      this.itxt_level = s.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_level, new r.LocalizedTextVO("building_level"));
      this.itxt_level.mouseEnabled = false;
    } else {
      this.isSmallItem = true;
    }
    this.getItemMc().mc_downState.mouseEnabled = false;
    this.getItemMc().mc_mouseOver.mouseEnabled = false;
    this.getItemMc().mc_selected.mouseEnabled = false;
    this.getItemMc().bg.mouseEnabled = false;
    this.getItemMc().mc_buildingIcon.mouseEnabled = false;
    this.getItemMc().mc_downState.mouseChildren = false;
    this.getItemMc().mc_mouseOver.mouseChildren = false;
    this.getItemMc().mc_selected.mouseChildren = false;
    this.getItemMc().bg.mouseChildren = false;
    this.getItemMc().mc_buildingIcon.mouseChildren = false;
    this.getItemMc().mc_item.mouseChildren = false;
    this.getItemMc().mc_expired.toolTipText = "dialog_ci_assign_tempCiExpired_label_tooltip";
    this._clickFeedbackBehaviour = new c.ClickFeedbackHoverBehaviour(this.getItemMc());
  };
  CIBuildingListItem.prototype.fill = function () {
    e.prototype.fill.call(this);
    this.removeListenerOnSlots();
    this.slots = [];
    for (var t = 0; t < u.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++t) {
      for (var i = 0; i < u.ConstructionItemConst.SLOT_TYPE_COUNTS[t]; ++i) {
        var n = new d.ConstructionItemSlotSmall(new p.ConstructionItemSlotVO(t, i), this.ciBuildingScrollItemVO.interactionData, this.ciBuildingScrollItemVO.slotClickCallback, this.getItemMc()["slot_" + t + "_" + i]);
        this.slots.push(n);
      }
    }
    this.addListenerOnSlots();
    this.drawIcon();
    if (this.isSmallItem) {
      this.itxt_name.textContentVO.textId = a.GenericTextIds.VALUE_DASH_SPLIT;
      this.itxt_name.textContentVO.textReplacements = [this.ciBuildingScrollItemVO.buildingVO.getNameString(), this.ciBuildingScrollItemVO.buildingVO.level];
    } else {
      this.itxt_name.textContentVO.textId = this.ciBuildingScrollItemVO.buildingVO.getNameString();
      this.itxt_level.textContentVO.textReplacements = [this.ciBuildingScrollItemVO.buildingVO.level];
    }
    if (this.slots != null) {
      for (var o = 0, s = this.slots; o < s.length; o++) {
        var r = s[o];
        if (r !== undefined) {
          r.buildingVO = this.ciBuildingScrollItemVO.buildingVO;
        }
      }
    }
    if (this.ciBuildingScrollItemVO.interactionData && this.ciBuildingScrollItemVO.interactionData.selectedBuilding == this.ciBuildingScrollItemVO.buildingVO) {
      this.getItemMc().mc_selected.visible = true;
    } else {
      this.getItemMc().mc_selected.visible = false;
    }
    this.getItemMc().mc_expired.visible = this.ciBuildingScrollItemVO.interactionData.hasBuildingExpired(this.ciBuildingScrollItemVO.buildingVO.objectId);
  };
  CIBuildingListItem.prototype.drawIcon = function () {
    o.MovieClipHelper.clearMovieClip(this.getItemMc().mc_buildingIcon);
    var e = this.isSmallItem ? 22 : 33;
    var t = this.isSmallItem ? 22 : 33;
    var i = new Library.CastleInterfaceElements.BuildingGroundBg();
    o.MovieClipHelper.scaleToFit(i, e, t);
    this.getItemMc().mc_buildingIcon.addChild(i);
    var n = new (h.IsoHelper.view.createIsoObjectVEFromVO(this.ciBuildingScrollItemVO.buildingVO).buildingGroundIconClass)();
    o.MovieClipHelper.scaleToFit(n, e * 0.7, t * 0.7);
    this.getItemMc().mc_buildingIcon.addChild(n);
    this.getItemMc().mc_buildingIcon.mouseChildren = false;
  };
  CIBuildingListItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.getItemMc().mc_item) {
      this.ciBuildingScrollItemVO.scrollItemClickCallback(this.ciBuildingScrollItemVO.buildingVO);
    }
  };
  CIBuildingListItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.addListenerOnSlots();
    this._clickFeedbackBehaviour.addEventListener();
  };
  CIBuildingListItem.prototype.addListenerOnSlots = function () {
    if (this.slots) {
      for (var e = 0, t = this.slots; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.show();
        }
      }
    }
  };
  CIBuildingListItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.removeListenerOnSlots();
    this._clickFeedbackBehaviour.removeEventListener();
  };
  CIBuildingListItem.prototype.removeListenerOnSlots = function () {
    if (this.slots) {
      for (var e = 0, t = this.slots; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
        }
      }
    }
  };
  Object.defineProperty(CIBuildingListItem.prototype, "ciBuildingScrollItemVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return CIBuildingListItem;
}(l.AInfiniteScrollListItem);
exports.CIBuildingListItem = g;