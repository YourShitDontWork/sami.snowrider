// Guardar progreso
localStorage.setItem("burritoBisonProgreso", JSON.stringify(progreso));

// Recuperar progreso
const progresoGuardado = JSON.parse(localStorage.getItem("burritoBisonProgreso"));
