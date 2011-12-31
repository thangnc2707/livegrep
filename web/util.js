/*
 * Used to invoke callbacks on remote objects, where they may or may not provide
 * a method of the appropriate name, or may provide something that is not even a
 * function.
 *
 * An alternate approach would be to validate remote objects as soon as we get
 * them, but that seems more error-prone, especially during prototyping.
 */
function remote_call(obj, fn) {
  var args = Array.prototype.slice.call(arguments, 2);
  try {
    obj[fn].apply(obj, args);
  } catch (e) {
    console.log("fn: %s", e);
  }
}

module.exports.remote_call = remote_call;
