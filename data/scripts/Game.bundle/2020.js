Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./8.js");
var r = require("./242.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function CollectableRendererInfoButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererInfoButton, e);
  CollectableRendererInfoButton.prototype.reset = function () {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.visible = false;
    }
  };
  CollectableRendererInfoButton.prototype.addListener = function () {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.addEventListener(l.CLICK, this.bindFunction(this.onInfoButtonClick));
    }
  };
  CollectableRendererInfoButton.prototype.removeListener = function () {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.removeEventListener(l.CLICK, this.bindFunction(this.onInfoButtonClick));
    }
  };
  CollectableRendererInfoButton.prototype.update = function () {
    if (this.clips.infoBtn) {
      s.ButtonHelper.initBasicButton(this.clips.infoBtn);
      this.clips.infoBtn.visible = this.canShowButton();
    }
  };
  CollectableRendererInfoButton.prototype.setVisibility = function (e) {
    if (this.clips.infoBtn) {
      this.clips.infoBtn.visible = e;
    }
  };
  CollectableRendererInfoButton.prototype.canShowButton = function () {
    if (!this.itemVO) {
      return false;
    }
    if (a.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
      var e = this.itemVO.buildingVO;
      return !!e && !a.instanceOfClass(e, "CustomDecoBuildingVO");
    }
    return true;
  };
  CollectableRendererInfoButton.prototype.onInfoButtonClick = function (e) {
    if (this.itemVE && this.clips.infoBtn && s.ButtonHelper.isButtonEnabled(e.target)) {
      this.itemVE.onInfoButtonClicked();
    }
  };
  return CollectableRendererInfoButton;
}(r.ACollectableRenderComponent);
exports.CollectableRendererInfoButton = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");