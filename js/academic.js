

//primero esperar a que el dom carge con esta funcion flecha.
document.addEventListener("DOMContentLoaded", ()=>{
    //solo un objeto
    //getStuden()
    //un array de objetos
    //getStudents()
    //api publicada en internet
    //getStudensLive()
    //tarea: api con async await, api externa
    StudentsNewApi()
    //link api: https://vermenmasterchief.tk/detalleEstudiante.php?api_key=Metallica&id_usuario=idUsuario

})
//proceso para obtener de un objeto normal
// function getStuden(){
//  fetch('API/student.json')
//  .then(Response =>{
//     return Response.json();

//  })
//   .then(data =>{
//     showOneStudent(data)
//   })

// }

// function showOneStudent ({idUsuario, nombre, carrera, sexo, jornada }){
//     const contenedor = document.querySelector('tbody')
//     const row = document.createElement('tr')
//     row.innerHTML = `
//     <td>
//     ${idUsuario}
//     </td>
//     <td>
//     ${nombre}
//     </td>
//     <td>
//     ${carrera}
//     </td>
//     <td>
//     ${sexo}
//     </td>
//     <td>
//     ${jornada}
//     </td>
//     `
//     contenedor.appendChild(row)
// };

// proceso para obtener en un array de objetos
// function getStudents(){
//   const url= "API/students.json";
//    fetch(url)
//    .then(Request =>{
//     //console.log(Request)
//     return Request.json();
//    })
//    .then( data =>{
//     showallStudens(data);
//     //console.log(data);
//    })
// }

// function showallStudens(students){
//     const contenedor = document.querySelector('tbody');
//     students.forEach((student)=>{
//         const {id_usuario, nombre, programa, sexo, jornada }= student
//         const rows = document.createElement('tr')

//         rows.innerHTML=`
//         <td>
//     ${id_usuario}
//     </td>
//     <td>
//     ${nombre}
//     </td>
//     <td>
//     ${programa}
//     </td>
//     <td>
//     ${sexo}
//     </td>
//     <td>
//     ${jornada}
//     </td>
//         `
//      contenedor.appendChild(rows)
//     })
// }





// api externa con async await
//  async function getStudensLive(){
//     const url= "https://vermenmasterchief.tk/estudiantes.php";
//     //  fetch(url)
//     //  .then(Request =>{
    
//     //   return Request.json();
//     //  })
//     //  .then( data =>{
//     //   showallStudens(data.datos);
     
//     //  })
    
    
// try{ const Response = await  fetch(url);
//     const data = await Response.json();
//    showallStudens(data.datos) 
// }  catch(error){
//     console.log(error);
//    }

// }
  
//   function showallStudens(students){
//       const contenedor = document.querySelector('tbody');
//       students.forEach((student)=>{
//           const {id_usuario, nombre, programa, sexo, jornada }= student
//           const rows = document.createElement('tr')
  
//           rows.innerHTML=`
//           <td>
//       ${id_usuario}
//       </td>
//       <td>
//       ${nombre}
//       </td>
//       <td>
//       ${programa}
//       </td>
//       <td>
//       ${sexo}
//       </td>
//       <td>
//       ${jornada}
//       </td>
//           `
//        contenedor.appendChild(rows)
//       })
//   }

// mi intento de apis pero con cards (salio mal)
function StudentsNewApi({id_usuario}){
  const url= `https://vermenmasterchief.tk/detalleEstudiante.php?api_key=Metallica&id_usuario=${id_usuario}`;
  fetch(url)

   .then(Request =>{
    return Request.json();
   })
   .then(data =>{
    showStudents(data.datos)
  })
  
}

function showStudents(students){
          const contenedor = document.querySelector('.cards');
       students.forEach((student)=>{
           const {foto, promedio, sisben }= student
           const card = document.createElement('div')
      
           card.innerHTML=`
          <img src ="${foto}">
          <p>sisben: ${sisben}</p>
          <p> promedio: ${promedio}</p>
           `
           contenedor.appendChild(card)
       })
   };
