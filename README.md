# lbr-tool

## js工具库

### 使用方法

```javascript
import tool from './tool'

// 获取url参数，兼容hash路由
console.log(tool.getUrlParam('key'));


// 设置缓存
tool.myLocalStorage.set('keys','内容',20000)

// 设置缓存
const keys=tool.myLocalStorage.get('keys')
console.log(keys)

// 删除缓存
tool.myLocalStorage.remove('keys')

// 动态加载js
tool.loadJs('http://code.jquery.com/jquery-migrate-1.2.1.min.js',()=>{
    console.log('加载完成回调')
})
```