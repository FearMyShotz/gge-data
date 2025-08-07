var i = require("./722.js").Buffer;
var a = i.isEncoding || function (e) {
  switch ((e = "" + e) && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function StringDecoder(e) {
  var t;
  this.encoding = function normalizeEncoding(e) {
    var t = function _normalizeEncoding(e) {
      if (!e) {
        return "utf8";
      }
      var t;
      for (;;) {
        switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t) {
              return;
            }
            e = ("" + e).toLowerCase();
            t = true;
        }
      }
    }(e);
    if (typeof t != "string" && (i.isEncoding === a || !a(e))) {
      throw new Error("Unknown encoding: " + e);
    }
    return t || e;
  }(e);
  switch (this.encoding) {
    case "utf16le":
      this.text = utf16Text;
      this.end = utf16End;
      t = 4;
      break;
    case "utf8":
      this.fillLast = utf8FillLast;
      t = 4;
      break;
    case "base64":
      this.text = base64Text;
      this.end = base64End;
      t = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = i.allocUnsafe(t);
}
function utf8CheckByte(e) {
  if (e <= 127) {
    return 0;
  } else if (e >> 5 == 6) {
    return 2;
  } else if (e >> 4 == 14) {
    return 3;
  } else if (e >> 3 == 30) {
    return 4;
  } else if (e >> 6 == 2) {
    return -1;
  } else {
    return -2;
  }
}
function utf8FillLast(e) {
  var t = this.lastTotal - this.lastNeed;
  var n = function utf8CheckExtraBytes(e, t, n) {
    if ((t[0] & 192) != 128) {
      e.lastNeed = 0;
      return "�";
    }
    if (e.lastNeed > 1 && t.length > 1) {
      if ((t[1] & 192) != 128) {
        e.lastNeed = 1;
        return "�";
      }
      if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) {
        e.lastNeed = 2;
        return "�";
      }
    }
  }(this, e);
  if (n !== undefined) {
    return n;
  } else if (this.lastNeed <= e.length) {
    e.copy(this.lastChar, t, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  } else {
    e.copy(this.lastChar, t, 0, e.length);
    this.lastNeed -= e.length;
    return;
  }
}
function utf16Text(e, t) {
  if ((e.length - t) % 2 == 0) {
    var n = e.toString("utf16le", t);
    if (n) {
      var i = n.charCodeAt(n.length - 1);
      if (i >= 55296 && i <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = e[e.length - 2];
        this.lastChar[1] = e[e.length - 1];
        return n.slice(0, -1);
      }
    }
    return n;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = e[e.length - 1];
  return e.toString("utf16le", t, e.length - 1);
}
function utf16End(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var n = this.lastTotal - this.lastNeed;
    return t + this.lastChar.toString("utf16le", 0, n);
  }
  return t;
}
function base64Text(e, t) {
  var n = (e.length - t) % 3;
  if (n === 0) {
    return e.toString("base64", t);
  } else {
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
      this.lastChar[0] = e[e.length - 1];
    } else {
      this.lastChar[0] = e[e.length - 2];
      this.lastChar[1] = e[e.length - 1];
    }
    return e.toString("base64", t, e.length - n);
  }
}
function base64End(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  } else {
    return t;
  }
}
function simpleWrite(e) {
  return e.toString(this.encoding);
}
function simpleEnd(e) {
  if (e && e.length) {
    return this.write(e);
  } else {
    return "";
  }
}
exports.StringDecoder = StringDecoder;
StringDecoder.prototype.write = function (e) {
  if (e.length === 0) {
    return "";
  }
  var t;
  var n;
  if (this.lastNeed) {
    if ((t = this.fillLast(e)) === undefined) {
      return "";
    }
    n = this.lastNeed;
    this.lastNeed = 0;
  } else {
    n = 0;
  }
  if (n < e.length) {
    if (t) {
      return t + this.text(e, n);
    } else {
      return this.text(e, n);
    }
  } else {
    return t || "";
  }
};
StringDecoder.prototype.end = function utf8End(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    return t + "�";
  } else {
    return t;
  }
};
StringDecoder.prototype.text = function utf8Text(e, t) {
  var n = function utf8CheckIncomplete(e, t, n) {
    var i = t.length - 1;
    if (i < n) {
      return 0;
    }
    var a = utf8CheckByte(t[i]);
    if (a >= 0) {
      if (a > 0) {
        e.lastNeed = a - 1;
      }
      return a;
    }
    if (--i < n || a === -2) {
      return 0;
    }
    if ((a = utf8CheckByte(t[i])) >= 0) {
      if (a > 0) {
        e.lastNeed = a - 2;
      }
      return a;
    }
    if (--i < n || a === -2) {
      return 0;
    }
    if ((a = utf8CheckByte(t[i])) >= 0) {
      if (a > 0) {
        if (a === 2) {
          a = 0;
        } else {
          e.lastNeed = a - 3;
        }
      }
      return a;
    }
    return 0;
  }(this, e, t);
  if (!this.lastNeed) {
    return e.toString("utf8", t);
  }
  this.lastTotal = n;
  var i = e.length - (n - this.lastNeed);
  e.copy(this.lastChar, 0, i);
  return e.toString("utf8", t, i);
};
StringDecoder.prototype.fillLast = function (e) {
  if (this.lastNeed <= e.length) {
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
  this.lastNeed -= e.length;
};