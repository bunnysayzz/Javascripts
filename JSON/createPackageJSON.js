var CustomJsonPackage = (function() {
    // Private functions
    function parseJson(jsonString) {
        return JSON.parse(jsonString);
    }

    function stringifyJson(jsonObject) {
        return JSON.stringify(jsonObject);
    }

    // Public functions
    return {
        parseJson: parseJson,
        stringifyJson: stringifyJson
    };
})();