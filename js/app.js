const form = document.querySelector('#generar-nombre');
 
form.addEventListener('submit', traerNombres);
 
 
 
function traerNombres(e){
    e.preventDefault();

    //Leer las variables
    const origen = document.querySelector('#origen').value;
 
    const gender = document.querySelector('#genero').value;
 
    const average = document.querySelector('#numero').value
   
    let url = '';

    //Agregar los valores a la URL
    url += `https://randomuser.me/api/?nat=${origen}&gender=${gender}&results=${average}`;
 

  // Código de FETCH
  fetch(url)
  .then(res => res.json() )
  .then(data => {
       let html = `<h2>Nombres Generados</h2>`;
       html += `<ul class="lista">`;
            data.results.forEach(nombre => {
                 html +=`
                      <li>${nombre.name.first}</li>
                 `;
            })
       html += `</ul>`;
       document.querySelector('#resultado').innerHTML = html;
  })
  .catch(err => console.log(err))
}