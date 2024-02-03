import { Router } from "express";
import { getAll, insertTikcet, getOneTicket, updateTicket,deleteTicket,getTicketCaro} from "../controllers/ticket.controller.js";


const router = Router();

router.get("/getAll", getAll);
router.post("/insertOne", insertTikcet);
router.get("/getOne/:flight_key", getOneTicket);
router.put("/updateOne/:flight_key", updateTicket);
router.delete("/deleteOne/:flight_key", deleteTicket);
router.get("/getMasCaro", getTicketCaro);



export default router;