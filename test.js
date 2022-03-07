const Discord = require('discord.js')

const user = await message.mentions.users.first().fetch();
    const channel = await user.createDM();

    channel.send('test command');