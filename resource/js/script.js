$( document ).ready(function() {

    displayPosts()

    $(".user-menu").click(function() {
        //$(".user-menu ul").toggle()
        $(".user-menu ul").animate({
            height: 'toggle'})
    })

})

function displayPosts() {

    // $.getJSON("resource/json/posts.json", function(posts) {
    $.getJSON('https://json.extendsclass.com/bin/18f70eea2434', function(posts) {

        for (let post of posts) {
            
            let userIcon = $('<img>')
            userIcon.attr("src","resource/images/user-circle.svg")
            userIcon.attr("alt","user icon")
            let likeIcon = $('<img>')
            likeIcon.attr("src","resource/images/thumbs-up.jpeg")
            likeIcon.attr("alt","like")
            
            //create new article
            let article = $('<article>', {"class":"container-post"})
            //post head
            let divHead = $('<div>', {"class":"container-post-head"})
                //add user icon image then icon is always the same
                divHead.append(userIcon)
                divHead.append('<p class="user_info">' + post.user_data.name + ' (' + post.user_data.email + ')</p>' )
                divHead.append($('<p class="date">').text(displayDateTime(post.date)))

            //post image
            let divImage = $('<div>', {"class":"container-post-image"})
            divImage.append(postImage(post))           

            //post content
            let divContent = $('<div>', {"class":"container-post-comment"})
            divContent.append($("<h2>",{"class":"my_caption"}).text(post.caption))
            divContent.append(post.post_content)
            divContent.append(likeIcon)

            //assemble article
            article.append(divHead)
            article.append(divImage)
            article.append(divContent)
            //add article to page
            $("section").append(article) 
        }
    })
}

function postImage(singlePost){

    if (singlePost.post_image == "") return null
  
    let postImage = $('<img>')
    postImage.attr("src", singlePost.post_image)
    postImage.attr("alt", "post no" + singlePost.id)

    return postImage 
}

function displayDateTime(singlePostDate){
    let splittedDateTime = singlePostDate.split('T')
    return splittedDateTime[0].split('-').reverse().join('.') + ' ' + splittedDateTime[1].slice(0,5)
}

