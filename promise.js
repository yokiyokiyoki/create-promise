//executor是function(resolve,reject){}
function promise(executor) {
  let self = this;
  self.status = "pending"; //promise当前状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [];
  self.onReejectedCallback = [];

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
      self.onResolvedCallback.length &&
        self.onResolvedCallback.forEach(fn => {
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
