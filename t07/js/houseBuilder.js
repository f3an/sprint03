class HouseBuilder {
    constructor(address, description, owner, size, roomCount) {
        this.address = address;
        this.date = new Date();
        this.description = description;
        this.owner = owner;
        this.size = size;
        this._averageBuildSpeed = 0.5;
        this.roomCount = roomCount;
    }
    getDaysToBuild() {
        return this.size / this._averageBuildSpeed;
    }
}
const house = new HouseBuilder(
    "88 Crescent Avenue",
    "Spacious town house with wood flooring, 2-car garage, and a back patio.",
    "J. Smith",
    110,
    5,
);