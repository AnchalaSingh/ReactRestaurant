import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(process.env.MONGO_URL);
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
