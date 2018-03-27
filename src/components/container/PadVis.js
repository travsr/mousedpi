import React, { Component } from 'react';
import Ruler from '../presentation/Ruler';
import RulerVertical from '../presentation/RulerVertical';
import Radius from '../presentation/Radius';
import mouse from '../../images/mouse-01.svg';

class PadVis extends Component {

    constructor(props) {
        super(props);



        this.state = {
            rad90 : 100,
            rad180 : 200,
            rad270 : 300,
            rad360 : 400,
            sF : this.props.scaleFactor
        };

        this.updateScale = this.updateScale.bind(this);

        // sF - scaleFactor
        // all of our sizes are in cm, so we need to scale up to make them (proportional) screen-friendly pixel sizes

    }



    updateScale() {


      //  let scale = (this.divElement.clientWidth*.7)/this.props.width;
      //  this.setState({sF : scale});
    }



    componentDidMount() {
        window.addEventListener("resize", this.updateScale);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.updateScale);
    }

    render() {

        let sF = this.props.scaleFactor;

        return (
            <div ref={(divElement) => this.divElement = divElement}>
                <div
                    style={{
                        position :'relative',
                        width : this.props.width*sF + 'px',
                        height : this.props.height*sF + 'px',
                        margin : '50px auto'
                }}>

                    {/* rad 360 */}
                    <Radius r={.5*this.props.radius.r360*sF} label="360º" />

                    <Radius r={.5*this.props.radius.r270*sF} label="270º"/>

                    {/* rad 180 */}
                    <Radius r={.5*this.props.radius.r180*sF} label="180º" />

                    {/* rad 90 */}
                    <Radius r={.5*this.props.radius.r90*sF} label="90º" />


                    <img src={mouse} style={{
                        width:(7.59*sF)+'px',
                        position:'absolute',
                        left : '10px',
                        bottom : '10px'
                    }} />


                    {/* pad outline */}
                    <div
                        style={{
                            position:'relative',
                            width : this.props.width*sF + 'px',
                            height : this.props.height*sF + 'px',
                            border: '5px solid #888',
                            top : '-6px',
                            left : '-6px',
                            borderRadius : '20px'
                        }}
                    ></div>





                    <Ruler
                        color={'#888'}
                        length={this.props.width*sF}
                        label={this.props.width + "cm"}
                    />

                    <div style={{position: 'absolute', top : 0, left : '-40px'}}>
                        <RulerVertical
                            color={'#888'}
                            length={this.props.height*sF}
                            label={this.props.height + "cm"}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

export default PadVis;