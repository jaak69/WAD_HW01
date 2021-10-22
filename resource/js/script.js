$(function() {
    $.get("resource/json/posts.json", function(posts) {
        for (post of posts) {
            let article = $('<article class="container-post">');
            let div_head = $('<div class = "container-post-head">');
            let div_image = $('<div class = "container-post-image">');
            let div_comment = $('<div class = "container-post-comment">');
            let date = $('<p class="date">').text(post.date);
            let caption = $('<p class="my_caption">').text(post.caption);
            article.append(div_head, div_image, div_comment);
            div_head.append(date);
            div_comment.append(caption);
            $('body').append(article)
        }
    })
});