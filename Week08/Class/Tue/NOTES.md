# Week 8 (Tue) Notes
## Media Queries

Basically what makes sites different in print/desktop/mobile/etc environments. You can set alternative css documents to react to different types of media. 

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
    ... /* Alternative CSS for narrow screens. */
  }
}
```

## Flexbox

```css
.container {
    display: flex;
}
```

You can set things like direction(***flex-direction***) and wrap behavior(***flex-wrap: wrap/nowrap/wrap-reverse***).

You can also use flex-flow to set both of these things simultaneously.

```css
.container {
    display: wrap;
    flex-flow: row nowrap;
}
```

You can use justify-content to align your contents inside. You can either use start, end, center or space-evenly and space-around.

```css 
.container {
    display: flex;
    justify-content: space-evenly;
}
```

Align-items are used when the contents don't fill up the container entirely. Combined with justify-content it can be used to create a perfectly centered box.


```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

You can combine this with the Media Query to have different layouts.

### Responsive Sites

