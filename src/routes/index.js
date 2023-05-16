import { Router } from "express";
import AuthRouter from "./auth";

const router = Router();

/**
 * GET /v1/status
 * @summary Fetch status of the api
 * @tags Status
 * @return {object} 200 - Success response - application/json
 */
router.use("/status", (req, res) =>
  res.status(200).json({ env: process.env.NODE_ENV })
);

router.use("/auth", AuthRouter);

export default router;
