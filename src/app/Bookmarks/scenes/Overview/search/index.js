import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../../../../actions'
import ItemsList from './ItemsList'

let theTimer = null

class SearchAndResult extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e) {

        console.log("FIRE", e.target.value)

            clearTimeout(theTimer)
            const qrepo =  e.target.value
            theTimer = setTimeout(() => {
                console.log("Search ", qrepo)
                this.props.dispatch(actions.getRepos(qrepo))
            }, 500);
   console.log(theTimer)
        
    }

    render() {
        return (
        <div>
            <Search onChangeHandler={this.onChangeHandler} />
            {this.props.items && <ItemsList items={this.props.items} /> }
        </div>
        )
    }
}



const Search = (props) => {
    return (
        <div>
            <span class="lupa">Q</span>
            <input type="text" size="50" placeholder="Search string..." onChange={props.onChangeHandler} />
            
        </div>
    )
}



const mapStateToProps = (state) =>  {
    return {
        items: state.get('results')
    }
}

export default connect(mapStateToProps)(SearchAndResult);