const defaultConfig = require('../config/config');

const getPagination = ({
    page = defaultConfig.page,
    limit = defaultConfig.limit,
    totalItems = defaultConfig.totalItems
}) =>{
    const totalPages = Math.ceil(totalItems / limit);
    const pagination = {
        page,
        totalItems,
        totalPages
    };
    if(page < totalPages){
        pagination.next = page + 1;
    };
    if( page > 1){
        pagination.prev = page - 1;
    }
    return pagination;
}

module.exports = getPagination;