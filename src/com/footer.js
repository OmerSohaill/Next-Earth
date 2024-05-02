import './footer.css';

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-2 footer">
        <div className="fbox">
          <h1 className="fls">Subscribe for news</h1>
          <h1 className="fls">and latest updates.</h1>
          <input placeholder="E-mail" className="finput fl" />
          <button className="fsub fl">Subscribe</button>
        </div>

        <div className="fbox "> 
          <div className="flx">
            <img src="https://nextearth.io/modules/_site/images/icon_discord.png" alt="Discord icon" />
            <div className="lk">
              <h1 className="nhelp">Need Help?</h1>
              <h1>If you want to learn more or ask the team behind Next Earth, Join Our Discord Server</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
