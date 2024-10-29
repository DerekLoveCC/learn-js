function HoistVar() {
  a = 5;
  console.log(a); // 5
}
HoistVar();
console.log(a); // 5 函数HoistVar内部定义的变量a在函数外部也是可见的，因为变量声明没有指定var或者let，所以会被提升到全局。
