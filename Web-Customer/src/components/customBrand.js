import React from 'react'

const CustomBrand = () => {
    return (
        <section className="brand-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col single-brand">
                        <img className="img-fluid" src="/templates-robots/img/l1.png" alt="" />
                    </div>
                    <div className="col single-brand">
                        <img className="img-fluid" src="/templates-robots/img/l2.png" alt="" />
                    </div>
                    <div className="col single-brand">
                        <img className="img-fluid" src="/templates-robots/img/l3.png" alt="" />
                    </div>
                    <div className="col single-brand">
                        <img className="img-fluid" src="/templates-robots/img/l4.png" alt="" />
                    </div>
                    <div className="col single-brand">
                        <img className="img-fluid" src="/templates-robots/img/l5.png" alt="" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .brand-area {
                    margin-bottom: 100px;
                }
            `}</style>
        </section>
    )
}

export default CustomBrand;
