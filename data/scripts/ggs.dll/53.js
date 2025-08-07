var e = require("./24.js");
var i = exports;
function merge(e, t, n) {
  for (var i = Object.keys(t), a = 0; a < i.length; ++a) {
    if (e[i[a]] === undefined || !n) {
      e[i[a]] = t[i[a]];
    }
  }
  return e;
}
function newError(e) {
  function CustomError(e, t) {
    if (!(this instanceof CustomError)) {
      return new CustomError(e, t);
    }
    Object.defineProperty(this, "message", {
      get: function () {
        return e;
      }
    });
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    } else {
      Object.defineProperty(this, "stack", {
        value: new Error().stack || ""
      });
    }
    if (t) {
      merge(this, t);
    }
  }
  (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
  Object.defineProperty(CustomError.prototype, "name", {
    get: function () {
      return e;
    }
  });
  CustomError.prototype.toString = function toString() {
    return this.name + ": " + this.message;
  };
  return CustomError;
}
i.asPromise = require("./507.js");
i.base64 = require("./995.js");
i.EventEmitter = require("./996.js");
i.float = require("./997.js");
i.inquire = require("./508.js");
i.utf8 = require("./998.js");
i.pool = require("./999.js");
i.LongBits = require("./1000.js");
i.global = typeof window != "undefined" && window || e !== undefined && e || typeof self != "undefined" && self || this;
i.emptyArray = Object.freeze ? Object.freeze([]) : [];
i.emptyObject = Object.freeze ? Object.freeze({}) : {};
i.isNode = Boolean(i.global.process && i.global.process.versions && i.global.process.versions.node);
i.isInteger = Number.isInteger || function isInteger(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
};
i.isString = function isString(e) {
  return typeof e == "string" || e instanceof String;
};
i.isObject = function isObject(e) {
  return e && typeof e == "object";
};
i.isset = i.isSet = function isSet(e, t) {
  var n = e[t];
  return n != null && !!e.hasOwnProperty(t) && (typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0);
};
i.Buffer = function () {
  try {
    var e = i.inquire("buffer").Buffer;
    if (e.prototype.utf8Write) {
      return e;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}();
i._Buffer_from = null;
i._Buffer_allocUnsafe = null;
i.newBuffer = function newBuffer(e) {
  if (typeof e == "number") {
    if (i.Buffer) {
      return i._Buffer_allocUnsafe(e);
    } else {
      return new i.Array(e);
    }
  } else if (i.Buffer) {
    return i._Buffer_from(e);
  } else if (typeof Uint8Array == "undefined") {
    return e;
  } else {
    return new Uint8Array(e);
  }
};
i.Array = typeof Uint8Array != "undefined" ? Uint8Array : Array;
i.Long = i.global.dcodeIO && i.global.dcodeIO.Long || i.global.Long || i.inquire("long");
i.key2Re = /^true|false|0|1$/;
i.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
i.longToHash = function longToHash(e) {
  if (e) {
    return i.LongBits.from(e).toHash();
  } else {
    return i.LongBits.zeroHash;
  }
};
i.longFromHash = function longFromHash(e, t) {
  var n = i.LongBits.fromHash(e);
  if (i.Long) {
    return i.Long.fromBits(n.lo, n.hi, t);
  } else {
    return n.toNumber(Boolean(t));
  }
};
i.merge = merge;
i.lcFirst = function lcFirst(e) {
  return e.charAt(0).toLowerCase() + e.substring(1);
};
i.newError = newError;
i.ProtocolError = newError("ProtocolError");
i.oneOfGetter = function getOneOf(e) {
  var t = {};
  for (var n = 0; n < e.length; ++n) {
    t[e[n]] = 1;
  }
  return function () {
    var e = Object.keys(this);
    for (var n = e.length - 1; n > -1; --n) {
      if (t[e[n]] === 1 && this[e[n]] !== undefined && this[e[n]] !== null) {
        return e[n];
      }
    }
  };
};
i.oneOfSetter = function setOneOf(e) {
  return function (t) {
    for (var n = 0; n < e.length; ++n) {
      if (e[n] !== t) {
        delete this[e[n]];
      }
    }
  };
};
i.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true
};
i._configure = function () {
  var e = i.Buffer;
  if (e) {
    i._Buffer_from = e.from !== Uint8Array.from && e.from || function Buffer_from(t, n) {
      return new e(t, n);
    };
    i._Buffer_allocUnsafe = e.allocUnsafe || function Buffer_allocUnsafe(t) {
      return new e(t);
    };
  } else {
    i._Buffer_from = i._Buffer_allocUnsafe = null;
  }
};