import React , {Component} from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import '../App.css';
import silder1 from '../images/silder1.jpg';
import silder2 from '../images/slider2.jpg';
import silder3 from '../images/slider3.jpg';

const items = [
    {
        src: {silder1},
        caption: 'Slide 1',
        header: 'Slide 1 Header'
    },
    {
        src: {silder2},
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header'
    },
    {
        src: {silder2},
      
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    }
  ];