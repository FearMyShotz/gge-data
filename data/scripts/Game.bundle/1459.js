Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./4.js");
var d = require("./2688.js");
var p = require("./2689.js");
var h = require("./1460.js");
var g = require("./2690.js");
var C = require("./171.js");
var _ = function (e) {
  function CastleConstructionItemsFilterSublayer(t, i, n = false) {
    var o = e.call(this, t) || this;
    o.interactionData = new y.ConstructionItemsInteractionData();
    try {
      var s;
      var r;
      o._filterBuildingGroundTypeSelector = o.comboBox(i.mc_categorySelector, n ? g.ComboboxItemRendererBuildingGroundTypeSelectorGray : h.ComboboxItemRendererBuildingGroundTypeSelector, n);
      o._filterBuildingTypeSelector = o.comboBox(i.mc_buildingSelector, n ? O.ComboboxItemRendererBuildingTypeSelectorGray : f.ComboboxItemRendererBuildingTypeSelector, n);
      for (var l = 0, p = c.ClientConstCastle.BUILDINGGORUND_TYPES; l < p.length; l++) {
        var _ = p[l];
        if (_ !== undefined && u.CastleModel.constructionItemData.getCIEnabledBuildings(_)) {
          r = E.ConstructionItemsHelper.getCategoryName(_);
          (s = new C.ComboboxItemRendererVO()).itemLabel = r;
          s.data = new d.CastleBuildingGroundComboboxItemRendererVO(_);
          o._filterBuildingGroundTypeSelector.addItem(s);
        }
      }
      o._filterBuildingGroundTypeSelector.selectItemIndex(0);
      o.setBuildingTypeFilterList(c.ClientConstCastle.BUILDINGGROUND_TYPE_NONE);
    } catch (e) {
      a.debug(e.stack);
    }
    return o;
  }
  n.__extends(CastleConstructionItemsFilterSublayer, e);
  CastleConstructionItemsFilterSublayer.prototype.comboBox = function (e, t, i = false) {
    var n = l.int(i ? 2 : 1);
    var o = new m.ComboboxComponent(e, "", 1, 17, 20, -1, 17, new t(), 4, true, false, 3, "", 1);
    o.setTextfieldAutoFit(true);
    e.bg.gotoAndStop(n);
    return o;
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingTypeFilterList = function (e) {
    var t;
    this._filterBuildingTypeSelector.clearItems();
    (t = new C.ComboboxItemRendererVO()).itemLabel = r.Localize.text("dialog_ci_filter02_all");
    t.data = new p.CastleBuildingTypeComboboxItemRendererVO(null);
    this._filterBuildingTypeSelector.addItem(t);
    var i;
    var n = u.CastleModel.constructionItemData.getCIEnabledBuildings(e);
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          i = r.Localize.text(s.getNameString());
          (t = new C.ComboboxItemRendererVO()).itemLabel = i;
          t.data = new p.CastleBuildingTypeComboboxItemRendererVO(s);
          this._filterBuildingTypeSelector.addItem(t);
        }
      }
    }
    this._filterBuildingTypeSelector.selectItemIndex(0);
  };
  CastleConstructionItemsFilterSublayer.prototype.updateBuildingFilters = function () {
    this._filterBuildingGroundTypeSelector.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
    this._filterBuildingTypeSelector.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    if (this.interactionData.draggedItem) {
      if (!this.interactionData.draggedItem.constructionItemVO.applicableBuildings) {
        throw new Error("Construction Item ID: " + this.interactionData.draggedItem.constructionItemVO.id + " has no connected buildings");
      }
      var e = this.interactionData.draggedItem.constructionItemVO.applicableBuildings[0];
      this.setBuildingFilters(false, e.buildingGroundType, e);
    } else {
      this.setBuildingFilters(true, this.interactionData.filterBuildingGroundType, this.interactionData.filterBuildingType);
    }
    this._filterBuildingGroundTypeSelector.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
    this._filterBuildingTypeSelector.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingFilters = function (e, t, i) {
    this._filterBuildingGroundTypeSelector.enabled = e;
    this._filterBuildingTypeSelector.enabled = e;
    if (this._filterBuildingGroundTypeSelector.selectedData.buildingGroundType != t) {
      this.setBuildingGroundFilter(t);
    }
    var n = this._filterBuildingTypeSelector.selectedData.buildingType;
    if ((n ? n.name : "") != (i ? i.name : "")) {
      this.setBuildingTypeFilter(i);
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingGroundFilter = function (e) {
    for (var t = 0; t < this._filterBuildingGroundTypeSelector.itemData.length; t++) {
      if (this._filterBuildingGroundTypeSelector.itemData[t].data.buildingGroundType == e) {
        this._filterBuildingGroundTypeSelector.selectItemIndex(t);
        this.setBuildingTypeFilterList(e);
        break;
      }
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingTypeFilter = function (e) {
    for (var t = 0; t < this._filterBuildingTypeSelector.itemData.length; t++) {
      var i = this._filterBuildingTypeSelector.itemData[t].data.buildingType;
      if ((i ? i.name : "") == (e ? e.name : "")) {
        this._filterBuildingTypeSelector.selectItemIndex(t);
        break;
      }
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    try {
      this._filterBuildingGroundTypeSelector.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
      this._filterBuildingTypeSelector.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    } catch (e) {
      a.debug(e.stack);
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    try {
      this._filterBuildingGroundTypeSelector.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
      this._filterBuildingTypeSelector.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    } catch (e) {
      a.debug(e.stack);
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.onChangeBuildingListTypeFilter = function (e) {
    var t = this._filterBuildingGroundTypeSelector.selectedData.buildingGroundType;
    this._filterBuildingTypeSelector.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    this.setBuildingTypeFilterList(t);
    this._filterBuildingTypeSelector.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    this.interactionData.setFilterBuildingGroundType(t);
  };
  CastleConstructionItemsFilterSublayer.prototype.onChangeBuildingTypeFilter = function (e) {
    var t = this._filterBuildingTypeSelector.selectedData.buildingType;
    this.interactionData.setFilterBuildingType(t);
  };
  CastleConstructionItemsFilterSublayer.prototype.filterBuilding = function (e) {
    return !e.buildingState.isUnderInitialConstruction && (this.interactionData.filterBuildingGroundType == "" || this.interactionData.filterBuildingGroundType == e.buildingGroundType) && (this.interactionData.filterBuildingType == null || this.interactionData.filterBuildingType.name == e.name) && (!this.interactionData.filterExpiredOnly || this.interactionData.filterExpiredOnly && this.interactionData.hasBuildingExpired(e.objectId)) && e.hasConstructionItemSlots;
  };
  CastleConstructionItemsFilterSublayer.prototype.filterBuildings = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && this.filterBuilding(n)) {
          return true;
        }
      }
    }
    return false;
  };
  return CastleConstructionItemsFilterSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleConstructionItemsFilterSublayer = _;
var m = require("./178.js");
var f = require("./1461.js");
var O = require("./2691.js");
var E = require("./239.js");
var y = require("./1462.js");
s.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");