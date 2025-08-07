Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./131.js");
var l = require("./838.js");
var c = createjs.Point;
var u = createjs.Rectangle;
var d = function (e) {
  function CastleBaseResourcePanel(t) {
    var i = this;
    i._isInitialized = false;
    i._totalContainerWidth = 0;
    i._currentToolTipType = -1;
    i._tooltips = [];
    i._toolTipBounds = new u();
    i._toolTipPosition = new c(0, 50);
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._isInitialized = false;
    i._totalContainerWidth = 0;
    i.kingdomOverlayFrame = 1;
    return i;
  }
  n.__extends(CastleBaseResourcePanel, e);
  CastleBaseResourcePanel.prototype.init = function () {
    e.prototype.init.call(this);
    this._resourceContainer = [];
    this.initResourceItems();
    this.updateElementsPositions();
    if (this.resourcePanel && this.resourcePanel.mc_islandPanel) {
      this.resourcePanel.mc_islandPanel.visible = false;
    }
    this._isInitialized = true;
  };
  CastleBaseResourcePanel.prototype.hideTooltip = function (e) {
    var t = h.ResourcePanelToolTipManager.getToolTip(this._currentToolTipType);
    if (t) {
      t.hide();
    }
  };
  CastleBaseResourcePanel.prototype.positionToolTip = function (e, t) {
    e.bgPointer.x = e.width / 2;
    this._toolTipPosition.x = t.left + t.width / 2 - e.width / 2;
    e.x = this._toolTipPosition.x;
    var i = e.getBounds(e.parent);
    var n = 0;
    if (i.left < this._toolTipBounds.left) {
      n = this._toolTipBounds.left - i.left;
    } else if (i.right > this._toolTipBounds.right) {
      n = this._toolTipBounds.right - i.right;
    }
    e.x += n;
    e.bgPointer.x -= n;
  };
  CastleBaseResourcePanel.prototype.showToolTip = function (e, t) {
    var i;
    h.ResourcePanelToolTipManager.toolTipContainer = this.displayObject;
    this.hideTooltip(this._currentToolTipType);
    if (o.currentBrowserInfo.isMobile && this._currentToolTipType === e) {
      this._currentToolTipType = -1;
    } else {
      this._currentToolTipType = a.int(e);
      if (i = h.ResourcePanelToolTipManager.getToolTip(this._currentToolTipType)) {
        var n = t.getBounds(t.parent);
        i.update();
        i.show(this._toolTipPosition);
        this.positionToolTip(i, n);
      }
    }
  };
  CastleBaseResourcePanel.prototype.initResourceItems = function () {};
  CastleBaseResourcePanel.prototype.getToolTipTypeForCollectableEnum = function (e) {
    var t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE;
    switch (e) {
      case p.CollectableEnum.FOOD:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_FOOD;
        break;
      case p.CollectableEnum.WOOD:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_WOOD;
        break;
      case p.CollectableEnum.STONE:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_STONE;
        break;
      case p.CollectableEnum.AQUAMARINE:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_AQUAMARINE;
        break;
      case p.CollectableEnum.HONEY:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_HONEY;
        break;
      case p.CollectableEnum.OIL:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_OIL;
        break;
      case p.CollectableEnum.GLASS:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_GLASS;
        break;
      case p.CollectableEnum.COAL:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_COAL;
        break;
      case p.CollectableEnum.IRON:
        t = h.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_RESOURCE_IRON;
    }
    return t;
  };
  CastleBaseResourcePanel.prototype.getSpecialResourceItemFrameForCollectableEnum = function (e) {
    var t = 0;
    switch (e) {
      case p.CollectableEnum.FOOD:
        t = l.ResourcePanelItem.ICON_FRAME_FOOD;
        break;
      case p.CollectableEnum.WOOD:
        t = l.ResourcePanelItem.ICON_FRAME_WOOD;
        break;
      case p.CollectableEnum.STONE:
        t = l.ResourcePanelItem.ICON_FRAME_STONE;
        break;
      case p.CollectableEnum.AQUAMARINE:
        t = l.ResourcePanelItem.ICON_FRAME_AQUAMARINE;
        break;
      case p.CollectableEnum.OIL:
        t = l.ResourcePanelItem.ICON_FRAME_OLIVEOIL;
        break;
      case p.CollectableEnum.GLASS:
        t = l.ResourcePanelItem.ICON_FRAME_GLASS;
        break;
      case p.CollectableEnum.COAL:
        t = l.ResourcePanelItem.ICON_FRAME_COAL;
        break;
      case p.CollectableEnum.IRON:
        t = l.ResourcePanelItem.ICON_FRAME_IRON;
        break;
      case p.CollectableEnum.HONEY:
        t = l.ResourcePanelItem.ICON_FRAME_HONEY;
        break;
      case p.CollectableEnum.MEAD:
        t = l.ResourcePanelItem.ICON_FRAME_MEAD;
        break;
      case p.CollectableEnum.BEEF:
        t = l.ResourcePanelItem.ICON_FRAME_BEEF;
    }
    return t;
  };
  CastleBaseResourcePanel.prototype.destroy = function () {
    this._isInitialized = false;
    if (this._resourceContainer != null) {
      for (var t = 0, i = this._resourceContainer; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.dispose();
        }
      }
    }
    this._resourceContainer = null;
    e.prototype.destroy.call(this);
  };
  CastleBaseResourcePanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = this.disp.stage.stageWidth * 0.5;
    }
  };
  CastleBaseResourcePanel.prototype.updateElementsPositions = function () {
    var e = a.int(this._totalContainerWidth * -0.5);
    var t = 0;
    this.resourcePanel.head_left.x = e;
    if (this._panelBar) {
      this._panelBar.disp.y = t;
      t += a.int(this._panelBar.disp.height);
      this._panelBar.setWidth(this._totalContainerWidth);
      this._panelBar.disp.x = 0;
    }
    if (this._resourceContainer != null) {
      for (var i = 0, n = this._resourceContainer; i < n.length; i++) {
        var s = n[i];
        if (s !== undefined) {
          if (o.instanceOfClass(s, "ResourcePanelSublayerButton")) {
            s.disp.x = e + s.disp.width / 2;
            s.disp.y = t + s.disp.mc_boosted.height / 2;
          } else {
            s.disp.y = t;
            s.disp.x = e;
          }
          e += a.int(s.disp.width);
        }
      }
    }
    this.resourcePanel.head_right.x = e;
    this.resourcePanel.setChildIndex(this.resourcePanel.head_left, this.resourcePanel.numChildren - 1);
    this.resourcePanel.setChildIndex(this.resourcePanel.head_right, this.resourcePanel.numChildren - 1);
  };
  CastleBaseResourcePanel.prototype.addResource = function (e, t = -1) {
    if (!this.hasResource(e)) {
      if (t > -1) {
        this._resourceContainer.splice(t, 0, e);
      } else {
        this._resourceContainer.push(e);
      }
      this.displayObject.addChild(e.disp);
      this.calculatePanelWidth();
      if (this.isInitialized) {
        this.updateElementsPositions();
      }
      this._toolTipBounds.x = -this._totalContainerWidth / 2;
      this._toolTipBounds.width = this._totalContainerWidth;
    }
  };
  CastleBaseResourcePanel.prototype.calculatePanelWidth = function () {
    var e = 0;
    if (this._resourceContainer != null) {
      for (var t = 0, i = this._resourceContainer; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.disp.width;
        }
      }
    }
    this._totalContainerWidth = e;
  };
  CastleBaseResourcePanel.prototype.hasResource = function (e) {
    return this._resourceContainer.indexOf(e) > -1;
  };
  CastleBaseResourcePanel.prototype.removeResource = function (e) {
    var t = a.int(this._resourceContainer.indexOf(e));
    if (t > -1) {
      this._totalContainerWidth -= e.disp.width;
      this.displayObject.removeChild(e.disp);
      this._resourceContainer.splice(t, 1);
      if (this.isInitialized) {
        this.updateElementsPositions();
      }
    }
    this.calculatePanelWidth();
  };
  CastleBaseResourcePanel.prototype.setPanelBar = function (e) {
    if (this._panelBar) {
      this.resourcePanel.removeChild(this._panelBar.disp);
      this._panelBar.dispose();
    }
    this._panelBar = e;
    if (this._panelBar) {
      this.resourcePanel.addChild(this._panelBar.disp);
    }
    if (this.isInitialized) {
      this.updateElementsPositions();
    }
  };
  Object.defineProperty(CastleBaseResourcePanel.prototype, "kingdomOverlayFrame", {
    set: function (e) {
      this.resourcePanel.head_left.mc_overlay.gotoAndStop(e);
      this.resourcePanel.head_right.mc_overlay.gotoAndStop(e);
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseResourcePanel.prototype.hideAllToolTips = function () {
    h.ResourcePanelToolTipManager.hideAllToolTips();
  };
  Object.defineProperty(CastleBaseResourcePanel.prototype, "displayObject", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseResourcePanel.prototype, "resourcePanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseResourcePanel.prototype.hasLaboratoryBoostFor = function (e) {
    var t = false;
    return !!s.CastleModel.areaData.activeArea && (s.CastleModel.areaData.activeArea.isMyMainCastle && (t = s.CastleModel.userData.isInAlliance && s.CastleModel.allianceData.myAllianceVO ? s.CastleModel.allianceData.myAllianceVO.landmarksList.getLaboratoryKingdomResourceBonus(s.CastleModel.kingdomData.activeKingdomID) > 0 : s.CastleModel.userData.laboratoryList.hasLaboratoryInKingdom(s.CastleModel.kingdomData.activeKingdomID)), t && s.CastleModel.areaData.activeStorage.getProducibleSpecialResource() == e);
  };
  return CastleBaseResourcePanel;
}(r.CastlePanel);
exports.CastleBaseResourcePanel = d;
var p = require("./12.js");
var h = require("./152.js");