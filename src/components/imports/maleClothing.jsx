import React from 'react';
import Card from './Card';
import maleData from './maleData';

const maleClothing = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">M & C Clothing</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        maleData.map((val, index) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default maleClothing;