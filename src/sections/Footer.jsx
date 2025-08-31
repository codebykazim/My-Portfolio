import { socialImgs } from "../constants";

const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank'); // Naye tab mein link open karega
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          {/* <p>Terms & Conditions</p> */}
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="icon"
              onClick={() => handleSocialClick(socialImg.url)}
              style={{ cursor: 'pointer' }}
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;