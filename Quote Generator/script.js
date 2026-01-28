class QuoteApp {
  constructor() {
    this.quoteEl = document.getElementById("quote");
    this.authorEl = document.getElementById("author");
    this.btn = document.getElementById("btn");

    this.apiUrl = "https://api.quotable.io/random";

    this.btn.addEventListener("click", () => this.getQuote());
  }

  async getQuote() {
    try {
      this.showLoading();

      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      const quoteObject = {
        content: data.quote,
        author: data.author,
      };

      this.displayQuote(quoteObject);
    } catch (error) {
      console.error(error);
      this.quoteEl.textContent = "Failed to load quote 😢";
      this.authorEl.textContent = "";
    }
  }

  showLoading() {
    this.quoteEl.textContent = "Loading...";
    this.authorEl.textContent = "";
  }

  displayQuote(quote) {
    this.quoteEl.textContent = `"${quote.content}"`;
    this.authorEl.textContent = `— ${quote.author}`;
  }
}

const app = new QuoteApp();
