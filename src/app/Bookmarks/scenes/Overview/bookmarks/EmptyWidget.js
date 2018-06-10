import React from 'react'

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

    render() {
        return(
            <div>
                <input placeholder="Enter name" onChange={this.nameChange} value={this.state.name} /> 
                <img src='../../../../../../assets/add.png' onClick={() => this.props.addGroup(this.state.name)}  />
            </div>
        )
    }

}


export default EmptyWidget;