import React from 'react';
import './css/bs5/carousel.css'

function CarouselComponent() {
    return (
        <>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel">
                    <div className="carousel-item active">
                        <img alt="op" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg" height="100%" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img alt="#Shoplocal" src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/JulyHero/IB_PC_1x._CB567454969_.jpg" height="100%" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/Local/JulyHero/IB_PC_2x._CB567455600_.jpg" />
                    </div>
                    <div className="carousel-item">
                        <img alt="Decor" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/GW/Megahomesale/Hero/Table-decoratives.pc_1._CB569293130_.jpg" height="100%" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/GW/Megahomesale/Hero/Table-decoratives.pc_1._CB569293130_.jpg" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default CarouselComponent
