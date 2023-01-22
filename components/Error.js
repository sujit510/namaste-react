import React, { useState } from 'react'
import { useRouteError } from 'react-router'

export const Error = () => {
    const error = useRouteError();
    const [isShowMore, setIsShowMore] = useState(false);
  return (<>
    <div>This is custom error!!</div>
    {error.status}: {error.statusText}
    <div className='error-details'>
        {isShowMore ? (<>{error.error?.message}<br/>{error.error?.stack}</>) : <></>}
        
        <button onClick={() => setIsShowMore(!isShowMore)}>
            {`Show ${isShowMore ? "Less" : "More"}`}
        </button>
    </div>
    </>
    
  )
}
