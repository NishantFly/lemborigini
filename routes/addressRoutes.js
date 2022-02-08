const app = require("express");
const router = app.Router();
const {
  addAddress,
  getAddress,
  deleteAddress,
  updateAddress
} = require("../controllers/AddressController");

router.post("/add-address", addAddress);
router.get("/get-address/", getAddress);
router.patch("/update-adress-detail/:id", updateAddress);
router.get("/delete-address/:id", deleteAddress);



module.exports = router;
