# fether

Fether is a powerful SCSS design environment focused on constructing
elegant, lightweight stylesheets.

<code>
<table>
<tbody>

<tr>
<td valign="top">

# Get Started

> <a href="http://sass-lang.com">Basic SCSS Knowledge</a>

> <a href="https://www.npmjs.com/get-npm">Install NPM</a> (Node.js)

> <a href="https://gruntjs.com/getting-started">Install Grunt</a> (JS Tasks)

<pre>Navigate to your project
folder and <b>copy the project
directory to the clipboard</b>.

From your COMMAND LINE (CLI):</pre>

### $ cd (paste project dir)

<pre>Install Fether:</pre>

### $ npm install fether

<pre>Install Dependencies:</pre>

### $ npm install

<pre>Run Fether:</pre>

### $ grunt

</td>
<td width="62%" valign="top">

<code>

# A new way to realize your designs.

- [x] <b>REAL DESIGN SENSE</b> anyone can harness with easy to learn SCSS tools and plenty of extra goodies when you need 'em!

- [x] <b>STOP THE MADNESS</b> of @include soup.

- [x] <b>RICH AND READABLE</b> input formatting options.

- [x] <b>UNMATCHED COLOR PALETTE</b> with over 600 colors, hue mixing, gradients, masking, and more.

- [x] <b>NO PREFIXES NEEDED</b> on input because of <a href="https://github.com/postcss/autoprefixer">autoprefixer</a> goodness.

- [x] <b>IMPRESSIVE MODERN STYLING</b> that follows many material design standards for typography and colors by default.  We also have implemented a lot of modern elements like flexbox, web font icons, animated buttons, and loading screen animations.

- [x] <b>LOW CSS FILE SIZES</b> due to a combination of <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_extend__extend">@extend</a> and <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_extend-Only_Selectors__placeholders">%placeholder</a>.  By loading extendors once in each detected media query, we get past the common issues of using @extend.

- [x] <b>NEAT RESPONSIVE CSS</b> because during processing media queries will be organized and moved to the end of the css file for you!

- [x] <b>SITE-WIDE UNIT HANDLER</b> that converts values to default or specified units globally.  Local conversions available.

- [x] <b>SITE-WIDE COLOR FILTERS</b> so when your boss says, "I love it, but can you just make everything a little more vibrant!?"  Instead of seriously considering your choice of profession, <i>now</i> you can simply adjust the filter setting.  You may also officially add 'Magician' to your list of job titles.

# Why autoprefixer?

- [x] Never worry about prefixes again.

- [x] Less compatibility issues.

- [x] Increased production times.

- [x] Keep prefixes neat and organized.

</code>

</td>
</tr>
</tbody>
</table></code>

## :bulb: Things to know.

- [ ] A <b>nest</b> is a map that contains <i>at least one</i> map nested inside.

- [ ] Fether's core functions may use comma separation in place of connectors ("for", "with", "of", "and", "to", etc.)

- [ ] Anywhere you see quotes on a single word entry like  <code>"background"</code> or <code>"blue-grey"</code> you can leave out the quotes.

- [ ] Quotes <b><i>are</i> required</b> around strings and multi-word entries like <code>"I am a string"</code> or <code>"cerulean blue"</code>.  

<hr>

###### color assistant
# cast( )
<table style="float: right;">
<tr><td>[x] Function</td></tr>
<tr><td>[x] Mixin</td></tr>
</table>
<p>Returns color value based on name, weight and opacity. </p>
<code>cast( $name [$weight] [$opacity] )</code><br>
<code>@include cast( $name [$weight] [$opacity] on $cssProperty )</code>
</p>

- If you include multiple colors, it will return a <b>gradient</b> or <b>mixture</b> depending on the input that is detected.
- Color weights above 500 or below 500 mix with black or white respectively in order to achieve lightness and darkness settings similar to <a href="http://material.io">material design</a>.
- The base filters for tinting and shading colors can be adjusted to provide site-wide color shifts.
- Theme-based colors mimicking material design (light/dark) that are black and white transparencies.  This allows for text and other elements to change color depending on the background color or color behind the element i.e. instead of using a solid medium grey, you would use black at medium opacity.

<b>Examples:</b>
<pre>
/*function*/

border-color:     cast( 'canary yellow' 400 10% );

background-color: cast( 'forest green' );

$color:    cast( 'canary yellow' 400 10% );

$mixture:  cast( burgundy 200 with 'carmine pink' by 60%);

$gradient: cast( top #fce100 to 'cerulean blue' );

$gradient: cast( center byzantium 200
   to 'navajo white' 300
   to #dce400 75%
   to beige 700 50% );

/*mixin*/

@include cast( dark on color );

@include cast( bottom daffodil 400 to 'facebook blue' on border-left-color );

@include cast( bottom daffodil 400
 to 'facebook blue'
 on background-color
 on border-top-color );

@include fether(

cast dark on color,
cast 'forest green' 300 on border-color,
cast 'lime green' 450 on background-color on border-top-color,

);
</pre>
<a href="#index">Back to index</a>
<hr>

###### check list for item/s
# check( )
Check if list contains one or more items.
<p>
<code>check( $listToCheck for $searchItems )</code><br>
<code>check( $listToCheck, $searchItems )</code>
</p>
<b>Examples:</b>
<pre>
@if check( $someList for 'item one' 'item two' ) { /*do something*/ }
$someVariable: check( $thisList for $theseItems )
</pre>

### item-check( )
Check if list contains a single item, returns boolean.
<p><code>item-check( $listToCheck, $someItem ) -> boolean</code></p>
<a href="#index">Back to index</a>
<hr>

###### depth calculator
# depth( )
Calculate nested value of an item.
<p><code>depth( $someItem )</code></p>
<b>Examples:</b>
<pre>
@if depth( $item ) == 2 { /*do something*/ }
</pre>
<a href="#index">Back to index</a>
<hr>

###### create material box shadows
# elevate( )
<table>
<tbody>
<tr><td>[x] Function</td></tr>
<tr><td>[x] Mixin</td></tr>
</tbody>
</table>
<p>Add material box shadows up to 24dp.</p>
<p><code>elevate( $depth )</code></p>
<b>Examples:</b>
<pre>
$boxShadow: elevate(4dp);
$boxShadow: elevate(4);
@include elevate(4);
</pre>
<a href="#index">Back to index</a>
<hr>

###### is-type validation
# is-*type* ( )
Checks if an item is a certain type.
<p><code>is-number( $someItem )</code></p>
<b>Examples:</b>
<pre>
@if is-bool( $item )        { /*do something*/ }
@if is-color( $item )       { /*do something*/ }
@if is-list( $item )        { /*do something*/ }
@if is-map( $item )         { /*do something*/ }
@if is-null( $item )        { /*do something*/ }
@if is-number( $item )      { /*do something*/ }
@if is-string( $item )      { /*do something*/ }
@if is-angle( $item )       { /*do something*/ }
@if is-function( $item )    { /*do something*/ }
@if is-integer( $item )     { /*do something*/ }
@if is-percent( $item )     { /*do something*/ }
@if is-resolution( $item )  { /*do something*/ }
@if is-time( $item )        { /*do something*/ }
@if is-abs-length( $item )  { /*do something*/ }
@if is-rel-length( $item )  { /*do something*/ }
@if is-rel-percent( $item ) { /*do something*/ }
@if is-rel-view( $item )    { /*do something*/ }
@if is-relative( $item )    { /*do something*/ }
@if is-length( $item )      { /*do something*/ }
@if is-position( $item )    { /*do something*/ }
@if is-word( $item )        { /*do something*/ }
@if is-lib( $item )         { /*do something*/ }
</pre>
<a href="#index">Back to index</a>
<hr>

###### add or convert units
# its( )
Add defaults units to a unitless number.  If the input value has a unit, the number will be converted properly based on the incoming and outgoing units.  You may also add a custom unit-type for solo unit conversions.
<p>
<code>its( $value )</code><br>
<code>its( $value, $unitType )</code>
</p>
<b>Examples:</b>
<pre>
.container {
  max-width: its(1200);
}
</pre>
<a href="#index">Back to index</a>
<hr>

###### check map for item/s
# map-check( )
Returns a boolean value determined by whether or not all key/s were found in a map.
<p><code>map-check( $map, $keys )</code></p>
<b>Examples:</b>
<pre>
@if map-check( $map, $keys ) { /*do something*/ }
</pre>
<a href="#index">Back to index</a>
<hr>

###### pull a specific value from a map
# map-pull( )
Returns the value from the specified key in a map (including nested).
<p><code>map-pull( $map, $keys )</code></p>
<b>Examples:</b>
<pre>
@if map-pull( $map, $keys ) { /*do something*/ }
</pre>
<a href="#index">Back to index</a>
<hr>

###### change a specific map value
# map-push( )
Returns a map with a specific value replaced based off specified key.
<p><code>map-push( $map, $keys, $newValue )</code></p>
<b>Examples:</b>
<pre>
$updatedMap: map-push($oldMap, $key, $newValue);
</pre>
<a href="#index">Back to index</a>
<hr>

###### nest get value
# nest-get( )
Returns the value of specified key inside nest.
<p><code>nest-get( $keyOrKeys )</code></p>
<b>Examples:</b>
<pre>
$redHueMap: nest-get(palette red);
$fetherRed: nest-get(palette red 'fether red');
</pre>
<a href="#index">Back to index</a>
<hr>

###### nest pull all keys and values
# nest-pull( )
Returns a map of all keys and values (included nested) found inside of the specified key value.
<p>
  <code>nest-pull( $keyOrKeys )</code><br>
  <code>nest-pull( $keyOrKeys, $customNest )</code>
</p>
<b>Examples:</b>
<pre>
$mapAllColors: nest-pull(palette);
</pre>
<a href="#index">Back to index</a>
<hr>

###### calculate exponents (powers)
# power( )
Find the power of a number.
<p><code>power( $int1, $int2 )</code></p>
<b>Examples:</b>
<pre>
@if power($i, $index) == 16 { /*do something*/ }
</pre>
<a href="#index">Back to index</a>
<hr>

###### strip the units from a number
# strip( )
Description
<p><code>xxxxx( $var )</code></p>
<b>Examples:</b>
<pre>
</pre>
<a href="#index">Back to index</a>
<hr>

###### XXXXXXXXXXXXXXXX
# xxxxx( )
Description
<p><code>xxxxx( $var )</code></p>
<b>Examples:</b>
<pre>
</pre>
<a href="#index">Back to index</a>
<hr>

###### XXXXXXXXXXXXXXXX
# xxxxx( )
Description
<p><code>xxxxx( $var )</code></p>
<b>Examples:</b>
<pre>
</pre>
<a href="#index">Back to index</a>
<hr>

###### Built-in Sass (Cheatsheet)
<table>
<thead>
<tr>
<td colspan="2">
<a href="http://sass-lang.com/documentation/Sass/Script/Functions.html">Sass Functions</a> &nbsp;|&nbsp; <a href="http://sass-lang.com/documentation/">Sass Docs</a>
</td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">
<b>RGB/Opacity/Other</b>
<pre>
rgb($r,$g,$b)
rgba(($r,$g,$b),$a)
red($color)
green($color)
blue($color)
mix($color1,$c2,[$wt])
alpha($color) aka opacity()
opacify($color, $per) aka fade-in()
transparentize($color,$per) aka fade-out()
adjust-color($color,[$r,$g,$b,$h,$s,$l,$a])
scale-color($color,[$r,$g,$b,$h,$s,$l,$a])
change-color($color,[$r,$g,$b,$h,$s,$l,$a])
</pre>
</td>
<td valign="top">
<b>HSL</b>
<pre>
hsl($h,$s,$l)
hsla(($h,$s,$l),$a)
hue($color)
saturation($color)
lightness($color)
adjust-hue($color,$deg)
lighten($color,$per)
darken($color,$per)
saturate($color,$per)
desaturate($color,$per)
grayscale($color)
complement($color)
invert($color,[$wt])
</pre>
</td>
</tr>
<tr>
<td valign="top">
<b>Strings</b>
<pre>
unquote($string)
quote($string)
str-length($string)
str-insert($string,$insert,$i)
str-slice($string,$start-at,[$end-at])
to-upper-case($string)
to-lower-case($string)
</pre>
</td>
<td valign="top">
<b>Numbers</b>
<pre>
percentage($num)
round($num)
ceil($num)
floor($num)
abs($number)
min($numbers...)
max($numbers...)
random([$limit])
</pre>
</td>
</tr>
<tr>
<td valign="top">
<b>Lists</b>
<pre>
length($list)
nth($list,$n)
set-nth($list,$n,$value)
join($l1,$l2,[$sep,$brack])
append($l1,$val,[$sep])
zip($lists...)
index($list,$value)
list-seperator($list)
is-bracketed($list)
</pre>
</td>
<td valign="top">
<b>Maps</b>
<pre>
map-get($map,$key)
map-merge($m1,$m2)
map-remove($map,$keys...)
map-keys($map)
map-values($map)
map-has-key($map,$key)
keywords($args)
</pre>
</td>
</tr>
<tr>
<td valign="top">
<b>Selectors</b>
<pre>
selector-nest($sel...)
selector-append($sel...)
selector-extend($sel,$e1,$2)
selector-replace($sel,$o,$r)
selector-unify($s1,$s2)
is-superselector($super,$sub)
simple-selectors {$sel}
selector-parse($sel)
</pre>
</td>
<td valign="top">
<b>Introspection</b>
<pre>
features-exists($feat)
variable-exists($name)
global-variable-exists($name)
function-exists($name)
mixin-exists($name)
content-exists()
inspect($val)
type-of($val)
unit($num)
unitless($num)
comparable($n1,$n2)
call($func,$args...)
get-function($name,$css: false)
</pre>
</td>
</tr>
<tr>
<td colspan="2">
<b>Miscellaneous</b>
<pre>
if($condition, $if-true, $if-false)
unique-id()
</pre>
<td/>
</tr>
<tr>
<td colspan="2">
<i><b>Last Updated</b>: October 26th, 2017</i>
</td>
</tr>
</tbody>
</table>
<a href="#index">Back to index</a>
<hr>

### Brought to you by
Fether has been lovingly crafted by myself, <a href="http://flexlab.io">Lucas Grey</a>, a Full Stack Designer with over 23 years of experience.

**Fether Framework (Coming 2018)**: Includes CSS Styles, Javascript Library, Javascript Components

### License
Apache 2.0
