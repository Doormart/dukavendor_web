import React from 'react'
import Dashboard from '../pages/Dashboard'

export default function EmptyPage({ text, image,mainText }) {
    return (
            <div style={{ height: '100vh' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
                    <div style={{ margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
												<img  style={{ width:'40%', height:"40%" }}src={image} alt="Centered Image" />
                        <p className='boldText' style={{ textAlign: 'center' }}>{mainText}</p>
												<p className='greysmalltext' style={{ textAlign: 'center' }}>{text}</p>
												</div>
                    </div>
                </div>
            </div>
    )
}
