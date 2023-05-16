import { Router } from "express";
import { validate } from "express-validation";
import AuthControllers  from "../controllers/auth";
import { HandleValidationError } from "../middleware";
import  { ValidateToken } from "../middleware/token"
 import { LoginValidation } from "../validation/auth";
// import { SignupValidation } from "../validation/auth";

const AuthRouter = Router();


AuthRouter.post(
  "/sign-up",
  // validate(SignupValidation),
  // HandleValidationError,
  AuthControllers.signUp
);

AuthRouter.post(
  "/login",
   validate(LoginValidation),
   HandleValidationError,
  AuthControllers.login
);

AuthRouter.post("/changePassword",ValidateToken, AuthControllers.changePassword);

AuthRouter.put("/update",ValidateToken, AuthControllers.update);

export default AuthRouter;
