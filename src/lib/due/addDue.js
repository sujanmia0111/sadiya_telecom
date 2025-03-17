const Due = require('@root/models/due');

const addDue = async (data) => {
    const due = await Due.create(data);
    return due;
}

module.exports = addDue;