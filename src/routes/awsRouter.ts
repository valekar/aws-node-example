import { Request, Response, Router } from "express";
import { OK, INTERNAL_SERVER_ERROR } from "http-status-codes";

const router = Router();

/*********************************************************
 *         GET - get all AWS regions
 *********************************************************/
router.get("/regions", async (req: Request, res: Response) => {
  try {
    return await res.status(OK).json({ test: "test" });
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
});

export default router;
