const Due = require('@root/models/due');

const deleteDue = async (id) => {
    const due = await Due.findOneAndDelete({ _id: id }).exec();
    return due;
}

module.exports = deleteDue;