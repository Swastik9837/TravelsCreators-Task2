const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "lightgrey",
  color: "black",
  textAlign: "center",
  padding: "1rem",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <b>Copyright © 2023</b>
    </footer>
  );
};

export default Footer;
