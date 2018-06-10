import React from 'react'
import styled from 'styled-components'


export default function ItemsList(props) {
    return(
    <div>
            { props.items && props.items.length>0 && props.items.map(item => <Item item={item} /> ) }
        </div>
    )
}

const Item = ({item}) => <Wrapper> 
        <div className="Title">{item.full_name}
        
        </div>
        <div className="Icon" >
            {false && <span onClick={onAddClickHandler}>+</span> }
        </div>
    </Wrapper>


const Wrapper = styled.div`
display: block;
background-color: white;
cursor: pointer;
height: 60px;
width: 30%;;
padding: 10px;
align-items: center;
justify-content: center;
border: 1px solid silver;
border-radius: 2px;
`
