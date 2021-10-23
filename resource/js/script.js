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

