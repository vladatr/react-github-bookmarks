import React from 'react'
import styled from 'styled-components'

class Widgets extends React.Component {

    render() {
        debugger
        let list = []
        return(
            <div>
               {this.props.bookmarks.groups  && this.props.bookmarks.groups.length>0 && this.props.bookmarks.groups.map(group => {
                  {list = this.props.bookmarks.reposByGroups.filter(g => g.group==group) } 
                  return (
                    
                   <Widget group={group} 
                    reposByGroup={list}/>
                   )
                    }
              )} 
            </div>
        )
    }
}

const Widget = ({group, reposByGroup}) => {
    debugger
    return (
        <Wrapper> 
        <h2>{group}</h2>
        
        {reposByGroup.length>0 && reposByGroup.map(repo => <div>{repo.name}</div>)}
    </Wrapper>

    )

}

const Wrapper = styled.div`
display: block;
background-color: white;
cursor: pointer;
width: 100%;
padding: 10px;
align-items: center;
justify-content: center;
border: 1px solid silver;
border-radius: 2px;
`

export default Widgets;