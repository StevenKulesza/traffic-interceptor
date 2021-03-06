const mongoose =  require('mongoose');

const ParameterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String, 
        // unique: true
    },
    incoming: {
        type: Object
    },
    outgoing: {
        type: Object,
        required: false
    }
});

// export the user schema
const Parameters = mongoose.model("Parameters", ParameterSchema);
module.exports = Parameters;