# Week 7 (Tue) Notes

### Divs

```html
<div> I am a div </div>
```

- Goes across the entire width of the page 
- Often used to group  elements

```css
div {
    margin: auto;
}
```
This will center-align the div

You can float divs(not intentional, but people use it) to align them horizontally.

#### Flex and Grid

```css
.mycontainer {
    display: flex;
}

.mycontainer > div{
    width: 33%
}
```
This would act like horizontal blocks, with width specified. You could also set a grid pattern preemptively using grid like below.

```css
.mycontainer {
    display: grid;
    grid-template-columns: 30% 40% 30%;
}
```

    