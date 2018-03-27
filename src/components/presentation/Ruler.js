import React, { Component } from 'react';
class Ruler extends Component {

    constructor(props) {
        super(props);



    }

    render() {
        return (
            <div style={{
                width : this.props.length+'px',
                height: '20px',
                position: 'relative',
                display: 'flex',
                alignItems : 'center'
            }}>

                {/* lines */}
                <div
                    style={{
                        position : 'absolute',
                        top : '50%',left : '0px', right : (this.props.length/2 + 35)+'px',
                        borderBottom : '1px solid ' + this.props.color
                    }}
                ></div>
                <div
                    style={{
                        position : 'absolute',
                        top : '50%',right : '0px', left : (this.props.length/2 + 35)+'px',
                        borderBottom : '1px solid ' + this.props.color
                    }}
                ></div>
                {/* /lines */}

                {/* label */}
                <div style={{textAlign : 'center', flex : 1, color : this.props.color}}>{this.props.label}</div>

                {/* endpoints */}
                <div
                    style={{
                        position: 'absolute',
                        left : '0px',
                        top : '0px',
                        bottom : '0px',
                        borderLeft : '1px solid ' + this.props.color
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        right : '0px',
                        top : '0px',
                        bottom : '0px',
                        borderRight : '1px solid ' + this.props.color
                    }}
                ></div>

            </div>
        );
    }
}

export default Ruler;