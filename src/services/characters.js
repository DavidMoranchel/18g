export const getCharacters = async () => {
  const response = await fetch(
    "https://kodemia-18g-default-rtdb.firebaseio.com/.json"
  );
  const data = await response.json();
  return data;
};

// fetch("https://kodemia-18g-default-rtdb.firebaseio.com/.json", {
//   method: "POST",
//   headers: {
//     "Content-Type": "Application/JSON",
//   },
//   body: JSON.stringify({
//     prueba: 1,
//   }),
// }).then((response) => console.log(response));

// ACTIVIDAD
//
// 1. Crear pagina en /app/profile/create  #check
// 2. Crear formulario con los datos #check
//    - firstName
//    - lastName
//    - photoURL
//    - email
//    - birthdate
// 3. Enviar esta información al servidor a travez de POST  #check
// 4. Ponerlo pretty  #check
// 5. Agregar validaciones
