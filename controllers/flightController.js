const Flights = require("../models/Flight");


// get all flights
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights
        });
    } catch (err) {
        res.status(500).json({message: err});
    }
}


