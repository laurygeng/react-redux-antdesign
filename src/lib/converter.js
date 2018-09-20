
// import { PaginationConfig } from '../pagination';
import {
    PaginationConfig,
  } from 'antd/lib/pagination';
/**
 * Created by Halley on 16/6/20.
 * 时间对象的格式化;
 */
export function convertPageResponse(pageResponse, defaultPageSize=10) {
    const result = {
        list: [],
        pagination: {
          total: 0,
          pageSize: defaultPageSize,
          current: 1,
        },
      };
    if (!pageResponse) {
        return result;
    }
    result.list = pageResponse.resultData;
    var i = 0;
    for (let row of result.list) {
        row['key'] = i++;
    }
    result.pagination.total = pageResponse.pagination.totalCount;
    result.pagination.pageSize = pageResponse.pagination.pageSize;
    result.pagination.current = pageResponse.pagination.currentPageIndex;
    return result;
}
