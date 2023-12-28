import React from "react";

const days = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']

const WorkingHoursCard = ({periods}) => {
  return (
      <div className="workingHoursCard" style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%',  // Or any specific height as needed
        gridTemplateColumns: '6rem auto',
        gridTemplateRows: '3.5rem auto 3.5rem',
        position: 'relative',
      }}>
        <div style={{gridColumnStart: 2, gridRowEnd: 2, width: "100%", height: "100%", overflow: "visible", position: 'relative', top: '1.25rem'}}><p style={{color: "black", textAlign: 'center', fontSize: '2.5rem', fontWeight: '500'}}>Horarios:</p></div>
        <div style={{gridColumnStart: 2, gridRowStart: 2, gridRowEnd: 3, width: "100%", height: "100%", backgroundColor: "silver", borderRadius: '10px 0px 0px 10px', display: 'flex', justifyContent: 'center', paddingTop: '3rem'}}>
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