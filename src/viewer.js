import React from 'react'

export default class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.image = new Image();
    this.canvasViewe = React.createRef();
    this.state = {
      height: 0,
      width: 0
    }

  }

  toInvert = (imageData) => {
    let data = imageData.data;
    for (let index = 0; index < data.length; index = index + 4) {
      data[index] = 255 - data[index]
      data[index + 1] = 255 - data[index + 1]
      data[index + 2] = 255 - data[index + 2]
    }
    return imageData;
  }

  reduceBy = (imageData, value = 0) => {
    let data = imageData.data;
    for (let index = 0; index < data.length; index = index + 4) {
      data[index] = value - data[index]
      data[index + 1] = value - data[index + 1]
      data[index + 2] = value - data[index + 2]
    }
    return imageData;
  }

  reduceRBGBy = (imageData, R = 0, G = 0, B = 0) => {
    let data = imageData.data;
    for (let index = 0; index < data.length; index = index + 4) {
      data[index] = R - data[index]
      data[index + 1] = G - data[index + 1]
      data[index + 2] = B - data[index + 2]
    }
    return imageData;
  }

  toBlackAndWhite = (imageData) => {
    let data = imageData.data;
    let R, G, B, blackOrWhight;
    for (let index = 0; index < data.length; index = index + 4) {
      [R, G, B] = [data[index], data[index + 1], data[index + 2]];
      blackOrWhight = (R + G + B) / 3;
      data[index] = blackOrWhight;
      data[index + 1] = blackOrWhight;
      data[index + 2] = blackOrWhight;
    }
    return imageData;
  }
  componentDidMount() {
    this.image.src = this.props.src;
    this.image.onload = () => {
      this.setState({
        height: this.image.height,
        width: this.image.width
      }, () => {
        this.ctx = this.canvasViewe.current.getContext('2d');
        this.ctx.drawImage(this.image, 0, 0);
        this.ctx.stroke();

        // CONVERT to INVERT
        // let imageData = this.ctx.getImageData(0, 0, this.image.width, this.image.height)
        // let newImageData = this.toInvert(imageData);
        // this.ctx.putImageData(newImageData, 0, 0);

        // CONVERT to BLACK and WHIGHT
        // let imageData = this.ctx.getImageData(0, 0, this.image.width, this.image.height)
        // let newImageData = this.toBlackAndWhite(imageData);
        // this.ctx.putImageData(newImageData, 0, 0);
      });
    }
  }

  render() {
    return (
      <canvas ref={this.canvasViewe} width={this.state.width} height={this.state.height} />
    );
  }

}
