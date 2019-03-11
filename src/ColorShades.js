import React from 'react'


const Range = ({ value, handleChange }) => {
    return (<React.Fragment>
        <input type='range' min='0' max='256' value={value} onChange={handleChange} />
        <input type='number' min='0' max='256' value={value} onChange={handleChange} />
    </React.Fragment>)
}


class ColorShades extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            R: 0,
            G: 0,
            B: 0
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(type, e) {
        const value = e.target.value || 0;
        switch (type) {
            case 'R':
                this.setState({ R: value })
                break;
            case 'G':
                this.setState({ G: value })
                break;
            case 'B':
                this.setState({ B: value })
                break;
            default:
                break;
        }
    }




    render() {
        const { R, G, B } = this.state;
        return <div>
            <ul>
                <li>R :<Range handleChange={(e) => this.handleChange('R', e)} value={R} /></li>
                <li>G :<Range handleChange={(e) => this.handleChange('G', e)} value={G} /></li>
                <li>B :<Range handleChange={(e) => this.handleChange('B', e)} value={B} /></li>
            </ul>
            <span style={{ width: '100px', height: '100px', backgroundColor: `rgba(${R},${G},${B})`, position: 'absolute' }}></span>
        </div>
    }
}
export default ColorShades;