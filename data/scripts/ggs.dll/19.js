var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = require("./7.js");
var r = require("./639.js");
exports.create = function create(e, t) {
  t.check = e;
  t.validate = validate;
  t.guard = function guard(e) {
    return validate(e).success;
  };
  t.Or = function Or(e) {
    return s.Union(t, e);
  };
  t.And = function And(e) {
    return s.Intersect(t, e);
  };
  t.withConstraint = function withConstraint(e, n) {
    return s.Constraint(t, e, n);
  };
  t.reflect = t;
  t.toString = function () {
    return "Runtype<" + r.default(t) + ">";
  };
  return t;
  function validate(t) {
    try {
      e(t);
      return {
        success: true,
        value: t
      };
    } catch (e) {
      return {
        success: false,
        message: e.message
      };
    }
  }
};
var o = function (e) {
  function ValidationError(t) {
    return e.call(this, t) || this;
  }
  a(ValidationError, e);
  return ValidationError;
}(Error);
exports.ValidationError = o;
exports.validationError = function validationError(e) {
  return new o(e);
};