Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./26.js");
var u = require("./4.js");
var d = function (e) {
  function CastleConstructionExpertEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleConstructionExpertEventDialog.NAME) || this;
  }
  n.__extends(CastleConstructionExpertEventDialog, e);
  CastleConstructionExpertEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new r.LocalizedTextVO("dialog_eventArchitekt_speechBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_eventArchitekt_description")).autoFitToBounds = true;
  };
  CastleConstructionExpertEventDialog.prototype.applyPropertiesLoaded = function (e = null) {
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    var t = u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_CONSTRUCTION_EXPERT).buildingList;
    this.initScrollList(t);
  };
  CastleConstructionExpertEventDialog.buildingSortOrder = function (e, t) {
    if (e.group != t.group) {
      return l.int(e.group > t.group ? 1 : -1);
    } else if (e.name != t.name) {
      return l.int(e.name > t.name ? 1 : -1);
    } else if (e.level != t.level) {
      return l.int(e.level > t.level ? 1 : -1);
    } else {
      return 0;
    }
  };
  CastleConstructionExpertEventDialog.prototype.initScrollList = function (e) {
    e.sort(CastleConstructionExpertEventDialog.buildingSortOrder);
    this.scrollList = new o.ItemScrollList(this.dialogDisp, this.dialogDisp);
    this.scrollList.scrollStep = 2;
    this.scrollList.scrollItemClass = p.ConstructionExpertScrollItem;
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      this.scrollList.pushContent(i.infoDialogVO);
    }
    this.scrollList.hideButtons = false;
    this.scrollList.initList(0);
  };
  CastleConstructionExpertEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleConstructionExpertEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.constructionExpertEventVO.eventId) {
      this.hide();
    }
  };
  CastleConstructionExpertEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  Object.defineProperty(CastleConstructionExpertEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionExpertEventDialog.__initialize_static_members = function () {
    CastleConstructionExpertEventDialog.NAME = "CastleConstructionExpertEvent";
  };
  return CastleConstructionExpertEventDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleConstructionExpertEventDialog = d;
var p = require("./4414.js");
a.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();