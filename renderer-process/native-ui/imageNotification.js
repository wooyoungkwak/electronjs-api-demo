const path = require('path')

const notification = {
    title: "Notification with image",
    body : "Short message plus a custom image", 
    icon: path.join(__dirname, "../../img/programming.png")
}

const $imageNotification = $('#imageNotification');

$imageNotification.on('click', (e) => {
    const myNotification = new window.Notification(notification.title, notification);
    myNotification.onclick = function(e) {
        // console.log("notification is clicked !!");
    }
})

