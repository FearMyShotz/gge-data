Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./479.js");
var s = require("./478.js");
var r = require("./481.js");
var o = createjs.EventDispatcher;
var l = createjs.MouseEvent;
var u = createjs.Container;
var c = require("./44.js");
var _ = require("./2.js").getLogger("CountrySelectComponent");
var d = function (e) {
  function CountrySelectComponent(t, n, i, a, s = null) {
    var r = e.call(this) || this;
    r.DEFAULT_COUNTRYS_PER_LINE = 2;
    r.DEFAULT_BUTTON_OFFSET_X = 10;
    r.DEFAULT_BUTTON_OFFSET_Y = 10;
    r.DEFAULT_ARROW_UP = 1;
    r.DEFAULT_ARROW_DOWN = 2;
    r.DEFAULT_BGOFFSET_HEIGHT = 0;
    r.DEFAULT_TOOLTIP_OFFSETX = 20;
    r.DEFAULT_TOOLTIP_OFFSETY = 18;
    r.DEFAULT_TOOLTIP_OFFSET = 20;
    r._selectedCountry = null;
    r._buttonOffsetX = r.DEFAULT_BUTTON_OFFSET_X;
    r._buttonOffsetY = r.DEFAULT_BUTTON_OFFSET_Y;
    r._bgOffsetHeight = r.DEFAULT_BGOFFSET_HEIGHT;
    r._tooltipOffsetX = r.DEFAULT_TOOLTIP_OFFSETX;
    r._tooltipOffsetY = r.DEFAULT_TOOLTIP_OFFSETY;
    r._tooltipOffset = r.DEFAULT_TOOLTIP_OFFSET;
    if (a === undefined) {
      a = r.DEFAULT_COUNTRYS_PER_LINE;
    }
    r._countryMC = t;
    r._tooltipBackground = n;
    r._countryList = i;
    r._countriesPerLine = a;
    r.getTextByIDFunction = s;
    r.addCountryButtons();
    r.countryMC.btn_arrow.addEventListener(l.CLICK, r.bindFunction(r.toggleCountryPopUp));
    return r;
  }
  i.__extends(CountrySelectComponent, e);
  CountrySelectComponent.prototype.destroy = function () {
    var e;
    var t;
    this.countryMC.btn_arrow.removeEventListener(l.CLICK, this.bindFunction(this.toggleCountryPopUp));
    var n = this.countryMC.mc_flagholder.numChildren;
    for (t = 0; t < n; ++t) {
      (e = this.countryMC.mc_flagholder.getChildAt(t)).removeEventListener(l.MOUSE_OVER, this.bindFunction(this.showCountryNameTooltip));
      e.removeEventListener(l.MOUSE_OUT, this.bindFunction(this.hideCountryNameTooltip));
    }
  };
  CountrySelectComponent.prototype.toggleCountryPopUp = function (e) {
    if (this.countryMC.mc_bg.scaleY > 1) {
      this.hideChoiceCountry();
    } else {
      this.showChoiceCountry();
    }
  };
  CountrySelectComponent.prototype.addCountryButtons = function (e = null) {
    if (e) {
      this._countryList = e;
    }
    while (this.countryMC.mc_flagholder.numChildren > 0) {
      this.countryMC.mc_flagholder.getChildAt(0).removeEventListener(l.CLICK, this.bindFunction(this.onClickCountry));
      this.countryMC.mc_flagholder.removeChildAt(0);
    }
    this.countryMC.mc_flagholder.visible = false;
    if (this._countryList.length == 1) {
      this._countryMC.visible = false;
      _.debug("Hiding the Language Selection since we only have 1 language available!");
    }
    for (var t = 0; t < this._countryList.length; t++) {
      var n = this._countryList[t];
      try {
        var i = new (a.AssetManager.manager.getClass("country_" + n.ggsCountryCode))();
        if (i) {
          var r = new s.CountryPickerButton();
          r.addChild(i);
          r.country = n;
          r.name = "country_" + n.ggsCountryCode;
          r.mouseChildren = false;
          r.addEventListener(l.CLICK, this.bindFunction(this.onClickCountry));
          r.addEventListener(l.MOUSE_OVER, this.bindFunction(this.showCountryNameTooltip));
          r.addEventListener(l.MOUSE_OUT, this.bindFunction(this.hideCountryNameTooltip));
          this.countryMC.mc_flagholder.addChild(r);
        }
      } catch (e) {
        c.error("country unkown: " + n.ggsCountryCode);
      }
    }
    this.positionCountryBtn();
    this.hideChoiceCountry();
  };
  CountrySelectComponent.prototype.showCountryNameTooltip = function (e) {
    var t = e.currentTarget;
    try {
      var n = new (a.AssetManager.manager.getClass("CountryName_" + t.country.ggsCountryCode))();
      this._tooltipBackground.width = n.width + this._tooltipOffsetX;
      this._tooltipBackground.height = n.height + this._tooltipOffsetY;
      n.y = -this._tooltipOffsetY / 3;
      this._tooltipDisp = new u();
      this._tooltipDisp.addChild(this._tooltipBackground);
      this._tooltipDisp.addChild(n);
      this._tooltipDisp.x = t.x;
      this._tooltipDisp.y = t.y - this._tooltipOffset;
      this.countryMC.mc_flagholder.addChild(this._tooltipDisp);
    } catch (e) {}
  };
  CountrySelectComponent.prototype.hideCountryNameTooltip = function (e) {
    if (this._tooltipDisp) {
      this.countryMC.mc_flagholder.removeChild(this._tooltipDisp);
      this._tooltipDisp = null;
    }
  };
  CountrySelectComponent.prototype.onClickCountry = function (e) {
    var t = e.target.country;
    this.selectedCountryButton(t);
    this.hideChoiceCountry();
  };
  CountrySelectComponent.prototype.positionCountryBtn = function () {
    for (var e = 0; e < this.countryMC.mc_flagholder.numChildren; e++) {
      var t = this.countryMC.mc_flagholder.getChildAt(e);
      if (t) {
        t.x = (t.width + this._buttonOffsetX) * (e % this._countriesPerLine);
        t.y = (t.height + this._buttonOffsetY) * Math.floor(e / this._countriesPerLine) + 12;
        this._choiceCountryHeight = t.height + t.y;
      }
    }
    this.countryMC.mc_flagholder.y = -(this._choiceCountryHeight + this.countryMC.mc_bg.height);
  };
  CountrySelectComponent.prototype.hideChoiceCountry = function () {
    this.countryMC.mc_flagholder.visible = false;
    this.countryMC.mc_bg.scaleY = 1;
    this.countryMC.btn_arrow.gotoAndStop(this.DEFAULT_ARROW_UP);
    this.dispatchEvent(new r.CountrySelectComponentEvent(r.CountrySelectComponentEvent.COUNTRY_VIEW_CLOSED));
  };
  CountrySelectComponent.prototype.showChoiceCountry = function () {
    this.countryMC.mc_flagholder.visible = true;
    var e = this.countryMC.mc_bg.height + this._choiceCountryHeight - this.countryMC.mc_currentflag.y + this._bgOffsetHeight;
    this.countryMC.mc_bg.scaleY = e / this.countryMC.mc_bg.height;
    this.countryMC.btn_arrow.gotoAndStop(this.DEFAULT_ARROW_DOWN);
    this.dispatchEvent(new r.CountrySelectComponentEvent(r.CountrySelectComponentEvent.COUNTRY_VIEW_OPENED));
  };
  CountrySelectComponent.prototype.selectedCountryButton = function (e) {
    if (!this._countryList || this._countryList.length <= 1) {
      this.countryMC.visible = false;
    } else if (!this._selectedCountry || this._selectedCountry.ggsCountryCode != e.ggsCountryCode) {
      try {
        this.selectChild(this.countryMC.mc_flagholder.getChildByName("country_" + e.ggsCountryCode));
      } catch (t) {
        _.debug("Tried to select country, but failed: " + e.ggsCountryCode);
      }
      while (this.countryMC.mc_currentflag.numChildren > 0) {
        this.countryMC.mc_currentflag.removeChildAt(0);
      }
      var t = new (a.AssetManager.manager.getClass("country_" + e.ggsCountryCode))();
      if (t) {
        t.name = e.ggsCountryCode;
        this.countryMC.mc_currentflag.addChild(t);
      }
      this._selectedCountry = e;
      this.dispatchEvent(new r.CountrySelectComponentEvent(r.CountrySelectComponentEvent.COUNTRY_CHANGED, this._selectedCountry));
    }
  };
  CountrySelectComponent.prototype.setDefaultCountry = function (e) {
    this.selectedCountryButton(e);
  };
  CountrySelectComponent.prototype.selectChild = function (e) {
    e.filters = [this._glowFilter];
  };
  CountrySelectComponent.prototype.deselectedChild = function (e) {
    if (e.filters.length > 0) {
      e.filters = [];
    }
  };
  Object.defineProperty(CountrySelectComponent.prototype, "glowFilter", {
    set: function (e) {
      this._glowFilter = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CountrySelectComponent.prototype, "countryMC", {
    get: function () {
      return this._countryMC;
    },
    enumerable: true,
    configurable: true
  });
  return CountrySelectComponent;
}(o);
exports.CountrySelectComponent = d;