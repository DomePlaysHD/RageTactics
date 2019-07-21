let enum_count = 1;
var enums = {
    LOBBY_CREATING:enum_count++,
    LOBBY_WAITING:enum_count++,
    LOBBY_READY:enum_count++,
    LOBBY_STARTING:enum_count++,
    LOBBY_PREPARING:enum_count++,
    LOBBY_RUNNING:enum_count++,
    LOBBY_COUNTDOWN:enum_count++,
    LOBBY_COUNTDOWN_5:enum_count++,
    LOBBY_COUNTDOWN_4:enum_count++,
    LOBBY_COUNTDOWN_3:enum_count++,
    LOBBY_COUNTDOWN_2:enum_count++,
    LOBBY_COUNTDOWN_1:enum_count++,
    LOBBY_COUNTDOWN_GO:enum_count++,
	LOGIN_OK:enum_count++,
	LOGIN_FAILED:enum_count++,
	LOGIN_PASSWORD_WRONG:enum_count++,
	LOGIN_NOT_FOUND:enum_count++,
    REGISTERED_OK:enum_count++,
    REGISTERED_FAILED:enum_count++,
    REGISTERED_PASSWORD_WRONG:enum_count++,
    REGISTERED_ACCOUNT_EXISTS:enum_count++,
    KILLED:enum_count++,
    KILL:enum_count++,
    LOBBY_JOIN_SUCCESS:enum_count++,
    LOBBY_NOT_EXISTS:enum_count++,
    LOBBY_JOIN_FAIL_FULL:enum_count++,
    LOBBY_JOIN_FAIL_TEAM_INVALID:enum_count++,
    LOBBY_JOIN_FAIL_TEAM_INVALID:enum_count++,
    LOBBY_PLAYER_NOT_FOUND:enum_count++,
    LOBBY_MAP_NOT_FOUND:enum_count++,
}
Object.keys(enums).forEach(function(key, value) {
	global[key] = enums[key];
})
module.exports = enums;