const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day : {
        type : Date,
        default : Date.now()
    },

    exercises : [
        {
            type : {
                type : String, 
                trim : true,
                required : "Please enter an exercise type"
            },
            name : {
                type : String, 
                trim : true,
                required : "Please enter an exercise name"
            },
            duration : {
                type : Number, 
                required : "Please enter an exercise duration"
            },
            weight : {
                type : Number
            },
            reps : {
                type : Number
            },
            sets : {
                type : Number
            },
            distance : {
                type : Number
            },
        }
    ]
})

const workoutmodel = mongoose.model("workout", workoutSchema);
module.exports = workoutmodel;