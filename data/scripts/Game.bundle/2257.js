module.exports = function enhanceError(e, t, i, n, o) {
  e.config = t;
  if (i) {
    e.code = i;
  }
  e.request = n;
  e.response = o;
  e.isAxiosError = true;
  e.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return e;
};