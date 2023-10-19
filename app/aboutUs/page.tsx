import Link from "next/link";

function About() {
  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
            <h1 className="page_title title">About Us</h1>
            <ul className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><a>About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="information-information" className="container">

        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <div id="content" className="col-sm-6" >
            <h1>About Us</h1>
            <div className="about-us clearfix shop-content">
              <div className="col-sm-12 mx-auto">
                <div className="cms-block">
                  <h3>About us</h3>
                  <h4>Who We Are</h4>
                  <p>
                    [Your Business Name] emerged from a simple idea: to bring joy and delight to every home during the Halloween season. Since our inception in [year], we've grown from a small, local operation to a booming online hub for all things Halloween. Our passion for excellence and commitment to the community has allowed us to become the go-to destination for everyone's Halloween needs.
                  </p>
                  <h4>Our Journey:</h4>
                  <p>
                    Our journey began in [location] with just a handful of homemade [products/services]. We knew that Halloween was a time for fun and festivities, and we wanted to contribute to this joyous occasion. Through dedication, perseverance, and an unyielding commitment to customer satisfaction, we expanded our reach, offering an extensive range of [products/services] to a broader audience through our user-friendly online platform.
                  </p>
                  <h4>What We Offer:</h4>
                  <p>
                    From the spine-tinglingly spooky to the fun and fanciful, our diverse collection caters to all tastes and ages. We pride ourselves on our comprehensive range of [products/services], ensuring that every Halloween lover finds something they adore. Whether you're searching for [specific product/service], or need the perfect [specific product/service], [Your Business Name] has you covered.
                  </p>
                  <h4>Our Mission:</h4>
                  <p>
                    At [Your Business Name], our mission is simple: to provide high-quality products and unforgettable experiences that inspire and foster the Halloween spirit. We're dedicated to promoting creativity, inclusivity, and community engagement, making Halloween more than just a holiday, but a tradition that brings people together.
                  </p>
                  <h4>Our Values:</h4>
                  <ul>
                    <li>
                      <b>Community:</b>
                      <p>
                        We believe in giving back to our community and participate in various local events and charity programs. Halloween is about fun, and through our work, we hope to spread that fun to those who need it the most.
                      </p>
                    </li>
                    <li>
                      <b>Integrity:</b>
                      <p>
                        We conduct our business with the highest ethical standards, treating our customers, partners, and community with respect and honesty.
                      </p>
                    </li>
                    <li>
                      <b>Innovation:</b>
                      <p>
                        We're continually seeking new ways to improve your Halloween experience, from expanding our product lines to utilizing technology for easier shopping and better customer service.
                      </p>
                    </li>
                    <li>
                      <b>Sustainability: </b>
                      <p>
                        Understanding our responsibility, we strive to make eco-friendly choices in our product sourcing, packaging, and business practices.
                      </p>
                    </li>
                  </ul>
                  <h4>Join Us in Celebration:</h4>
                  <p>
                    Halloween is a time of celebration, creativity, and community. At [Your Business Name], we invite you to explore what we have to offer, engage with us on social media, and, most importantly, embrace the Halloween spirit. With [Your Business Name], every scare is a delight, and every visit is an adventure. Let's make this Halloween unforgettable!
                    <br />
                    Contact us at [contact information] or visit our shop at [physical location, if applicable].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;