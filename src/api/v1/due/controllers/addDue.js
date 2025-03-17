const dueService = require("@root/lib/due");

const addDue = async (req, res, next) => {
  try {
    const {
      customerName,
      totalAmount, 
      mobileNo,
      paidDate     
    } = req.body;
    const due = await dueService.addDue({
        customerName,
        totalAmount,
        mobileNo,
        paidDate,
        dueAmount: totalAmount,
        status: "Unpaid",
        transactions: []
    });
    res.status(200).json(due);
  } catch (error) {
    next(error);
  }
};

module.exports = addDue;


