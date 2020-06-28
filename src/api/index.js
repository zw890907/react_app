import request from '@/utils/request';
import { axios } from "@/utils/request";

/**
 * 获取app应用列表接口
 */
export function getAppList(data) {
    // return request.post('/v2/web/application/getAppList', data);
    return axios.get('/v2/v1/books/8/comment');
}