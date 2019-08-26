import React, {Component} from 'react'
import {connect} from "react-redux";
import {decrease, getList, increase} from "../../redux/actions";


class Admin extends Component {
    increment = () => {
        this.props.increase()
    }
    decrement = () => {
        this.props.decrease(2)
    }

    componentDidMount() {
        this.props.getList()
    }

    render() {
        return (
            <div>
                <span>admin</span>
                <h1>count---{this.props.count}</h1>
                <button onClick={this.increment}>increment</button>
                ---
                <button onClick={this.decrement}>decrement</button>
                <ul>
                    {
                        this.props.musicList.map((item, index) => (
                            <li key={index}>{item.songname}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => (
        {
            count: state.counter,
            show: state.counter,
            musicList: state.getMusicList
        }
    ),
    {
        increase,
        decrease,
        getList
    }
)(Admin)
