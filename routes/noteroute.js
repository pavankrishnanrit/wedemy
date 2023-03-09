const router = require("express").Router();
const {
  Addnote,
  Shownotes,
  Deletenote,
  UpdateNote,
} = require("../controllers/note.controller");

router.post("/addnote", Addnote);
router.get("/homepg", Shownotes);
router.delete("/delete/:blog_id", Deletenote);
router.put("/update/:blog_id", UpdateNote);

module.exports = router;
