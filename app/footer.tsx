export default function Footer() {
  return (
    <>
      <footer className="mt-100">
        <div className="footer-top clearfix">
          <div className="footer-top-inner">
            <div className="container">
              <div className="row">
                <div className="footer-top-content clearfix">
                  <div className="col-sm-4 footer-left">
                    <div className="position-footer-left">
                      <h5 className="toggled title">contact info</h5>
                      <ul className="list-unstyled">
                        <li>
                          <div className="phone">
                            <div className="contact_title">phone:</div>
                            <div className="contact_site">0123-456-789, 123-456-7890</div>
                          </div>
                        </li>
                        <li>
                          <div className="fax">
                            <div className="contact_title">fax:</div>
                            <div className="contact_site">0123-456-789</div>
                          </div>
                        </li>
                        <li>
                          <div className="email">
                            <div className="contact_title">email:</div>
                            <div className="contact_site"> <a href="mailto:info@Yourstore.com">demo@Yourstore.com</a> </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 footer-center">
                    <div className="position-footer-center">
                      <div className="footer_aboutus">
                        <div className="footer-logo"> <a href="#"><img alt="" src="/image/catalog/logo.png" /></a> </div>
                        <div className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt lorem consectetur tempor incididunt enim ad minim simply random text.</div>
                      </div>
                      <div className="social-media"> <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i
                        className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-youtube-play"></i></a> <a href="#"><i
                          className="fa fa-google-plus"></i></a> <a href="#"> <i className="fa fa-pinterest-p"></i></a></div>
                    </div>
                  </div>
                  <div className="col-sm-4 footer-right">
                    <div className="position-footer-right">
                      <div className="news">
                        <div className="newsletterblock">
                          <h5 className="news-title title toggled">Newsletter Signup</h5>
                          <div className="newsletter-form block-content clearfix">
                            <div className="news-info">
                              <div className="news-dec">
                                <div className="news-description">Subscribe to our newsletters now and stay up to date with new
                                  collections and exclusive offers.</div>
                              </div>
                            </div>
                            <form name="frmnewsletter" id="frmnewsletter" method="post">
                              <div className="subscribe-form">
                                <input type="email" name="newsletter_usr_email" id="newsletter_usr_email"
                                  placeholder="Enter e-mail here..." className="form-control input-lg inputNew txtemail" required />
                                <button type="submit" className="subscribe-btn"><i className="fa fa-paper-plane-o"></i></button>
                              </div>
                              <div className="newsletter-message"></div>
                            </form>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top-bottom">
            <div className="container">
              <div className="footer-content">
                <h5 className="title">Information</h5>
                <ul className="list-unstyled">
                  <li><a href="index8816.html?route=information/information&amp;information_id=4">About Us</a></li>
                  <li><a href="index1766.html?route=information/information&amp;information_id=6">Delivery Information</a>
                  </li>
                  <li><a href="index1679.html?route=information/information&amp;information_id=3">Privacy Policy</a></li>
                  <li><a href="index99e4.html?route=information/information&amp;information_id=5">Terms &amp; Conditions</a>
                  </li>
                  <li><a href="index2724.html?route=information/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-inner">
              <p className="powered"> <a href="http://www.opencart.com/">Jervi</a> Store &copy; 2023</p>
              <div className="position-footer-bottom">
                <div className="payment-link"> <img src="/image/catalog/payment.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
