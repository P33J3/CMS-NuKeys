import { Router } from "express";
import UserController from "../controllers/user";

const router = Router();
const userController = new UserController();

router.route("/users").get(userController.getAllUsers);

router.route("/users/:userId").get(userController.getOneUserId);

router.route("/users/updateuser/:userId").get(userController.updateOneUserById);

router.route("/users/adduser").post(userController.addOneUser);

router
  .route("/users/deleteuser/:userId")
  .delete(userController.deleteOneRecord);

export default router;
