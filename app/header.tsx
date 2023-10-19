"use client";
import Link from 'next/link';
import { useState } from 'react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(null);

  // Helper function to get the viewport width
  const getViewport = () => {
    const { innerWidth: width } = window;
    //setViewportWidth(width);
  };

  // Event handler for button click
  const handleBtnClick = () => {
    console.log('asdsd')
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
    getViewport();  // Update viewportWidth state
  };

  // Event handler for menu close click
  const handleMenuCloseClick = () => {
    setMenuOpen(false);  // Close menu
  };

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="header-top-inner clearfix">
                <div className="header-left col-md-3 col-xs-6">
                  <div id="logo">
                    <Link href="/">
                      <img src="/image/catalog/logo.png" title="Your Store"
                        alt="Your Store" className="img-responsive" />
                    </Link>
                  </div>
                </div>

                {/* Menu Mobile */}
                <div className={`header-center col-md-6 hidden-xs hidden-sm ${menuOpen ? 'open' : ''}`}>
                  <nav id="menu" className="navbar navbar_menu">
                    <div id="topCategoryList" className='main-menu menu-navbar clearfix box-menu'>
                      <div className="menu-close hidden-lg hidden-md"><span id="category" className="">Menu</span><i
                        className="icon-close" onClick={handleMenuCloseClick}></i></div>
                      <ul className="nav navbar-nav">
                        <li className="menulist home">
                          <Link id="home" href="/">Home</Link>
                        </li>

                        <li className="dropdown menulist">
                          <Link href="/list" className="dropdown-toggle"
                            aria-expanded="false">Items</Link>
                          {/*
                          <div className="dropdown-menu navcol-menu column-1 ">
                            <div className="dropdown-inner">
                              <ul className="list-unstyled childs_1">
                                <li className="dropdown-submenu sub-menu-item">
                                  <a href="indexe177.html?route=product/category&amp;path=25_28" className="dropdown-toggle"
                                    aria-expanded="false">Bird mask</a>
                                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                                  <ul className="list-unstyled sub-menu ">
                                    <li>
                                      <a href="index43ee.html?route=product/category&amp;path=28_35">Clown mask</a>
                                    </li>
                                    <li>
                                      <a href="indexf6ce.html?route=product/category&amp;path=28_36">Masquerade mask</a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="">
                                  <a href="index68a7.html?route=product/category&amp;path=25_30" className="dropdown-toggle"
                                    aria-expanded="false">Poodle Mask</a>
                                </li>
                                <li className="">
                                  <a href="index955a.html?route=product/category&amp;path=25_32" className="dropdown-toggle"
                                    aria-expanded="false">Pumpkin Mask</a>
                                </li>
                                <li className="">
                                  <a href="indexf3db.html?route=product/category&amp;path=25_31" className="dropdown-toggle"
                                    aria-expanded="false">Unicorn Mask</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                           */}
                        </li>

                        <li className="dropdown menulist">
                          <Link href="/aboutUs">Shop</Link>
                        </li>

                        <li className="dropdown menulist">
                          <a className="dropdown-toggle"
                            aria-expanded="false" style={{cursor: 'pointer'}}>More</a>
                          <div className="dropdown-menu navcol-menu column-1 ">
                            <div className="dropdown-inner">
                              <ul className="list-unstyled childs_1">
                                <li className="">
                                  <Link href="/contactUs" className="dropdown-toggle"
                                    aria-expanded="false">Contact Us</Link>
                                </li>
                                <li className="">
                                  <Link href="/delivery" className="dropdown-toggle"
                                    aria-expanded="false">Delivery</Link>
                                </li>
                                <li className="">
                                  <Link href="/terms" className="dropdown-toggle"
                                    aria-expanded="false">Terms and Conditions</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div className="header-right header-links col-md-3 col-xs-6">
                  <div className="header_cart">
                    <div id="cart" className="btn-group btn-block">
                      <Link
                        href="/list"
                        className="btn btn-inverse btn-block btn-lg dropdown-toggle" >
                        <span id="cart-total"><span id="text-item" data-value="0"></span></span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="navbar-header">
                      <button type="button" className="btn btn-navbar navbar-toggle" id="btnMenuBar" onClick={handleBtnClick} style={{ margin: 0 }}><i
                        className="icon-menu-4"></i></button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;