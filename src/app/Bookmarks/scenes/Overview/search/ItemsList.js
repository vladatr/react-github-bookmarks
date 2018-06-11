import React from 'react'
import styled from 'styled-components'


export default function ItemsList(props) {
    return(
    <div>
            { props.items && props.items.length>0 
                && props.items.map(item => <Item item={item} onAddClickHandler={props.onAddClickHandler} /> ) }
        </div>
    )
}

const Item = ({item, onAddClickHandler}) => <Wrapper> 
        <div className="Title">{item.full_name}
        
        </div>
        <div className="Icon" >
            { <span onClick={() => onAddClickHandler(item.full_name) }>+</span> }
        </div>
    </Wrapper>


const Wrapper = styled.div`
display: block;
background-color: white;
height: 60px;
width: 30%;;
padding: 10px;
align-items: center;
justify-content: center;
border: 1px solid silver;
border-radius: 2px;
`
