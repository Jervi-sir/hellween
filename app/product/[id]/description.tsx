"use client"

import { useState } from "react"

export const Description = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <div className="col-sm-12">
        <div className="row propage-tab">
          <ul className="nav nav-tabs">
            <li className={ currentTab == 1 ? "active" : ""}><a onClick={() => setCurrentTab(1)} style={{ cursor: "pointer" }}>Description</a></li>
            <li className={ currentTab == 2 ? "active" : ""}><a onClick={() => setCurrentTab(2)} style={{ cursor: "pointer" }}>Reviews (1)</a></li>
          </ul>
          <div className="tab-content">
            <div className={ currentTab == 1 ? "tab-pane active" : "tab-pane"} >
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
            <div className={ currentTab == 2 ? "tab-pane active" : "tab-pane"}>
              <form className="form-horizontal" id="form-review">
                <div id="review"></div>
                <h2>Write a review</h2>
                <div className="form-group required">
                  <div className="col-sm-2">
                    <label className="control-label">Your Name</label>
                  </div>
                  <div className="col-sm-10">
                    <input type="text" name="name" id="input-name" className="form-control" />
                  </div>
                </div>
                <div className="form-group required">
                  <div className="col-sm-2">
                    <label className="control-label">Your Review</label>
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
    </>
  )
}