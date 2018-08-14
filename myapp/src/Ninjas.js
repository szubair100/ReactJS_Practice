import React from 'react';

// UI Component because we are only using props and modify the UI
//destruct the props directly
const Ninjas = ({ninjas}) => {
    //const { ninjas } = props; //destructering
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <br/>
            </div>
        )
    });
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;