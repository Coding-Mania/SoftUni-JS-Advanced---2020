class Hotel {
    bookings = [];
    currentBookingNumber = 1;
    rooms = {
        single: 0,
        double: 0,
        maisonette: 0
    }

    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.rooms.single = Math.round(capacity / 2);
        this.rooms.double = Math.round(capacity * 0.3);
        this.rooms.maisonette = Math.round(capacity * 0.2);
    }


    roomsPricing = {
        single: 50,
        double: 90,
        maisonette: 135
    }

    servicesPricing = {
        food: 10,
        drink: 15,
        housekeeping: 25
    }

    rentARoom(clientName, roomType, nights) {
        if (this.rooms[roomType] === 0) {
            let availableRooms = Object.keys(this.rooms).filter(r => r !== roomType);
            return `No ${roomType} rooms available! Available ${availableRooms[0]} rooms: ${this.rooms[availableRooms[0]]}. Available ${availableRooms[1]} rooms: ${this.rooms[availableRooms[1]]}.`;
        }

        let booking = {
            name: clientName,
            type: roomType,
            nights: nights,
            number: this.currentBookingNumber
        }

        this.currentBookingNumber++;
        this.rooms[roomType]--;
        this.bookings.push(booking);

        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`;
    }

    roomService(currentBookingNumber, serviceType) {

        if (!Object.keys(this.servicesPricing).includes(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }


        let room;

        for (const iterator of this.bookings) {
            if (iterator.number === currentBookingNumber) {
                room = iterator;
            }
        }

        if (!room) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        if (!room.services) {
            room.services = [];
        }

        room.services.push(serviceType);

        return `Mr./Mrs. ${room.name}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {
        let room;

        for (const iterator of this.bookings) {
            if (iterator.number === currentBookingNumber) {
                room = iterator;
            }
        }

        if (!room) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        let totalServiceMoney = 0;
        let totalMoney = room.nights * this.roomsPricing[room.type];

        if (room.services) {
            for (const service of room.services) {
                totalServiceMoney += this.servicesPricing[service];
            }

            this.rooms[room.type]++;

            return `We hope you enjoyed your time here, Mr./Mrs. ${room.name}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
        }

        this.rooms[room.type]++;

        return `We hope you enjoyed your time here, Mr./Mrs. ${room.name}. The total amount of money you have to pay is ${totalMoney} BGN.`
    }

    report() {
        if (this.bookings.length === 0) {
            return `${this.name.toUpperCase()} DATABASE:\n--------------------\nThere are currently no bookings.`
        }

        return `${this.name.toUpperCase()} DATABASE:\n--------------------\n` + this.bookings.map(b => {
            return `bookingNumber - ${b.number}\nclientName - ${b.name}\nroomType - ${b.type}\nnights - ${b.nights}\n${b.services !== undefined ? `services: ${b.services.join(', ')}` : ''}`;
        }).join('----------\n');
    }
}

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');

console.log(hotel.report());


