import "babel-polyfill";
import Typography from 'typography';
import funstonTheme from 'typography-theme-funston';
import "./main.css";


const typography = new Typography(funstonTheme);

WebFont.load({
    google: {
        //families: ['Droid Sans', 'Droid Serif']
        families: ['Patua One', 'Roboto']
            //families: ['Source Sans Pro', 'Bitter']
    }
});


// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();