import Ticket from "../models/ticket.model.js";

const ticket = {};

ticket.getAll = async () => {
    const tickets = await Ticket.find();
    return tickets;
};

ticket.insertTicket = async (ticket) => {
    const ticketSaved = new Ticket(ticket);
    await ticketSaved.save();
    return true;
};

ticket.getOne = async (flight_key) => {
    const ticket = await Ticket.findOne({ flight_key: flight_key });
    return ticket;
};

ticket.updateTicket = async (flight_key, ticket) => {
    await Ticket.updateOne({ flight_key: flight_key }, ticket);
    return true;
};

ticket.deleteTicket = async (flight_key) => {
    await Ticket.deleteOne({ flight_key: flight_key });
    return true;
};

ticket.getCost = async () => {

    const boletoMasCaro = await Ticket.findOne().sort({ cost: -1 }).limit(1);
    
    return boletoMasCaro;
};


export default ticket;
