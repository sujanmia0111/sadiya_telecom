const User = require('@root/models/user');
const { generateHashed } = require('@root/utils/hashing')
const { accessTokenGenerator } = require('@root/lib/token');

const createOrReplaceAdmin = async ({name, email, password,phone}) => {
    // check if admin exist
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
        // if admin exist remove it
        await User.deleteOne({ email });
    }

    const hashedPassword = await generateHashed(password);
    const admin = await User.create({ name, email, password: hashedPassword, role: 'admin',phone });

    // to generate access_token
    const payload = {
        id: admin._id,
        name: admin.name
    };

    const access_token = accessTokenGenerator({ payload });

    return {
        access_token,
        message: 'Admin created successfully',
    }
};

module.exports = { createOrReplaceAdmin };
