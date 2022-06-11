import {getUrlParam, myLocalStorage, loadJs} from './tool'


// 获取url参数，兼容hash路由
console.log(getUrlParam('key'));

// 测试
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