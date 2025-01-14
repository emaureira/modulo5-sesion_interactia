import React from 'react';
import DoctorCard from './components/DoctorCard';
import DoctorManager from './utils/DoctorManager';

function App() {

  const doctor = {id: 1, name:"edgard", experiencia: 10, especialidad:"Traumatología"};

  const admin = new DoctorManager();
  admin.addDoctor({id: 1, name: 'Julian', experiencia: 500, especialidad: "Quimicos"});
  admin.addDoctor({id: 2, name: 'Vicente', experiencia: 30, especialidad: "Fisico"});
  const doctores = admin.getDoctores();

  return (
    <div className='container m-5'>
      <h2>Doctor Card: Ejemplo de Inferencia y paso de Props</h2>
      <DoctorCard {...doctor} />
      <hr />


    <h2>Gestion de Doctores</h2>
    <div className='d-flex flex-row flex-wrap gap-5 p-5'>
    {doctores.map((doctor) => (
      

      
      <div 
        key = {doctor.id}
        className='card'
      >
        <div className="card-body">
          <h3 className='card-title text-dark-emphasis'>{doctor.name}</h3>
          <p className='card-text'>Experiencia: {doctor.experiencia}</p>
          <p className='card-text'>Especalidad: {doctor.especialidad}</p>
        </div>
      </div>
    ))}
    </div>


    </div>
  )
}

export default App
