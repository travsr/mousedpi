import React, { Component } from 'react';
class GridDisplay extends Component {

    constructor(props) {
        super(props);




        let rows = [];
        let i = 0;
        for(i = 0; i < 200; i++) {
            rows.push(i);
        }


        this.state = {
            rows : rows
        };



    }

    render() {
        return (
            <div>

                {this.state.rows.map((row, i)=>{

                    let w = (i % 10 == 0) ? 2 : 1;
                    let c = (i % 10 == 0) ? "#eee" : "#f0f0f0";

                    return (
                        <div style={{
                            position : 'absolute',
                            top : 0, bottom : 0, left : '50%',
                             marginLeft: (i*this.props.scaleFactor) + 'px',
                            borderRight : w+'px solid '+c
                        }}></div>
                    )
                })}

                {this.state.rows.map((row, i)=>{

                    let w = (i % 10 == 0) ? 2 : 1;
                    let c = (i % 10 == 0) ? "#eee" : "#f0f0f0";

                    return (
                        <div style={{
                            position : 'absolute',
                            top : 0, bottom : 0, left : '50%',
                            marginLeft: -(i*this.props.scaleFactor) + 'px',
                            borderRight : w+'px solid '+c
                        }}></div>
                    )
                })}



                {this.state.rows.map((row, i)=>{

                    let w = (i % 10 == 0) ? 2 : 1;
                    let c = (i % 10 == 0) ? "#eee" : "#f0f0f0";

                    return (
                        <div style={{
                            position : 'absolute',
                            left : 0, right : 0, top : '50%',
                            marginTop: (i*this.props.scaleFactor) + 'px',
                            borderBottom : w+'px solid '+c
                        }}></div>
                    )
                })}

                {this.state.rows.map((row, i)=>{
                    let w = (i % 10 == 0) ? 2 : 1;
                    let c = (i % 10 == 0) ? "#eee" : "#f0f0f0";

                    return (
                        <div style={{
                            position : 'absolute',
                            left : 0, right : 0, top : '50%',
                            marginTop: -(i*this.props.scaleFactor) + 'px',
                            borderBottom : w+'px solid '+c
                        }}></div>
                    )
                })}




            </div>
        );
    }
}

export default GridDisplay;