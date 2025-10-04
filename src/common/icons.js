import DELETE_ICON_SVG from '@/assets/images/icons/Delete.svg'
import LOAD_ICON_SVG from '@/assets/images/icons/Load.svg'
import SAVE_ICON_SVG from '@/assets/images/icons/Save.svg'
import INFO_ICON_SVG from '@/assets/images/icons/Info.svg'
import CANCEL_ICON_SVG from '@/assets/images/icons/Cancel.svg'
import FILTER_ICON_SVG from '@/assets/images/icons/Filter.svg'

const DELETE_ICON = "delete";
const LOAD_ICON = "load";
const SAVE_ICON = "save";
const INFO_ICON = "info";
const CANCEL_ICON = "cancel";
const FILTER_ICON = "filter";

const ICON_LIST = [DELETE_ICON, LOAD_ICON, SAVE_ICON, INFO_ICON, CANCEL_ICON, FILTER_ICON]

const ICON_SVGS = {
    [DELETE_ICON]: DELETE_ICON_SVG,
    [LOAD_ICON]: LOAD_ICON_SVG,
    [SAVE_ICON]: SAVE_ICON_SVG,
    [INFO_ICON]: INFO_ICON_SVG,
    [CANCEL_ICON]: CANCEL_ICON_SVG,
    [FILTER_ICON]: FILTER_ICON_SVG,
}

export default {
    ICON_LIST,
    ICON_SVGS,
}