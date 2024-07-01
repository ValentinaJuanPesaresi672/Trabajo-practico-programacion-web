function simularCompra() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = document.getElementById('anio').value;
    const resultadoSimulacion = document.getElementById('resultadoSimulacion');

    
    if (marca && modelo && anio) {
        resultadoSimulacion.innerHTML = `
            <h3>Resultados de la Simulación</h3>
            <p>Para el vehículo ${marca} ${modelo} del año ${anio}, recomendamos los siguientes neumáticos:</p>
            <ul>
                <li>Yokohama Advan A035</li>
                <li>Yokohama Geolandar G058</li>
                <li>Yokohama X AT G016</li>
                <li> Yokohama Geolandar MT G005</li>
            </ul>
        `;
    } else {
        resultadoSimulacion.innerHTML = '<p class="text-danger">Por favor, complete todos los campos del formulario.</p>';
    }
}
