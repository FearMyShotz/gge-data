Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function SlotList(e, t = null) {
    this.nonEmpty = false;
    if (e || t) {
      if (!e) {
        throw new Error("Parameter head cannot be null.");
      }
      this.head = e;
      this.tail = t || SlotList.NIL;
      this.nonEmpty = true;
    } else {
      if (SlotList.NIL) {
        throw new Error("Parameters head and tail are null. Use the NIL element instead.");
      }
      this.nonEmpty = false;
    }
  }
  Object.defineProperty(SlotList.prototype, "length", {
    get: function () {
      if (!this.nonEmpty) {
        return 0;
      }
      if (this.tail == SlotList.NIL) {
        return 1;
      }
      var e = 0;
      for (var t = this; t.nonEmpty;) {
        ++e;
        t = t.tail;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  SlotList.prototype.prepend = function (e) {
    return new SlotList(e, this);
  };
  SlotList.prototype.append = function (e) {
    if (!e) {
      return this;
    }
    if (!this.nonEmpty) {
      return new SlotList(e);
    }
    if (this.tail == SlotList.NIL) {
      return new SlotList(e).prepend(this.head);
    }
    var t = new SlotList(this.head);
    var n = t;
    for (var i = this.tail; i.nonEmpty;) {
      n = n.tail = new SlotList(i.head);
      i = i.tail;
    }
    n.tail = new SlotList(e);
    return t;
  };
  SlotList.prototype.insertWithPriority = function (e) {
    if (!this.nonEmpty) {
      return new SlotList(e);
    }
    var t = e.priority;
    if (t > this.head.priority) {
      return this.prepend(e);
    }
    var n = new SlotList(this.head);
    var i = n;
    for (var a = this.tail; a.nonEmpty;) {
      if (t > a.head.priority) {
        i.tail = a.prepend(e);
        return n;
      }
      i = i.tail = new SlotList(a.head);
      a = a.tail;
    }
    i.tail = new SlotList(e);
    return n;
  };
  SlotList.prototype.filterNot = function (e) {
    if (!this.nonEmpty || e == null) {
      return this;
    }
    if (e == this.head.listener) {
      return this.tail;
    }
    var t = new SlotList(this.head);
    var n = t;
    for (var i = this.tail; i.nonEmpty;) {
      if (i.head.listener == e) {
        n.tail = i.tail;
        return t;
      }
      n = n.tail = new SlotList(i.head);
      i = i.tail;
    }
    return this;
  };
  SlotList.prototype.contains = function (e) {
    if (!this.nonEmpty) {
      return false;
    }
    for (var t = this; t.nonEmpty;) {
      if (t.head.listener == e) {
        return true;
      }
      t = t.tail;
    }
    return false;
  };
  SlotList.prototype.find = function (e) {
    if (!this.nonEmpty) {
      return null;
    }
    for (var t = this; t.nonEmpty;) {
      if (t.head.listener == e) {
        return t.head;
      }
      t = t.tail;
    }
    return null;
  };
  SlotList.prototype.toString = function () {
    var e = "";
    for (var t = this; t.nonEmpty;) {
      e += t.head + " -> ";
      t = t.tail;
    }
    return "[List " + (e += "NIL") + "]";
  };
  SlotList.NIL = new SlotList(null, null);
  return SlotList;
}();
exports.SlotList = i;