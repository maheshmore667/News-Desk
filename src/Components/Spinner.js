import React from 'react';

const Spinner =() =>{

    return (<>
    <section className="text-center">
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </section>
        
    </>
    )
}
export default Spinner;
