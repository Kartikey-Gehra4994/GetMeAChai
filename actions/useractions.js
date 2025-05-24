"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/db/connectDb"
// import Username from "@/app/[username]/page"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()

    //fetch the secret of the user who is getting  the payment
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    instance.orders.create({
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment obeject which show a pending payment in the database
    await Payment.create({
        oid: x.id,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
    })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let user = await User.findOne({ username: username }).lean()

    if (!user) return null

    return {
        ...user,
        _id: user._id.toString(),
        createdAt: user.createdAt?.toISOString?.(),
        updatedAt: user.updatedAt?.toISOString?.(),
    }

}

export const fetchpayments = async (username) => {
    await connectDB()
    //find all payments sorted by decreasing order of amount and flatten object
    let payments = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(6)
    .lean()

return payments.map(p => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt?.toISOString?.(),
    updatedAt: p.updatedAt?.toISOString?.(),
}))

}

export const updataprofile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    // if the userneme is being updated, check if userneme is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username alredy exists" }
        }

        await User.updateOne({ email: ndata.email }, ndata)
        //Now  update all the usernames in the payments table
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })

    } else {
        await User.updateOne({ email: ndata.email }, ndata)
    }
}