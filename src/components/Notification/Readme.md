# Notification Component

## File Details

1. SmallNotification.js

Small popup notification at top right corner of diplay.
The small notification takes in three variables.
`status` `message` `detail`

### Usage
status has two states **ok** and **error**
ok results in a success message with a green check mark
error returns an error dialogue with a red cross

message returns the heading of the notification.

detail returns more information on the message.

### Example

`<SmallNotification status="ok" message="Success" detail="Password Changed!" />`

`<SmallNotification status="error" message="Invalid request" detail="Token Expired" />`