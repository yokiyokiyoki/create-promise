# 关于 promise

> 中文意思是对于未来的约定

## 历史

- 于 1976 年提出来
- c++中的概念为 future，参见[维基百科](https://zh.wikibooks.org/wiki/C%2B%2B/STL/Future)
- 有 Promises/A+和 Promises/A 标准，前者兼容后者并拓展，是当今的标准规范
  - [promises/A+规范](http://www.ituring.com.cn/article/66566)

## 用法

```javascript
let x; //假设x是用户输入
let p = new promise((resolve, reject) => {
  if (x > 10) {
    resolve(x);
  } else {
    reject(10);
  }
});
```
