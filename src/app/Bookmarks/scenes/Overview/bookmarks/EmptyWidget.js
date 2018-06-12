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

    addGroup = (name) => {
        this.setState({name: ""})
        this.props.addGroup(name)
    }

    render() {
        return(
            <div>
                <input placeholder="Enter name" onChange={this.nameChange} value={this.state.name} /> 
                <span className="iconPlus" onClick={() => this.addGroup(this.state.name)} > + </span>
            </div>
        )
    }

}


export default EmptyWidget;