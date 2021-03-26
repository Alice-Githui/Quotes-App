export class QuotesList {
    showAuthor: boolean;
    showEnteredBy: boolean;
    showDateEntered: boolean
    constructor(public id: number, public narration: string, public author: string, public enteredBy: string, public dateEntered: Date){
        this.showAuthor = false;
        this.showEnteredBy = false;
        this.showDateEntered = false;
    }
}
