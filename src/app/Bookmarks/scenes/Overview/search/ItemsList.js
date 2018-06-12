import React from 'react'
import styled from 'styled-components'


export default function ItemsList(props) {
    debugger
    return(
    <div>
            { props.items && props.items.length>0 
                && props.items.map(item => <Item item={item} onAddClickHandler={props.onAddClickHandler} /> ) }
        </div>
    )
}

const Item = ({item, onAddClickHandler}) => <Wrapper> 
        <div className="box">
            <img src={item.owner.avatar_url} width="30px" />
            </div>
        <div className="box">
            <h2 className="Title">{item.full_name}</h2>
            <div>
                <span>{item.description}</span> <br />
                <span>{item.stargazers_count}</span> 
                <span>Issue {item.open_issues_count}</span> 
                <span>{item.stargazers_count}</span> 
             </div>
        </div> 
        
        <div className="box Icon" >
            { <span className="iconPlus" onClick={() => onAddClickHandler(item.full_name) }>+</span> }
        </div>
    </Wrapper>


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
