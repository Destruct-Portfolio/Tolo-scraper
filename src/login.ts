import PuppeteerScrapper from "./components/scraper.js";

class Login extends PuppeteerScrapper {
  constructor() {
    super();
  }
  protected async $extract(): Promise<void> {
    if (this.$page !== null) {
      await this.$page.setDragInterception(true)
      this.$page.on('framenavigated', frame => {
        const url = frame.url()

      })
    }
  }
}

new Login().exec();
