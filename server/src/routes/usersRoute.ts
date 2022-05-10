import express from "express";

import userModel from "../models/userModel";

const route = express.Router();

route.post(
  "/create",

  async (req: express.Request, res: express.Response) => {
    console.log("this is type body request first_name" + typeof req.body.pass);
    console.log("this is body request" + req.body.pass);
    try {
      const user = new userModel();
      const adduser = await user.create(req.body);

      res.json({
        massage: "User Added",
        adduser,
      });
    } catch (error) {
      console.log(req.body);
      res.send("Error user not added");
    }
  }
);
// the following route will be used to list all users
route.get(
  "/",

  async (req: express.Request, res: express.Response) => {
    try {
      const users = new userModel();
      const userslist = await users.listusers();
      res.json({
        massage: "Users list",
        userslist,
      });
    } catch (error) {
      res.send("cannot send users list");
    }
  }
);

export default route;
