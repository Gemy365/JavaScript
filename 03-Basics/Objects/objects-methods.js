let resturant = {
    Name: 'Spectra',
    GuestCapasity: 75,
    GuestCount: 0,
    CheckAvailability: function(partySize){
        let seatsLeft = this.GuestCapasity - this.GuestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.GuestCount = this.GuestCount + partySize
    },
    removeParty: function(partySize){
        this.GuestCount = this.GuestCount - partySize
    }
}

resturant.seatParty(72)
console.log(resturant.CheckAvailability(4))

resturant.removeParty(5)
console.log(resturant.CheckAvailability(4))
