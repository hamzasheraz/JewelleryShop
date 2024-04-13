import React from 'react'
import img3 from '../images/blog/avater-3.jpg'

const Dashboard = () => {
  return (
    <>
    <section className="top-header">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-xs-12 col-sm-4">
				<div className="contact-number">
					<i className="tf-ion-ios-telephone"></i>
					<span>0129- 12323-123123</span>
				</div>
			</div>
			<div className="col-md-4 col-xs-12 col-sm-4">
			
				<div className="logo text-center">
					<a href="index.html">
					
                    {/* <img src={img3} /> */}
					</a>
				</div>
			</div>
			<div className="col-md-4 col-xs-12 col-sm-4">
			
				<ul className="top-menu text-right list-inline">
					<li className="dropdown cart-nav dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
								className="tf-ion-android-cart"></i>Cart</a>
						<div className="dropdown-menu cart-dropdown">
							
							<div className="media">
								<a className="pull-left" href="#!">
									<img className="media-object" src="images/shop/cart/cart-1.jpg" alt="image" />
								</a>
								<div className="media-body">
									<h4 className="media-heading"><a href="#!">Ladies Bag</a></h4>
									<div className="cart-price">
										<span>1 x</span>
										<span>1250.00</span>
									</div>
									<h5><strong>$1200</strong></h5>
								</div>
								<a href="#!" className="remove"><i className="tf-ion-close"></i></a>
							</div>
						
							<div className="media">
								<a className="pull-left" href="#!">
									<img className="media-object" src="images/shop/cart/cart-2.jpg" alt="image" />
								</a>
								<div className="media-body">
									<h4 className="media-heading"><a href="#!">Ladies Bag</a></h4>
									<div className="cart-price">
										<span>1 x</span>
										<span>1250.00</span>
									</div>
									<h5><strong>$1200</strong></h5>
								</div>
								<a href="#!" className="remove"><i className="tf-ion-close"></i></a>
							</div>

							<div className="cart-summary">
								<span>Total</span>
								<span className="total-price">$1799.00</span>
							</div>
							<ul className="text-center cart-buttons">
								<li><a href="cart.html" className="btn btn-small">View Cart</a></li>
								<li><a href="checkout.html" className="btn btn-small btn-solid-border">Checkout</a></li>
							</ul>
						</div>

					</li>

				
					<li className="dropdown search dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
								className="tf-ion-ios-search-strong"></i> Search</a>
						<ul className="dropdown-menu search-dropdown">
							<li>
								<form action="post"><input type="search" className="form-control" placeholder="Search..."/></form>
							</li>
						</ul>
					</li>

				
					<li className="commonSelect">
						<select className="form-control">
							<option>EN</option>
							<option>DE</option>
							<option>FR</option>
							<option>ES</option>
						</select>
					</li>

				</ul>
			</div>
		</div>
	</div>
</section>

<section className="menu">
	<nav className="navbar navigation">
		<div className="container">
			<div className="navbar-header">
				<h2 className="menu-title">Main Menu</h2>
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
					aria-expanded="false" aria-controls="navbar">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>

			</div>

		
			<div id="navbar" className="navbar-collapse collapse text-center">
				<ul className="nav navbar-nav">

				
					<li className="dropdown ">
						<a href="index.html">Home</a>
					</li>


					<li className="dropdown dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Shop <span
								className="tf-ion-ios-arrow-down"></span></a>
						<div className="dropdown-menu">
							<div className="row">

								<div className="col-lg-6 col-md-6 mb-sm-3">
									<ul>
										<li className="dropdown-header">Pages</li>
										<li role="separator" className="divider"></li>
										<li><a href="shop.html">Shop</a></li>
										<li><a href="checkout.html">Checkout</a></li>
										<li><a href="cart.html">Cart</a></li>
										<li><a href="pricing.html">Pricing</a></li>
										<li><a href="confirmation.html">Confirmation</a></li>

									</ul>
								</div>

						
								<div className="col-lg-6 col-md-6 mb-sm-3">
									<ul>
										<li className="dropdown-header">Layout</li>
										<li role="separator" className="divider"></li>
										<li><a href="product-single.html">Product Details</a></li>
										<li><a href="shop-sidebar.html">Shop With Sidebar</a></li>

									</ul>
								</div>

							</div>
						</div>
					</li>

					<li className="dropdown full-width dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Pages <span
								className="tf-ion-ios-arrow-down"></span></a>
						<div className="dropdown-menu">
							<div className="row">

							
								<div className="col-sm-3 col-xs-12">
									<ul>
										<li className="dropdown-header">Introduction</li>
										<li role="separator" className="divider"></li>
										<li><a href="contact.html">Contact Us</a></li>
										<li><a href="about.html">About Us</a></li>
										<li><a href="404.html">404 Page</a></li>
										<li><a href="coming-soon.html">Coming Soon</a></li>
										<li><a href="faq.html">FAQ</a></li>
									</ul>
								</div>

								<div className="col-sm-3 col-xs-12">
									<ul>
										<li className="dropdown-header">Dashboard</li>
										<li role="separator" className="divider"></li>
										<li><a href="dashboard.html">User Interface</a></li>
										<li><a href="order.html">Orders</a></li>
										<li><a href="address.html">Address</a></li>
										<li><a href="profile-details.html">Profile Details</a></li>
									</ul>
								</div>

							
								<div className="col-sm-3 col-xs-12">
									<ul>
										<li className="dropdown-header">Utility</li>
										<li role="separator" className="divider"></li>
										<li><a href="login.html">Login Page</a></li>
										<li><a href="signin.html">Signin Page</a></li>
										<li><a href="forget-password.html">Forget Password</a></li>
									</ul>
								</div>

								<div className="col-sm-3 col-xs-12">
									<a href="shop.html">
										<img className="img-responsive" src="images/shop/header-img.jpg" alt="menu image" />
									</a>
								</div>
							</div>
						</div>
					</li>



					<li className="dropdown dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Blog <span
								className="tf-ion-ios-arrow-down"></span></a>
						<ul className="dropdown-menu">
							<li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
							<li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
							<li><a href="blog-full-width.html">Blog Full Width</a></li>
							<li><a href="blog-grid.html">Blog 2 Columns</a></li>
							<li><a href="blog-single.html">Blog Single</a></li>
						</ul>
					</li>

					
					<li className="dropdown dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Elements <span
								className="tf-ion-ios-arrow-down"></span></a>
						<ul className="dropdown-menu">
							<li><a href="typography.html">Typography</a></li>
							<li><a href="buttons.html">Buttons</a></li>
							<li><a href="alerts.html">Alerts</a></li>
						</ul>
					</li>
				</ul>

			</div>
		
		</div>
	</nav>
</section>

<section className="page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="content">
					<h1 className="page-name">Dashboard</h1>
					<ol className="breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li className="active">my account</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="user-dashboard page-wrapper">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<ul className="list-inline dashboard-menu text-center">
					<li><a className="active" href="dashboard.html">Dashboard</a></li>
					<li><a href="order.html">Orders</a></li>
					<li><a href="address.html">Address</a></li>
					<li><a href="profile-details.html">Profile Details</a></li>
				</ul>
				<div className="dashboard-wrapper user-dashboard">
					<div className="media">
						<div className="pull-left">
							<img className="media-object user-img" src="images/avater.jpg" alt="Image"/>
						</div>
						<div className="media-body">
							<h2 className="media-heading">Welcome Adam Smith</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure, est. Sit mollitia est maxime! Eos
								cupiditate tempore, tempora omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil. </p>
						</div>
					</div>
					<div className="total-order mt-20">
						<h4>Total Orders</h4>
						<div className="table-responsive">
							<table className="table">
								<thead>
									<tr>
										<th>Order ID</th>
										<th>Date</th>
										<th>Items</th>
										<th>Total Price</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><a href="#!">#252125</a></td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td>$ 99.00</td>
									</tr>
									<tr>
										<td><a href="#!">#252125</a></td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td>$ 99.00</td>
									</tr>
									<tr>
										<td><a href="#!">#252125</a></td>
										<td>Mar 25, 2016</td>
										<td>2</td>
										<td>$ 99.00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<footer className="footer section text-center">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<ul className="social-media">
					<li>
						<a href="https://www.facebook.com/themefisher">
							<i className="tf-ion-social-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/themefisher">
							<i className="tf-ion-social-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com/themefisher">
							<i className="tf-ion-social-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.pinterest.com/themefisher/">
							<i className="tf-ion-social-pinterest"></i>
						</a>
					</li>
				</ul>
				<ul className="footer-menu text-uppercase">
					<li>
						<a href="contact.html">CONTACT</a>
					</li>
					<li>
						<a href="shop.html">SHOP</a>
					</li>
					<li>
						<a href="pricing.html">Pricing</a>
					</li>
					<li>
						<a href="contact.html">PRIVACY POLICY</a>
					</li>
				</ul>
				<p className="copyright-text">Copyright &copy;2021, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
			</div>
		</div>
	</div>
</footer>
</>
  )
}

export default Dashboard