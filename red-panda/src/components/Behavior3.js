import React, { Component } from 'react'
import styled from 'styled-components'


const Text = styled.p`
width: 500px;
height: 129px;
margin-left: -75px ;
margin-top: 5%;

font-family: 'Kanit';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 37px;
text-align: center;
text-indent: 20px;


color: #000000;
`

export default class Behavior3 extends Component {
    render() {
        return (
            <div>
                <Text>เมื่ออากาศเย็นมาจะนอนขดตัวเเละ เเละนำหางขนฟูของมันพันรอบตัว</Text>
            </div>
        )
    }
}
