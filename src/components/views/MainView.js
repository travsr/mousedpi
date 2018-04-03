import React, { Component } from 'react';

import PadVis from '../container/PadVis';
import GridDisplay from '../presentation/GridDisplay';
import InputSlider from '../container/InputSlider';

import CalcCS from '../../data/CalcCS';

import RaisedButton from 'material-ui/RaisedButton';

import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

import { Grid, Row, Col } from 'react-flexbox-grid';


class MainView extends Component {

    constructor(props) {
        super(props);

        let csCalc = new CalcCS();

        let testD = csCalc.doCalc(450, 1.75);
        console.log(testD);



        // define some pad sizes in cm
        let padSizes = [
            {h : 26.9, w : 32, name : 'SteelSeries QcK'},
            {h : 27.94, w : 33.02, name : 'Glorious Large'},
            {h : 27, w : 32, name : 'Steelseries 9HD'},
            {h : 31.5, w : 35.5, name : 'Zowie Cloth (S)'},
            {h : 40.64, w : 45.72, name : 'Glorious XL'},
            {h : 39.8, w : 45, name : 'SteelSeries QcK+'},
            {h : 39.878, w : 44.95, name : 'Kingston HyperX (Large)'},
            {h : 40, w : 48, name : 'Zowie Cloth (L)'},
            {h : 40, w : 46, name : 'Logitech G640'},
            {h : 60.96, w : 121.92, name : 'Glorious 3XL'},
            {h : 40, w : 46, name : '** Custom **'},
        ];

        let presets = [
            {name : "Emongg", pad : "Steelseries 9HD", dpi : 400, sens : 17},
            {name : "Aimbotcalvin", pad : "Logitech G640", dpi : 450, sens : 8},
            {name : "Harbleu", pad : "Zowie Cloth (L)", dpi : 1600, sens : 3},
            {name : "J3sus", pad : "Glorious 3XL", dpi : 800, sens : 6},
            {name : "J3sus (hitscan)", pad : "Glorious 3XL", dpi : 800, sens : 3.5},

        ];


        // pad dimensions (cm)
        let padWidth = 45;
        let padHeight = 39.8;


        // convert dimensions (cm) to pixels to display
        this.state = {
            dpi : 450,
            sens : 8,
            pad : padSizes[0],
            padSizes : padSizes,
            preset : {},
            presets : presets,
            popoversOpen : {},
            scaleFactor : .37
        }



    }

    handlePopoverOpen(e, popover) {
        // This prevents ghost click.
        e.preventDefault();

        let popoversOpen = this.state.popoversOpen;
        popoversOpen[popover] = true;

        this.setState({
            popoversOpen: popoversOpen,
            anchorEl: e.currentTarget,
        });
    };

    handlePopoverClose(popover) {
        let popoversOpen = this.state.popoversOpen;
        popoversOpen[popover] = false;
        this.setState({
            popoversOpen: popoversOpen,
        });
    };

    render() {

        let conv = 2.54 * 10 / 3;

        // calc measurements
        let radius = {
            r360: 360 * conv / (this.state.sens * this.state.dpi * 0.022),
            r270: 270 * conv / (this.state.sens * this.state.dpi * 0.022),
            r180: 180 * conv / (this.state.sens * this.state.dpi * 0.022),
            r90: 90 * conv / (this.state.sens * this.state.dpi * 0.022)
        };


        // Populate mouse pad select items
        let padItems = [];
        this.state.padSizes.forEach((pad, i)=>{
           padItems.push(<MenuItem value={pad} key={i} primaryText={pad.name}/>);
        });


        // Populate preset selector
        let presetItems = [];
        this.state.presets.forEach((preset, i)=>{
           presetItems.push(<MenuItem value={preset} key={i} primaryText={preset.name}/>)
        });



        return (
            <div>

                <GridDisplay scaleFactor={this.state.scaleFactor * 37.795} />

                {/*Pad Vis*/}
                <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,display:'flex', alignItems : 'center', justifyContent : 'center'}}>
                    <PadVis
                        width={this.state.pad.w}
                        height={this.state.pad.h}
                        radius={radius}
                        scaleFactor={this.state.scaleFactor * 37.795}
                    />
                </div>


                <div>
                    {/*Top Bar 1 */}
                    <div style={{display:'flex', flexDirection : 'row'}}>

                        {/*<i className="fa fa-lock" />*/}

                        <SelectField
                            style={{flex:1, width : '200px', margin : '10px', position:'relative', top : '-16px',backgroundColor : 'rgba(255,255,255,.8)'}}
                            floatingLabelText="Mouse Pad"
                            maxHeight={400}
                            value={this.state.pad}
                            onChange={(e, i, val)=> {
                                this.setState({
                                    pad : val //Object.assign({},val)
                                });
                            }}>
                            {padItems}
                        </SelectField>


                        {/* DPI */}
                        <InputSlider
                            label={"dpi"}
                            value={this.state.dpi}
                            defaultValue={1000}
                            min={1} max={2500}
                            step={1}
                            onChange={(val)=>{

                                this.setState({dpi : val})
                            }}
                        />
                        {/* /DPI */}

                        {/* SENS */}
                        <InputSlider
                            label={"in-game sens"}
                            value={this.state.sens}
                            defaultValue={2.97}
                            min={1} max={20}
                            step={.01}
                            onChange={(val)=>{

                                this.setState({sens : val})
                            }}
                        />
                        {/* /SENS */}
                        {/* cm per 360 */}
                        <InputSlider
                            disabled={true}
                            label={"cm per 360"}
                            bottomLabel={Math.round(100*(radius.r360/this.state.pad.w))+ "% of pad width"}
                            value={radius.r360.toFixed(2)}
                            defaultValue={2.97}
                            min={1} max={20}
                            step={.01}
                            onChange={(val)=>{
                                this.setState({sens : val})
                            }}
                        />
                        {/* /SENS */}
                    </div>
                    {/* /Top Bar 1 */}



                    {/* Left Side */}
                    <div style={{display:'flex', flexDirection : 'row',marginTop: '-24px', width : '200px'}}>

                        <InputSlider
                            label={"pad width (cm)"}
                            value={this.state.pad.w}
                            defaultValue={this.state.pad.w}
                            min={5} max={100}
                            step={.1}
                            onChange={(val)=>{

                                let pad = this.state.padSizes[this.state.padSizes.length-1];
                                pad.w = val;

                                this.setState({pad : pad});
                            }}
                        />
                    </div>
                    <div style={{display:'flex', flexDirection : 'row', width : '200px'}}>

                        <InputSlider
                            label={"pad height (cm)"}
                            value={this.state.pad.h}
                            defaultValue={this.state.pad.h}
                            min={5} max={60}
                            step={.1}
                            onChange={(val)=>{

                                let pad = this.state.padSizes[this.state.padSizes.length-1];
                                pad.h = val;

                                this.setState({pad : pad});
                            }}
                        />
                    </div>
                    <div style={{display:'flex', flexDirection : 'row', width : '200px'}}>

                        <InputSlider
                            label={"Scale Factor"}
                            value={this.state.scaleFactor}
                            defaultValue={this.state.scaleFactor}
                            min={0} max={2}
                            step={.01}
                            onChange={(val)=>{
                                this.setState({scaleFactor : val});
                            }}
                        />
                    </div>
                    {/* /left side */}

                    {/* right side */}

                    <div style={{position:'absolute',right:0,top : '70px',width: '200px'}}>

                        <SelectField
                            style={{
                                flex:1,
                                width : '180px',
                                margin : '10px',
                                position:'relative',
                                top : '-16px',
                                backgroundColor : 'rgba(255,255,255,.8)'
                            }}
                            floatingLabelText="Pro/Streamer Configs:"
                            maxHeight={400}
                            value={this.state.preset}
                            onChange={(e, i, preset)=> {


                                let padFound = {};
                                this.state.padSizes.forEach((pad)=>{
                                    if(pad.name == preset.pad) {
                                        padFound = pad;
                                    }
                                });

                                this.setState({
                                    preset : preset,
                                    dpi : preset.dpi,
                                    sens : preset.sens,
                                    pad : padFound
                                });
                            }}>
                            {presetItems}
                        </SelectField>

                    </div>
                </div>
            </div>

        );
    }
}

export default MainView;