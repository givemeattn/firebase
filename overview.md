Firebase Function + Website
API
domain/[attention/unsub]/id
    attention - wakes bot to send message
        if null - show error page
    unsub - nullifies record
HTML
domain/[update/unsub/create/lookup]
    update - prompt for id to change target or message
    unsub - prompt for id to nullify record
    create - create record
    lookup - look up records associated with
    display - show target and message

Discord Bot
    unsub - performs lookup & returns unsub url

APIs
attention()
    send(id.destUser, srcUser, msg)
unsub()
    set(to null)
update()
    lookup([optional])
    display()
    set()
create()
    // new nanoid
    create firesotre record
lookup([id])
    return nanoid
display(id)
    
Functions
    send()
    set(id, option)