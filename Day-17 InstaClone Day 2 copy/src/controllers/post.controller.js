const postModel = require("../models/post.model");
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs')

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
    const { caption } = req.body;
    const file = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test"
    })
    console.log(file)
    res.status(200).json({ success: true, message: "Hello" })
}

module.exports = { createPostController };

