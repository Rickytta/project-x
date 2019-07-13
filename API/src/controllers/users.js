/* eslint-disable linebreak-style */
import UserModel from '../models/users';


const userController = {
  signup(req, res) {
    const { status, code, data } = UserModel.signup(req.body);
    res.status(code).json({ status, data });
  },

  login(req, res) {
    const { status, code, data } = UserModel.login(req.body);
    res.status(code).json({ status, data });
  },
};

export default userController;
