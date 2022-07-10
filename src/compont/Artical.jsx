import React from 'react';

const Artical = ({Title,ImgSorcs,Descripe}) => {
    return ( 

        <div className='container'>
        <div className="title">{Title}</div>
        <img src={ImgSorcs}  />
        <p>{Descripe}</p>
        </div>
     );
}
 
export default Artical;