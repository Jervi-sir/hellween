import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Hell Ween',
  description: 'Better shop for Halloween 2023',
}

function ContactUs() {
  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
            <h1 className="page_title title">Contact Us</h1>
            <ul className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="information-contact" className="container">
        <div className="row">
          <div id="content" className="col-sm-9">
            <h1>Contact Us</h1>
            <div className="shop-content row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 contact-left">
                <div className="content-details">
                  <div className="phone-info">
                    <div className="phone-title title"><i className="fa fa-mobile" style={{marginRight: '10px'}}></i>Telephone</div>
                    <div className="content-number"> +44 330 022 5700</div>
                  </div>
                  <div className="fax-info">
                    <div className="fax-title title"><i className="fa fa-fax" style={{marginRight: '10px'}}></i>Fax</div>
                    <div className="fax-number">11225553321</div>
                  </div>
                  <div className="comment-info">
                    <div className="comment-title title"><i className="fa fa-comments-o" style={{marginRight: '10px'}}></i>Comments</div>
                    <div className="comment-detail">Demo Comment Description from Store Owners.</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 contact-right">
                <form action="https://opencart.mahardhi.com/MT06/halloween/index.php?route=information/contact"
                  method="post" encType="multipart/form-data" className="form-horizontal">
                  <fieldset>
                    <legend>Contact Form</legend>
                    <div className="form-group required">
                      <label className="col-sm-2 control-label" >Your Name</label>
                      <div className="col-sm-10">
                        <input type="text" name="name" value="" id="input-name" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group required">
                      <label className="col-sm-2 control-label" >E-Mail Address</label>
                      <div className="col-sm-10">
                        <input type="text" name="email" value="" id="input-email" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group required">
                      <label className="col-sm-2 control-label" >Enquiry</label>
                      <div className="col-sm-10">
                        <textarea name="enquiry" rows={10} id="input-enquiry" className="form-control"></textarea>
                      </div>
                    </div>

                  </fieldset>
                  <div className="buttons clearfix">
                    <div className="pull-right">
                      <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default ContactUs;