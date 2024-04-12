import React from 'react'

function Subscription() {
  return (
    <>
    <section className="call-to-action bg-gray section">
	<div className="container">
		<div className="row">
			<div className="col-md-12 text-center">
				<div className="title">
					<h2>SUBSCRIBE TO NEWSLETTER</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, <br/> facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</p>
				</div>
				<div className="col-lg-6 col-md-offset-3">
				    <div className="input-group subscription-form">
				      <input type="text" className="form-control" placeholder="Enter Your Email Address" />
				      <span className="input-group-btn">
				        <button className="btn btn-main" type="button">Subscribe Now!</button>
				      </span>
				    </div>
			  </div>

			</div>
		</div> 
	</div>   	
</section>   

<section className="section instagram-feed">
	<div className="container">
		<div className="row">
			<div className="title">
				<h2>View us on instagram</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-12">
				<div className="instagram-slider" id="instafeed" data-accesstoken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn"></div>
			</div>
		</div>
	</div>
</section>
</>
  )
}

export default Subscription
