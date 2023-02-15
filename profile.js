// Add functionality to follow button
const followButton = document.querySelector('button');
followButton.addEventListener('click', function() {
  followButton.textContent = 'Following';
  followButton.style.backgroundColor = '#1DA1F2';
  followButton.style.color = '#fff';
});