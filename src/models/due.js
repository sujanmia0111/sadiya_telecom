const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  method: {
    type: String,
    enum: ["cash", "bkash", "nagad", "dbbl", "bank", "due"],
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const addedAmountSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  notes: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const DueSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    dueType: {
      type: String,
      enum: ["customer", "supplier"]
    },
    totalAmount: { type: Number, required: true },
    paidAmount: { type: Number, default: 0 },
    dueAmount: { type: Number, required: true },
    mobileNo: {
      type: String,
      required: true,
    },
    paidDate: { type: String, required: true },
    dueDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Unpaid", "Partially Paid", "Paid"],
      default: "Unpaid",
    },
    addedAmountTransactions: {
      type: [addedAmountSchema],
      required: true,
    },
    transactions: {
      type: [TransactionSchema],
      default: [],
    }, // Payment history
  },
  { timestamps: true }
);

module.exports = mongoose.model("Due", DueSchema);
