import produce from 'immer';
import set from 'lodash/set';

/**
 * 用于保存数据公共方法
 */
// export const saveDataCommon = produce((state, payload) => {
//   Object.keys(payload).forEach(k => state[k] = payload[k]);
// });
export const saveDataCommon = produce((state, payload) => {
    Object.keys(payload).forEach(k => set(state, k, payload[k]));
});


