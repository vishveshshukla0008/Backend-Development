const mongoose = require("mongoose");


const songSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    posterUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    mood : {
        type:String,
        enum : {
            values : ['sad', 'happy', 'surprised'],
        }
    }
})


const songsModel = mongoose.model("song", songSchema);

module.exports = songsModel;



