import "babel-polyfill";
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
//const d3 = require("d3");
import "./main.css";

//window.d3 = d3;


const typography = new Typography(funstonTheme);

WebFont.load({
    google: {
        //families: ['Droid Sans', 'Droid Serif']
        families: ['Patua One', 'Cabin Condensed']
            //families: ['Source Sans Pro', 'Bitter']
    }
});


// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();