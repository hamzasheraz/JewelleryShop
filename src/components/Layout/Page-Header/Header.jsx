import React from 'react'

const Header = ({title,page}) => {
  return (
    <section className="page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="content">
					<h1 className="page-name">{title}</h1>
					<ol className="breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li className="active">{page}</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Header