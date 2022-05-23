import { Router } from 'express';
import { UserRegController } from '../../controllers';

export const userRegRouter = Router();
const userRegController = new UserRegController();

userRegRouter.route('/users').get(userRegController.getAllUsers);

userRegRouter.route('/retrieve').get(userRegController.retrieveUser);

// userRegRouter.route("/users/:userId").get(userRegController.getOneUserId);

// userRegRouter.route("/users/updateuser/:userId").get(userRegController.updateOneUserById);

// userRegRouter.route('/adduser').post(userRegController.addOneUser);

// userRegRouter
//   .route("/users/deleteuser/:userId")
//   .delete(userRegController.deleteOneRecord);
