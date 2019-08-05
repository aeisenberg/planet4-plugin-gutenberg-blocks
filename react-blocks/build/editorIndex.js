!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){var o=n(15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var o=n(16),r=n(9);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t){!function(){e.exports=this.React}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t,n){"use strict";n.r(t);var o=n(8),r=n.n(o),i=n(2),s=n.n(i),l=n(0),c=n(6),a=n.n(c),p=n(5),u=n.n(p),d=n(4),h=n.n(d),m=n(3),g=n.n(m),b=n(7),v=function(e){function t(){return s()(this,t),u()(this,h()(t).apply(this,arguments))}return g()(t,e),a()(t,[{key:"render",value:function(){return Object(l.createElement)("div",{className:"Preview"},this.props.showBar?Object(l.createElement)("div",{className:"PreviewBar"},"Preview"):null,this.props.children)}}]),t}(b.Component),y=n(1),f=function(e){function t(e){return s()(this,t),u()(this,h()(t).call(this,e))}return g()(t,e),a()(t,[{key:"renderEdit",value:function(){var e=wp.i18n.__;return Object(l.createElement)(b.Fragment,null,Object(l.createElement)("div",null,Object(l.createElement)("h2",null,e("Cookies options","p4ge")),Object(l.createElement)("p",null,Object(l.createElement)("i",null,e("Display opt-in options for cookies","p4ge"))),Object(l.createElement)("div",null,Object(l.createElement)(y.TextControl,{label:"Title",placeholder:"Enter title",value:this.props.title,onChange:this.props.onTitleChange})),Object(l.createElement)("div",null,Object(l.createElement)(y.TextareaControl,{label:"Description",placeholder:"Enter description",value:this.props.description,onChange:this.props.onDescriptionChange})),Object(l.createElement)("hr",null),Object(l.createElement)("div",null,Object(l.createElement)(y.TextControl,{label:"Necessary Cookies Name",placeholder:"Enter cookies name",value:this.props.necessary_cookies_name,onChange:this.props.onNecessaryCookiesNameChange})),Object(l.createElement)("div",null,Object(l.createElement)(y.TextareaControl,{label:"Necessary Cookies Description",placeholder:"Enter cookies description",value:this.props.necessary_cookies_description,onChange:this.props.onNecessaryCookiesDescriptionChange})),Object(l.createElement)("hr",null),Object(l.createElement)("div",null,Object(l.createElement)(y.TextControl,{label:"All Cookies Name",placeholder:"Enter cookies name",value:this.props.all_cookies_name,onChange:this.props.onAllCookiesNameChange})),Object(l.createElement)("div",null,Object(l.createElement)(y.TextareaControl,{label:"All Cookies Description",placeholder:"Enter cookies description",value:this.props.all_cookies_description,onChange:this.props.onAllCookiesDescriptionChange}))))}},{key:"render",value:function(){return Object(l.createElement)("div",null,this.props.isSelected?this.renderEdit():null,Object(l.createElement)(v,{showBar:this.props.isSelected},Object(l.createElement)(y.ServerSideRender,{block:"planet4-blocks/cookies",attributes:{title:this.props.title,description:this.props.description,necessary_cookies_name:this.props.necessary_cookies_name,necessary_cookies_description:this.props.necessary_cookies_description,all_cookies_name:this.props.all_cookies_name,all_cookies_description:this.props.all_cookies_description},urlQueryArgs:{post_id:document.querySelector("#post_ID").value}})))}}]),t}(b.Component),_=function(e){function t(){return s()(this,t),u()(this,h()(t).apply(this,arguments))}return g()(t,e),a()(t,[{key:"render",value:function(){return Object(l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 66 82.5","enable-background":"new 0 0 66 66"},Object(l.createElement)("g",null,Object(l.createElement)("g",null,Object(l.createElement)("path",{d:"M8.193,37.334l23.804-10.512v-8.007L6.099,30.093c-0.24,0.11-0.44,0.31-0.53,0.56c-0.1,0.24-0.09,0.52,0.01,0.76    L8.193,37.334z"}),Object(l.createElement)("path",{d:"M8.999,39.163l4.9,11.08c4.55-1.49,7.1,2.61,8.76,3.78c1.51-1.01,4.47-5.71,9.34-3.55v-21.47L8.999,39.163z     M21.059,42.853l-1,0.46c-0.5,0.23-1.1,0.02-1.33-0.49c-0.23-0.5-0.01-1.09,0.49-1.33l1-0.46c0.5-0.23,1.1-0.01,1.33,0.49    C21.779,42.033,21.559,42.623,21.059,42.853z M27.059,39.853l-1,0.46c-0.5,0.23-1.1,0.02-1.33-0.49c-0.23-0.5-0.01-1.09,0.49-1.33    l1-0.46c0.5-0.23,1.1-0.01,1.33,0.49C27.779,39.033,27.559,39.623,27.059,39.853z"}),Object(l.createElement)("path",{d:"M33.998,26.816l24.005,10.392l2.416-5.816c0.21-0.5-0.02-1.08-0.52-1.3L33.998,18.813V26.816z"}),Object(l.createElement)("path",{d:"M33.999,28.993v22.77c0.95,0.8,2.02,2.26,2.44,2.26c1.97-1.66,3.56-4.08,6.88-4.08c4.21,0,6.03,4.07,6.9,4.07    c0.1-0.087,0.722-0.298,1.25-1.09l5.77-13.87L33.999,28.993z M41.269,39.823c-0.23,0.5-0.83,0.72-1.33,0.49l-1-0.46    c-0.5-0.23-0.72-0.82-0.49-1.33c0.23-0.5,0.83-0.72,1.33-0.49l1,0.46C41.279,38.733,41.499,39.323,41.269,39.823z M47.269,42.823    c-0.23,0.5-0.83,0.72-1.33,0.49l-1-0.46c-0.5-0.23-0.72-0.82-0.49-1.33c0.23-0.5,0.82-0.72,1.33-0.49l1,0.46    C47.279,41.733,47.499,42.323,47.269,42.823z"})),Object(l.createElement)("g",null,Object(l.createElement)("path",{d:"M37.999,2.983v5.63h-10v-5.63c0-1.1,0.9-2,2-2h6C37.099,0.983,37.999,1.883,37.999,2.983z"})),Object(l.createElement)("path",{d:"M48.319,13.823c-0.38-1.86-2.03-3.21-3.93-3.21h-22.78c-1.9,0-3.55,1.35-3.92,3.21l-1.98,9.91   c5.27-2.31,11.32-4.94,17.29-7.54c1.02,0.45,9.84,4.29,17.29,7.54L48.319,13.823z M24.999,17.233h-2c-0.55,0-1-0.45-1-1s0.45-1,1-1   h2c0.55,0,1,0.45,1,1S25.549,17.233,24.999,17.233z M42.999,17.233h-2c-0.55,0-1-0.45-1-1s0.45-1,1-1h2c0.55,0,1,0.45,1,1   S43.549,17.233,42.999,17.233z"}),Object(l.createElement)("path",{d:"M64,62.982c-1.207,0-1.78-0.597-2.69-1.653c-2.737-3.176-5.671-3.178-8.41,0c-1.901,2.205-3.401,2.296-5.378,0   c-2.735-3.175-5.668-3.179-8.403,0c-1.938,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.668-3.178-8.404,0   c-1.939,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.667-3.178-8.402,0c-1.939,2.251-3.429,2.254-5.37,0   c-0.9-1.046-2.02-2.348-4.2-2.348c-0.552,0-1,0.448-1,1s0.448,1,1,1c1.204,0,1.776,0.597,2.684,1.652   c2.733,3.177,5.665,3.178,8.401,0c1.939-2.252,3.43-2.254,5.371,0c2.735,3.177,5.667,3.178,8.402,0   c1.939-2.252,3.432-2.254,5.373,0c2.734,3.176,5.667,3.179,8.402,0c1.938-2.252,3.43-2.254,5.372,0c2.736,3.176,5.67,3.178,8.409,0   c1.942-2.252,3.437-2.255,5.381,0c0.901,1.046,2.023,2.347,4.205,2.347c0.552,0,1-0.448,1-1C65,63.43,64.552,62.982,64,62.982z"}),Object(l.createElement)("path",{d:"M64,55.982c-1.207,0-1.78-0.597-2.69-1.653c-2.737-3.176-5.671-3.178-8.41,0c-1.901,2.205-3.401,2.296-5.378,0   c-2.735-3.175-5.668-3.179-8.403,0c-1.938,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.668-3.178-8.404,0   c-1.939,2.252-3.43,2.254-5.371,0c-2.735-3.177-5.667-3.178-8.402,0c-1.939,2.251-3.429,2.254-5.37,0   c-0.9-1.046-2.02-2.348-4.2-2.348c-0.552,0-1,0.448-1,1s0.448,1,1,1c1.204,0,1.776,0.597,2.684,1.652   c2.733,3.177,5.665,3.178,8.401,0c1.939-2.252,3.43-2.254,5.371,0c2.735,3.177,5.667,3.178,8.402,0   c1.939-2.252,3.432-2.254,5.373,0c2.734,3.176,5.667,3.179,8.402,0c1.938-2.252,3.43-2.254,5.372,0c2.736,3.176,5.67,3.178,8.409,0   c1.942-2.252,3.437-2.255,5.381,0c0.901,1.046,2.023,2.347,4.205,2.347c0.552,0,1-0.448,1-1S64.552,55.982,64,55.982z"})))}}]),t}(b.Component),k=n(9),O=n.n(k),C=function(e){function t(e){var n;return s()(this,t),(n=u()(this,h()(t).call(this,e))).state={selectedOption:e.selectedOption},n.setSelected=n.setSelected.bind(O()(n)),n}return g()(t,e),a()(t,[{key:"setSelected",value:function(e){this.setState({selectedOption:e}),this.props.onSelectedLayoutChange(e)}},{key:"render",value:function(){var e=this;return Object(l.createElement)("div",{className:"LayoutSelector"},this.props.options.map(function(t){return Object(l.createElement)("label",{className:"LayoutOption"},Object(l.createElement)("div",{style:{display:"flex"}},Object(l.createElement)(y.RadioControl,{name:"layoutOption",selected:Number(e.state.selectedOption),options:[{value:Number(t.value)}],onChange:e.setSelected}),t.label),t.image?Object(l.createElement)("img",{src:t.image}):null,t.help?Object(l.createElement)("p",{className:"help",dangerouslySetInnerHTML:{__html:t.help}}):null)}))}}]),t}(b.Component),E=function(e){function t(e){var n;return s()(this,t),(n=u()(this,h()(t).call(this,e))).state={tagTokens:[],postTypeTokens:[]},n}return g()(t,e),a()(t,[{key:"onSelectedTagsChange",value:function(e){var t=this,n=e.map(function(e){return t.props.tagsList.filter(function(t){return t.name===e})[0].id});this.props.onSelectedTagsChange(n),this.setState({tagTokens:e})}},{key:"onSelectedPostTypesChange",value:function(e){var t=this,n=e.map(function(e){return t.props.postTypesList.filter(function(t){return t.name===e})[0].id});this.props.onSelectedPostTypesChange(n),this.setState({postTypeTokens:e})}},{key:"renderEdit",value:function(){var e=this,t=wp.i18n.__,n=this.props.tagsList.map(function(e){return e.name}),o=this.props.postTypesList.map(function(e){return e.name}),r=this.props.posts.map(function(e){return e.title.rendered});return Object(l.createElement)("div",null,Object(l.createElement)("h3",null,t("What style of cover do you need?","p4ge")),Object(l.createElement)("div",null,Object(l.createElement)(C,{selectedOption:this.props.cover_type,onSelectedLayoutChange:this.props.onSelectedLayoutChange,options:[{label:t("Take Action Covers","p4ge"),image:window.p4ge_vars.home+"images/take_action_covers.png",value:1,help:t("Take action covers pull the featured image, tags, have a 25 character excerpt and have a call to action button")},{label:t("Campaign Covers","p4ge"),image:window.p4ge_vars.home+"images/campaign_covers.png",value:2,help:t("Campaign covers pull the associated image and hashtag from the system tag definitions.")},{label:t("Content Covers","p4ge"),image:window.p4ge_vars.home+"images/content_covers.png",value:3,help:t("Content covers pull the image from the post.")}]})),Object(l.createElement)("div",null,Object(l.createElement)(y.SelectControl,{label:"Rows to display",value:this.props.covers_view,options:[{label:"1 Row",value:"1"},{label:"2 Rows",value:"2"},{label:"All rows",value:"all"}],onChange:this.props.onRowsChange})),Object(l.createElement)("div",null,Object(l.createElement)(y.TextControl,{label:"Title",placeholder:"Enter title",value:this.props.title,onChange:this.props.onTitleChange})),Object(l.createElement)("div",null,Object(l.createElement)(y.TextareaControl,{label:"Description",placeholder:"Enter description",value:this.props.description,onChange:this.props.onDescriptionChange})),Object(l.createElement)("div",null,Object(l.createElement)(y.FormTokenField,{value:this.state.tagTokens,suggestions:n,label:"Select Tags",onChange:function(t){return e.onSelectedTagsChange(t)},placeholder:"Select Tags"}),Object(l.createElement)("p",{class:"FieldHelp"},"Associate this block with Actions that have specific Tags")),3===this.props.cover_type?Object(l.createElement)(y.FormTokenField,{value:this.state.postTypeTokens,suggestions:o,label:"Post Types",onChange:function(t){return e.onSelectedPostTypesChange(t)},placeholder:"Select Tags"}):null,3!==this.props.cover_type||0!==this.props.tags.length&&0!==this.props.post_types.length?null:Object(l.createElement)("div",null,Object(l.createElement)("label",null,"Manual override"),Object(l.createElement)(y.FormTokenField,{value:this.props.selectedPosts,suggestions:r,label:"CAUTION: Adding covers manually will override the automatic functionality. DRAG & DROP: Drag and drop to reorder cover display priority.",onChange:function(t){return e.props.onSelectedPostsChange(t)},placeholder:"Select Tags"})))}},{key:"render",value:function(){return Object(l.createElement)("div",null,this.props.isSelected?this.renderEdit():null,Object(l.createElement)(v,{showBar:this.props.isSelected},Object(l.createElement)(y.ServerSideRender,{block:"planet4-blocks/covers",attributes:{cover_type:this.props.cover_type,covers_view:this.props.covers_view,tags:this.props.tags,post_types:this.props.post_types,title:this.props.title,description:this.props.description}})))}}]),t}(b.Component),j=n(10),S=function(e){function t(e){return s()(this,t),u()(this,h()(t).call(this,e))}return g()(t,e),a()(t,[{key:"renderEdit",value:function(){var e=wp.i18n.__,t=this.props,n=t.video_title,o=t.description,r=t.youtube_id;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",null,Object(l.createElement)(y.TextControl,{label:e("Media Title","p4ge"),placeholder:e("Enter video title","p4ge"),value:n,onChange:this.props.onTitleChange}),Object(l.createElement)(y.TextareaControl,{label:e("Description","p4ge"),help:e("(Optional)","p4ge"),value:o,onChange:this.props.onDescriptionChange}),Object(l.createElement)(y.TextControl,{label:e("Media URL/ID","p4ge"),placeholder:e("Enter URL","p4ge"),value:r,onChange:this.props.onMediaUrlChange,help:e("Can be a YouTube, Vimeo or Soundcloud URL or an mp4, mp3 or wav file URL.","p4ge")}),Object(l.createElement)(j.MediaPlaceholder,{labels:{title:e("Video poster image [Optional]","p4ge"),instructions:e("Applicable for .mp4 video URLs only.","p4ge")},icon:"format-image",onSelect:this.props.onSelectImage,onSelectURL:this.props.onSelectURL,onError:this.props.onUploadError,accept:"image/*",allowedTypes:["image"]})))}},{key:"render",value:function(){return Object(l.createElement)("div",null,this.props.isSelected?this.renderEdit():null,Object(l.createElement)(v,{showBar:this.props.isSelected},this.props.youtube_id&&Object(l.createElement)(y.ServerSideRender,{block:"planet4-blocks/media-video",attributes:{video_title:this.props.video_title,description:this.props.description,youtube_id:this.props.youtube_id,video_poster_img:this.props.video_poster_img}})))}}]),t}(l.Component),w=wp.i18n.__,T=function(e){function t(e){return s()(this,t),u()(this,h()(t).call(this,e))}return g()(t,e),a()(t,[{key:"render",value:function(){var e=this;return Object(l.createElement)("div",null,Object(l.createElement)("div",null,"Level ",this.props.index+1),Object(l.createElement)(y.SelectControl,{label:"Submenu item",help:"Submenu item",value:this.props.heading,options:[{label:"None",value:"0"},{label:"Heading 1",value:"1"},{label:"Heading 2",value:"2"},{label:"Heading 3",value:"3"},{label:"Heading 4",value:"4"},{label:"Heading 5",value:"5"},{label:"Heading 6",value:"6"}],onChange:function(t){return e.props.onHeadingChange(e.props.index,t)},className:"submenu-block-attribute-wrapper"}),Object(l.createElement)(y.CheckboxControl,{heading:"Link",help:"Link item",value:this.props.link,checked:this.props.link,onChange:function(t){return e.props.onLinkChange(e.props.index,t)},className:"submenu-level-link"}),Object(l.createElement)(y.SelectControl,{label:"List style",help:"List style",value:this.props.style,options:[{label:"None",value:"none"},{label:"Bullet",value:"bullet"},{label:"Number",value:"number"}],onChange:function(t){return e.props.onStyleChange(e.props.index,t)},className:"submenu-block-attribute-wrapper"}))}}]),t}(b.Component),x=function(e){function t(e){return s()(this,t),u()(this,h()(t).call(this,e))}return g()(t,e),a()(t,[{key:"renderEdit",value:function(){var e=this,t=wp.i18n.__;return Object(l.createElement)("div",null,Object(l.createElement)("h2",null,t("Anchor Link Submenu","p4ge")),Object(l.createElement)("p",null,Object(l.createElement)("i",null,t("An in-page table of contents to help users have a sense of what's on the page and let them jump to a topic they are interested in.","p4ge"))),Object(l.createElement)("h3",null,t("What style of menu do you need?","p4ge")),Object(l.createElement)("div",null,Object(l.createElement)(C,{selectedOption:this.props.submenu_style,onSelectedLayoutChange:this.props.onSelectedLayoutChange,options:[{label:t("Long full-width","p4ge"),image:window.p4ge_vars.home+"images/submenu-long.jpg",value:1,help:t("Use: on long pages (more than 5 screens) when list items are long (+ 10 words)<br>No max items<br>recommended.")},{label:t("Short full-width","p4ge"),image:window.p4ge_vars.home+"images/submenu-short.jpg",value:2,help:t("Use: on long pages (more than 5 screens) when list items are short (up to 5 words)<br>No max items<br>recommended.")},{label:t("Short sidebar","p4ge"),image:window.p4ge_vars.home+"images/submenu-sidebar.jpg",value:3,help:t("Use: on long pages (more than 5 screens) when list items are short (up to 10 words)<br>Max items<br>recommended: 9")}]})),Object(l.createElement)("div",null,Object(l.createElement)(y.TextControl,{label:"Submenu Title",placeholder:"Enter title",value:this.props.title,onChange:this.props.onTitleChange})),Object(l.createElement)("hr",null),this.props.levels.map(function(t,n){return Object(l.createElement)(T,r()({},t,{onHeadingChange:e.props.onHeadingChange,onLinkChange:e.props.onLinkChange,onStyleChange:e.props.onStyleChange,index:n}))}),Object(l.createElement)("div",null,Object(l.createElement)(y.Button,{isPrimary:!0,onClick:this.props.addLevel,disabled:this.props.levels.length>=3||0===this.props.levels.slice(-1)[0].heading},"Add level"),Object(l.createElement)(y.Button,{isDefault:!0,onClick:this.props.removeLevel,disabled:this.props.levels.length<=1},"Remove level")))}},{key:"render",value:function(){return Object(l.createElement)(b.Fragment,null,this.props.isSelected?this.renderEdit():null,Object(l.createElement)(v,{showBar:this.props.isSelected},Object(l.createElement)(y.ServerSideRender,{block:"planet4-blocks/submenu",attributes:{submenu_style:this.props.submenu_style,title:this.props.title,levels:this.props.levels},urlQueryArgs:{post_id:document.querySelector("#post_ID").value}})))}}]),t}(b.Component);new function e(){s()(this,e),(0,wp.blocks.registerBlockType)("planet4-blocks/cookies",{title:"Cookies",icon:"visibility",category:"planet4-blocks",transforms:{from:[{type:"shortcode",tag:"shortcake_cookies",attributes:{title:{type:"string",shortcode:function(e){return e.named.title}},description:{type:"string",shortcode:function(e){return e.named.description}},necessary_cookies_name:{type:"string",shortcode:function(e){return e.named.necessary_cookies_name}},necessary_cookies_description:{type:"string",shortcode:function(e){return e.named.necessary_cookies_description}},all_cookies_name:{type:"string",shortcode:function(e){return e.named.all_cookies_name}},all_cookies_description:{type:"string",shortcode:function(e){return e.named.all_cookies_description}}}}]},attributes:{title:{type:"string"},description:{type:"string"},necessary_cookies_name:{type:"string"},necessary_cookies_description:{type:"string"},all_cookies_name:{type:"string"},all_cookies_description:{type:"string"}},edit:function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes;return Object(l.createElement)(f,r()({},n,{isSelected:t,onTitleChange:function(e){o({title:e})},onDescriptionChange:function(e){o({description:e})},onNecessaryCookiesNameChange:function(e){o({necessary_cookies_name:e})},onNecessaryCookiesDescriptionChange:function(e){o({necessary_cookies_description:e})},onAllCookiesNameChange:function(e){o({all_cookies_name:e})},onAllCookiesDescriptionChange:function(e){o({all_cookies_description:e})}}))},save:function(){return null}})},new function e(){s()(this,e);var t=wp.blocks.registerBlockType,n=wp.data.withSelect;t("planet4-blocks/covers",{title:"Covers",icon:_,category:"planet4-blocks",transforms:{from:[{type:"shortcode",tag:"shortcake_newcovers",attributes:{cover_type:{type:"integer",shortcode:function(e){var t=e.named.cover_type;return void 0===t?"1":t}},title:{type:"string",shortcode:function(e){var t=e.named.title;return void 0===t?"":t}},description:{type:"string",shortcode:function(e){var t=e.named.description;return void 0===t?"":t}}}}]},attributes:{title:{type:"string"},description:{type:"string"},tags:{type:"array",default:[]},posts:{type:"array",default:[]},post_types:{type:"array",default:[]},covers_view:{type:"string",default:"1"},cover_type:{type:"integer",default:1}},edit:n(function(e){var t=e("core").getEntityRecords,n=t("taxonomy","post_tag",{hide_empty:!1});return{postTypesList:t("taxonomy","p4-page-type"),tagsList:n,posts:t("postType","post")}})(function(e){var t=e.postTypesList,n=e.tagsList,o=e.posts,i=e.isSelected,s=e.attributes,c=e.setAttributes;return n&&t&&o?n||0!==!n.length?Object(l.createElement)(E,r()({},s,{isSelected:i,tagsList:n,postTypesList:t,posts:o,onSelectedTagsChange:function(e){c({tags:e})},onSelectedLayoutChange:function(e){c({cover_type:Number(e)})},onTitleChange:function(e){c({title:e})},onDescriptionChange:function(e){c({description:e})},onSelectedPostsChange:function(e){c({selectedPosts:e.tokens})},onSelectedPostTypesChange:function(e){c({post_types:e})},onRowsChange:function(e){c({covers_view:e})}})):"No tags...":"Populating block's fields..."}),save:function(){return null}})},new function e(){s()(this,e),(0,wp.blocks.registerBlockType)("planet4-blocks/media-video",{title:w("Media block","p4ge"),icon:"format-video",category:"planet4-blocks",transforms:{from:[{type:"shortcode",tag:"shortcake_media_video",attributes:{video_title:{type:"string",shortcode:function(e){var t=e.named.video_title;return void 0===t?"":t}},description:{type:"string",shortcode:function(e){var t=e.named.description;return void 0===t?"":t}},youtube_id:{type:"string",shortcode:function(e){var t=e.named.youtube_id;return void 0===t?"":t}},video_poster_img:{type:"integer",shortcode:function(e){var t=e.named.video_poster_img;return void 0===t?"":t}}}}]},attributes:{video_title:{type:"string"},description:{type:"string"},youtube_id:{type:"string"},video_poster_img:{type:"integer"}},edit:function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes;return Object(l.createElement)(S,r()({},n,{isSelected:t,onTitleChange:function(e){o({video_title:e})},onDescriptionChange:function(e){o({description:e})},onMediaUrlChange:function(e){o({youtube_id:e})},onSelectImage:function(e){var t=e.id;o({video_poster_img:t})},onSelectURL:function(e){e.url,o({id:null})},onUploadError:function(e){var t=e.message;console.log(t)}}))},save:function(){return null}})},new function e(){s()(this,e),(0,wp.blocks.registerBlockType)("planet4-blocks/submenu",{title:"Submenu",icon:"welcome-widgets-menus",category:"planet4-blocks",supports:{multiple:!1},transforms:{from:[{type:"shortcode",tag:"shortcake_submenu",attributes:{submenu_style:{type:"integer",shortcode:function(e){return Number(e.named.submenu_style)}},title:{type:"string",shortcode:function(e){return e.named.title}},levels:{type:"array",shortcode:function(e){var t=[];if(e.named.heading1>0){var n={heading:Number(e.named.heading1),link:e.named.link1||!1,style:e.named.style1||"none"};if(t.push(Object.assign({},n)),e.named.heading2>0){var o={heading:Number(e.named.heading2),link:e.named.link2||!1,style:e.named.style2||"none"};if(t.push(Object.assign({},o)),e.named.heading3>0){var r={heading:Number(e.named.heading3),link:e.named.link3||!1,style:e.named.style3||"none"};t.push(Object.assign({},r))}}}return t}}}}]},attributes:{submenu_style:{type:"integer",default:1},title:{type:"string"},levels:{type:"array",default:[{heading:0,link:!1,style:"none"}]}},edit:(0,wp.data.withSelect)(function(e){})(function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes;return Object(l.createElement)(x,r()({},n,{isSelected:t,onSelectedLayoutChange:function(e){o({submenu_style:Number(e)})},onTitleChange:function(e){o({title:e})},onHeadingChange:function(e,t){var r=JSON.parse(JSON.stringify(n.levels));r[e].heading=Number(t),o({levels:r})},onLinkChange:function(e,t){var r=JSON.parse(JSON.stringify(n.levels));r[e].link=t,o({levels:r})},onStyleChange:function(e,t){var r=JSON.parse(JSON.stringify(n.levels));r[e].style=t,o({levels:r})},addLevel:function(){o({levels:n.levels.concat({heading:0,link:!1,style:"none"})})},removeLevel:function(){o({levels:n.levels.slice(0,-1)})}}))}),save:function(){return null}})}},,,,function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o}]);