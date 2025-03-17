const Due = require('@root/models/due');

const getAllDue = async () => {
    const due = await Due.find({}).sort({ createdAt: -1 });
    return due;
}

module.exports = getAllDue;