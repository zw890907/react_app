import request from '@/utils/request';
import { axios } from "@/utils/request";

/**
 * 获取用户信息
 */
export function getUser(data) {
    return request({
      url: 'http://cmsfront.wjtest.chinamcloud.cn/v2/web/cmc/getUser',
      method: 'get',
      // headers: {
      //   'tenantId': getIdsObj().tenantId||''
      // },
    });
  }