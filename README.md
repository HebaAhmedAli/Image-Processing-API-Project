# Image-Processing-API-Project
This project access a specific end point to resize images with a given image, width and height in the url.

To build the code:
- npm run build

To build the code and run the index.ts:
- npm run dev

To build the code and run the index.js:
- npm run start

To build the code and run the tests:
- npm run test

To lint the code (with eslint and prettier) and fix it:
- npm run lint:f

To run the prettier alone: (added)
- npm run format

Endpoint test example that should success:
http://localhost:3000/resizing?image=santamonica&width=100&height=100

The first time it should call the resizing and the second time it should load cached file.

I also can resize the same image with different sizes like this: 
http://localhost:3000/resizing?image=santamonica&width=90&height=90

I handled those cases:
- You must pass in the params the image, width and height or you will get an error message.
- You must pass in the params existing image or you will get an error message.
- You must pass in the params width and height that are numbers or you will get an error message.
