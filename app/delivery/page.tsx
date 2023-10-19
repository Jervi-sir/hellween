import Link from "next/link";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery with Hell Ween',
  description: 'Better shop for Halloween 2023',
}


function Delivery() {
  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
            <h1 className="page_title title">Delivery Information</h1>
            <ul className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><a>Delivery Information</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="information-information" className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <div id="content" className="col-sm-6 mx-auto">
            <h1>Delivery Information</h1>
            <p>
              At [Your Business Name], we’re committed to delivering your Halloween essentials in a timely and efficient manner. We understand the importance of fast, reliable delivery to ensure your items arrive ready for the season.
            </p>
            <h2>Processing Time:</h2>
            <p>
              All orders are subject to a handling period before they are dispatched. 99% of orders leave the warehouse within 2-3 days of payment. We will notify you by email when your items have been shipped.
            </p>
            <h2>Shipping Times:</h2>
            <ul>
              <li>Standard Shipping: We offer shipping nationwide with an expected delivery time of [insert time frame, e.g., 5-10 business days] after dispatch.</li>
              <li>Express Shipping: Expedited shipping is available at an additional cost, with an estimated delivery time of [insert time frame, e.g., 2-4 business days] after dispatch.</li>
            </ul>
            <p>
              Please note that these are estimated delivery times only, therefore [Your Business Name] is not guaranteeing delivery dates.
            </p>
            <h2>Shipping Costs:</h2>
            <ul>
              <li>We provide free standard shipping on orders over [insert amount, e.g., $50].</li>
              <li>For orders under [insert amount, e.g., $50], a flat rate shipping fee of [insert amount, e.g., $5.99] applies.</li>
              <li>Express shipping costs [insert amount, e.g., $15] regardless of the order amount.</li>
            </ul>
            <h2>Order Tracking:</h2>
            <p>
              Once your order has been shipped, you will receive an email with tracking information. You can also track your package directly on our website [insert link if applicable] using your order number and email address.
            </p>
            <h2>International Shipping:</h2>
            <p>
              We currently do not ship outside [Your Country]. Please subscribe to our newsletter for updates on international expansion.
            </p>
            <h2>Delivery Policies:</h2>
            <ul>
              <li>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</li>
              <li>We do not ship on weekends or public holidays.</li>
              <li>If there will be a significant delay in shipment of your order, we will contact you via email or telephone.</li>
            </ul>
            <h2>Order Issues:</h2>
            <p>
              If you have any problems with your order (not received, not what you were expecting, etc.), please contact us [insert time frame, e.g., within 7 days] from receiving your order so we can resolve the issue. You can contact us at [insert contact method, e.g., support@email.com or call us at XXX-XXX-XXXX].
              <br />
              Your satisfaction is our priority. We hope to provide you with an easy and convenient shopping experience. If you have questions or concerns about our shipping policies, please don’t hesitate to contact us.
              <br />
              Thank you for choosing [Your Business Name].
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Delivery;