Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function InfiniteScrollListClips(e = null) {
    this._itemMc = e;
    this.getDefaultsFromItemMc();
  }
  InfiniteScrollListClips.prototype.getDefaultsFromItemMc = function () {
    this._sliderMc = this._maskMc = this._itemContainerMc = null;
    if (this._itemMc) {
      this._sliderMc ||= this._itemMc.mc_scroll;
      this._maskMc ||= this._itemMc.mc_mask;
      this._itemContainerMc ||= this._itemMc.mc_items;
    }
  };
  InfiniteScrollListClips.prototype.addItemMc = function (e, t = false) {
    this._itemMc = e;
    if (t) {
      this.getDefaultsFromItemMc();
    }
    return this;
  };
  InfiniteScrollListClips.prototype.addMaskMc = function (e) {
    this._maskMc = e;
    return this;
  };
  InfiniteScrollListClips.prototype.addSliderMc = function (e) {
    this._sliderMc = e;
    return this;
  };
  InfiniteScrollListClips.prototype.addItemContainerMc = function (e) {
    this._itemContainerMc = e;
    return this;
  };
  InfiniteScrollListClips.prototype.addMouseWheelAreaMc = function (e) {
    this._mouseWheelAreaMc = e;
    return this;
  };
  Object.defineProperty(InfiniteScrollListClips.prototype, "itemMc", {
    get: function () {
      return this._itemMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "sliderMc", {
    get: function () {
      return this._sliderMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "maskMc", {
    get: function () {
      return this._maskMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "itemContainerMc", {
    get: function () {
      return this._itemContainerMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InfiniteScrollListClips.prototype, "mouseWheelAreaMc", {
    get: function () {
      return this._mouseWheelAreaMc;
    },
    enumerable: true,
    configurable: true
  });
  return InfiniteScrollListClips;
}();
exports.InfiniteScrollListClips = n;