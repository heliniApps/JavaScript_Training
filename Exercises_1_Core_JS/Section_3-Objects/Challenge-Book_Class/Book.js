class Book {
    constructor(
        id,
        title,
        author,
        publishedDate,
        edition,
        numOfPages,
        coverMaterial,
        coverIsPrinted
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.edition = edition;
        this.numOfPages = numOfPages;
        this.coverType = {
            material: coverMaterial,
            isPrinted: coverIsPrinted,
        };
    }

    #calcDaysSincePublished() {
        let publishedDate = new Date(this.publishedDate);
        let currentDate = new Date();
        let elapsedTimeInMs = currentDate - publishedDate;
        let daysSincePublished = Math.floor(
            elapsedTimeInMs / (1000 * 3600 * 24)
        );
        return daysSincePublished;
    }

    getDaysSincePublished() {
        return this.#calcDaysSincePublished();
    }

    getYearsSincePublished() {
        return Math.floor(this.#calcDaysSincePublished() / 365);
    }

    changeCoverType(material, isPrinted) {
        this.coverType.material = material;
        this.coverType.isPrinted = isPrinted;
    }
}

export default Book;
