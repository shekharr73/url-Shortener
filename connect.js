const { default: mongoose } = require("mongoose")
const moongoose = require("mongoose")

async function connectToMongoDB(url) {
    return mongoose.connect(url);
}


module.exports = {
    connectToMongoDB,
}