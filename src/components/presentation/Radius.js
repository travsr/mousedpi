import React, { Component } from 'react';
class Radius extends Component {

    constructor(props) {
        super(props);





    }



    render() {
        return (
            <div style={{
                backgroundColor : 'rgba(0,200,200,.3)',
                boxShadow : '0 0 4px rgba(0,0,0,.3)',
                position : 'absolute',
                top : '50%',
                left : '50%',
                marginTop : -this.props.r + 'px',
                marginLeft : -this.props.r + 'px',
                width :  this.props.r*2 +'px',
                height : this.props.r*2 +'px',
                borderRadius : this.props.r+ 'px',
                display: 'flex',
                alignItems : 'flex-end'
            }}>

                <div style={{flex:1, textAlign : 'center', color : '#fff', fontWeight: 'bold', paddingTop : '30px'}}>
                    {this.props.label}
                </div>

                <div style={{position:'absolute',top:'50%',left:'50%', width : '2px', height : '2px', borderRadius : '1px', marginLeft : '0px', marginTop : '0px', backgroundColor : '#fff',opacity : .9}}></div>

                {/*<div style={{position:'absolute',top:'50%',right:'0', width : '6px', height : '6px', borderRadius : '3px', marginRight : '-3px', marginTop : '-3px', backgroundColor : '#fff'}}></div>*/}

                {/*<div style={{position:'absolute',top:'50%',left:'0px', right : '0px', borderBottom : '1px solid #fff'}}></div>*/}
            </div>
        );
    }
}

export default Radius;