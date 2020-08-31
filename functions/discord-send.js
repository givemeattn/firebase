// imports
require('dotenv').config()
require('enve')
const Discord = require('discord.js')

const client = new Discord.Client() // create client
client.login(process.enve.TOKEN) // login

function send (destUser, srcUser, message) {
  client.users.fetch(destUser)
    .then(user => {
      user.send(`<@${srcUser}> wants attention: \n \`${message}\``)
        .catch(err => {
          if (err.code === 50007) {
            console.log('cannot message this user')
          }
        })
    })
}

client.on('ready', () => {
  console.log('Ready')
  send()
})

// console.log(client.users.fetch(michaelIDstr))

/*
client.on('message', message => { // trigger on message
  if (!message.author.bot) { // check if sent by bot
    const command = args.shift().toLowerCase()
    console.log(args)
    var response
    // run appropiate command
    if (command === 'unsub') { // prefetch username
      helper.prefetch(message.guild)
      response = strings.runningPrefetch
    } else if (command === 'stats') { // print all stats
      helper.prefetch(message.guild)
      response = helper.stat.retreive()
    } else if (command === 'time') { // current timer
      response = helper.timer.getTime(message, args)
    } else if (command === 'record') { // record current time to quit
      response = helper.stat.record(message, args)
    } else {
      response = strings.err.invalidCommand
    }
    message.channel.send(response)
  }
})
*/

// destroy
// client.destroy()
