export default class TabBar {
    /**
     * Создает объект.
     * @param {{ element: HTMLElement, tabs: Tab[], onChange: Function }} args
     */
    constructor({element, tabs, onChange}) {
        this._element = element;
        this._tabs = tabs;
        this._onChange = onChange;
        
        this.init(this.element)
    }

    /**
     * Инициализирует объект.
     * Устанавливает обработчик для обработки активации вкладки.
     * @private
     */
    init(element) {
        this.tabs.forEach(elem => elem._onActivate = this.handleActivate.bind(this));
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() { return this._element; }

    /**
     * Возвращает массив вкладок.
     * @returns {Tab[]}
     */
    get tabs() { return this._tabs; }

    /**
     * Возвращает активную вкладку.
     * @returns {Tab}
     */
    get activeTab() { return this.tabs.find(elem => elem.isActive) }

    /**
     * Возвращает индекс активной вкладки.
     * @returns {number}
     */
    get activeTabIndex() { return this.tabs.findIndex(elem => elem.isActive) }

    /**
     * Вызывается при активации вкладки.
     * Делает все вкладки кроме активной неактивными.
     * Вызывает функцию обратно вызова, отправляя туда активную вкладку.
     * @private
     * @param {Tab} activeTab 
     */
    handleActivate(activeTab) {
        this._tabs.forEach(elem => {
            if (elem !== activeTab) {
                elem.isActive = false;
            }
        });

        this._onChange(activeTab)
    }
}