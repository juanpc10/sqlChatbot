const message = require('../models/message');
exports.getAllMessages = async (ctx) => {
  try {
    ctx.body = await message.getAll();
    ctx.status = 203;
  } catch (error) {
    console.error(error);
    ctx.status = 500;
  }
}

exports.set = async (ctx) => {
  try {
    ctx.body = await message.post(ctx.request.body);
    ctx.status = 201
  } catch (error) {
    console.error(error);
    ctx.status = 500;
  }
}