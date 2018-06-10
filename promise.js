//executor是function(resolve,reject){}
function myPromise(executor) {
  let self = this;
  self.status = "pending"; //promise当前状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolve(value) {
    if (self.status === "pending") {
      self.status = "resolved";
      self.data = value;
      self.onResolvedCallback.length &&
        self.onResolvedCallback.forEach(fn => {
          fn(value);
        });
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.status = "rejected";
      self.data = reason;
      self.onRejectedCallback.length &&
        self.onRejectedCallback.forEach(fn => {
          fn(value);
        });
    }
  }
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

//接下来是then方法，那自然而然是在prototype上了

myPromise.prototype.then = function(onResolved, onRejected) {
  let self = this;
  let promise2;

  //标准上规定这两个必须是函数
  onResolved = typeof onResolved === "function" ? onResolved : function(v) {};
  onRejected = typeof onRejected === "function" ? onRejected : function(r) {};

  //promise1传过来有三种状态
  if (self.status === "resolved") {
    promise2 = new myPromise((resolve, reject) => {});
    return;
  }
  if (self.status === "rejected") {
    promise2 = new myPromise((resolve, reject) => {});
    return;
  }
  if (self.status === "pending") {
    promise2 = new myPromise((resolve, reject) => {});
    return;
  }
};
