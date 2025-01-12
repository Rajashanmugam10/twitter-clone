import express from "express";
const router = express.Router();

router.get("/auth/google");
router.get("/auth/google/callback");
export default router;
