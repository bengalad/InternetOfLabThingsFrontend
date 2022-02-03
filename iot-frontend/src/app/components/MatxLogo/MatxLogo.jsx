import React from 'react'
import useSettings from 'app/hooks/useSettings'
import Warwicklogo from '../../../warwick-logo-nowords.png'; // with import

const MatxLogo = ({ className }) => {
    const { settings } = useSettings()
    const theme = settings.themes[settings.activeTheme]

    return (
        <svg
        width="30px"
        height="30px"
        version="1.1"
        //xmlns="http://www.w3.org/2000/svg"
        >
            <image href = {Warwicklogo} height="30px" width="30px"/>
        </svg>
    )
}



export default MatxLogo
