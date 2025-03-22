const dashboardService = require('@root/lib/dashboard');


const getDashboard = async (req, res, next) => {
    try {
        const dashboard = await dashboardService.getDashboard();
        res.status(200).json(dashboard);
    } catch (error) {
        next(error);
    }
};

module.exports = {getDashboard};