import React from 'react'
import './logo.css'

function Logo() {
    return (
        <svg width='350' height='450' viewBox='0 0 350 450'>
            {/* E - shaft */}
            <rect rx='25' ry='50' x='0' y='100' width='50' height='250' fill='#9A070E' />
            <g>
            {/* Gradient */}
                <defs>
                    <linearGradient id='curveGrad'>
                        <stop offset='5%' stopColor='#5b0434' />
                        <stop offset='60%' stopColor='#9A070E' />
                    </linearGradient>
                </defs>
                {/* B - curve - top */}
                <path d='M150,100
                        L150,25
                        L225,25
                        A50,50 0 1,1 225,225'
                    stroke='url(#curveGrad)'
                    strokeWidth='50'
                    fill='none'
                />
                {/* B - curve - bottom */}
                <path d='M150,350
                        L150,425
                        L225,425
                        A50,50 0 1,0 225,225'
                    stroke='url(#curveGrad)'
                    strokeWidth='50'
                    fill='none'
                />
            </g>
            <g>
                <defs>
                    <linearGradient id='orangeGrad'>
                        <stop offset='45%' stopColor='#9A070E' />
                        <stop offset='85%' stopColor='#f98b2f' />
                    </linearGradient>
                </defs>
                {/* E - top */}
                <rect rx='25' x='5' y='100' width='220' height='50' fill='url(#orangeGrad)' />
                {/* E - bottom */}
                <rect rx='25' x='5' y='300' width='220' height='50' fill='url(#orangeGrad)' />
            </g>
            <g>
                <defs>
                    <linearGradient id='midFade'>
                        <stop offset='25%' stopColor='#9A070E' />
                        <stop offset='55%' stopColor='#f98b2f' />
                        <stop offset='70%' stopColor='#f98b2f' />
                        <stop offset='95%' stopColor='#9A070E' />
                    </linearGradient>
                </defs>
            {/* E - middle */}
            <rect x='0' y='200' width='260' height='50' fill='url(#midFade)' />
            </g>
            {/* B - shaft*/}
            <rect x='125' y='150' width='50' height='150' fill='#5b0434' />
        </svg>
    )
}

export default Logo;