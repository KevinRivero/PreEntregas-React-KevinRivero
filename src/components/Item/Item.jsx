import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


export const Item = ({product}) => {
	return (
		<Link to={"/item/" + product.id} className="card mb-3 mt-3 tarjeta">
		<div className="row g-0 contenedor">
			<div className="col-md-4 imgContenedor">
			<img src={product.link} className="img-fluid rounded-start listImg" alt="..."/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title fs-1">{product.nombre}</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary precio">${product.precio}</h6>
				</div>
			</div>
		</div>
	</Link>
	
	)
}
