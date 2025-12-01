const DELETE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="14" height="14" rx="2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/><path d="M8 6l1-2h6l1 2"/></svg>`;
const LOAD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4"/><path d="M12 3v14"/><path d="M8 9l4-4 4 4"/></svg>`;
const SAVE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 3v5H7V3"/><path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`;
const INFO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01"/><path d="M11 12h1v4h1"/></svg>`;
const CANCEL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`;
const FILTER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>`;
const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
const ADD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`;
const NEXT_PAGE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5l6 7-6 7"/></svg>`;
const PREV_PAGE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 5l-6 7 6 7"/></svg>`;
const FIRST_PAGE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 5l-6 7 6 7"/><path d="M7 5l-6 7 6 7"/></svg>`;
const LAST_PAGE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1rem" height="1rem" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5l6 7-6 7"/><path d="M17 5l6 7-6 7"/></svg>`;

const DELETE = "delete";
const LOAD = "load";
const SAVE = "save";
const INFO = "info";
const CANCEL = "cancel";
const FILTER = "filter";
const CHEVRON = "chevron";
const ADD = "add";
const NEXT_PAGE = "next_page";
const PREV_PAGE = "prev_page";
const FIRST_PAGE = "first_page";
const LAST_PAGE = "last_page";

const ICON_LIST = [DELETE, LOAD, SAVE, INFO, CANCEL, FILTER, CHEVRON, ADD, NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE];

const ICON_SVGS = {
    [DELETE]: DELETE_SVG,
    [LOAD]: LOAD_SVG,
    [SAVE]: SAVE_SVG,
    [INFO]: INFO_SVG,
    [CANCEL]: CANCEL_SVG,
    [FILTER]: FILTER_SVG,
    [CHEVRON]: CHEVRON_SVG,
    [ADD]: ADD_SVG,
    [NEXT_PAGE]: NEXT_PAGE_SVG,
    [PREV_PAGE]: PREV_PAGE_SVG,
    [FIRST_PAGE]: FIRST_PAGE_SVG,
    [LAST_PAGE]: LAST_PAGE_SVG,
};

export default {
    DELETE,
    LOAD,
    SAVE,
    INFO,
    CANCEL,
    FILTER,
    CHEVRON,
    ADD,
    NEXT_PAGE,
    PREV_PAGE,
    FIRST_PAGE,
    LAST_PAGE,
    
    ICON_LIST,
    ICON_SVGS,
}
