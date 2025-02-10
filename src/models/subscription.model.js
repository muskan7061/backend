import mongoose, {Schema, schema} from "mongoose";

const subscriptionSchema = new schema({
    subscriber:{
        type: schema.Types.ObjectId,
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})
export const Subscription = mongoose.model("Subscription", subscriptionSchema)