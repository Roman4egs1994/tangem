
type LocalStorageItem<T> = {
    value: T;
}

export const setLocalStorageItem = <T>(
    key: string,
    value: T,
): void => {
    const item: LocalStorageItem<T> = {
        value,
    };
    localStorage.setItem(key, JSON.stringify(item))
};


export const getMeaningInLocalStorage = (key: string): string  => {
    const itemString = localStorage.getItem(key);

    if (!itemString) return "";

    const item: LocalStorageItem<string> = JSON.parse(itemString);

    return item.value;
}