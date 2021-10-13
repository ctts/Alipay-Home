export function isFunction(fn: any): Boolean {
  return Object.prototype.toString.call(fn) === '[object Function]';
}
