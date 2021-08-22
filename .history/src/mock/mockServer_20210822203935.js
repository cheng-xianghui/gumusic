
//这个文件就是专门来模拟mock数据接口的
import Mock from 'mockjs'
import banner from './banner.json'
import floor from '@/mock/floor'
import categoryList from './categoryList'
import searchList from './searchList'
import detail from '@/mock/detail'

//这两行就是在模拟数据接口
Mock.mock('/mock/banner',{code:200,data:banner}) //第一个参数，代表我们以后请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/floor',{code:200,data:floor}) //第一个参数，代表我们以后请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/categoryList',{code:200,data:categoryList})
Mock.mock('/mock/searchList',{code:200,data:searchList})
Mock.mock('/mock/detail',{code:200,data:detail})
Mock.mock('/mock/addcartsuccess',{code:200,data:addcartsuccess})
