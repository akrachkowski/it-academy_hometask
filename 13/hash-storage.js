var HashStorage = (function () {

    const _storage = Symbol('storage');
    const _checkStringKey = Symbol('checkStringKey');
    const _checkUniqueKey = Symbol('checkUniqueKey');

    class HashStorage {

        constructor() {
            this[_storage] = [];
        }

        // public
        addValue(key, value) {
            this[_checkStringKey](key);
            this[_checkUniqueKey](key);

            this[_storage].push({ key, value });
        }

        getValue(key) {
            this[_checkStringKey](key);            

            return this[_storage].find((x) => x.key === key);
        }

        deleteValue(key) {
            this[_checkStringKey](key);

            const value = this.getValue(key);
            if (!value) return false;

            this[_storage].splice(this[_storage].indexOf(value), 1);
            return true;
        }

        getKeys() {
            return this[_storage].map((x) => x.key);
        }

        // private
        [_checkStringKey](key) {
            if (typeof key !== "string") {
                throw new Error("key must be string");
            }
        }

        [_checkUniqueKey](key) {
            if (!!this[_storage].find((x) => x.key === key)) {
                throw new Error("item with this key already exists");
            }
        }

    }

    return HashStorage;

})();
