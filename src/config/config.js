const config = {
    page: 1,
    limit: 12,
    sort_type: 'dsc',
    sort_by: 'updatedAt',
    search: '',
    totalItems: 0,
    category: '',
    subCategory: '',
    min_price: 0,
    max_price: 1200000,
    min_rating: 0,
    max_rating: 5,
    in_stock: false,
    reseller: false
};

module.exports = Object.freeze(config)