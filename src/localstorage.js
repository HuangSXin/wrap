const store = window.localStorage;

// 获取localStorage
// const prods = JSON.parse(store.getItem('login')||{});

store.saveItem=function (obj) {
    console.log(obj)
    store.setItem('login',JSON.stringify(obj))
}

export default store;
