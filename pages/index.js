import Head from '../src/Head';
import { NavBar } from '../src/NavBar';
import Upload from '../src/Upload';

export default function Home() {
  return (
    <div className="container">
      <Head />
      <main>
        <NavBar />
        <Upload />
      </main>
      <footer>
        <div className="row" style={{textAlign: "center", paddingTop: "1.5em"}}>
            <div className="donate">
                This tool is provided free of charge to vikings everywhere. If you'd like to say thank you, consider
                donating. <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="4NTKDG9D4TLBC" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0"
                        name="submit" title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                BTC: 12sA9jBWXqXPhhZLzeX3NTG3b6ZfGEDDvG
            </div>
        </div>
      </footer>
    </div>
  )
}
