import React from 'react';
import './profile.css';

export default function Profile(props) {
    return (
        <>
            <div className="prof">
                Your Profile
            </div>

            <div style={{ textAlign: 'center', position: 'absolute', left: '45%', top: '50%' }}>
                <p style={{ color: '#7D53D4', fontSize: '25px' }}>{props.username}</p>
            </div>

            <div className="caixa" style={{ textAlign: 'center' }}>
                <p style={{ color: '#7D53D4', fontSize: '20px' }}>{props.email}</p>
            </div>
            <div className="caixa" style={{ textAlign: 'center', left: '55%' }}>
                <p style={{ color: '#7D53D4', fontSize: '20px' }}>{props.password}</p>
            </div>
            <button className="caixa" style={{ top: '85%' }}></button>
            <button className="caixa" style={{ left: '55%', top: '85%' }}></button>
        </>
    );
}