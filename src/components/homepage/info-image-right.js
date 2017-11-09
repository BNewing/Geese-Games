import React, { Component } from 'react';
import { Route, Router, Link } from 'react-router-dom';

import styled from 'styled-components';

const ComponentWrapper = styled.div `
:before,
:after {
    content: " "; 
    display: table; 
    clear: both;
}
  display: block;
  margin: 40px 0;
  height: auto;
  *zoom: 1;
`

const ImageWrapper = styled.div `
  width: 30%;
  float: right;
`

const Image = styled.img `
  float:left;
  border-radius: 50%;
  width: 100%;
  padding: 80px 0;
`

const TextWrapper = styled.div `
  display: inline-block;
  width: 60%;
  float: left;
`

const Button = styled.button `
  font-size: 18px;
  background-color: #C0E6E2;
  margin: 5px;
  padding: 12px 24px;
  border-radius: 8px;
  text-align: center;
`


export default class InfoImageRight extends Component {
  render() {
    return (
      <ComponentWrapper>
        <TextWrapper>
          <h2>Why make this?</h2>
          <p>I've always really liked angry animals, and whilst at university I often used to sit and watch the geese at the big lake on campus. It was one of my happy things and ever since, I've had a fondness for them. I used to like seeing how the habbits of the geese changed throughout the year, and after going to St James's park, I realised that there were loads of other types of geese beyond Canada geese. So I've decided to create this site as a light-hearted learning activity so that I learn more about geese, and also learn React and Redux at the same time.</p> 
        </TextWrapper>      
        <ImageWrapper>
          <Image src="https://thumb1.shutterstock.com/display_pic_with_logo/488002/524660629/stock-photo-geese-on-green-meadow-geese-and-goose-group-of-gray-geese-524660629.jpg" 
          alt="Cute goose" />
        </ImageWrapper>
      </ComponentWrapper>
    );
  }
}