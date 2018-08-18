import React from 'react';

// UI Component because we are only using props and modify the UI
// also it uses function other than a class.
// Destruct the props directly.
const Ninjas = ({ninjas, deleteNinja}) => {
    
    // If-Else: Conditional Ouput/Rendering
    // const { ninjas } = props; //destructering
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 9){
    //         return (
    //             <div className="ninja" key={ ninja.id }>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //                 <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
    //                 <br/>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // });
    
    // Ternary Operator: Conditional Output/Rendering
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 10 ? (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                <br/>
            </div>
        ) : null;
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;