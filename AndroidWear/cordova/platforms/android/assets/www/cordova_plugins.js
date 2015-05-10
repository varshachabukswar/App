cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.domain.AndroidWear/www/hello.js",
        "id": "com.domain.AndroidWear.hello",
        "clobbers": [
            "hello"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.domain.AndroidWear": "0.7.0"
}
// BOTTOM OF METADATA
});