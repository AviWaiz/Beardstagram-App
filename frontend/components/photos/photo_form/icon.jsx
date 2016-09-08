import React from 'react';

export default class Icon extends React.Component {
  constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeIcon(this.props.src);
  }

  render() {
    let {mode, src, height, width, style, changeIcon, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || 100,
      width: width || 100,
      backgroundColor: 'gray'
    };

    let important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

    return <div onClick={this.handleClick} {...props} style={{...defaults, ...style, ...important}} />
  }
}
