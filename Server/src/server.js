import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"; 

const app = express();


app.use(express.json());

connectDB().then(() => {
    console.log(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
        console.log("Server Listening on port", process.env.PORT);
    });
}).catch((err) => {
    console.log("Error", err);
});

app.use("/api/auth",userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);