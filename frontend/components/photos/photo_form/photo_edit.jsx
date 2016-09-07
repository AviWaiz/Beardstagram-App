import React from 'react';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";

class PhotoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }
  dragStart(e){
    console.log("start");
    console.log(e);
  }
  dragEnd(e){
    console.log("end");
    console.log(e);
  }
  render() {
    const imageObj = new Image();
    imageObj.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473049176/gibseoa6m077y1pxbd0z.png';
    return (
      <Stage width={700} height={700}>
        <Layer>
            <MyShape2/>
            <Kimage  draggable image={imageObj} onDragStart={this.dragStart} onDragEnd={this.dragEnd} width="100" height="100"/>
        </Layer>
      </Stage>
    );
  }
}

const MyShape2 = () => {
  const imageObj = new Image();
  imageObj.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473014156/kkxsapv5oc4fylyxcjpq.jpg';

  return (
     <Kimage  image={imageObj} width="500" height="500"/>
  );
}
export default PhotoEdit;
