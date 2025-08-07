var n = require("./1282.js");
var o = Object.prototype.toString;
function isArray(e) {
  return o.call(e) === "[object Array]";
}
function isUndefined(e) {
  return e === undefined;
}
function isObject(e) {
  return e !== null && typeof e == "object";
}
function isPlainObject(e) {
  if (o.call(e) !== "[object Object]") {
    return false;
  }
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function isFunction(e) {
  return o.call(e) === "[object Function]";
}
function forEach(e, t) {
  if (e !== null && e !== undefined) {
    if (typeof e != "object") {
      e = [e];
    }
    if (isArray(e)) {
      for (var i = 0, n = e.length; i < n; i++) {
        t.call(null, e[i], i, e);
      }
    } else {
      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          t.call(null, e[o], o, e);
        }
      }
    }
  }
}
module.exports = {
  isArray: isArray,
  isArrayBuffer: function isArrayBuffer(e) {
    return o.call(e) === "[object ArrayBuffer]";
  },
  isBuffer: function isBuffer(e) {
    return e !== null && !isUndefined(e) && e.constructor !== null && !isUndefined(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  },
  isFormData: function isFormData(e) {
    return typeof FormData != "undefined" && e instanceof FormData;
  },
  isArrayBufferView: function isArrayBufferView(e) {
    if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(e);
    } else {
      return e && e.buffer && e.buffer instanceof ArrayBuffer;
    }
  },
  isString: function isString(e) {
    return typeof e == "string";
  },
  isNumber: function isNumber(e) {
    return typeof e == "number";
  },
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: function isDate(e) {
    return o.call(e) === "[object Date]";
  },
  isFile: function isFile(e) {
    return o.call(e) === "[object File]";
  },
  isBlob: function isBlob(e) {
    return o.call(e) === "[object Blob]";
  },
  isFunction: isFunction,
  isStream: function isStream(e) {
    return isObject(e) && isFunction(e.pipe);
  },
  isURLSearchParams: function isURLSearchParams(e) {
    return typeof URLSearchParams != "undefined" && e instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function isStandardBrowserEnv() {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: forEach,
  merge: function merge() {
    var e = {};
    function assignValue(t, i) {
      if (isPlainObject(e[i]) && isPlainObject(t)) {
        e[i] = merge(e[i], t);
      } else if (isPlainObject(t)) {
        e[i] = merge({}, t);
      } else if (isArray(t)) {
        e[i] = t.slice();
      } else {
        e[i] = t;
      }
    }
    for (var t = 0, i = arguments.length; t < i; t++) {
      forEach(arguments[t], assignValue);
    }
    return e;
  },
  extend: function extend(e, t, i) {
    forEach(t, function assignValue(t, o) {
      e[o] = i && typeof t == "function" ? n(t, i) : t;
    });
    return e;
  },
  trim: function trim(e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "");
  },
  stripBOM: function stripBOM(e) {
    if (e.charCodeAt(0) === 65279) {
      e = e.slice(1);
    }
    return e;
  }
};