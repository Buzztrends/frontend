import { Engagement } from 'next/font/google';
import React from 'react';
import Image from 'next/image'

export default function NewsCard({ height, width, src, Trendscore, engScore, toggleModal }) {
  // Define a style object to apply the height and width
  const cardStyle = {
    height: height,
    width: width,
  };
  {/* <img src='/images/Buzztrend logo 1.png'></img> */ }
  return (
    <div style={cardStyle}>
      <div className="max-w-sm rounded border m-4 border-black overflow-hidden shadow-lg" style={{ borderRadius: '10px' }}>
        {/* <img className="w-full" src={src} alt="Sunset in the mountains" ></img> */}
        <Image alt ='' className="w-full" src={src} width={500} height={500}  />
        <div className="px-6 py-4" style={{cursor: 'pointer'}} onClick={()=>{toggleModal()}}>
          <div style={{
            color: '#000',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            letterSpacing: '0.6px',
          }}>
            The Coldest Sunset
          </div>
          <div style={{
            color: '#AFAFAF',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '0.36px',
          }} > sub heading</div>
          <br></br>
          <grid style={{
            color: '#000',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridGap: '10px',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '0.36px',
          }}>
            <grid-item style={{ textAlign: 'left' }}>
              Trending Score:
            </grid-item>
            <grid-item style={{ textAlign: 'right' }}>
              {Trendscore}
            </grid-item>
            <grid-item style={{ textAlign: 'left' }}>
              Engagement Score:
            </grid-item>
            <grid-item style={{ textAlign: 'right' }}>
              {engScore}
            </grid-item>
          </grid>

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 25, paddingRight: 10, alignItems: 'center', marginBottom: 10 }}>
          <span style={{
            display: 'flex',
            color: '#230061',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '0.36px',
          }}>
            {/* <img src="./save.svg" alt="svg" style={{ marginRight: 5 }} /> */}
             Save
             <Image alt ='' src='./save.svg' width={20} height={20}  />
          </span>
          <h2 style={{
            color: '#230061',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '0.36px',
          }}>MORE&gt;</h2>

        </div>

      </div>
    </div >
  );
};


