/**
MyPlugin.install = function (Vue, option) {
  // 1. 添加全局的方法或属性，如：vue-custom-element
  Vue.myGlobalMethod = function(){
    // 逻辑。。。
  }
  // 2. 添加全局资源：指令、过滤器、过渡等，如vue-touch
  Vue.directive('my-directive', {

  })
//  3、通过全局mixin方法添加一些组件选项，如vuex
  Vue.mixin({
    created: function(){

    }
  })
//  4、添加实例方法，通过把它们添加到Vue.prototype上实现。
  Vue.prototype.$myMethod = function(){
    // 逻辑。。。
  }
};
 */

// vue-toast是通过添加实例的方法实现的。
var Toast = {};

Toast.install = function(Vue, options){
  // Vue.prototype.$msg = 'Hello World';
  let opt = {
    defaultType: 'bottom',
    duration: '2500'
  };
  for(let property in options){
    opt[property] = options[property];
  }
  Vue.prototype.$toast = (tips, type) => {
    if(type){
      opt.defaultType = type;
    }
    if(document.getElementsByClassName('vue-toast').length){
      return;
    }
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-'+opt.defaultType+'">' + tips + '</div>'
    });
    let tpl = new toastTpl().$mount().$el;
    document.body.appendChild(tpl);
    console.log(opt.duration);
    setTimeout(function(){
      document.body.removeChild(tpl);
    }, opt.duration);
  };

  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })
};

export default Toast;

