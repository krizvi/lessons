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

- June 17, 2020
    - [X] ask all to lean _markdown language_ using [GitHub Pages](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).
    - [X] setup mongoose model
    - [X] apply express routes best practices
    - [x] refine logic
    - [x] unsplash get should be awaited
    - [x] mongo save should be async with then, as follows
    
    ```
    const savePhotos = (term, images) => {
    
        if (!images || images.length === 0) {
            console.warn('no data found to save');
            return;
        }
    
        const photos = new Photos({
            title: term,
            images
        });
        
        photos.save()
            .then(data => {
                console.warn(`data saved as ${data.id}`)
            }, err => {
                console.error(err)
            });
    }
    ```
    
    - [] show the effect of then vs await using the return from savePhotos
    - [] ask all to learn about the :EMOJICODE:
    - [x] @jessica :+1: learn GIT life cycle, and teach us how to do a pull request and merge our codes to master branch using git UI
