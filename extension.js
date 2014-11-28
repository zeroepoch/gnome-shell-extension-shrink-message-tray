const MessageTraySource = imports.ui.messageTray.Source;

function init () {
    MessageTraySource.prototype['SOURCE_ICON_SIZE'] = 24;
}
