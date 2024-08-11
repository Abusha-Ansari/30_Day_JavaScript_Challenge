
document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let profilePicture = document.getElementById('signupProfilePicture').files[0];

    let readers = new FileReader();
    readers.onloadend = function () {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, email, password, profilePicture: readers.result });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful! Please log in.');
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    }
    if (profilePicture) {
        readers.readAsDataURL(profilePicture);
    } else {
        readers.onloadend();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'flex';
        displayUserInfo();
        displayPosts();
    } else {
        alert('Invalid username or password.');
    }
});

function displayUserInfo() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        let userInfoDiv = document.getElementById('user-info');
        userInfoDiv.innerHTML = `
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <img src="${user.profilePicture || 'https://via.placeholder.com/100'}" alt="Profile Picture">
        `;
    }
}


document.getElementById('newPostForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let postContent = document.getElementById('postContent').value;
    let userInfo = JSON.parse(localStorage.getItem('user'));
    
    let newPost = {
        username: userInfo.username,
        content: postContent,
        likes: 0,
        comments: []
    };
    
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    document.getElementById('postContent').value = '';
    displayPosts();
});

function displayPosts() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <p><strong>${post.username}</strong></p>
            <p>${post.content}</p>
            <button class="like-btn">Like</button> <span class="like-count">${post.likes}</span> Likes
            <button class="comment-btn">Comment</button>
            <div class="comments-section" style="display: none;">
                <input type="text" class="comment-input" placeholder="Add a comment">
                <button class="add-comment-btn">Add Comment</button>
                <div class="comments">
                    ${post.comments.map(comment => `<div>${comment}</div>`).join('')}
                </div>
            </div>
        `;
        postsContainer.appendChild(postDiv);
    });
}

document.getElementById('posts').addEventListener('click', function(e) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    if (e.target.classList.contains('like-btn')) {
        let postIndex = Array.from(e.target.closest('.post').parentElement.children).indexOf(e.target.closest('.post'));
        posts[postIndex].likes += 1;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }

    if (e.target.classList.contains('comment-btn')) {
        let commentsSection = e.target.nextElementSibling;
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    }

    if (e.target.classList.contains('add-comment-btn')) {
        let postIndex = Array.from(e.target.closest('.post').parentElement.children).indexOf(e.target.closest('.post'));
        let commentInput = e.target.previousElementSibling;
        let commentText = commentInput.value;
        
        if (commentText.trim()) {
            posts[postIndex].comments.push(commentText);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
    }
});

function addNotification(message) {
    let notifications = document.getElementById('notifications');
    let notificationDiv = document.createElement('div');
    notificationDiv.textContent = message;
    notifications.appendChild(notificationDiv);
}

document.getElementById('posts').addEventListener('click', function(e) {
    if (e.target.classList.contains('like-btn')) {
        addNotification(`Your post received a new like!`);
    }

    if (e.target.classList.contains('add-comment-btn')) {
        let commentInput = e.target.previousElementSibling;
        let commentText = commentInput.value;
        if (commentText.trim()) {
            addNotification(`Someone commented on your post: "${commentText}"`);
        }
    }
});

window.onload = () => {
    displayUserInfo();
    displayPosts();
};
