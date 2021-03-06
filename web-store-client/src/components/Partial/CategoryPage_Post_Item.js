import React from 'react';
import * as ImageRoot from './../../config/ImageRoot';
import { NavLink } from "react-router-dom";

function CategoryPage_Post_Item({CategoryPost}) {
    function getNameImage(image) {
        var str = image;
        var str_array = str.split(',', 1);
        return str_array;
    }
    return (
        <div className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <NavLink exact to={`/san-pham/${CategoryPost.slug}`}>
            <div className="item--box" style={{ width: '100%', background: '#fff', position: 'relative' }}>
                <div className="mb-0" style={{ width: '100%', height: '320px', }}>
                    <img src={ImageRoot.ImageRoot+'post/' + getNameImage(CategoryPost.image)} width="100%" height="100%" style={{ objectFit: 'cover' }} />
                    <div style={{ width: '100px', position: 'absolute', marginTop: '-300px', display: 'flex' }}>
                        <div style={{ width: '30px', height: '30px', background: '#e43636' }} />
                        <div style={{ width: '70px', height: '30px', background: '#f94747' }}>
                            <p className="text-white font-weight-bold text-center" style={{ lineHeight: '30px' }}>HOT
                          </p>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'absolute', right: 0, width: '200px', height: '40px', marginTop: '-40px' }}>
                    <div style={{ borderBottom: '40px solid #ff5c01', borderLeft: '25px solid transparent', width: '200px' }}>
                        <p className="text-white font-weight-bold float-right ml-2" style={{ position: 'absolute', lineHeight: '40px', fontSize: '130%' }}>2.200.000 VNĐ</p>
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    );
}

export default CategoryPage_Post_Item;