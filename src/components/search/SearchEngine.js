export const searchEngine = (data,inputValue) => {
    const toLower = inputValue.toLowerCase();
    return data.filter(el => el.title.toLowerCase().includes(toLower) || el.text.toLowerCase().includes(toLower))
};