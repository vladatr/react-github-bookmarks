import React from 'react'
import styled from 'styled-components'

import Item from '../Item'

export default function ItemsList(props) {
    

    return(
    <div>
            { props.items && props.items.length>0 
                && props.items.map(item => <Item item={item}  addedRepos={props.addedRepos}
                                        onAddClickHandler={props.onAddClickHandler} /> ) }
        </div>
    )
}




const Wrapper = styled.div`
display: block;
background-color: white;
height: 80px;
width: 500px;
padding: 10px;
align-items: center;
justify-content: center;
border: 1px solid silver;
border-radius: 2px;
`
