import React from 'react';
import {Layer, Shape, Stage, Image as Kimage, Circle} from "react-konva";
import Icon from './icon';

class PhotoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beardWidth: 85, beardHeight: 85, iconUrl: ""};
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.increaseX = this.increaseX.bind(this);
    this.increaseY = this.increaseY.bind(this);
    this.decreaseX = this.decreaseX.bind(this);
    this.decreaseY = this.decreaseY.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }
  dragStart(e){
  }
  dragEnd(e){
    this.props.beardPositionAndSize(
                                    e.target.attrs.x,
                                    e.target.attrs.y,
                                    this.state.beardWidth,
                                    this.state.beardHeight,
                                    this.state.iconUrl);
  }
  increaseX(e) {
    e.preventDefault();
    this.setState({beardWidth: this.state.beardWidth + 10});
  }
  increaseY(e) {
    e.preventDefault();
    this.setState({beardHeight: this.state.beardHeight + 10});
  }
  decreaseX(e) {
    e.preventDefault();
    this.setState({beardWidth: this.state.beardWidth - 10});
  }
  decreaseY(e) {
    e.preventDefault();
    this.setState({beardHeight: this.state.beardHeight - 10});
  }
  changeIcon(url) {
    this.setState({iconUrl: url});
  }
  render() {
    const imageObj1 = new Image();
    imageObj1.src = this.state.iconUrl;
    const imageObj2 = new Image();
    imageObj2.src = this.props.url;
    let x = this.state.beardWidth.toString();
    let y = this.state.beardHeight.toString();
    const iX = 50;
    if(this.props.url){
      return (
        <div className="side-bar">
          <button className="beard-toggle" onClick={this.increaseX}>
            Width                <Icon className="icons"
                                  src='uparrow.png'
                                  width={28}
                                  height={28}/>
          </button>
          <button className="beard-toggle" onClick={this.decreaseX}>
            Width                <Icon className="icons"
                                  src='downarrow.png'
                                  width={28}
                                  height={28}/>
          </button>
          <button className="beard-toggle" onClick={this.increaseY}>
            Height                <Icon className="icons"
                                  src='uparrow.png'
                                  width={28}
                                  height={28}/>
          </button>
          <button className="beard-toggle" onClick={this.decreaseY}>
            Height                <Icon className="icons"
                                  src='downarrow.png'
                                  width={28}
                                  height={28}/>
          </button>

          <br/>

        <div className="beard-selection">

          <Icon className="icons"
                src='b0.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b1.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b2.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b3.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b4.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b5.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b6.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b7.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b8.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b9.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b10.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b11.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b15.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b13.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>
          <Icon className="icons"
                src='b14.png'
                width={iX}
                height={iX}
                changeIcon={this.changeIcon}/>

        </div>
        <Stage width={400} height={400}>
          <Layer>
              <Kimage  image={imageObj2} width="400" height="400"/>
              <Kimage  draggable image={imageObj1} onDragStart={this.dragStart} onDragEnd={this.dragEnd} width={x} height={y}/>
          </Layer>
        </Stage>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PhotoEdit;
