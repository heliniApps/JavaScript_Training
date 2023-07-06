function Backpack(
    name,
    volume,
    hasLid,
    isLidOpen,
    numOfPockets,
    leftStrapLength,
    rightStrapLength,
    dateOfSale
) {
    this.name = name;
    this.volume = volume;
    this.hasLid = hasLid;
    this.isLidOpen = isLidOpen;
    this.numOfPockets = numOfPockets;
    this.strapLength = {
        left: leftStrapLength,
        right: rightStrapLength,
    };
    this.dateOfSale = dateOfSale;

    this.toggleLid = function (lidStatus) {
        if (this.hasLid === true) {
            this.isLidOpen = lidStatus;
        }
    };

    this.setStrapLength = function (leftStrap, rightStrap) {
        this.strapLength.left = leftStrap;
        this.strapLength.right = rightStrap;
    };

    // private fields not allowed in Object Constructor functions.
    this.calculateAge = function () {
        let dateSold = new Date(this.dateOfSale);
        let currentDate = new Date();
        let elapsedTimeInMs = currentDate - dateSold;
        let daysSinceBought = Math.floor(elapsedTimeInMs / (1000 * 3600 * 24));
        return daysSinceBought;
    };

    this.getAgeInDays = function () {
        return this.calculateAge();
    };

    this.getAgeInYears = function () {
        return Math.floor(this.calculateAge() / 365);
    };
}

export default Backpack;
