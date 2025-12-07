const Footer = () => {
  return (
    <footer className="content-footer footer bg-footer-theme">
      <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
        <div className="mb-2 mb-md-0">
          ©
          {(new Date().getFullYear())}
          , made with ❤️ by
          <a aria-label="go to machinecoders" href="https://machinecoders.com" target="_blank" rel='noreferrer' className="footer-link fw-medium">Machine Coders</a>, Refactor <i style={{ color: 'rgb(105, 108, 255)' }} className='bx bx-code-alt'></i>  by
        </div>
        <div className="d-none d-lg-inline-block">
          <a aria-label="go to themeselection license" href="https://machinecoders.com/" className="footer-link me-4" target="_blank" rel='noreferrer' >License</a>
          <a aria-label="go to themeselection for More Themes" href="https://machinecoders.com/" target="_blank" rel='noreferrer' className="footer-link me-4">More Themes</a>

          <a aria-label="go to themeselection Documentation" href="https://machinecoders.com/"
            target="_blank" rel='noreferrer' className="footer-link me-4">Documentation</a>

          <a aria-label="go to themeselection Support" href="https://machinecoders.com/" target="_blank" rel='noreferrer'
            className="footer-link">Support</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;  