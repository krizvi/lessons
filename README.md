# Web Technologies
[Web Technologies](https://github.com/krizvi/lessons)

Instructor: [Khalid Rizvi](https://github.com/krizvi)

**The content of this course changes as technology evolves**, to keep up to date with changes [follow me on GitHub](https://github.com/krizvi).

# Course Description

This course is a handson course. It is focused on evolving web technologies. 

# Objectives

1. Explain how to program in Javascript ES6 programming language
2. Explain how to write Web UI using ReactJS

# Lesson plans

## TODOs
- June 2rd, 2020
    - [] docker
- June 22nd, 2020
    - [] React Router
    - [] implement following routes with React Router
      - [] /search/photos
      - [] /helloworld
      - [] /helloworld/now
      - [] /greet/person
      - [] generate/fibonacci
    - [] extend photos app by 
- June 20th--21st, 2020 (assignment) [optional]
    - [] write a rest endpoint on images-srch-srvr /titles
      > the /titles must return all the titles from mongodb in alphabetically sorted manner
      > the script to extract the items in mongo is 
      > db.photos.find({}, {title:1, _id:0}).sort({title:1}) 
    - [] write a new React component. Call it calculator. It shoudl have two imputs and operands, 
         and one drop down input for operator (plus, minus, multiplactio, divide)   and a submit button
    - [] add a router on the server to receive this and reposnd with the solution                                                           
- June 19th, 2020
    - [x] show the effect of then vs await using the return from savePhotos
    - [x] install mongo-express (Bryan)
    - [x] inspect mongo collection 'photos' with mongo-express
    - [x] Github lifecycle, pull request, merge to master using Github site
    - [x] simple react-app, and nodejs app (Fibonacci series calculate)
      > The Fibonacci sequence is the series of numbers:
        
      > 0, 1, 1, 2, 3, 5, 8, 13, 21, 34…
        
      > After the seed numbers, 0 and 1, each successive number is the 
        sum of the previous two numbers. One of the interesting properties 
        of the sequence is that the ratio of the current number to the previous 
        number in the sequence converges toward the golden ratio, 1.61803398875…
        
      > Fibonacci sequence is used to generate all sorts of interesting things, 
        like the Golden Spiral, which occurs in nature.
      ```javascript
      const fibonacci=(num)=>{
        let a = 1, b = 0, temp;
      
        while (num > 0){
          temp = a;
          a = a + b;
          b = temp;
          num--;
        }
      
        return b;
      }
      ```
- June 18, 2020
    - [x] check the assignment
    - [x] walk through the solution of the assignment using my solution
    - [x] inspect mongo collection 'photos' with terminal
    - [x] modify UI to accept input as the search string plus also image size
- June 17, 2020
    - [x] ask all to lean _markdown language_ using [GitHub Pages](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).
    - [x] ask all to learn about the :EMOJICODE:
    - [X] setup mongoose model
    - [X] apply express routes best practices
    - [x] refine logic
    - [x] unsplash get should be awaited
    - [x] mongo save should be async with then, as follows
    - [x] @jessica :+1: learn GIT life cycle, and teach us how to do a pull request and merge our codes to master branch using git UI
    - [x] make round trip work with mongo and mongoose. Perfectly, 100%
    - [x] assignment: call image-server server with an, optional, additional query parameter 'size'
        - http://localhost:8089/search/photos?query=lion&size=raw 
        - 'query' (you are already using this)
        - also the image 'size'. Possible image sizes can only be one of the following:
            - (raw, full, regular, small, thumb)
        - the server should send back corresponding image of requested image size
            - if the requested image size if 'raw', then the code should like this 
            ```javascript
            const createImages = results => {
                return results.map(result => ({
                    id: result.id,
                    urls: {small: result.urls.raw}
                }))
            }
            ```
        - _warning_ please think the solution from start to finish
            - this new request parameter 'size' is optional
            - Integrate this new requirement with database search too
