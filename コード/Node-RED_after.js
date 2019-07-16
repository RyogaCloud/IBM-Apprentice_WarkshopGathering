msg.payload = {};
if (msg.result.images[0].faces) {
    msg.payload.class = msg.result.images[0].faces[0];
}
return msg;