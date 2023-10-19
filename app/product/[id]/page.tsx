import ImagePreview from "./preview";
import type { Metadata } from 'next'
import "styled-jsx/css";

export const metadata: Metadata = {
  title: 'Product with Hell Ween',
  description: 'Better shop for Halloween 2023, and now You are with Our best products',
}

function Product({ params }) {
  const { id } = params;

  return (
    <>
      <div className="breadcrumb-back">
        <div className="breadcrumb-inner container clearfix">
          <div className="breadcrumb-row">
          </div>
        </div>
      </div>
      <div id="product-page" className="container">
        <div className="row">
          <div id="content" className="col-sm-12">
            <div className="pro-detail row">
              <div className="col-sm-6 product-img">
                <div className="thumbnails">
                  <div className="product-additional">
                    <ImagePreview />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 right_info">
                <h1 className="">Addams</h1>
                <div className="rating clearfix">
                  <div className="product-rating">
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i
                      className="fa fa-star-o fa-stack-1x"></i></span>
                    <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span>
                  </div>
                  <a href="#" className="reviews"
                  >1
                    reviews</a>
                 
                </div>
                <hr />
                <ul className="list-unstyled">
                  <li><span className="disc">Brand:</span> <a className="disc1"
                    href="index5b2d.html?route=product/manufacturer/info&amp;manufacturer_id=6">Palm</a></li>
                  <li><span className="disc">Product Code:</span><span className="disc1"> Product 2</span></li>
                  <li><span className="disc">Availability:</span><span className="disc1"> In Stock</span></li>
                </ul>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <span className="pro_price">$290.00</span><span className="pro_oldprice"
                      style={{ textDecoration: 'line-through' }}>$337.99</span>
                  </li>
                  <li className="tax">Ex Tax: $240.00</li>
                </ul>
                <hr />
                <div id="product" className="product-options">
                  <div className="form-group">
                    <label className="control-label qty" >Qty</label>
                    <div className="product-btn-quantity">
                      <div className="minus-plus">
                        <button className="minus"><i className="fa fa-minus"></i></button>
                        <input type="text" name="quantity" value="1" size={2} id="input-quantity" className="form-control" />
                        <button className="plus"><i className="fa fa-plus"></i></button>
                      </div>
                    </div>
                    <input type="hidden" name="product_id" value="29" />
                  </div>
                  <div className="form-group">
                    <button type="button" id="button-cart" data-loading-text="Loading..."
                      className="btn btn-primary btn-lg btn-block">Own it Now for</button>
                    <div className="btn-group " style={{ marginLeft: '10px' }}>
                      <span>240$ only</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="addthis_toolbox addthis_default_style"
                  data-url="index0f47.html?route=product/product&amp;product_id=29">
                  <a className="addthis_button_facebook_like" ></a>
                  <a className="addthis_button_tweet"></a>
                  <a className="addthis_button_pinterest_pinit"></a>
                  <a className="addthis_counter addthis_pill_style"></a>
                </div>
                <script type="text/javascript"
                  src="../../../s7.addthis.com/js/300/addthis_widget.js#pubid=ra-515eeaf54693130e"></script>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row propage-tab">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#tab-description" data-toggle="tab">Description</a></li>
                  <li><a href="#tab-review" data-toggle="tab">Reviews (1)</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tab-description">
                    <p>
                      Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you can respond to
                      business and personal email, stay on top of appointments and contacts, and use Wi-Fi or GPS when
                      you&rsquo;re out and about. Then watch a video on YouTube, catch up with news and sports on the web,
                      or listen to a few songs. Balance your work and play the way you like it, with the Palm Treo Pro.</p>
                    <p>
                      <strong>Features</strong>
                    </p>
                    <ul>
                      <li>
                        Windows Mobile&reg; 6.1 Professional Edition</li>
                      <li>
                        Qualcomm&reg; MSM7201 400MHz Processor</li>
                      <li>
                        320x320 transflective colour TFT touchscreen</li>
                      <li>
                        HSDPA/UMTS/EDGE/GPRS/GSM radio</li>
                      <li>
                        Tri-band UMTS &mdash; 850MHz, 1900MHz, 2100MHz</li>
                      <li>
                        Quad-band GSM &mdash; 850/900/1800/1900</li>
                      <li>
                        802.11b/g with WPA, WPA2, and 801.1x authentication</li>
                      <li>
                        Built-in GPS</li>
                      <li>
                        Bluetooth Version: 2.0 + Enhanced Data Rate</li>
                      <li>
                        256MB storage (100MB user available), 128MB RAM</li>
                      <li>
                        2.0 megapixel camera, up to 8x digital zoom and video capture</li>
                      <li>
                        Removable, rechargeable 1500mAh lithium-ion battery</li>
                      <li>
                        Up to 5.0 hours talk time and up to 250 hours standby</li>
                      <li>
                        MicroSDHC card expansion (up to 32GB supported)</li>
                      <li>
                        MicroUSB 2.0 for synchronization and charging</li>
                      <li>
                        3.5mm stereo headset jack</li>
                      <li>
                        60mm (W) x 114mm (L) x 13.5mm (D) / 133g</li>
                    </ul>
                  </div>
                  <div className="tab-pane" id="tab-review">
                    <form className="form-horizontal" id="form-review">
                      <div id="review"></div>
                      <h2>Write a review</h2>
                      <div className="form-group required">
                        <div className="col-sm-2">
                          <label className="control-label" >Your Name</label>
                        </div>
                        <div className="col-sm-10">
                          <input type="text" name="name" value="" id="input-name" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-sm-2">
                          <label className="control-label" >Your Review</label>
                        </div>
                        <div className="col-sm-10">
                          <textarea name="text" rows={4} id="input-review" className="form-control"></textarea>
                          <div className="help-block"><span className="text-danger">Note:</span> HTML is not translated!</div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-sm-2">
                          <label className="control-label">Rating</label>
                        </div>
                        <div className="col-sm-10">
                          &nbsp;&nbsp;&nbsp; Bad&nbsp;
                          <input type="radio" name="rating" value="1" />
                          &nbsp;
                          <input type="radio" name="rating" value="2" />
                          &nbsp;
                          <input type="radio" name="rating" value="3" />
                          &nbsp;
                          <input type="radio" name="rating" value="4" />
                          &nbsp;
                          <input type="radio" name="rating" value="5" />
                          &nbsp;Good
                        </div>
                      </div>

                      <div className="buttons clearfix">
                        <div className="pull-right">
                          <button type="button" id="button-review" data-loading-text="Loading..."
                            className="btn btn-primary">Continue</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="related-products-block box">
              <div className="box-content">
                <div className="page-title">
                  <h3>Related Products</h3>
                </div>
                <div className="block_box row category-row">
                  <div id="related-carousel" className="box-product  related-carousel  clearfix" data-items="4">
                    <div className="product-layout col-xs-12">
                      <div className="product-thumb">
                        <div className="image">
                          <a href="index6320.html?route=product/product&amp;product_id=28">
                            <img src="/image/cache/catalog/products/12-360x360.jpg" alt="Zombie" title="Zombie"
                              className="img-responsive" />
                            <img className="img-responsive hover-img" src="/image/cache/catalog/products/3-360x360.jpg"
                              title="Zombie" alt="Zombie" />
                          </a>
                          <div className="sale-text"><span className="section-sale">-20%</span></div>
                        </div>
                        <div className="thumb-description clearfix">
                          <div className="caption">
                            <h4 className="product-title"><a
                              href="index6320.html?route=product/product&amp;product_id=28">Zombie</a></h4>
                            <p className="price">
                              <span className="price-new">$98.00</span><span className="price-old">$122.00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;