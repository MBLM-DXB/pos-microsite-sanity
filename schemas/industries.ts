import { pageBasicInfo, groups } from "./helpers/basics";

export default {
    name: 'industries_page',
    title: 'Industries',
    type: 'document',
    fields: [
        ...(pageBasicInfo()),
        
    ],
}