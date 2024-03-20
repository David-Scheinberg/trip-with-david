import React from 'react'
// import '../style/Style.css'


const MyGallery = (props) => {
    return (
       
            <div className='col-md-3 col-xsm-6 col-sm-4 rounded-2 border border-2 p-2 m-2 mt-3' >
                <img src={props.image} alt="" className='imgP rounded-2' width="100%" height={200} />
                <h2 className='h2StyleG rounded-2'>Country: <span className='spanG'>{props.Country}</span ></h2>
                <h2 className='h2StyleG rounded-2'>State: <span className='spanG'>{props.State}</span ></h2>
                <h2 className='h2StyleG rounded-2'>Name: <span className='spanG'>{props.name}</span ></h2>
                <h2 className='h2StyleG rounded-2'>Price: <span className='spanG'>{props.price}</span></h2>

           
        </div>
    )
}


export default MyGallery