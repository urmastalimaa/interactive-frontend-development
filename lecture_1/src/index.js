import Robot from './Robot';
import {associate} from './PureFunctions';
import '../css/index.css';

const robot = new Robot();
robot.beep();

document.body.innerHTML = '<h1>Title added from JavaScript</h1>';

console.log(associate('fooz', 'baz', {foo: 'bar'})); // eslint-disable-line no-console

window.robot = robot;
