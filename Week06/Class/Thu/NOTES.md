# Week 6 (Thu) Notes

### Navigation Bars

```css
ul {
    list-style-type: none;
}

li {
    display: inline
} /*Inline Displays*/
```
Or, you could go for floating menu bars.

```css
ul {
    list-style-type: none;
    overflow: hidden;
}

li {
    float: left;
}

li a{
    display: block;
    padding: 10px;
    background-color: violet;
}
```

### Box Model

> Element - Padding - Border - Margin 



---

> Random Discovery

Apparently ```git add *``` and ```git add -A``` do different things? The former is a *shell* command and therefore doesn't know about deleted files, and the latter is a *git* command and knows about it. Best to use the latter most of the time.

**Isn't git great? :)**


