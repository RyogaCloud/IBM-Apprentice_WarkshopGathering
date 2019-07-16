msg.payload = new Buffer(msg.payload.image, 'base64');
return msg;