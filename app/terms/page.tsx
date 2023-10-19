import Link from "next/link";

function Terms() {
  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
            <h1 className="page_title title">Terms &amp; Conditions</h1>
            <ul className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><a>Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="information-information" className="container">

        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <div id="content" className="col-sm-6 mx-auto">
            <h1>Terms &amp; Conditions</h1>
            <p>
              Welcome to [Your Business Name]!
              <br />
                These terms and conditions outline the rules and regulations for the use of [Your Business Name]'s Website, located at [YourWebsite.com].
                <br />
                  By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Website] if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <h3>Cookies</h3>
                <p>
                  We employ the use of cookies. By accessing [Your Website], you agreed to use cookies in agreement with [Your Business Name]'s Privacy Policy.
                </p>
                <h3>License</h3>
                <p>
                  Unless otherwise stated, [Your Business Name] and/or its licensors own the intellectual property rights for all material on [Your Website]. All intellectual property rights are reserved.
                </p>
                <h3>You must not:</h3>
                <ul>
                  <li>Republish material from [Your Website]</li>
                  <li>
                    Republish material from [Your Website]
                    <br />
                      Sell, rent, or sub-license material from [Your Website]
                  </li>
                  <li>Reproduce, duplicate, or copy material from [Your Website]</li>
                  <li>Redistribute content from [Your Website]</li>
                </ul>
                <h3>User Comments</h3>
                <p>
                  This Agreement shall begin on the date hereof.
                  <br />
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. [Your Business Name] does not filter, edit, publish, or review comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Business Name], its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, [Your Business Name] shall not be liable for the comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the comments on this website.
                </p>
                <h3>Purchasing and Delivery</h3>
                <p>
                  [Your Business Name] reserves the rights to accept or deny any order placed by a customer for any reason. Prices for goods are subject to change without notice. We reserve the right at any time to modify or discontinue the product (or any part or content thereof) without notice.
                  <br />
                    We shall not be liable to any customer or to any third-party for any modification, price change, suspension, or discontinuance of the product.
                </p>
                <h3>Return, Exchange & Refund</h3>
                <p>
                  Provide information about your return, exchange, and refund policies.
                </p>
                <h3>Limitation of Liability</h3>
                <p>
                  In no event shall [Your Business Name], nor any of its officers, directors, and employees be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. [Your Business Name], including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
                </p>
                <h3>Indemnification</h3>
                <p>
                  You hereby indemnify to the fullest extent [Your Business Name] from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
                </p>
                <h3>Severability</h3>
                <p>
                  If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                </p>
                <h3>Variation of Terms</h3>
                <p>
                  [Your Business Name] is permitted to revise these Terms at any time as it sees fit, and by using this Website, you are expected to review these Terms on a regular basis.
                </p>
                <h3>Governing Law & Jurisdiction</h3>
                <p>
                  These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
                </p>
              </div>
          </div>
        </div>
      </>
      );
}

      export default Terms;