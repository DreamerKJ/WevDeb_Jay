# Week 7 (Thu) Notes
## Images Things
### Sizing Images 
Cropping images! Yay!
```css
object-fit: cover;

object-fit: contain;
```
The first one crops the image to fit the container, the second one resizes it (maintaining the ratio), until it is small snough to fit.

You can also use borde-radius to carve out the corners to be smooth.

### Responsive Image Sizing
Use percentage values to scale the image based on the current browser size.

### New Tab Link!

```html
<a target: _blank; href="LINK">LINK</a>
```
This opens up a link in a different new tab.

### Image Text
Make a container and create images and texts in the container, with specific classes on where the location of the texts is. Use absolutes for the texts, so it can exist above the image.

### Fade in Overlay
```css
.container:hover {
    opacity: 1;
}
```

Add hover effects to containers to tell them what to do when you hover over an element.

## Transforms
### Translate
```css
{
    tranform: translate(10px, 100px);
}
```
This would move the position of whatever element this is on by that amount. This also works with rotate, scale, skew, and specific axis tranforms like rotateX or translateX.

You can also use matrix to do all of this at once.
```css
{
    transform: matrix(1, -0.3, 0, 1, 0, 0);
}
```

### Transition
```css
{
    transition: width 2s, transform 5s;
}
```

You can set how long transitions of changes take effect.
CSS needs a user action to trigger this (like hover), later with javascript this will be possible to trigger this based on more things, as well as just constant loops.