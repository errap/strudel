/* Man in finance @by Erra P. 

We give thanks to the Strudel user v10101a who gave us inspiration. Their use of 'man in finance'
as an audio sample was a great idea. We re-used and re-purposed the first 8 lines of code
from them. The remaining code is our own.

Check out our latest techno EP: https://erraproject.bandcamp.com/album/barren
Check us out on Spotify: https://open.spotify.com/artist/4HKfoJEZOT9HuwIy7572hq?si=7Zp7YncOS2u9EOqkUvc8Ww
Follow us on Instagram: @erraproject2030

https://strudel.cc/?55Jh-QZflZc6
*/

samples({
  finance: ['man-in-finance/finance_00.wav','man-in-finance/finance_02.wav']
}, 'github:sandpills/v10101a-samples/main/');

// Driving bassline with finance samples
$: n("<1 0>").s("finance").slow(1.5).clip(1)
 .mask("<1 0>/4")
 .gain(0.9).dist("1:.2")

// Add subtle variation to the bass groove
$: n("0").s("finance").slow(1.5).clip(1.4)
 .struct("1(<3 5>,8)")
 .mask("<0 0 0 1>/4")
 .gain(0.7).room(1)
 .lpf(tri.rangex(800, 200).slow(6));

// Percussive open hi-hats with groove and sidechain compression
$: s("oh*16")
 .bank("RolandTR909")
 .decay(sine.range(.15,.35))
 .dist("1:.2")
 .mul(gain("[<0!3 1>.2 1 <0!3.2>]*4")) // groove
 .mul(gain("[.3 1!3]*4")) // sidechain
 .pan(tri.range(.6,.2))
 .hpf(1200)
 .room(.2)
 .mask("<0 1>/8");

// Kick with added weight and a bit of distortion
//$: s("bd*4").bank('RolandTR909')
//.dist("1:1.2")
//.crush(6)
//.gain(1.2)
//.room(.5);

// Ambient layer with filtered noise for atmospheric texture
$: noise("pink").decay(.3).lpf(400).gain(.05)
 .room(.2).pan(sine.range(-.7,.7))
 .add(s("bd*8").bank("RolandTR909").gain(.3)) // layer soft kick
 .mask("<0 0 1 0>/8");

// Synth elements
$: note("<g g g g eb bb c#4>*16".sub(24))
 .gain(1).s("sawtooth").fanchor(0)
 .lpf(mousex.range(0,1000)).lpenv(mousey.range(0,8))
 .ftype('ladder')
 .lpq(7).color('cyan')
 .drive(3)
 .distort("1.5:.7")
 ._scope()


$: s("bd*4").bank('RolandTR909')
._punchcard({height:16,labels:1})

$_: s("hh*10").dec(.1).bank('RolandTR909').gain(sine.fast(4))
._punchcard({height:16,labels:1})
// Overall color scheme and final styling
all(x=>x.color('cyan'))
