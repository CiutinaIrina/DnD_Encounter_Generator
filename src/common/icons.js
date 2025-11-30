const DELETE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1792 384h-128v1472q0 40-15 75t-41 61-61 41-75 15H448q-40 0-75-15t-61-41-41-61-15-75V384H128V256h512V128q0-27 10-50t27-40 41-28 50-10h384q27 0 50 10t40 27 28 41 10 50v128h512v128zM768 256h384V128H768v128zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45V384zM768 1664H640V640h128v1024zm256 0H896V640h128v1024zm256 0h-128V640h128v1024z" fill="currentColor"/></svg>`;
const LOAD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M2005 896q0 32-15 60l-340 639q-17 32-47 50t-67 19H128q-26 0-49-10t-41-27-28-41-10-50V256q0-27 10-50t27-40 41-28 50-10h608q37 0 69 13t58 36 49 51 39 59q13 23 25 41t28 30 35 19 49 7h576q27 0 50 10t40 27 28 41 10 50v256h28q14 0 29-1 42 0 77 10t61 53q18 30 18 66zM128 256v1073l245-490q17-33 47-52t68-19h1176V512h-576q-62 0-104-19t-73-47-51-62-39-61-38-48-47-19H128zm1408 1280l341-640H488l-320 640h1368z" fill="currentColor"/></svg>`;
const SAVE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1792 128q27 0 50 10t40 27 28 41 10 50v1664H357l-229-230V256q0-27 10-50t27-40 41-28 50-10h1536zM512 896h1024V256H512v640zm768 512H640v384h128v-256h128v256h384v-384zm512-1152h-128v768H384V256H256v1381l154 155h102v-512h896v512h384V256z" fill="currentColor"/></svg>`;
const INFO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M960 1920q-133 0-255-34t-230-96-194-150-150-195-97-229T0 960q0-133 34-255t96-230 150-194 195-150 229-97T960 0q133 0 255 34t230 96 194 150 150 195 97 229 34 256q0 133-34 255t-96 230-150 194-195 150-229 97-256 34zm0-1792q-115 0-221 30t-198 84-169 130-130 168-84 199-30 221q0 114 30 220t84 199 130 169 168 130 199 84 221 30q114 0 220-30t199-84 169-130 130-168 84-199 30-221q0-114-30-220t-84-199-130-169-168-130-199-84-221-30zm-64 640h128v640H896V768zm0-256h128v128H896V512z" fill="currentColor"/></svg>`;
const CANCEL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1115 1024l690 691-90 90-691-690-691 690-90-90 690-691-690-691 90-90 691 690 691-690 90 90-690 691z" fill="currentColor"/></svg>`;
const FILTER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M2048 128v219l-768 768v805H768v-805L0 347V128h2048zm-128 128H128v37l768 768v731h256v-731l768-768v-37z" fill="currentColor"/></svg>`;
const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 6l4 4 4-4H4z"/></svg>`
const ADD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1792 896v256H1344v448h-256v-448H640V896h448V448h256v448h448z" fill="currentColor"/></svg>`;
const NEXT_PAGE_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const PREV_PAGE_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 5l-6 5 6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const FIRST_PAGE_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5l-5 5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 5l-5 5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const LAST_PAGE_SVG = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

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
