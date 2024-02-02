import { Schema, model } from "mongoose";

const ticket = new Schema(
    {
        flight_key: {
            type: String,
            require: true,
        },
        name: String,
        lastname: String,
        airline: String,
        baggage_allowed: Number,
        origin: String,
        destination: String,
        cost: Number,
        tua: Number,
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default model("ticket", ticket);
