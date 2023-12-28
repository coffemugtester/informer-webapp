import React from "react";

const days = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']

const WorkingHoursCard = ({periods}) => {
  return (
      <div className="workingHoursCard">
        <div className='tableName'>Horarios:</div>
        <div className='tableContainer'>
          <table style={{textAlign: "center", alignItems: 'center', height:'70%'}}>
            <tbody>
            {periods.map((period)=>{
              return <tr key={period.close.day}><td style={{textAlign: 'left', paddingRight:'1rem'}}>{days[period.close.day - 1]}</td> <td style={{fontSize: '1.5rem'}}>{period.open.time.slice(0, 2) + ":" + period.open.time.slice(2)} - {period.close.time.slice(0, 2) + ":" + period.close.time.slice(2)}</td></tr>
            })}
            </tbody>
          </table>
        </div>
      </div>

  )
}

export default WorkingHoursCard;