import Vue from 'vue'
import VeeValidate from 'vee-validate'
// 提示信息中文化
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

//提示信息中文化
VeeValidate.Validator.localize('zh_CN',{
    message:{
        ...zh_CN.messages,
        is:(field)=>`${field}必须与密码一致`
    }
})
