var i = {};
function createErrorType(e, t, n) {
  n ||= Error;
  var a = function (e) {
    function NodeError(n, i, a) {
      return e.call(this, function getMessage(e, n, i) {
        if (typeof t == "string") {
          return t;
        } else {
          return t(e, n, i);
        }
      }(n, i, a)) || this;
    }
    (function _inheritsLoose(e, t) {
      e.prototype = Object.create(t.prototype);
      e.prototype.constructor = e;
      e.__proto__ = t;
    })(NodeError, e);
    return NodeError;
  }(n);
  a.prototype.name = n.name;
  a.prototype.code = e;
  i[e] = a;
}
function oneOf(e, t) {
  if (Array.isArray(e)) {
    var n = e.length;
    e = e.map(function (e) {
      return String(e);
    });
    if (n > 2) {
      return `one of ${t} ${e.slice(0, n - 1).join(", ")}, or ${e[n - 1]}`;
    } else if (n === 2) {
      return `one of ${t} ${e[0]} or ${e[1]}`;
    } else {
      return `of ${t} ${e[0]}`;
    }
  }
  return `of ${t} ${String(e)}`;
}
createErrorType("ERR_INVALID_OPT_VALUE", function (e, t) {
  return "The value \"" + t + "\" is invalid for option \"" + e + "\"";
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function (e, t, n) {
  var i;
  var a;
  if (typeof t == "string" && function startsWith(e, t, n) {
    return e.substr(!n || n < 0 ? 0 : +n, t.length) === t;
  }(t, "not ")) {
    i = "must not be";
    t = t.replace(/^not /, "");
  } else {
    i = "must be";
  }
  if (function endsWith(e, t, n) {
    if (n === undefined || n > e.length) {
      n = e.length;
    }
    return e.substring(n - t.length, n) === t;
  }(e, " argument")) {
    a = `The ${e} ${i} ${oneOf(t, "type")}`;
  } else {
    var s = function includes(e, t, n) {
      if (typeof n != "number") {
        n = 0;
      }
      return !(n + t.length > e.length) && e.indexOf(t, n) !== -1;
    }(e, ".") ? "property" : "argument";
    a = `The "${e}" ${s} ${i} ${oneOf(t, "type")}`;
  }
  return a += `. Received type ${typeof n}`;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
  return "The " + e + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function (e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function (e) {
  return "Unknown encoding: " + e;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.codes = i;