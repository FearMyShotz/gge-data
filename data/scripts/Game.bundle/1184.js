Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./91.js");
var l = require("./26.js");
var c = require("./4.js");
var u = require("./130.js");
var d = require("./8.js");
var p = function (e) {
  function CastleRotationPanel() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.RotationPanel()) || this;
  }
  n.__extends(CastleRotationPanel, e);
  CastleRotationPanel.prototype.init = function () {
    e.prototype.init.call(this);
    d.ButtonHelper.initBasicButtons([this.rotationPanel.btn_rotate, this.rotationPanel.btn_exit]);
    this.rotationPanel.btn_rotate.toolTipText = "rotate";
    this.rotationPanel.btn_exit.toolTipText = "dialog_recruit_abort";
  };
  CastleRotationPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.controller.addEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    c.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    c.CastleModel.privateOfferData.addEventListener(u.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleRotationPanel.prototype.hide = function () {
    this.controller.removeEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    c.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEndSpecialEvent));
    c.CastleModel.privateOfferData.removeEventListener(u.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this._rotationTarget = null;
    e.prototype.hide.call(this);
  };
  CastleRotationPanel.prototype.initAfterShow = function (e) {
    this._rotationTarget = e;
    this.updatePosition();
  };
  CastleRotationPanel.prototype.updatePosition = function () {
    if (this.rotationPanel && this.rotationPanel.stage) {
      this.rotationPanel.y = this.rotationPanel.stage.stageHeight;
      this.rotationPanel.x = this.rotationPanel.stage.stageWidth / 2;
      if (this.env.hasNetworkBuddies) {
        this.rotationPanel.y -= s.ClientConstCastle.BUDDY_PANEL_HEIGHT;
      }
    }
  };
  CastleRotationPanel.prototype.onClick = function (e) {
    switch (e.target) {
      case this.rotationPanel.btn_rotate:
        this.onRotateButtonClick();
        break;
      case this.rotationPanel.btn_exit:
        this.onAbortButtonClick();
    }
  };
  CastleRotationPanel.prototype.onRotateButtonClick = function () {
    if (this.rotationTarget && this.rotationTarget.disp) {
      this.rotationTarget.vo.rotate();
      this.rotationTarget.updateRotation();
      if (a.instanceOfClass(this.rotationTarget, "ABasicBuildingVE")) {
        this.rotationTarget.renewCollisionFloor();
      }
      h.Iso.renderer.mouse.onDragTileMove();
    }
  };
  CastleRotationPanel.prototype.onAbortButtonClick = function () {
    h.Iso.renderer.mouse.cancelDraggedTarget();
    this._rotationTarget = null;
    this.hide();
  };
  CastleRotationPanel.prototype.onChangeLayoutState = function (e) {
    if (this.rotationTarget && h.Iso.renderer.mouse.isDragging) {
      this.show();
    } else {
      this.hide();
    }
  };
  CastleRotationPanel.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (this.rotationTarget) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_DRAG);
    } else {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleRotationPanel.prototype.onEndSpecialEvent = function (e) {
    if (a.instanceOfClass(e.specialEventVO, "PrimeSaleEventVO") && this.rotationTarget) {
      var t = e.specialEventVO;
      if (this.rotationTarget.vo.wodId == t.primeSaleComponent.wodID) {
        h.Iso.renderer.mouse.cancelDraggedTarget();
      }
    }
  };
  CastleRotationPanel.prototype.onOfferRemoved = function (e) {};
  Object.defineProperty(CastleRotationPanel.prototype, "rotationPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRotationPanel.prototype, "rotationTarget", {
    get: function () {
      return this._rotationTarget;
    },
    enumerable: true,
    configurable: true
  });
  CastleRotationPanel.__initialize_static_members = function () {
    CastleRotationPanel.NAME = "CastleRotationPanel";
  };
  return CastleRotationPanel;
}(require("./131.js").CastlePanel);
exports.CastleRotationPanel = p;
var h = require("./33.js");
p.__initialize_static_members();