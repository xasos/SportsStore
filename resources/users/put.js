if (me === undefined || me.username != "admin") {
    cancel("Auth not defined.", 401)
}