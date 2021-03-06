import React, { Component } from 'react';
import styled from 'styled-components';
import HandFeeding from '../../images/handfeeding.JPG';

const ComponentWrapper = styled.section `
  :before,
  :after {
      content: " "; 
      display: table; 
      clear: both;
  }
  display: block;
  margin: 2.5rem 0;
  height: auto;
  *zoom: 1;
`

const Image = styled.img `
  float: left;
  border-radius: 50%;
  width: 30%;
  padding: 3em 3em;
`

export default class InfoImageLeft extends Component {
  render() {
    return (
      <ComponentWrapper>
          <Image src={HandFeeding} alt="Cute goose" />
          <h2>What is this website?</h2>
          <p>This site is an educational resource with a quiz - check out different types of geese on the 'Geese Info' and then test out what you've learnt on the 'Quiz' page!</p>
          <p>Technology-wise, this is a web app that I've built with React and designed myself. It's a fun little side project where I test out new technologies like styled-components, and practise bits of JavaScript that I'd like to get better at. The photos of geese are all ones that I've taken myself (aside from the Brent goose, as I haven't seen one of those yet), and the info about the different types of geese is from Wikipedia and the RSPB website.</p> 
      </ComponentWrapper>
    );
  }
}
