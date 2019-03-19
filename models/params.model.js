const mongoose =  require('mongoose');

const ParameterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        // unique: true
    },
    parameters: {
        type: Object
    }
});

// export the user schema
const Parameters = mongoose.model("Parameters", ParameterSchema);
module.exports = Parameters;