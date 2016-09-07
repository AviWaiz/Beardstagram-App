import React from 'react';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";

class PhotoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
  }
  dragStart(e){
    // console.log("start");
    // console.log(e);
  }
  dragEnd(e){
    // console.log("end");
    // console.log(e);
    debugger
    this.props.beardPosition(e.evt.layerX, e.evt.layerY)
  }
  render() {
    const imageObj1 = new Image();
    imageObj1.src = 'http://res.cloudinary.com/drql6e2wm/image/upload/v1473049176/gibseoa6m077y1pxbd0z.png';
    const imageObj2 = new Image();
    imageObj2.src = this.props.url;
    if (this.props.url) {
      return (
        <div>
        <Stage width={300} height={300}>
          <Layer>
              <Kimage  image={imageObj2} width="300" height="300"/>
              <Kimage  draggable image={imageObj1} onDragStart={this.dragStart} onDragEnd={this.dragEnd} width="85" height="85"/>
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

//
// import React from 'react';
// import Draggable from 'react-draggable';
// const PhotoEdit = React.createClass({
//   getInitialState: function () {
//     return {
//       activeDrags: 0,
//       deltaPosition: {
//         x: 0, y: 0
//       },
//       controlledPosition: {
//         x: -400, y: 200
//       }
//     };
//   },
//
//   handleDrag: function (e, ui) {
//     const {x, y} = this.state.deltaPosition;
//     this.setState({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       }
//     });
//   },
//
//   onStart: function() {
//     this.setState({activeDrags: ++this.state.activeDrags});
//   },
//
//   onStop: function() {
//     this.setState({activeDrags: --this.state.activeDrags});
//   },
//
//   adjustXPos: function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     const {x, y} = this.state.controlledPosition;
//     this.setState({controlledPosition: {x: x - 10, y}});
//   },
//
//   adjustYPos: function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     const {controlledPosition} = this.state;
//     const {x, y} = this.state.controlledPosition;
//     this.setState({controlledPosition: {x, y: y - 10}});
//   },
//
//   onControlledDrag: function(e, position) {
//     const {x, y} = position;
//     this.setState({controlledPosition: {x, y}});
//   },
//
//   onControlledDragStop: function(e, position) {
//     const {x, y} = position;
//     this.setState({controlledPosition: {x, y}});
//   },
//
//   render: function () {
//     const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
//     const {deltaPosition, controlledPosition} = this.state;
//     return (
//       <div>
//         <Draggable  {...dragHandlers}>
//           <div className="box"></div>
//         </Draggable>
//       </div>
//     );
//   }
// });
// export default PhotoEdit;
