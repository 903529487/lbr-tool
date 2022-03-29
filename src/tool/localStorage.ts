export default {
    set: function (key:string, stringVal:any, time:number) {
      try {
        if (!localStorage) {
          return false;
        }
        if (!time) {
          time = 60000000000000;
        }
        var cacheExpireDate = Date.now() + time * 1000;
        var cacheVal = {
          val: stringVal,
          exp: cacheExpireDate
        };
        localStorage.setItem(key, JSON.stringify(cacheVal)); //存入缓存值  
      } catch (e) {console.log(e)}
    },
    /**获取缓存*/
    get: function (key:string) {
      try {
        if (!localStorage) {
          return false;
        }
        var cacheVal = localStorage.getItem(key);
        var result = JSON.parse(cacheVal);
        var now = Date.now();
        if (!result) {
          return null;
        } //缓存不存在  
        if (now > result.exp) { //缓存过期  
          this.remove(key);
          return "";
        }
        return result.val;
      } catch (e) {
        this.remove(key);
        return null;
      }
    },
    /**移除缓存，一般情况不手动调用，缓存过期自动调用*/
    remove: function (key:string) {
      if (!localStorage) {
        return false;
      }
      localStorage.removeItem(key);
    },
    /**清空所有缓存*/
    clear: function () {
      if (!localStorage) {
        return false;
      }
      localStorage.clear();
    }
  }