import ticketDao from "../dao/ticket.dao.js"

export const getAll = (req, res) => {
    ticketDao
        .getAll()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
};

export const insertTikcet = (req, res) => {
    ticketDao
        .insertTicket(req.body)
        .then((result) => {
            if (result) {
                res.json({
                    status: "ticket saved",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: "server failed",
            });
        });
};

export const getOneTicket = (req, res) => {
    const ticket = req.params.flight_key;
    ticketDao
        .getOne(ticket)
        .then((result) => {
            if (result) {
                res.json(result);
            } else {
                res.json({
                    status: "ticket not found",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: "server failed",
            });
        });
};

export const updateTicket = (req, res) => {
    ticketDao
        .updateTicket(req.params.flight_key, req.body)
        .then((result) => {
            if (result) {
                res.json({
                    status: "ticket updated",
                });
            } else {
                res.json({
                    status: "ticket not found",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: "Server failed",
            });
        });
};


export const deleteTicket = (req, res) => {
    ticketDao
        .deleteTicket(req.params.flight_key)
        .then((result) => {
            if (result) {
                res.json({
                    status: "ticket deleted",
                });
            } else {
                res.json({
                    status: "ticket not found",
                });
            }
        })
        .catch((err) => {
            res.json({
                status: "server failed",
            });
        });
};



export const getTicketCaro = (req, res) => {
    ticketDao
        .getCost()
        .then((result) => {
            if (result) {
                res.json(result);
            }
        })
        .catch((err) => {
            res.json({
                status: "server failed",
            });
        });
};

