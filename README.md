# lbr-tool

## js工具库

### 使用方法

获取url参数，兼容hash路由
```javascript
import tool from './tool'

console.log(tool.getUrlParam('key'));
```

设置定时的localStorage缓存
```javascript
import tool from './tool'

console.log(tool.myLocalStorage.set('key','内容', 30000));
```


动态加载js
```javascript
// import tool from './tool'

// console.log(tool.loadJs('key','内容', 30000));
```