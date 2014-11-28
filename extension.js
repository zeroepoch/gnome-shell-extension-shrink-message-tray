const MessageTraySource = imports.ui.messageTray.Source;

function init () {
    /* css modifications can not be undone */
    MessageTraySource.prototype['SOURCE_ICON_SIZE'] = 24;
}

function enable () {
}

function disable () {
}
