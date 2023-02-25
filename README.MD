/users GET

Запрос:
query{
feed {
    comments
    likeNumber
}
notification{
    isRead
}
profile{
    photo
    userName
}
}

Ми отримаємо:
{
 feed: [
        {comments: 20, likeNumber: 4},
       
],
notification: [{isRead: true},...]
profile: [{userName: 'Alex',photo: '/photos.jpg'},...]
}