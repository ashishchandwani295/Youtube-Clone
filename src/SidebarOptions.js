import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ selected, title, Icon }) {
    return (
        <div className={`sidebaroptions && ${selected && "selected"}`}>
            <div className="sidebaroptions__container">
                {Icon && <Icon className="sidebaroptions__icon" />}
                <h4 className="sidebaroptions__title">{title}</h4>
            </div>
        </div>
    )
}

export default SidebarOptions
