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