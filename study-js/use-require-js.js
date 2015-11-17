 require.config({
    baseUrl: 'avalon-study/',  //相对于index.html页面文件的地址
    paths:{   //这里配置的地址，都是相对于上方的baseUrl的
        avalon: 'js/avalon',
        domReady:'js/domReady'
    },
    shim:{
        avalon: { exports: "avalon" }
    }
});