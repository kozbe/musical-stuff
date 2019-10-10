import AudioKeys from 'audiokeys';
import Tone from 'tone';
import { scale } from '@tonaljs/scale';
import { sample } from 'lodash';

let  scaleType1 = 'c3 hirajoshi';
let  scaleType2 = 'c4 hirajoshi';

let { notes: n1 } = scale(scaleType1);
let { notes: n2 } = scale(scaleType2);
let notes = [...n1, ...n2];

var synth = new Tone.PolySynth(6, Tone.Synth, {
  oscillator: {
    type: 'sine'
  }
}).toMaster();

let ctx = new AudioContext();

// create a keyboard
var keyboard = new AudioKeys();

keyboard.down( function() {
  let note = sample(notes);
  synth.triggerAttackRelease(note, '8n')
});

keyboard.up( function(note) {

});

console.log(keyboard);