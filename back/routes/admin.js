import {admin} from '../controller/admin'
import { requireSignIn } from '../middlewares';
import { singleUser,editUser,hello } from '../controller/admin';

const express = require("express");
const router = express.Router(); 

router.get("/admin",requireSignIn, admin)

router.post("/singleuser",requireSignIn, singleUser)
router.put("/editUser",requireSignIn, editUser)
// router.delete("/hello/:postId", hello)
router.delete("/hello", hello)


module.exports = router;