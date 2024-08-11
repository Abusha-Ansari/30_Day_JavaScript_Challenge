document.getElementById('addPost').addEventListener('click', function () {
    let postForm = document.createElement('div');
    postForm.id = 'postForm';

    let imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';

    let captionInput = document.createElement('input');
    captionInput.type = 'text';
    captionInput.placeholder = 'Enter caption';

    let dateTimeInput = document.createElement('input');
    dateTimeInput.type = 'datetime-local';

    let uploadButton = document.createElement('button');
    uploadButton.textContent = 'Upload';

    postForm.appendChild(imageInput);
    postForm.appendChild(captionInput);
    postForm.appendChild(dateTimeInput);
    postForm.appendChild(uploadButton);

    document.body.insertBefore(postForm, document.querySelector('main'));

    uploadButton.addEventListener('click', function () {
        let newPost = document.createElement('div');
        newPost.classList.add('post');

        let username = document.createElement('h3');
        username.textContent = 'User'; 

        let img = document.createElement('img');
        img.src = URL.createObjectURL(imageInput.files[0]);
        img.alt = 'Post image';

        let caption = document.createElement('p');
        caption.textContent = captionInput.value;

        let dateTime = document.createElement('p');
        dateTime.textContent = dateTimeInput.value;

        let likeButton = document.createElement('button');
        likeButton.textContent = 'Like';

        let commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';

        newPost.appendChild(username);
        newPost.appendChild(img);
        newPost.appendChild(caption);
        newPost.appendChild(dateTime);
        newPost.appendChild(likeButton);
        newPost.appendChild(commentButton);

        document.getElementById('display_posts').appendChild(newPost);

        postForm.remove();

        likeButton.addEventListener('click', function () {
            likeButton.style.color = likeButton.style.color === 'red' ? '' : 'red';
        });

        commentButton.addEventListener('click', function () {
            let commentsSection = document.getElementById('comments');
            commentsSection.style.display = 'block';

            document.getElementById('addCommentBtn').onclick = function () {
                let commentInput = document.getElementById('comment_input');
                let commentText = commentInput.value;

                if (commentText.trim()) {
                    if (!newPost.querySelector('.comments-title')) {
                        let commentsTitle = document.createElement('p');
                        commentsTitle.textContent = 'COMMENTS:';
                        commentsTitle.classList.add('comments-title');
                        newPost.appendChild(commentsTitle);
                    }

                    let commentDiv = document.createElement('div');
                    commentDiv.textContent = commentText;
                    newPost.appendChild(commentDiv);

                    commentInput.value = '';

                    commentsSection.style.display = 'none';
                }
            };
        });
    });
});
