import * as constants from './cnt'
import request from '@/utils/request';

export const getData = (data) => ({
    type: constants.GET_DATA,
    data
})

// export const getAppList = (data) => ({
//     type: constants.GET_APP_LIST,
//     data
// })

export const getAppList = (data) => {
    return (dispatch) => {
        // 当这个方法刚进来的时候，就马上告诉reducer，我要开始获取数据了，
        // reducer接收到这个动作，就会执行相应的操作(把isLoading改为true,看reducer里的代码)
        // dispatch({
        //     type: constants.GET_APP_LIST
        // });
        // 用setTimeout来模拟获取数据
        request.post('/v2/web/application/getAppList', data).then((res)=>{
            const action = {
                type: constants.GET_APP_LIST,
                // payload:{
                //     reducer3: res.data.results[0].email
                // }
                data
            }
            dispatch(action)
            // return action
        }).catch((err)=>{
            console.log(err)
        })
    }
}
