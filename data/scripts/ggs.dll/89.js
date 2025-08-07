Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = createjs.EventDispatcher;
var s = require("./231.js");
var r = function (e) {
  function ContextMenu() {
    var t = e.call(this) || this;
    t._customItems = [];
    t._items = [];
    t._numItems = 0;
    t._builtInItems = new o();
    t._clipboardItems = new l();
    t._link = new s.URLRequest("");
    return t;
  }
  i.__extends(ContextMenu, e);
  ContextMenu.prototype.addItemAt = function (e, t) {
    return e;
  };
  ContextMenu.prototype.clone = function () {
    return new c();
  };
  ContextMenu.prototype.containsItem = function (e) {
    return false;
  };
  ContextMenu.prototype.display = function (e, t, n) {};
  ContextMenu.prototype.getItemAt = function (e) {
    return new u();
  };
  ContextMenu.prototype.getItemIndex = function (e) {
    return 0;
  };
  ContextMenu.prototype.hideBuiltInItems = function () {};
  ContextMenu.prototype.removeAllItems = function () {};
  ContextMenu.prototype.removeItemAt = function (e) {
    return new u();
  };
  Object.defineProperty(ContextMenu.prototype, "numItems", {
    get: function () {
      return this._numItems;
    },
    set: function (e) {
      this._numItems = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "link", {
    get: function () {
      return this._link;
    },
    set: function (e) {
      this._link = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "items", {
    get: function () {
      return this._items;
    },
    set: function (e) {
      this._items = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "isSupported", {
    get: function () {
      return this._isSupported;
    },
    set: function (e) {
      this._isSupported = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "customItems", {
    get: function () {
      return this._customItems;
    },
    set: function (e) {
      this._customItems = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "clipboardMenu", {
    get: function () {
      return this._clipboardMenu;
    },
    set: function (e) {
      this._clipboardMenu = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "clipboardItems", {
    get: function () {
      return this._clipboardItems;
    },
    set: function (e) {
      this._clipboardItems = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenu.prototype, "builtInItems", {
    get: function () {
      return this._builtInItems;
    },
    set: function (e) {
      this._builtInItems = e;
    },
    enumerable: true,
    configurable: true
  });
  return ContextMenu;
}(createjs.EventDispatcher);
exports.ContextMenu = r;
var o = function (e) {
  function ContextMenuBuiltInItems() {
    return e.call(this) || this;
  }
  i.__extends(ContextMenuBuiltInItems, e);
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "forwardAndBack", {
    get: function () {
      return this._forwardAndBack;
    },
    set: function (e) {
      this._forwardAndBack = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "loop", {
    get: function () {
      return this._loop;
    },
    set: function (e) {
      this._loop = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "play", {
    get: function () {
      return this._play;
    },
    set: function (e) {
      this._play = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "print", {
    get: function () {
      return this._print;
    },
    set: function (e) {
      this._print = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "zoom", {
    get: function () {
      return this._zoom;
    },
    set: function (e) {
      this._zoom = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "save", {
    get: function () {
      return this._save;
    },
    set: function (e) {
      this._save = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "rewind", {
    get: function () {
      return this._rewind;
    },
    set: function (e) {
      this._rewind = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuBuiltInItems.prototype, "quality", {
    get: function () {
      return this._quality;
    },
    set: function (e) {
      this._quality = e;
    },
    enumerable: true,
    configurable: true
  });
  return ContextMenuBuiltInItems;
}(Object);
exports.ContextMenuBuiltInItems = o;
var l = function (e) {
  function ContextMenuClipboardItems() {
    return e.call(this) || this;
  }
  i.__extends(ContextMenuClipboardItems, e);
  Object.defineProperty(ContextMenuClipboardItems.prototype, "selectAll", {
    get: function () {
      return this._selectAll;
    },
    set: function (e) {
      this._selectAll = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "paste", {
    get: function () {
      return this._paste;
    },
    set: function (e) {
      this._paste = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "cut", {
    get: function () {
      return this._cut;
    },
    set: function (e) {
      this._cut = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "copy", {
    get: function () {
      return this._copy;
    },
    set: function (e) {
      this._copy = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ContextMenuClipboardItems.prototype, "clear", {
    get: function () {
      return this._clear;
    },
    set: function (e) {
      this._clear = e;
    },
    enumerable: true,
    configurable: true
  });
  return ContextMenuClipboardItems;
}(Object);
exports.ContextMenuClipboardItems = l;
var u = function (e) {
  function NativeMenuItem() {
    return e.call(this) || this;
  }
  i.__extends(NativeMenuItem, e);
  return NativeMenuItem;
}(a);
exports.NativeMenuItem = u;
var c = function (e) {
  function NativeMenu() {
    return e.call(this) || this;
  }
  i.__extends(NativeMenu, e);
  return NativeMenu;
}(a);
exports.NativeMenu = c;