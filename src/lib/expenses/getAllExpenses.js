const Expense = require("@root/models/expense");

const getAllExpenses = async (filterDate, type) => {
  let startDate, endDate;

  const now = new Date();

  if (type === "today") {
    // Set start and end of the current day
    startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);
    endDate = new Date();
    endDate.setUTCHours(23, 59, 59, 999);
  } else if (type === "currentMonth") {
    // Set start and end of the current month
    startDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), 1);
    endDate = new Date(now.getUTCFullYear(), now.getUTCMonth() + 1, 0);
    endDate.setUTCHours(23, 59, 59, 999);
  } else if (type === "customMonth" && filterDate) {
    // Parse the month name (e.g., "March") and get the corresponding month index
    const monthIndex = new Date(Date.parse(filterDate + " 1, 2000")).getMonth();
    const year = now.getUTCFullYear(); // Use current year for filtering

    if (!isNaN(monthIndex)) {
      startDate = new Date(year, monthIndex, 1);
      endDate = new Date(year, monthIndex + 1, 0);
      endDate.setUTCHours(23, 59, 59, 999);
    } else {
      throw new Error("Invalid month name provided.");
    }
  } else {
    throw new Error("Invalid type provided.");
  }

  // Fetch expenses within the filtered date range
  const expenses = await Expense.find({
    date: {
      $gte: startDate.toISOString(),
      $lte: endDate.toISOString(),
    },
  })
    .populate({
      path: "expenseBy",
      select: "name",
    })
    .sort({ createdAt: -1 });

  return expenses;
};

module.exports = getAllExpenses;

// const Expense = require("@root/models/expense");

// const getAllExpenses = async (filterDate) => {
//   // Convert filterDate to a Date object in UTC
//   const filterDateObj = filterDate
//     ? new Date(filterDate + "T00:00:00.000Z")
//     : new Date();

//   // Set the start of the day in UTC (00:00:00)
//   const startOfDay = new Date(filterDateObj);
//   startOfDay.setUTCHours(0, 0, 0, 0);

//   // Set the end of the day in UTC (23:59:59)
//   const endOfDay = new Date(filterDateObj);
//   endOfDay.setUTCHours(23, 59, 59, 999);
//   const expenses = await Expense.find({
//     date: {
//       $gte: startOfDay.toISOString(), // Greater than or equal to the start of the day
//       $lte: endOfDay.toISOString(), // Less than or equal to the end of the day
//     },
//   })
//     .populate({
//       path: "expenseBy",
//       select: "name",
//     })
//     .sort({ createdAt: -1 });
//   console.log(expenses);
//   return expenses;
// };

// module.exports = getAllExpenses;
