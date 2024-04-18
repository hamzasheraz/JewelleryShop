import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title,page}) => {
  return (
    <section className="page-header">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="content">
					<h1 className="page-name">{title}</h1>
					<ol className="breadcrumb">
						<li><Link to="/home">Home</Link></li>
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