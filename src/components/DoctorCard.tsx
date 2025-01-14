type ID = string | number;

interface Doctor {
    id: ID;
    name: "juan"; //Infiere que le voy a pasar un string
    experiencia: number;
    especialidad: string;
}

const DoctorCard: React.FC<Doctor> = ({id, name, experiencia, especialidad}) =>{
    return(
        <div className="card card-primary p-3">
            <div className="card-header">
                Doctor Nº: {id}
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <p>Experiencia: {experiencia}</p>
                <p>Especialidad: {especialidad}</p>
            </div>
        </div>
    );
}

export default DoctorCard;