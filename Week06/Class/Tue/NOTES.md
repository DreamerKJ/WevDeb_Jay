# Week 6 (Tue) Notes

### Linking to Pages

Navigating to a directory would use the **index.html** as a default

Homepage to About
```html
<a href="about.html">ABOUT</a>
```
Homepage to deeper sub category
```html
<a href="/category">CATEGORY</a>
<a href="/category/index.html">CATEGORY(Does the same thing)</a>
```
---
### CSS

A CSS rule consists of a selector and declaration.

```html
<style>
    p {
        color: red;
        text-align: center;
    }
</style>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hello. This is a internally styled document</p>
</body>
</html>
```

The above code is a internally styled document, i.e. the style is part of the html code.

You can set style ***classes***, of which you can call later to assign them. 

```html
<style>
    .center {
        color: red;
        text-align: center;
    }
</style>

...
    <p class="center">Hello</p>
```

You can also target one specific element with id. 

```html
<style>
    h1,
    p {
        color: red;
        text-align: center;
    }
</style>

...
    <h1>Hello</h1>
    <p>Hello</p>
```

Or target multiple groups at the same time.

```html
<p style="color:red">This is an inline style.</p>
```

Usually the style part of the code would be separated into the **style.css** file. Although in some cases, when it targets one specific element, **inline style** is also used.


> If there are multiple style declarations, the one at the bottom will be used. (***Don't do this***)

    