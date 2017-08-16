import { Quote } from './../data/quote.interface';


export class QuotesService {
    private favoriteQuotes: Quote[] = [];  

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote)=>{
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position,1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

}