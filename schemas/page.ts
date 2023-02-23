import { pageBasicInfo, groups } from "./helpers/basics";

export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        ...(pageBasicInfo()),
        
    ],
}