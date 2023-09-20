import React from 'react'
import "./Item.css"


export const Item = ({item}) => {
	return (
		<div className="card mb-3 mt-3 tarjeta">
		<div className="row g-0">
			<div className="col-md-4">
				<img src={item.link} className="img-fluid rounded-start" alt="..."/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title fs-1">{item.nombre}</h5>
					<h6 className="card-subtitle mb-2 text-body-secondary">${item.precio}</h6>
					<a href="#" className="btn btn-primary">Comprar</a>
				</div>
			</div>
		</div>
	</div>
	)
}
