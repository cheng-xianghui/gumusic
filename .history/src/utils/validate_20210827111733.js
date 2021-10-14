import Vue from 'vue'
import VeeValidate from 'vee-validate'
// 提示信息中文化
import zh_CN from 'vee-validate/'
Vue.use(VeeValidate)

//提示信息中文化
VeeValidate.Validator.localize('zh_CN',{
    message:{
        ...zh_CN.messages,
        is:(field)=>`${field}必须与密码一致`  //修改内置规则的message
    },
    attributes:{
        // 给校验的field属性名映射中文名
        phone:'手机号',
        code:'验证码',
        password:'密码',
        password2:'确认密码',
        isChecked:'协议'
    }
})

// 自定义校验规则
VeeValidate.Validator.extend('agree',{
    validate:value=>{
        return value
    },
    getMessage:field=>field+'必须同意'
})
