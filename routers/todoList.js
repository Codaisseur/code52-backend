const { Router } = require("express");

const router = new Router();

router.get("/todolists", async (req, res) => {
  try {
    res.send("should send some lists");
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
