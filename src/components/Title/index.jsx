import './Title.css';

export default function Title({ text }) {
    return (
        <h1>{text.toUpperCase()}</h1>
    )
}


// Crear un componente llamado FullName, el cual nos regrese nuestro nombre completo, como parrafo, dados los props
// firstName, lastName
// Notas: el apellido puede no ir