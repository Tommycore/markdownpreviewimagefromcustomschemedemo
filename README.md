# markdownpreviewimagefromcustomschemedemo README

This is a minimal demo to showcase my problem of viewing images in markdown preview via a custom file scheme.

- Checkout repo.
- Use `npm i` to install dependencies.
- Press F5 to build and run.
- Create an empty project with an image and a markdown file.
- Enter the following text into the markdown file:
```md
![Picture 1](asset:first)

![Picture 2](file:path/to/your/image.jpg)

![Picture 3](https://images.pexels.com/photos/439186/pexels-photo-439186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
```
- Open markdown preview (should be Ctrl+Shift+D to open and Ctrl+Alt+Right to view side by side)
the result should be something like this:
![Screenshot](screenshot.jpg)