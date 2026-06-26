String.prototype.isUpperCase = function () {
  return !this.split('').some(
    (c) => c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122,
  );
};

String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

String.prototype.isUpperCase = function () {
  return this.toUpperCase() == this;
};
