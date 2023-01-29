const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const authMiddleware = require("../middlwares/auth.middleware");

const router = Router();


router.get("/users", authMiddleware, getAllUsers);

router.get("/users/:id", authMiddleware, getUserById);


router.get("/users/:id/todos", authMiddleware, getUserWithTasks);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;
