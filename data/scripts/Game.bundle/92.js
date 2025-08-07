Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(IsoEvent, e);
  IsoEvent.ON_SHOW_RING_MENU = "onShowRingMenu";
  IsoEvent.ON_HIDE_RING_MENU = "onHideRingMenu";
  IsoEvent.SHOW_PANEL_INFO = "showPanelInfo";
  IsoEvent.HIDE_PANEL_INFO = "hidePanelInfo";
  IsoEvent.ON_BUILDING_BUILD_PROGRESS = "onBuildingBuildProgress";
  IsoEvent.ON_BUILDING_CONSTRUCTION_DONE = "onBuildingConstructionDone";
  IsoEvent.ON_BUILDING_UPGRADE_STARTED = "onBuildingUpgradeStarted";
  IsoEvent.ON_OBJECT_ADDED = "onObjectAdded";
  IsoEvent.ON_OBJECT_CHANGED = "onObjectChanged";
  IsoEvent.ON_OBJECT_REMOVED = "onObjectRemoved";
  IsoEvent.ON_OBJECT_UPDATED = "onObjectUpdated";
  IsoEvent.ON_OBJECT_POS_CHANGED = "onObjectPosChanged";
  IsoEvent.ON_BUY_EXPANSION = "onBuyExpansion";
  IsoEvent.ON_EXPANSION_ARROW_REMOVED = "onExpansionArrowRemoved";
  IsoEvent.ON_EXPANSION_ARROW_ADDED = "onExpansionArrowAdded";
  IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE = "onDragOfNewObjectDone";
  IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED = "onDragOfNewObjectCanceled";
  IsoEvent.ON_DRAG_DONE = "onDragDone";
  IsoEvent.ON_DRAG_CANCELED = "onDragCanceled";
  IsoEvent.ON_DRAG_INVALID = "onDragInvalid";
  IsoEvent.ON_DRAG_STARTED_STORAGE_DECO = "onDragStartedStorageDeco";
  IsoEvent.ON_DECO_SHOP_DRAG_START = "onDecoShopDragStart";
  IsoEvent.ON_DECO_SHOP_DRAG_STOP = "onDecoShopDragStop";
  IsoEvent.ON_CAMERA_POS_CHANGED = "onCameraPosChanged";
  IsoEvent.ON_CAMERA_ZOOM_CHANGED = "onCameraZoomChanged";
  IsoEvent.ON_RENDERER_READY = "onRendererReady";
  IsoEvent.ON_RENDER_STRATEGY_CHANGED = "onRenderStrategyChanged";
  return IsoEvent;
}(require("./366.js").CastleEvent);
exports.IsoEvent = o;