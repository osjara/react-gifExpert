import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

const {data:images } = useFetchGifs( category );
    

    return (
        <>
         <h3>{category}</h3>
        
        
        <div className="gridCard">
            {
                images.map( img => (
                    <GifGridItem 
                        key = {img.id}
                        {...img} 
                    />
                ))
            }
        </div> 
        </>
    )
}

