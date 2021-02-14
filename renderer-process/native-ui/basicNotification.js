const notification = {
    title: " Basice Notification",
    body: " Short Message Part"
} 

const $basicNotification = $('#basicNotification');

$basicNotification.on('click', (e) => {
    const myNotification = new window.Notification(notification.title, notification);
    myNotification.onclick = function(e) {
         // console.log("notification is clicked !!");
    }
})