import { getUser } from '@/api';

export default {
    state: {
        userList: {}
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        // increment(state, payload) {
        //     return state + payload
        // }
    },
    effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async getUserList(data) {
            try {
                const res = await getUser(data);
                if(res.state == 200){
                    this.saveData({
                        userList: res.data
                    })
                }
                return res
            } catch (error) {
                console.error(error)
            }
        }
    }
}