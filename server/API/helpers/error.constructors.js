exports.BadRequest = class BadRequest extends (
  Error
) {
  constructor(message) {
    super(message);
    this.status = 400;
    this.stack = null;
  }
};

exports.NotAuthorized = class NotAuthorized extends (
  Error
) {
  constructor(message = "Not authorized") {
    super(message);
    this.status = 401;
    this.stack = null;
  }
};

exports.LoginOccupied = class LoginOccupied extends (
  Error
) {
  constructor(message) {
    super(message);
    this.status = 409;
    this.stack = null;
  }
};

exports.NotFound = class NotFound extends (
  Error
) {
  constructor(message) {
    super(message);
    this.status = 404;
    this.stack = null;
  }
};

exports.Forbidden = class Forbidden extends (
  Error
) {
  constructor(message = "Access denied") {
    super(message);
    this.status = 403;
    this.stack = null;
  }
};