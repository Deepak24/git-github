import express from "express";//Import express module
import userRoutes from "./routes/UserRoutes.js";
import mainRoutes from "./routes/MainRoutes.js";
import adminRoutes from "./routes/AdminRoutes.js"

const PORT = 7788;//Define port
const app = express();//Create instance of express
app.use(express.json());// inbuild middleware

//Define Route
app.use("/", mainRoutes);
app.use("/users", userRoutes);
app.use("/admin", adminRoutes); 

app.use((req,res)=>{
    res.send("No route found");
});
// app.get("/", (req, res) => {
//     res.send("Default Route");
// });



//On products route
//We can use chainable routes
// app.get("/products", (req,res) => {
//     const data = [
//         {id: 1, prodname: "A", price: 345},
//         {id: 2, prodname: "B", price: 445}
//     ];
//     res.send(data);
// });
// app.post("/products", (req,res) => {
//     res.send("Product added");
// });

// app.delete("/products", (req,res) => {
//     res.send("Product Deleted");
// });
// app.put("/products", (req,res) => {
//     res.send("Product Updated.");
// });

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log("Server started on Port", PORT);
});
