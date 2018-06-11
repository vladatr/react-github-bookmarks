import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../../../../actions'
import ItemsList from './ItemsList'

let theTimer = null

class SearchAndResult extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onAddClickHandler = this.onAddClickHandler.bind(this)
    }

    onAddClickHandler(repo) {
        this.props.dispatch(actions.addRepoToGroup('react', repo))
        this.props.dispatch(actions.emptyRepos())
    }

    onChangeHandler(e) {

        console.log("FIRE", e.target.value)

            clearTimeout(theTimer)
            const qrepo =  e.target.value
            theTimer = setTimeout(() => {
                console.log("Search ", qrepo)
                debugger
                if(qrepo.length>0) {
                    this.props.dispatch(actions.getRepos(qrepo))
                } else {
                    this.props.dispatch(actions.emptyRepos())
                }
                
            }, 300);
   console.log(theTimer)
        
    }

    render() {
        return (
        <div>
            <Search onChangeHandler={this.onChangeHandler} 
                    items={this.props.items }
                    onAddClickHandler={this.onAddClickHandler}
                    />
            
        </div>
        )
    }
}



const Search = (props) => {
    return (
        <div className="top">
            <span class="lupa">Q</span>
            <input type="text" size="50" placeholder="Search string..." onChange={props.onChangeHandler} />
            {props.items && <ItemsList items={props.items} onAddClickHandler={props.onAddClickHandler} /> }
        </div>
    )
}



const mapStateToProps = (state) =>  {
    return {
        items: state.get('results')
    }
}

export default connect(mapStateToProps)(SearchAndResult);