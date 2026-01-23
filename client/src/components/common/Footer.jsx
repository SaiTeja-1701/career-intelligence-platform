const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-auto border-top">
      <div className="container">
        <small>
          © {new Date().getFullYear()} CareerAI · Built by Sai Teja
        </small>
      </div>
    </footer>
  );
};

export default Footer;
