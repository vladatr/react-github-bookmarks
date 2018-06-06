import React from 'react'
import styled from 'styled-components'


export default function ItemsList(props) {
debugger
    return(
    <div>
            { props.items && props.items.length>0 && props.items.map(item => <Item item={item} /> ) }
        </div>
    )
}

const Item = ({item}) => <Wrapper> 
    {item.full_name}
    </Wrapper>


const Wrapper = styled.div`
display: block;
cursor: pointer;
height: 40px;
padding: 10px;
align-items: center;
justify-content: center;
border: 1px solid silver;
border-radius: 2px;
`