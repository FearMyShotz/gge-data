Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./71.js");
var l = require("./4.js");
var c = require("./1117.js");
var u = require("./840.js");
var d = require("./152.js");
var p = function (e) {
  function CastleSpecialResourcePanel(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSpecialResourcePanel, e);
  CastleSpecialResourcePanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.controller.addEventListener(r.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
    this.onChangeResources();
  };
  CastleSpecialResourcePanel.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(r.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onChangeCastleParameters));
  };
  CastleSpecialResourcePanel.prototype.updatePosition = function () {};
  CastleSpecialResourcePanel.prototype.initResourceItems = function () {
    if (l.CastleModel.areaData.activeStorage) {
      this._availableSpecialResources = l.CastleModel.areaData.activeStorage.getReceivableSpecialResources();
      for (var e = 0; e < this._availableSpecialResources.length; e++) {
        var t = this._availableSpecialResources[e];
        var i = new u.ResourcePanelItem(this.getSpecialResourceItemFrameForCollectableEnum(t));
        i.resourceType = t;
        var n = l.CastleModel.boostData.getOverseer(t);
        i.isBoosted = !!n && n.isActive;
        this.addResource(i);
      }
      this.populationContainer = new u.ResourcePanelItem(u.ResourcePanelItem.ICON_FRAME_POPULATION);
      this.populationContainer.isBoosted = false;
      this.populationContainer.isStorageBarVisible = false;
      this.addResource(this.populationContainer);
      this.onChangeResources();
    }
  };
  CastleSpecialResourcePanel.prototype.updateResources = function () {
    var e = this;
    var t = this._availableSpecialResources;
    if (l.CastleModel.areaData.activeStorage) {
      this._availableSpecialResources = l.CastleModel.areaData.activeStorage.getReceivableSpecialResources();
      var i = t.filter(function (t) {
        return e._availableSpecialResources.indexOf(t) < 0;
      });
      if (i.length > 0) {
        this._resourceContainer.concat().forEach(function (t) {
          if (i.indexOf(t.resourceType) >= 0) {
            e.removeResource(t);
          }
        });
      }
      this._availableSpecialResources.filter(function (e) {
        return t.indexOf(e) < 0;
      }).forEach(function (t) {
        var i = new u.ResourcePanelItem(e.getSpecialResourceItemFrameForCollectableEnum(t));
        i.resourceType = t;
        i.isBoosted = false;
        e.addResource(i);
      });
      this.onChangeResources();
      this.onChangeCastleParameters();
    }
  };
  CastleSpecialResourcePanel.prototype.updateBoostIndicators = function () {
    if (this._resourceContainer != null) {
      for (var e = 0, t = this._resourceContainer; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isResourceContainer) {
          var n = i;
          var o = this.hasLaboratoryBoostFor(n.resourceType);
          n.setBoostIndicator(o, o);
        }
      }
    }
  };
  CastleSpecialResourcePanel.prototype.onChangeResources = function (e = null) {
    if (this._resourceContainer != null) {
      for (var t = 0, i = this._resourceContainer; t < i.length; t++) {
        var n = i[t];
        var a = o.castAs(n, "ResourcePanelItem");
        if (a && a.resourceType) {
          if (!l.CastleModel.areaData.activeStorage) {
            return;
          }
          a.setValue(l.CastleModel.areaData.getActiveStorageItem(a.resourceType).amount);
          a.setStorageBar(l.CastleModel.areaData.getActiveStorageItem(a.resourceType).filledInPercent);
        }
      }
    }
  };
  CastleSpecialResourcePanel.prototype.updateElementsPositions = function () {
    var e = s.int(this._totalContainerWidth * -0.5);
    this.specialResourcePanel.head_left.x = e;
    if (this._resourceContainer != null) {
      for (var t = 0, i = this._resourceContainer; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (a.instanceOfClass(n, "ResourcePanelSublayerButton")) {
            n.disp.x = e + n.disp.width / 2;
            n.disp.y = 0 + n.disp.mc_boosted.height / 2;
          } else {
            n.disp.y = 0;
            n.disp.x = e;
          }
          e += s.int(n.disp.width);
        }
      }
    }
    this.specialResourcePanel.head_right.x = e;
    this.specialResourcePanel.setChildIndex(this.specialResourcePanel.head_left, this.specialResourcePanel.numChildren - 1);
    this.specialResourcePanel.setChildIndex(this.specialResourcePanel.head_right, this.specialResourcePanel.numChildren - 1);
  };
  CastleSpecialResourcePanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target.resourceType) {
      var i = t.target.resourceType;
      this.showToolTip(this.getToolTipTypeForCollectableEnum(i), t.target);
    }
    switch (t.target) {
      case this.populationContainer.disp:
        this.showToolTip(d.ResourcePanelToolTipManager.TOOL_TIP_TYPE_INFO_POPULATION, this.populationContainer.disp);
    }
  };
  CastleSpecialResourcePanel.prototype.onChangeCastleParameters = function (e = null) {
    if (l.CastleModel.areaData.activeStorage) {
      this.populationContainer.setValue(l.CastleModel.areaData.activeCommonInfo.population);
    }
  };
  CastleSpecialResourcePanel.prototype.destroy = function () {
    if (this._resourceContainer != null) {
      for (var t = 0, i = this._resourceContainer; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.removeResource(n);
        }
      }
    }
    this.removeResource(this.populationContainer);
    this.populationContainer.dispose();
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleSpecialResourcePanel.prototype, "kingdomOverlayFrame", {
    get: function () {
      return Object.getOwnPropertyDescriptor(c.CastleBaseResourcePanel.prototype, "kingdomOverlayFrame").get.call(this);
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialResourcePanel.prototype, "specialResourcePanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialResourcePanel.prototype.isAvailable = function () {
    return this._availableSpecialResources.length > 0;
  };
  return CastleSpecialResourcePanel;
}(c.CastleBaseResourcePanel);
exports.CastleSpecialResourcePanel = p;