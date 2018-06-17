import React from 'react'
import styled from 'styled-components'

class EmptyWidget extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            name: ""
        }
    }

    nameChange = (e) => {
        this.setState({name: e.target.value })
    }

    addGroup = (name) => {
        this.setState({name: ""})
        this.props.addGroup(name)
    }

    render() {
        return(
            <Wrapper>
                <input placeholder="Enter name" onChange={this.nameChange} value={this.state.name} /> 
                <span className="iconPlus" onClick={() => this.addGroup(this.state.name)} > 
                <img src="static/media/add.png" width="24px" />
                 </span>
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
border: 1px silver dashed;
padding: 10px;
margin: 15px;
height: 50px;
`

export default EmptyWidget;