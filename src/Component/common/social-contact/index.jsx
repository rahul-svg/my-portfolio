import React from 'react'
import { SocialData } from "../../data/social";
import "./social-contact.css"

function SocialContact() {
    const data = SocialData;
    return <div className="social-contact">
            {data.map((item,j)=>{
                return(
                    
                    <a href={item.link} key={j}>
        
                        <div className="social-icon-div" >
                            <img src =   {item.icon} alt="" className="social-icon"/>

                        </div>

                    </a>
                );

                

            })}
            
        </div>
    
}

export default SocialContact;
