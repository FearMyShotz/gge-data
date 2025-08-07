Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./1.js");
var l = require("./118.js");
var c = require("./1197.js");
var u = require("./4.js");
var d = require("./871.js");
var p = require("./87.js");
var h = require("./113.js");
var g = require("./122.js");
var C = require("./92.js");
var _ = require("./487.js");
var m = createjs.Point;
l.getLogger("IsoViewMouse");
var f = function (e) {
  function IsoViewMouse() {
    var t = this;
    t._focusMousePos = new m();
    t._currentMouseGridPos = new m();
    t._startDragGridPos = new m();
    t._currentDragGridPos = new m();
    t._startDragRot = 0;
    t._dragMouseOffset = new m();
    t._isDragAndDrop = false;
    t._draggedWordOneTile = false;
    t._isWorldDragging = false;
    t._lastWorldDragMousePos = new m();
    t._isDragTargetANewBuyObject = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoViewMouse, e);
  IsoViewMouse.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.reset();
  };
  IsoViewMouse.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._hoveredTarget = null;
    this._selectedTarget = null;
    this._focusedTarget = null;
    this._draggedTarget = null;
    this._newBuyObjectVE = null;
    this._draggedWordOneTile = false;
    this._isWorldDragging = false;
    this._isDragTargetANewBuyObject = false;
    this._dragOnDistrict = null;
  };
  IsoViewMouse.prototype.setup = function () {
    e.prototype.setup.call(this);
    this.reset();
  };
  IsoViewMouse.prototype.startWorldDragging = function () {
    if (!this.isWorldDragging) {
      this._isWorldDragging = true;
      this._draggedWordOneTile = false;
      var e = this.getMouseStagePos();
      this._lastWorldDragMousePos.x = e.x;
      this._lastWorldDragMousePos.y = e.y;
      E.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  IsoViewMouse.prototype.stopWorldDragging = function () {
    if (this.isWorldDragging) {
      this._isWorldDragging = false;
      this._draggedWordOneTile = false;
      T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_ARROW);
      E.CastleLayoutManager.getInstance().stage.enableMouseOver(O.CastleGame.STAGE_MOUSEOVER_TIME);
    }
  };
  IsoViewMouse.prototype.onWorldDragMove = function () {
    this._draggedWordOneTile = true;
    T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_DRAG);
    var e = this.getMouseStagePos();
    var t = new m((e.x - this._lastWorldDragMousePos.x) / this.isoRenderer.camera.getCurrentZoomValue(), (e.y - this._lastWorldDragMousePos.y) / this.isoRenderer.camera.getCurrentZoomValue());
    this.isoRenderer.camera.scrollRel(t);
    this._lastWorldDragMousePos.x = e.x;
    this._lastWorldDragMousePos.y = e.y;
  };
  IsoViewMouse.prototype.startDraggingTarget = function (e, t = true, i = false, n = true) {
    if (this.draggedTarget != e && this.isMyArea) {
      if (this.draggedTarget) {
        this.cancelDraggedTarget();
      }
      this._isDragAndDrop = true;
      this._dragOnDistrict = null;
      this._draggedTarget = e;
      if (this.draggedTarget && this.draggedTarget.vo.isMovable) {
        this.changeFocusedTarget(this.draggedTarget);
        this.deselectTarget();
        if (this.hoveredTarget != e) {
          this.unHoverTarget(true);
        }
        T.IsoHelper.view.showBuildingInfoText(false);
        this.startDragGridPos.x = this.draggedTarget.vo.x;
        this.startDragGridPos.y = this.draggedTarget.vo.y;
        this._startDragRot = s.int(this.draggedTarget.vo.rotation);
        var o = this.isoRenderer.camera.getScreenPosByGridPos(this.draggedTarget.vo.pos);
        if (t) {
          if (this.focusedTarget) {
            this.dragMouseOffset.x = o.x - this.focusMousePos.x;
            this.dragMouseOffset.y = o.y - this.focusMousePos.y;
          } else {
            var a = this.getMouseScreenPos();
            this.dragMouseOffset.x = o.x - a.x;
            this.dragMouseOffset.y = o.y - a.y;
          }
        } else {
          this.dragMouseOffset.x = 0;
          this.dragMouseOffset.y = 0;
        }
        this._isDragTargetANewBuyObject = i;
        this.isoRenderer.layers.getIsoLayer(h.IsoLayerEnum.INTERACTION).addChild(this.draggedTarget.elementContainer);
        this.draggedTarget.updateDisp();
        this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(true);
        if (this.isDragTargetANewBuyObject && r.instanceOfClass(this.draggedTarget, "ABasicBuildingVE")) {
          this.draggedTarget.setCollisionFloorVisibility(true);
        }
        this.draggedTarget.updateInteractionVisibility();
        T.IsoHelper.view.showRotationPanel(n, this.draggedTarget);
        this.onDragTileMove();
      }
      E.CastleLayoutManager.getInstance().stage.enableMouseOver(2);
    }
  };
  IsoViewMouse.prototype.dropDraggedTarget = function () {
    var e;
    E.CastleLayoutManager.getInstance().stage.enableMouseOver(O.CastleGame.STAGE_MOUSEOVER_TIME);
    if (this.draggedTarget) {
      if (this.isoRenderer.isoData.grid.isDimensionFreeForBuild(this.currentDragGridPos, this.draggedTarget.vo.dimension, this.draggedTarget.vo.objectId)) {
        this.isoRenderer.layers.getIsoLayer(h.IsoLayerEnum.ISO_OBJECTS).addChild(this.draggedTarget.elementContainer);
        if (this.draggedTarget.vo.isInBuildingDistrict) {
          this.isoRenderer.objects.isoLayerObjects.push(this.draggedTarget);
        }
        this.draggedTarget.updateDisp();
        this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(false);
        T.IsoHelper.view.showRotationPanel(false);
        e = this.draggedTarget;
        this._draggedTarget = null;
        this._isDragAndDrop = false;
        this.informServerAboutNewDraggedPos(e);
        if (this.isDragTargetANewBuyObject) {
          y.CastleComponent.controller.dispatchEvent(new C.IsoEvent(C.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, [e.vo.wodId]));
        } else {
          y.CastleComponent.controller.dispatchEvent(new C.IsoEvent(C.IsoEvent.ON_DRAG_DONE, [e]));
        }
        this.unHoverTarget();
        this.unFocusTarget();
        e.updateInteractionVisibility();
        if (this.isDragTargetANewBuyObject) {
          this.newBuyObjectVE.destroy();
          this._newBuyObjectVE = null;
        }
        this._isDragTargetANewBuyObject = false;
      } else {
        var t = this.getDistrictAtPos(this.currentDragGridPos);
        if (!!t && t.canAddBuilding(this.draggedTarget.vo)) {
          this.isoRenderer.layers.getIsoLayer(h.IsoLayerEnum.INTERACTION).removeChild(this.draggedTarget.elementContainer);
          if (!this.isDragTargetANewBuyObject || !!this.draggedTarget.vo.isInBuildingDistrict) {
            this.isoRenderer.objects.isoLayerObjects.splice(this.isoRenderer.objects.isoLayerObjects.indexOf(this.draggedTarget), 1);
          }
          this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(false);
          T.IsoHelper.view.showRotationPanel(false);
          e = this.draggedTarget;
          this._draggedTarget = null;
          this._isDragAndDrop = false;
          this.unHoverTarget();
          this.unFocusTarget();
          e.updateInteractionVisibility();
          if (this.isDragTargetANewBuyObject) {
            v.Iso.controller.server.buyObjectFromShop(e.vo.wodId, new m(-1, -1), e.vo.rotation, t.objectId);
          } else {
            u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SMoveToDistrictVO(e.vo.objectId, t.objectId));
          }
        } else if (this.isDragAndDrop) {
          this.cancelDraggedTarget();
        }
      }
    }
  };
  IsoViewMouse.prototype.cancelDraggedTarget = function () {
    E.CastleLayoutManager.getInstance().stage.enableMouseOver(O.CastleGame.STAGE_MOUSEOVER_TIME);
    if (this.draggedTarget) {
      if (this.draggedTarget.vo.isInBuildingDistrict) {
        this.isoRenderer.layers.getIsoLayer(h.IsoLayerEnum.INTERACTION).removeChild(this.draggedTarget.elementContainer);
      } else {
        this.isoRenderer.layers.getIsoLayer(h.IsoLayerEnum.ISO_OBJECTS).addChild(this.draggedTarget.elementContainer);
        this.draggedTarget.updateDisp();
        this.draggedTarget.vo.rotation = this._startDragRot;
        this.draggedTarget.updatePosition();
        this.draggedTarget.updateRotation();
        v.Iso.controller.processor.executeCommand(new I.IsoCommandZSortObject(this.draggedTarget));
      }
      if (this.isDragTargetANewBuyObject) {
        y.CastleComponent.controller.dispatchEvent(new C.IsoEvent(C.IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED, [this.newBuyObjectVE.vo.wodId]));
      } else {
        y.CastleComponent.controller.dispatchEvent(new C.IsoEvent(C.IsoEvent.ON_DRAG_CANCELED, [this.newBuyObjectVE]));
      }
      var e = this.draggedTarget;
      this._draggedTarget = null;
      this._isDragAndDrop = false;
      this.startDragGridPos.x = 0;
      this.startDragGridPos.y = 0;
      this._startDragRot = 0;
      this.unHoverTarget();
      this.unFocusTarget();
      if (!this.isDragTargetANewBuyObject) {
        e.updateInteractionVisibility();
      }
      if (this.isDragTargetANewBuyObject) {
        this.newBuyObjectVE.destroy();
        this._newBuyObjectVE = null;
      }
      this._isDragTargetANewBuyObject = false;
      this.isoRenderer.objects.innerBuildings.setCollisionFloorVisibility(false);
      T.IsoHelper.view.showRotationPanel(false);
    }
  };
  IsoViewMouse.prototype.onDragTileMove = function () {
    if (this.draggedTarget) {
      var e = this.getMouseScreenPos();
      var t = this.isoRenderer.camera.getGridPosByScreenPos(new m(e.x + this.dragMouseOffset.x, e.y + this.dragMouseOffset.y));
      var i = this.isoRenderer.isoData.grid.getValidDragPosForBuilding(t, this.draggedTarget.vo.dimension);
      var n = this.isoRenderer.camera.getScreenPosByGridPos(i);
      if (this.draggedTarget.elementContainer) {
        this.draggedTarget.elementContainer.x = n.x;
        this.draggedTarget.elementContainer.y = n.y;
      }
      this.currentDragGridPos.x = i.x;
      this.currentDragGridPos.y = i.y;
      if (r.instanceOfClass(this.draggedTarget, "ABasicBuildingVE")) {
        var o = this.getDistrictAtPos(i);
        var a = !!o && o.canAddBuilding(this.draggedTarget.vo);
        var s = this.isoRenderer.isoData.grid.isDimensionFreeForBuild(i, this.draggedTarget.vo.dimension, this.draggedTarget.vo.objectId);
        this.draggedTarget.updateDragCollisionFloorEffect(s || a);
        if (o) {
          this._dragOnDistrict = v.Iso.renderer.objects.provider.getObjectById(o.objectId);
          if (this._dragOnDistrict && this._dragOnDistrict.vo.objectId != this.draggedTarget.vo.objectId) {
            this._dragOnDistrict.updateDistrictFloorEffect(true);
          }
        } else {
          if (this._dragOnDistrict && this._dragOnDistrict.vo.objectId != this.draggedTarget.vo.objectId) {
            this._dragOnDistrict.updateDistrictFloorEffect(false);
          }
          this._dragOnDistrict = null;
        }
      }
    }
  };
  IsoViewMouse.prototype.startDraggingOfNewBuyObject = function (e = null) {
    if (!this.isDragging && this.isMyArea) {
      var t = S.castAs(T.IsoHelper.data.cloneIsoObject(e), "ABasicBuildingVO");
      if (t) {
        t.buildingState = p.IsoBuildingStateEnum.BUILD_COMPLETED;
        t.hitPoints = 100;
        this._newBuyObjectVE = T.IsoHelper.view.createIsoObjectVEFromVO(t);
        this.newBuyObjectVE.statusIcons.setVisibility(false);
        this.newBuyObjectVE.init(t);
        this.newBuyObjectVE.updateDisp();
        this.isoRenderer.strategies.switchBy(g.IsoRenderStrategyEnum.BUILD_MODE, true);
        this.startDraggingTarget(this.newBuyObjectVE, false, true);
      }
    }
  };
  IsoViewMouse.prototype.informServerAboutNewDraggedPos = function (e) {
    if (this.isDragTargetANewBuyObject) {
      var t = e.vo;
      if (t && t.uniqueBuildingId >= 0) {
        v.Iso.controller.server.placeCustomInventoryObject(t.uniqueBuildingId, this.currentDragGridPos, e.vo.rotation);
      } else {
        v.Iso.controller.server.buyObjectFromShop(e.vo.wodId, this.currentDragGridPos, e.vo.rotation);
      }
    } else {
      this.isoRenderer.isoData.updater.onIsoObjectMoved(e.vo, this.currentDragGridPos, e.vo.rotation);
    }
  };
  IsoViewMouse.prototype.changeSelectedTarget = function (e) {
    if (this.selectedTarget != e && !this.isDragging && this.isMyArea) {
      this.deselectTarget();
      if (!e.vo.isInBuildingDistrict || y.CastleComponent.dialogHandler.isDialogRegistered(b.BuildingDistrictDialog) || y.CastleComponent.layoutManager.isDialogVisible(b.BuildingDistrictDialog)) {
        if (e.interactiveVO.isRingmenuAvailable) {
          this._selectedTarget = e;
        }
        if (this.selectedTarget) {
          this.selectedTarget.hasRingMenu = true;
          this.selectedTarget.updateInteractionVisibility();
          T.IsoHelper.view.showRingMenu(true, this.selectedTarget);
        }
      } else {
        var t = e.vo;
        var i = s.int(u.CastleModel.areaData.activeCommonInfo.getDistrictObjectId(t.districtTypeID));
        var n = S.castAs(v.Iso.data.objects.provider.getObjectById(i), "ADistrictBuildingVO");
        if (n) {
          y.CastleComponent.dialogHandler.registerDefaultDialogs(b.BuildingDistrictDialog, new d.BuildingDistrictDialogProperties(n, e));
        }
      }
    }
  };
  IsoViewMouse.prototype.deselectTarget = function () {
    if (this.selectedTarget) {
      this.selectedTarget.hasRingMenu = false;
      var e = this.selectedTarget;
      this._selectedTarget = null;
      e.updateInteractionVisibility();
      T.IsoHelper.view.showRingMenu(false);
    }
  };
  IsoViewMouse.prototype.changeFocusedTarget = function (e) {
    if (this.focusedTarget != e && this.isMyArea) {
      this.unFocusTarget();
      this._focusedTarget = e;
      if (this.focusedTarget) {
        this.focusedTarget.updateInteractionVisibility();
        T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_DRAG);
        this._focusMousePos = this.getMouseScreenPos();
      }
    }
  };
  IsoViewMouse.prototype.unFocusTarget = function () {
    if (this.focusedTarget && this.focusedTarget != this.draggedTarget) {
      this.focusedTarget.updateInteractionVisibility();
      if (this.isoRenderer.strategies.currentStrategy.isActive(g.IsoRenderStrategyEnum.BUILD_MODE) && this.hoveredTarget) {
        T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_HAND);
      } else if (this.hoveredTarget && this.hoveredTarget.interactiveVO.isClickAvailable) {
        T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_DRAG);
      } else {
        T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_ARROW);
      }
    }
    this._focusedTarget = null;
  };
  IsoViewMouse.prototype.changeHoveredTarget = function (e) {
    if (this.hoveredTarget != e && !this.isDragging) {
      this.unHoverTarget();
      this._hoveredTarget = e;
      if (this.hoveredTarget) {
        if (this.hoveredTarget.interactiveVO.isRingmenuAvailable || this.hoveredTarget.interactiveVO.isClickAvailable) {
          if (this.isoRenderer.strategies.currentStrategy.isActive(g.IsoRenderStrategyEnum.BUILD_MODE) && this.hoveredTarget.vo.isMovable && !this.hoveredTarget.vo.isInBuildingDistrict) {
            T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_HAND);
          } else if (this.isMyArea) {
            T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_CLICK);
          } else {
            T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_ARROW);
          }
        } else {
          T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_ARROW);
        }
        if (this.hoveredTarget.interactiveVO.isInfoTooltipAvailable && !this.hoveredTarget.interactiveVO.isInBuildingDistrict) {
          T.IsoHelper.view.showBuildingInfoText(true, this.hoveredTarget);
        }
        this.hoveredTarget.updateInteractionVisibility();
        this.hoveredTarget.onHoverTarget();
      } else {
        T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_ARROW);
      }
      this.updateFloorCursor();
    }
  };
  IsoViewMouse.prototype.unHoverTarget = function (e = false) {
    if (this.hoveredTarget && (!this.isDragging || e)) {
      T.IsoHelper.view.changeCursor(a.BasicCustomCursor.CURSOR_ARROW);
      T.IsoHelper.view.showBuildingInfoText(false);
      this.hoveredTarget.onUnHoverTarget();
      var t = this.hoveredTarget;
      this._hoveredTarget = null;
      t.updateInteractionVisibility();
      this.updateFloorCursor();
    }
  };
  IsoViewMouse.prototype.updateFloorCursor = function () {
    var e = this.isoRenderer.objects.floorMarks.floorCursorVE;
    if (e) {
      e.elementContainer.visible = !this.draggedTarget && !this.focusedTarget && !this.hoveredTarget && this.isoRenderer.isoData.grid.isPointOnBuildingGround(this.currentMouseGridPos) && this.isoRenderer.strategies.currentStrategy.isActive(g.IsoRenderStrategyEnum.BUILD_MODE);
      if (e.elementContainer.visible) {
        e.updatePosition();
      }
      var t = this.isoRenderer.objects.floorMarks.debugPosVE;
      if (t) {
        t.elementContainer.visible = this.isoRenderer.settings.isDebugPosVisible;
        if (t.elementContainer.visible) {
          t.updatePosition();
        }
      }
    }
  };
  Object.defineProperty(IsoViewMouse.prototype, "isDragging", {
    get: function () {
      return this.draggedTarget != null;
    },
    enumerable: true,
    configurable: true
  });
  IsoViewMouse.prototype.getMouseScreenPos = function () {
    var e = this.isoRenderer.layers.transformLayer;
    if (e.stage) {
      return new m((e.stage.mouseX - e.x) / e.scaleX, (e.stage.mouseY - e.y) / e.scaleY);
    } else {
      return new m(0, 0);
    }
  };
  IsoViewMouse.prototype.getMouseGridPos = function () {
    return this.isoRenderer.camera.getGridPosByScreenPos(this.getMouseScreenPos());
  };
  IsoViewMouse.prototype.getMouseStagePos = function () {
    var e = T.IsoHelper.view.stage;
    return new m(e.mouseX, e.mouseY);
  };
  IsoViewMouse.prototype.getDistrictAtPos = function (e) {
    var t = this.isoRenderer.isoData.grid.getTile(e.x, e.y);
    var i = this.isoRenderer.isoData.objects.provider.getObjectById(t.objectId);
    if (r.instanceOfClass(i, "ADistrictBuildingVO")) {
      return i;
    } else {
      return null;
    }
  };
  IsoViewMouse.prototype.onMouseOverTarget = function (e) {
    this.changeHoveredTarget(e);
  };
  IsoViewMouse.prototype.onMouseOutTarget = function (e) {
    this.changeHoveredTarget(null);
  };
  IsoViewMouse.prototype.onMouseUpTarget = function (e) {
    var t = this.isWorldDragging && this.draggedWordOneTile;
    this.stopWorldDragging();
    if (this.draggedTarget) {
      this.dropDraggedTarget();
    } else {
      if (this.focusedTarget) {
        this.unFocusTarget();
      }
      if (!t && this.isMyArea) {
        if (e && e.interactiveVO.isClickAvailable && (r.instanceOfClass(e.vo, "ABasicBuildingVO") && e.vo.buildingState.isFunctionally || !r.instanceOfClass(e.vo, "ABasicBuildingVO")) || r.instanceOfClass(e, "AIsoMovementVE")) {
          e.onMouseClick();
        } else if (e.interactiveVO.isRingmenuAvailable) {
          this.changeSelectedTarget(e);
        }
      }
    }
  };
  IsoViewMouse.prototype.onMouseDownTarget = function (e) {
    if (this.isoRenderer.strategies.currentStrategy.isActive(g.IsoRenderStrategyEnum.BUILD_MODE) && e.vo.isMovable && !this.draggedTarget && !e.interactiveVO.isInBuildingDistrict) {
      this.changeFocusedTarget(e);
    } else if (!this.focusedTarget) {
      this.startWorldDragging();
    }
  };
  IsoViewMouse.prototype.onMouseDownOnGround = function () {
    if (!this.focusedTarget) {
      this.startWorldDragging();
    }
  };
  IsoViewMouse.prototype.onMouseUpOnGround = function () {
    if (this.isWorldDragging && this.draggedWordOneTile) {
      this.stopWorldDragging();
    } else {
      this.stopWorldDragging();
      this.dropDraggedTarget();
      this.deselectTarget();
    }
  };
  IsoViewMouse.prototype.onMouseOverPanel = function () {
    this.unHoverTarget();
    this.stopWorldDragging();
  };
  IsoViewMouse.prototype.onMouseOutPanel = function () {};
  IsoViewMouse.prototype.onDialogOpened = function () {
    this.cancelDraggedTarget();
    this.deselectTarget();
    this.unFocusTarget();
    this.unHoverTarget();
    this.stopWorldDragging();
  };
  IsoViewMouse.prototype.onRenderStrategyChanged = function () {
    var e;
    if (this.selectedTarget && !this.selectedTarget.interactiveVO.isRingmenuAvailable) {
      this.deselectTarget();
      this.updateFloorCursor();
    }
    if (this.hoveredTarget) {
      e = this.hoveredTarget;
      this.unHoverTarget();
      this.changeHoveredTarget(e);
    }
    if (this.focusedTarget) {
      e = this.focusedTarget;
      this.unFocusTarget();
      this.changeFocusedTarget(e);
    }
    if (this.selectedTarget) {
      e = this.selectedTarget;
      this.deselectTarget();
      this.changeSelectedTarget(e);
    }
  };
  IsoViewMouse.prototype.onMouseMove = function () {
    var e = this.getMouseScreenPos();
    var t = this.getMouseGridPos();
    if (t.x != this.currentMouseGridPos.x || t.y != this.currentMouseGridPos.y) {
      this.currentMouseGridPos.x = t.x;
      this.currentMouseGridPos.y = t.y;
      if (this.isWorldDragging) {
        this.onWorldDragMove();
      } else {
        this.onDragTileMove();
      }
      this.updateFloorCursor();
    }
    if (this.focusedTarget && !this.draggedTarget && this.focusedTarget.vo.isMovable && m.distance(this.focusMousePos, e) >= D.IsoConst.BUILDING_FOCUS_DISTANCE_TO_DRAGGING) {
      this.startDraggingTarget(this.focusedTarget, true, false, false);
    }
  };
  Object.defineProperty(IsoViewMouse.prototype, "hoveredTarget", {
    get: function () {
      return this._hoveredTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "selectedTarget", {
    get: function () {
      return this._selectedTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "draggedTarget", {
    get: function () {
      return this._draggedTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "focusedTarget", {
    get: function () {
      return this._focusedTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "focusMousePos", {
    get: function () {
      return this._focusMousePos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "currentDragGridPos", {
    get: function () {
      return this._currentDragGridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "startDragGridPos", {
    get: function () {
      return this._startDragGridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "dragMouseOffset", {
    get: function () {
      return this._dragMouseOffset;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "currentMouseGridPos", {
    get: function () {
      return this._currentMouseGridPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isWorldDragging", {
    get: function () {
      return this._isWorldDragging;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "worldLayer", {
    get: function () {
      return this.isoRenderer.layers.transformLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "draggedWordOneTile", {
    get: function () {
      return this._draggedWordOneTile;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "newBuyObjectVE", {
    get: function () {
      return this._newBuyObjectVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isDragTargetANewBuyObject", {
    get: function () {
      return this._isDragTargetANewBuyObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isMyArea", {
    get: function () {
      return y.CastleComponent.layoutManager.isInMyCastle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "isDragAndDrop", {
    get: function () {
      return this._isDragAndDrop;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewMouse.prototype, "startDragRot", {
    get: function () {
      return this._startDragRot;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewMouse;
}(_.AIsoViewComponent);
exports.IsoViewMouse = f;
o.classImplementsInterfaces(f, "ICollectableRendererList");
var O = require("./365.js");
var E = require("./17.js");
var y = require("./14.js");
var b = require("./695.js");
var D = require("./144.js");
var I = require("./486.js");
var T = require("./46.js");
var v = require("./33.js");
var S = require("./1.js");