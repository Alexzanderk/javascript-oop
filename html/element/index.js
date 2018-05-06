const EventEmitter = require('../event-emitter');

class Element extends EventEmitter {
    /**
     * @param {{ tag: string, id: string, className: string }} args
     */
    constructor({ tag, id, className = '' }) {
        super();

        this.tag = tag;
        this.id = id;
        this.classList = new Set(className.split(' '));
    }

    /**
     * Возвращает строку с названиями CSS классов.
     * 
     * @returns {string}
     */
    get className() {
        return [...this.classList.values()].join(' ').trim();
    }

    /**
     * Добавляет CSS класс.
     * 
     * @param {string} className 
     */
    addClass(className) {
        this.classList.add(className);
    }

    /**
     * Удаляет CSS класс.
     * 
     * @param {string} className 
     */
    removeClass(className) {
        this.classList.delete(className);
    }

    /**
     * Возращает `true` или `false` в зависимости от начилия CSS класса.
     * 
     * @param {string} className
     * @returns {boolean}
     */
    hasClass(className) {
        return this.classList.has(className);
    }

    /**
     * Добавляет или удаляет CSS класс в зависимости от его наличия.
     * 
     * @param {string} className 
     */
    toggleClass(className) {
        if (this.classList.has(className)) {
            this.classList.delete(className);
        } else {
            this.classList.add(className);
        }
    }
}

module.exports = Element;