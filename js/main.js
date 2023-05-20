function installComponent(URL) {
    // Crear un elemento div para contener el componente
    const componentContainer = document.createElement('div');
  
    // Cargar el contenido del componente desde el archivo HTML
    fetch(URL)
      .then(response => response.text())
      .then(html => {
        componentContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error al cargar el componente HTML:', error);
      });
  
    // Agregar el contenedor del componente al elemento #app
    const appContainer = document.getElementById('app');
    appContainer.appendChild(componentContainer);
  }