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
- June 18, 2020
    - [x] check the assignment
    - [x] walk through the solution of the assignment using my solution
    - [x] inspect mongo collection 'photos' with terminal
    - [] install mongo-express
    - [] inspect mongo collection 'photos' with mongo-express
    - [x] modify UI to accept input as the search string plus also image size
- June 17, 2020
    - [x] ask all to lean _markdown language_ using [GitHub Pages](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).
    - [x] ask all to learn about the :EMOJICODE:
    - [X] setup mongoose model
    - [X] apply express routes best practices
    - [x] refine logic
    - [x] unsplash get should be awaited
    - [x] mongo save should be async with then, as follows
    - [] show the effect of then vs await using the return from savePhotos
    - [x] @jessica :+1: learn GIT life cycle, and teach us how to do a pull request and merge our codes to master branch using git UI
    - [] make round trip work with mongo and mongoose. Perfectly, 100%
    - [] assignment: call image-server server with an, optional, additional query parameter 'size'
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
