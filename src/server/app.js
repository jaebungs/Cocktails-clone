import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());

app.use('/cocktails', cocktailsRoutes);
app.use('/user', userRoutes);
app.use('/mybar', mybarRoutes);

app.listen(4000, () => {
  console.log("start");
});
