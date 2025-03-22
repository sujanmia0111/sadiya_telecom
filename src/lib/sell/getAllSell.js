const Sell = require('@root/models/sell');

const getAllSell = async (filterDate) => {
    // Convert filterDate to a Date object in UTC
    const filterDateObj = filterDate ? new Date(filterDate + "T00:00:00.000Z") : new Date();

    // Set the start of the day in UTC (00:00:00)
    const startOfDay = new Date(filterDateObj);
    startOfDay.setUTCHours(0, 0, 0, 0);

    // Set the end of the day in UTC (23:59:59)
    const endOfDay = new Date(filterDateObj);
    endOfDay.setUTCHours(23, 59, 59, 999);
    return Sell.find({
        date: {
            $gte: startOfDay.toISOString(), // Greater than or equal to the start of the day
            $lte: endOfDay.toISOString(),   // Less than or equal to the end of the day
        },
    }).populate('product').populate({
        path: 'soldBy',
        select: 'name'
    }).sort({createdAt: -1});
};


module.exports = getAllSell;