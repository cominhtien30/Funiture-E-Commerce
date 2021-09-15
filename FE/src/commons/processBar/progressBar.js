// @flow
import * as React from 'react'

export default function progressBar({ progress }) {
    return (
        <div
            style={{
                margin: '10px 0',
                height: '13px',
                borderRadius: '10px',
                width: `${progress}%`,
                // background:
                //     'linear-gradient(#FBAB7E,#F7CE68)',
                color: '#2F4858',
                fontWeight: 900,
                fontSize: '10px',
                lineHeight: '13px',
                transition: 'width',
                backgroundColor: 'rgb(43,194,83)',
                backgroundImage:
                    ' linear-gradient( -45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%,  rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%,  transparent )',

                boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
        ></div>
    )
}
