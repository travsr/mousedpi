import React, { Component } from 'react';
class RulerVertical extends Component {

    constructor(props) {
        super(props);



    }

    render() {
        return (
            <div style={{
                height : this.props.length+'px',
                width: '20px',
                position: 'relative',
                display: 'flex',
                alignItems : 'center'
            }}>

                {/* lines */}
                <div
                    style={{
                        position : 'absolute',
                        left : '50%',bottom : '0px', top : (this.props.length/2 + 20)+'px',
                        borderLeft : '1px solid ' + this.props.color
                    }}
                ></div>
                <div
                    style={{
                        position : 'absolute',
                        left : '50%',top : '0px', bottom : (this.props.length/2 + 20)+'px',
                        borderLeft : '1px solid ' + this.props.color
                    }}
                ></div>
                {/* /lines */}

                {/* label */}
                <div style={{textAlign : 'center', flex : 1, color : this.props.color, position:'relative',right : '30px'}}>{this.props.label}</div>

                {/* endpoints */}
                <div
                    style={{
                        position: 'absolute',
                        left : '0px',
                        right : '0px',
                        top : '0px',
                        borderBottom : '1px solid ' + this.props.color
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        right : '0px',
                        left : '0px',
                        bottom : '0px',
                        borderBottom : '1px solid ' + this.props.color
                    }}
                ></div>

            </div>
        );
    }
}

export default RulerVertical;