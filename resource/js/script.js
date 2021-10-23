<<<<<<< HEAD
$( document ).ready(function() {
    let contentContainer = $(section.container.postit-page)

    $.get("resource/json/posts.json", function(posts) {
        for (post of posts) {
            let article = $('<article>', {"class":"container-post"})

        }
    }

});


$(function() {
    $.get("resource/json/posts.json", function(posts) {
        for (post of posts) {
            let article = $('<article class="container-post">');
            let div_head = $('<div class = "container-post-head">');
            let div_image = $('<div class = "container-post-image">');
            let div_comment = $('<div class = "container-post-comment">');
            let date = $('<p class="date">').text(post.date);
            let caption = $('<p class="my_caption">').text(post.caption);
            let img = $('<img>').img(post.post_image);
            article.append(div_head);
            article.append(div_image);
            article.append(div_comment);
            div_head.append(date);
            div_image.append(img);
            div_comment.append(caption);
            $('body').append(article)
        }
    })
});

/*
{
      "userId": 1,
      "id": 1,
      "user_data":{ "name":"John Doe", "e-mail":"john.doe@example.com"},
      "caption": "I think it's going to rain",
      "date":"2021-10-21T05:55:06.419Z",
      "post_image": "resource/images/rain.png"
    },
    */
=======
getJSON('./resource/json/posts.json', (err, data) => {
    if (err != null) {
      return false;
    } else {
      data.forEach(obj => {
        createElements(obj);
      });
    }
  });

function createElements(obj) {
    const mainArt = document.createElement('article');
    mainArt.classList.add('container-post');
    const div1 = document.createElement('div');
    div1.classList.add('container-post-head');
    const div2 = document.createElement('div');
    div2.classList.add('container-post-image');
    const div3 = document.createElement('div');
    div3.classList.add('container-post-comment');
    const date = document.createElement('p');
    date.classList.add('date');
    date.innerHTML = obj['date'];
    const img = document.createElement('img');
    img.classList.add('post-image');
    img.src = obj['image'];
    const caption = document.createElement('p');
    caption.classList.add('my_caption');
    mainArt.appendChild(div1);
    mainArt.appendChild(div2);
    mainArt.appendChild(div3);
    div1.appendChild(date);
    div2.appendChild(img);
    div3.appendChild(caption);
    document.querySelector('body').appendChild(mainArt);
  }

>>>>>>> f2ac999e13454ad2654d57115047c499e713ab95
