import React from 'react'
import Globe from "react-globe.gl";
import CustomGlobeImage from '../../assets/globe.png'
import CustomGlobeImage1 from '../../assets/imageNew.jpg'

export default function NewGlobe() {
    const w = window.innerWidth;
    const shiftFactor = 0.4;
    const shiftAmmount = shiftFactor * w;
    let pVal = [1]
    return (
        <div
            style={{
                marginLeft: `-${shiftAmmount}px`,
                // backgroundColor:'#000'
            }}
        >
       
          {/* <p style={{color:'#fff',position:'absolute',marginTop:'150px',marginLeft:'250px',cursor:'pointer'}} onClick={_=>alert('Marker 1')}>Marker 1</p>
          <p style={{color:'#fff',position:'absolute',marginTop:'180px',marginLeft:'550px',cursor:'pointer'}} onClick={_=>alert('Marker 1')}>Marker 2</p>
          <p style={{color:'#fff',position:'absolute',marginTop:'330px',marginLeft:'750px',cursor:'pointer'}} onClick={_=>alert('Marker 1')}>Marker 3</p>
           */}
            <Globe
                style={{ marginLeft: '50px' }}
                width={w + shiftAmmount}
                globeImageUrl={CustomGlobeImage1}
                pointsData={[{name:'uzair'}]}
                backgroundColor="rgba(0,0,0,0)"
                // backgroundColor="#000"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            >
            </Globe>
        </div>
    );
}
