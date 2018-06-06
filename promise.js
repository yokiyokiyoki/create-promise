function promise(executor) {
  let self = this;
  self.status = "pending"; //promise当前状态
  self.data = undefined; //promise的值
  self.onResolvedCallback = [];
  self.onReejectedCallback = [];
}
