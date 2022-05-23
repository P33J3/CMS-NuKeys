import { Router } from 'express';
import { UserController } from '../../controllers';

export const userRouter = Router();
const userController = new UserController();

userRouter.route('/users').get(userController.getAllUsers);

userRouter.route('/users/:userId').get(userController.getOneUserId);

userRouter.route('/users/updateuser/:userId').get(userController.updateOneUserById);

userRouter.route('/users/adduser').post(userController.addOneUser);

userRouter
  .route('/users/deleteuser/:userId')
  .delete(userController.deleteOneRecord);

// export default userRouter;
