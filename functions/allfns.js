const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore().collection('subscriptions')

/**
 * Sets a property
 * @param {string} id - the unique id for the subscription
 * @param {string} setting - the setting to change
 * @param {string} value - the value to change to
 */
function set (id, setting, value) {
  const doc = db.doc(id)
  doc.set(
    { setting: value },
    { merge: true }
  )
}

/**
 * unsubscribes a user
 * @param {string} id - the unique id for the subscription
 */
function unsub (id) {
  for (var setting in ['destUser, srcUser, msg']) {
    set(id, setting, '')
  }
}

/**
 * looks up a user code, given discord id
 * @param {string} userID - discord ID of destination or source user
 * @return {string} - the unique code
 */
function lookup (userID) {
  console.log('attention seeker destinations for:')
  const destDocs = db.where('destId', '==', userID)
  destDocs.forEach((doc) => {
    console.log(`${doc.id}`)
  })
  console.log('attention seeking source for:')
  const srcDocs = db.where('srcId', '==', userID)
  srcDocs.forEach((doc) => {
    console.log(`${doc.id}`)
  })
}

/**
 * displays information for code
 * @param {string} id - unique id for the subscription
 */
function display (id) {
  db.doc(id).get()
    .then(doc => {
      console.log(doc.data())
    })
}

/*
APIs
attention()
    send(id.destUser, srcUser, msg)
update()
    display()
    set()
create()
    // new nanoid
    create firestore record
Functions
    send()
    set(id, option)
*/