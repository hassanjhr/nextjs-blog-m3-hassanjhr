import { title } from "process";
import { defineField, defineType } from "sanity";


export default defineType({
    name : 'blog',
    title : 'Blog',
    type : 'document',
    fields : [
        defineField({
            name : 'heading',
            title : 'Title',
            type : 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type:'slug',
            options: {
                source: 'heading',
                maxLength: 100
            }
        }),
        defineField({
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        })    
    ]
})


// export default {

//     name : 'blog',
//     title : 'Blog',
//     type : 'document',
//     fields : [
//         {
//             name : 'title',
//             title : 'Title',
//             type : 'string'
//         },

//         {
//             name: 'description',
//             title: 'Description',
//             type: 'text'
//         },

//         {
//             name: 'slug',
//             title: 'Slug',
//             type:'slug',
//             options: {
//                 source: 'title',
//                 maxLength: 100
//             }
//         },

//         {
//             name : 'image',
//             title : 'Image',
//             type : 'image',
//             options : {
//                 hotspot : true
//             }
//         }
//     ]
// }