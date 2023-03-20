import React from 'react'
import "./Awards.css"
const Awards = () => {

const list = [{
 desc:"Participated various Tech Events(RIO QUIZ)"
},
{
    desc:"Received Accolades Of the Team"
},
{
    desc:"obtained clients express gratitude for resolving issues"
},
{
    desc:"Shared innovation ideathon Event"
}];



  return (
    <div className='E-wrapper' id="Awards">
         <span>Awards and Client Appreciation</span>
        <div className="E-heading">
           
            
            {list.map((index,items)=>{
                return(
                    <ul keys={items} className="list">
                        <li>
                            {index.desc}
                        </li>
                    </ul>
                )
            }
            
            
            
            )}

</div>
</div>


  )
}

export default Awards
