class LocalStorageService {
    getListOfSelectedItems() {
        let items = JSON.parse(localStorage.getItem('items'));
        return items.map(c => c.items.filter(i => i.selected)).reduce((r,c) => r.concat(c), []);
    }
}

export default new LocalStorageService();