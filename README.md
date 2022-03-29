# lbr-tool

## js工具库

### 使用方法

#### 按需加载
```javascript
import getUrlParam from 'lbr-tool/lib/getUrlParam'
import myLocalStorage from 'lbr-tool/lib/myLocalStorage'
```

#### 全部加载
```javascript
import {getUrlParam, myLocalStorage, loadJs} from 'lbr-tool'

// 获取url参数，兼容hash路由
console.log(getUrlParam('key'));

// 设置缓存
myLocalStorage.set('keys', '内容', 20000)

// 设置缓存
const keys = myLocalStorage.get('keys')
console.log(keys)

// 删除缓存
myLocalStorage.remove('keys')


// 动态加载js
loadJs('http://code.jquery.com/jquery-migrate-1.2.1.min.js', () => {
    console.log('加载完成回调')
})
```