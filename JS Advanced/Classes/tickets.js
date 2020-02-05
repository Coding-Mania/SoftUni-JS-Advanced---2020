function solve(ticketsInput, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    ticketsInput.forEach(ticketInfo => {
        let [name, price, status] = ticketInfo.split('|');

        let ticket = new Ticket(name, +price, status);

        tickets.push(ticket);
    });

    let sortedFunctions = {
        destination: (a, b) => (a.destination.localeCompare(b.destination)),
        status: (a, b) => (a.status.localeCompare(b.status)),
        price: (a, b) => (a.price - b.price)
    }

    tickets.sort(sortedFunctions[sortingCriterion]);

   return tickets;
}
