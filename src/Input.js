import React, { Component } from 'react'
import inputStyle from './css/input.module.css'

export class Input extends Component {
    constructor(props){
        super(props);
        this.state = {value:''};
        this.HandleChange = this.HandleChange.bind(this);
        this.HandleFocus = this.HandleFocus.bind(this);
        this.HandleBlur = this.HandleBlur.bind(this);
        this.lblRef = React.createRef();
    }
    HandleChange(e){
        this.setState({value:e.target.value});
    }
    HandleFocus(e){
        if(this.state.value === ''){
            this.lblRef.current.classList.toggle(inputStyle.move);
        }
    }
    HandleBlur(e){
        if(this.state.value === ''){
            this.lblRef.current.classList.toggle(inputStyle.move);
        }
    }
    render() {
        return (
            <div style={{position:'relative',padding:'1em',marginTop:'1em'}}>
                <input type={this.props.type} onFocus={this.HandleFocus} onBlur={this.HandleBlur} className={inputStyle.entry} value={this.state.value} onChange={this.HandleChange} />
                <label ref={this.lblRef} className={inputStyle.textLbl}>{this.props.text}</label>
            </div>
        )
    }
}

export default Input
