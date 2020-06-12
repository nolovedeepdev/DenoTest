import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getChapters,
    getChapter,
    addChapter,
    updateChapter,
    deleteChapter
} from "../controllers/youtube-chatpers-chapters-controller.ts"

const router = new Router();

router.get("/api/v1/video-chapters/:id", getChapters)
    .get("/api/v1/video-chapters/:id/:seconds", getChapter)
    .post("/api/v1/video-chapters/:id", addChapter)
    .put("/api/v1/video-chapters/:id", updateChapter)
    .delete("/api/v1/video-chapters/:id", deleteChapter);


export default router;