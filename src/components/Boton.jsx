import '../stylesheets/Boton.css';


export function Boton({texto, esBotonDeClick, manejarClick}) {
	//se pueden mandar los props individualmente poniendo los corchetes
	return(
		<button 
			//se le asigna la clase a travez de la varaible booleana esBotonDeClick
		  className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
			//manejarClick va a ser una funcion
			onClick={manejarClick}
			>
			{texto}
		</button>
	);
}

