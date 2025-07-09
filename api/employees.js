import express from "express";

const router = express.Router();

// GET /api/employees
router.get("/", (req, res) => {
  res.send("List of employees coming soon!");
});

export default router;

