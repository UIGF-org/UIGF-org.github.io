var allowedValues = ['com.max.xiaoheihe'];

// JavaScript code to check X-Requested-With header and redirect if needed
if (!window.location.href.endsWith('blacklist.html')) {
    // JavaScript code to check X-Requested-With header and redirect if needed
    window.onload = function() {
        var requestedWithHeader = window.XMLHttpRequest ? xhr().getRequestHeader('X-Requested-With') : null;

        if (allowedValues.includes(requestedWithHeader)) {
            window.location.href = 'https://uigf.org/blacklist.html';
        }
    };
}

function xhr() {
    var xhr = new XMLHttpRequest();
    xhr.getRequestHeader = function(header) {
        return xhr.getAllRequestHeaders().split('\r\n').reduce(function(result, currentHeader) {
            var parts = currentHeader.split(': ');
            if (parts[0].toLowerCase() === header.toLowerCase()) {
                result = parts[1];
            }
            return result;
        }, null);
    };
    return xhr;
}