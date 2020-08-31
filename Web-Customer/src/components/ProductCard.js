import React from 'react'
import ButtonComponent from './ButtonComponent/index';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const ProductCard = (props) => {
    const { imgSrc, title, price } = props
    return (
        <div className="single-product">
            <div className="thumb">
                <img src={imgSrc || 'img/robot-01.jpg'} />
            </div>
            <div className="details">
                <h4 style={{ color:'#4762ad' }}>{title || 'Robot name'}</h4>
                <p><i style={{ fontWeight: 500, fontSize: 15, color:'#333' }}>Price:</i> <span style={{ fontWeight: 'bold', fontSize: 17, color:'#6dcef5' }}>{price || 'No price'}</span></p>
                <div style={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', justifyContent:'center' }}>
                    <ButtonComponent style={{ marginRight: 10 }} simple color="secondary"> <ShoppingCartIcon /> Buy Now</ButtonComponent>
                    <ButtonComponent simple color="primary">View</ButtonComponent>
                </div>
            </div>
            <style jsx>{`
                .details {
                    background: #F7FEFF;
                }
                .single-product {
                    box-shadow: 0px 0px 30px 0px #A1C1C4;
                }
                .thumb {
                    height: 240px;
                    width: 100%;
                }
                .thumb img {
                    height: 100%;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}

ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string
}

export default ProductCard;
/*
imgSrc = "templates-robots/img/p1.png"
title = The Upper Eye
description = Who are in extremely love with eco friendly system.
*/