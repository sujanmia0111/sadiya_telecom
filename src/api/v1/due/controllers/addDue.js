const dueService = require("@root/lib/due");

const addDue = async (req, res, next) => {
  try {
    const {
      customerName,
      totalAmount, 
      mobileNo,
      paidDate,
      notes,
      dueType     
    } = req.body;
    // console.log("", req.body)
    const due = await dueService.addDue({
        customerName,
        totalAmount,
        mobileNo,
        paidDate,
        dueType,
        dueAmount: totalAmount,
        status: "Unpaid",
        addedAmountTransactions:[
          {
            amount: totalAmount,
            notes: notes
          }
        ],
        transactions: []
    });
    res.status(200).json(due);
  } catch (error) {
    next(error);
  }
};

module.exports = addDue;


