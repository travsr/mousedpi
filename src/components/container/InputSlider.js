import React, { Component } from 'react';

import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

class InputSlider extends Component {

    constructor(props) {
        super(props);

        // Props:
        // label, defaultValue, onChange, min, max, step, label

        this.state = {
            open : false,
            anchorEl : null,
            value : this.props.defaultValue
        }

        this.handlePopoverClose = this.handlePopoverClose.bind(this);
        this.handlePopoverOpen = this.handlePopoverOpen.bind(this);

    }

    handlePopoverOpen(e) {
        // This prevents ghost click.
        e.preventDefault();


        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    };

    handlePopoverClose() {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div style={{flex:1,position: 'relative', display:'flex'}}>

                <TextField
                    style={{margin : '10px', flex : 1}}
                    className="myTextField"
                    onChange={(e, val)=>{
                        this.setState({value : val});
                        this.props.onChange(val);
                    }}
                    type="number"
                    value={this.props.value}
                    disabled={this.props.disabled}
                    onClick={(e)=>{
                        if(!this.props.disabled)
                            this.handlePopoverOpen(e);
                    }}
                />
                <label style={{position:'absolute',top:'14px',left:'17px', fontSize : '.7em', color : '#aaa'}}>{this.props.label}</label>

                {this.props.bottomLabel &&
                    <label style={{position:'absolute',bottom:'38px',left:'0px',right:'0px', textAlign:'center', fontSize : '.5em', color : '#999'}}>{this.props.bottomLabel}</label>
                }
                <Popover
                    style={{width : '400px'}}
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handlePopoverClose}
                >

                    <Slider
                        value={this.props.value}
                        defaultValue={this.state.value}
                        className="mySlider"
                        min={this.props.min} max={this.props.max}
                        step={this.props.step}
                        style={{flex : 1, margin: '10px'}}
                        onChange={(e, val)=> {
                            this.setState({value : val});
                            this.props.onChange(val);
                        }}
                    />

                </Popover>

            </div>
        );
    }
}

export default InputSlider;