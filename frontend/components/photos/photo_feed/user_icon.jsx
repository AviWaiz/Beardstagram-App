import React  from 'react';
import {Layer, Shape, Stage, Image as Kimage} from "react-konva";

class ProfileIcon extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const photo = this.props.photo;
    const photoUrl = photo.url;
    const imageObj1 = new Image();
    imageObj1.src = photoUrl;
    const imageObj2 = new Image();
    if (photo.x && photo.y && photo.beardWidth && photo.beardHeight && photo.icon_url) {
      let x = (photo.x).toString();
      let y = (photo.y).toString();
      let beardWidth = photo.beardWidth.toString();
      let beardHeight = photo.beardHeight.toString();
      let iconUrl = photo.icon_url.toString();
      imageObj2.src = iconUrl;
      return (
      <div id={this.props.className ? "user-icon-modal" : "user-icon"}>
        <Stage  width="400" height="400">
          <Layer>
              <Kimage image={imageObj1}
                      width="400"
                      height="400"/>
              <Kimage image={imageObj2}
                      width={beardWidth}
                      height={beardHeight}
                      x={x}
                      y={y} />
          </Layer>
        </Stage>
      </div>
      );
      } else {
      return(
        <div id={this.props.className ? "user-icon-modal" : "user-icon"} width='400' height='400'>
          <img src={photoUrl} />
        </div>
      );
    }
  }
}

export default ProfileIcon;
