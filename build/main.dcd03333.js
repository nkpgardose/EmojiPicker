(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,i){"use strict";i.r(t),i.d(t,"propTypes",(function(){return d})),i.d(t,"defaultProps",(function(){return y}));var r=i(42),n=i(213),s=i(103),a=i(2),o=i.n(a),c=i(1),p=i.n(c),j=i(41),l=i(95),u=i(94),_=i(40);function S(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(i,!0).forEach((function(t){Object(s.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):S(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}i(91),i(817);var d={emojis:p.a.objectOf(p.a.arrayOf(p.a.shape({category:p.a.string.isRequired,char:p.a.string.isRequired,fitzpatrick_scale:p.a.bool.isRequired,key:p.a.string,keywords:p.a.arrayOf(p.a.string.isRequired).isRequired}).isRequired).isRequired).isRequired,onEmojiPick:p.a.func.isRequired,searchText:p.a.string,inputPlaceholder:p.a.string,onFieldSearch:p.a.func,onNavigateClick:p.a.func},y={emojis:j.ordered.reduce((function(e,t){var i=m({},j.lib[t],{key:t}),r=i.category,a=e[r];return m({},e,Object(s.a)({},r,a?[].concat(Object(n.a)(a),[i]):[]))}),{}),inputPlaceholder:"\ud83d\udd0e Search emoji...",onFieldSearch:function(){},onNavigateClick:function(e,t){return function(i){i.preventDefault(),e.current.scrollTop=t.current.offsetTop}},searchText:""};function h(e){var t=e.emojis,i=e.searchText,n=e.inputPlaceholder,c=e.onFieldSearch,p=e.onEmojiPick,j=e.onNavigateClick,S=Object.keys(t).reduce((function(e,t){return m({},e,Object(s.a)({},t,o.a.createRef(null)))}),{}),d=Object(a.useRef)(null),y=Object(a.useState)(i),h=Object(r.a)(y,2),E=h[0],g=h[1],f=Object(a.useState)([]),x=Object(r.a)(f,2),P=x[0],C=x[1];return o.a.createElement("div",{className:"EmojiPicker"},o.a.createElement("header",{className:"head"},o.a.createElement("nav",{className:"nav"},Object.keys(t).map((function(e){var i="nav_".concat(e);return o.a.createElement(_.default,{key:i,title:i,onClick:j(d,S[e])},t[e][0].char)}))),o.a.createElement(l.default,{input:E,emojiContent:d,onFieldSearch:c,setInput:g,setResults:C,inputPlaceholder:n})),o.a.createElement("div",{ref:d,className:"content"},o.a.createElement(u.default,{emojis:t,navRefs:S,results:P,onEmojiPick:p})))}h.defaultProps=y,t.default=h},214:function(e,t,i){e.exports=i(824)},391:function(e,t,i){var r={"./Binary_Property/ASCII.js":392,"./Binary_Property/ASCII_Hex_Digit.js":393,"./Binary_Property/Alphabetic.js":394,"./Binary_Property/Any.js":395,"./Binary_Property/Assigned.js":396,"./Binary_Property/Bidi_Control.js":397,"./Binary_Property/Bidi_Mirrored.js":398,"./Binary_Property/Case_Ignorable.js":399,"./Binary_Property/Cased.js":400,"./Binary_Property/Changes_When_Casefolded.js":401,"./Binary_Property/Changes_When_Casemapped.js":402,"./Binary_Property/Changes_When_Lowercased.js":403,"./Binary_Property/Changes_When_NFKC_Casefolded.js":404,"./Binary_Property/Changes_When_Titlecased.js":405,"./Binary_Property/Changes_When_Uppercased.js":406,"./Binary_Property/Dash.js":407,"./Binary_Property/Default_Ignorable_Code_Point.js":408,"./Binary_Property/Deprecated.js":409,"./Binary_Property/Diacritic.js":410,"./Binary_Property/Emoji.js":411,"./Binary_Property/Emoji_Component.js":412,"./Binary_Property/Emoji_Modifier.js":413,"./Binary_Property/Emoji_Modifier_Base.js":414,"./Binary_Property/Emoji_Presentation.js":415,"./Binary_Property/Extended_Pictographic.js":416,"./Binary_Property/Extender.js":417,"./Binary_Property/Grapheme_Base.js":418,"./Binary_Property/Grapheme_Extend.js":419,"./Binary_Property/Hex_Digit.js":420,"./Binary_Property/IDS_Binary_Operator.js":421,"./Binary_Property/IDS_Trinary_Operator.js":422,"./Binary_Property/ID_Continue.js":423,"./Binary_Property/ID_Start.js":424,"./Binary_Property/Ideographic.js":425,"./Binary_Property/Join_Control.js":426,"./Binary_Property/Logical_Order_Exception.js":427,"./Binary_Property/Lowercase.js":428,"./Binary_Property/Math.js":429,"./Binary_Property/Noncharacter_Code_Point.js":430,"./Binary_Property/Pattern_Syntax.js":431,"./Binary_Property/Pattern_White_Space.js":432,"./Binary_Property/Quotation_Mark.js":433,"./Binary_Property/Radical.js":434,"./Binary_Property/Regional_Indicator.js":435,"./Binary_Property/Sentence_Terminal.js":436,"./Binary_Property/Soft_Dotted.js":437,"./Binary_Property/Terminal_Punctuation.js":438,"./Binary_Property/Unified_Ideograph.js":439,"./Binary_Property/Uppercase.js":440,"./Binary_Property/Variation_Selector.js":441,"./Binary_Property/White_Space.js":442,"./Binary_Property/XID_Continue.js":443,"./Binary_Property/XID_Start.js":444,"./General_Category/Cased_Letter.js":445,"./General_Category/Close_Punctuation.js":446,"./General_Category/Connector_Punctuation.js":447,"./General_Category/Control.js":448,"./General_Category/Currency_Symbol.js":449,"./General_Category/Dash_Punctuation.js":450,"./General_Category/Decimal_Number.js":451,"./General_Category/Enclosing_Mark.js":452,"./General_Category/Final_Punctuation.js":453,"./General_Category/Format.js":454,"./General_Category/Initial_Punctuation.js":455,"./General_Category/Letter.js":456,"./General_Category/Letter_Number.js":457,"./General_Category/Line_Separator.js":458,"./General_Category/Lowercase_Letter.js":459,"./General_Category/Mark.js":460,"./General_Category/Math_Symbol.js":461,"./General_Category/Modifier_Letter.js":462,"./General_Category/Modifier_Symbol.js":463,"./General_Category/Nonspacing_Mark.js":464,"./General_Category/Number.js":465,"./General_Category/Open_Punctuation.js":466,"./General_Category/Other.js":467,"./General_Category/Other_Letter.js":468,"./General_Category/Other_Number.js":469,"./General_Category/Other_Punctuation.js":470,"./General_Category/Other_Symbol.js":471,"./General_Category/Paragraph_Separator.js":472,"./General_Category/Private_Use.js":473,"./General_Category/Punctuation.js":474,"./General_Category/Separator.js":475,"./General_Category/Space_Separator.js":476,"./General_Category/Spacing_Mark.js":477,"./General_Category/Surrogate.js":478,"./General_Category/Symbol.js":479,"./General_Category/Titlecase_Letter.js":480,"./General_Category/Unassigned.js":481,"./General_Category/Uppercase_Letter.js":482,"./Script/Adlam.js":483,"./Script/Ahom.js":484,"./Script/Anatolian_Hieroglyphs.js":485,"./Script/Arabic.js":486,"./Script/Armenian.js":487,"./Script/Avestan.js":488,"./Script/Balinese.js":489,"./Script/Bamum.js":490,"./Script/Bassa_Vah.js":491,"./Script/Batak.js":492,"./Script/Bengali.js":493,"./Script/Bhaiksuki.js":494,"./Script/Bopomofo.js":495,"./Script/Brahmi.js":496,"./Script/Braille.js":497,"./Script/Buginese.js":498,"./Script/Buhid.js":499,"./Script/Canadian_Aboriginal.js":500,"./Script/Carian.js":501,"./Script/Caucasian_Albanian.js":502,"./Script/Chakma.js":503,"./Script/Cham.js":504,"./Script/Cherokee.js":505,"./Script/Common.js":506,"./Script/Coptic.js":507,"./Script/Cuneiform.js":508,"./Script/Cypriot.js":509,"./Script/Cyrillic.js":510,"./Script/Deseret.js":511,"./Script/Devanagari.js":512,"./Script/Dogra.js":513,"./Script/Duployan.js":514,"./Script/Egyptian_Hieroglyphs.js":515,"./Script/Elbasan.js":516,"./Script/Elymaic.js":517,"./Script/Ethiopic.js":518,"./Script/Georgian.js":519,"./Script/Glagolitic.js":520,"./Script/Gothic.js":521,"./Script/Grantha.js":522,"./Script/Greek.js":523,"./Script/Gujarati.js":524,"./Script/Gunjala_Gondi.js":525,"./Script/Gurmukhi.js":526,"./Script/Han.js":527,"./Script/Hangul.js":528,"./Script/Hanifi_Rohingya.js":529,"./Script/Hanunoo.js":530,"./Script/Hatran.js":531,"./Script/Hebrew.js":532,"./Script/Hiragana.js":533,"./Script/Imperial_Aramaic.js":534,"./Script/Inherited.js":535,"./Script/Inscriptional_Pahlavi.js":536,"./Script/Inscriptional_Parthian.js":537,"./Script/Javanese.js":538,"./Script/Kaithi.js":539,"./Script/Kannada.js":540,"./Script/Katakana.js":541,"./Script/Kayah_Li.js":542,"./Script/Kharoshthi.js":543,"./Script/Khmer.js":544,"./Script/Khojki.js":545,"./Script/Khudawadi.js":546,"./Script/Lao.js":547,"./Script/Latin.js":548,"./Script/Lepcha.js":549,"./Script/Limbu.js":550,"./Script/Linear_A.js":551,"./Script/Linear_B.js":552,"./Script/Lisu.js":553,"./Script/Lycian.js":554,"./Script/Lydian.js":555,"./Script/Mahajani.js":556,"./Script/Makasar.js":557,"./Script/Malayalam.js":558,"./Script/Mandaic.js":559,"./Script/Manichaean.js":560,"./Script/Marchen.js":561,"./Script/Masaram_Gondi.js":562,"./Script/Medefaidrin.js":563,"./Script/Meetei_Mayek.js":564,"./Script/Mende_Kikakui.js":565,"./Script/Meroitic_Cursive.js":566,"./Script/Meroitic_Hieroglyphs.js":567,"./Script/Miao.js":568,"./Script/Modi.js":569,"./Script/Mongolian.js":570,"./Script/Mro.js":571,"./Script/Multani.js":572,"./Script/Myanmar.js":573,"./Script/Nabataean.js":574,"./Script/Nandinagari.js":575,"./Script/New_Tai_Lue.js":576,"./Script/Newa.js":577,"./Script/Nko.js":578,"./Script/Nushu.js":579,"./Script/Nyiakeng_Puachue_Hmong.js":580,"./Script/Ogham.js":581,"./Script/Ol_Chiki.js":582,"./Script/Old_Hungarian.js":583,"./Script/Old_Italic.js":584,"./Script/Old_North_Arabian.js":585,"./Script/Old_Permic.js":586,"./Script/Old_Persian.js":587,"./Script/Old_Sogdian.js":588,"./Script/Old_South_Arabian.js":589,"./Script/Old_Turkic.js":590,"./Script/Oriya.js":591,"./Script/Osage.js":592,"./Script/Osmanya.js":593,"./Script/Pahawh_Hmong.js":594,"./Script/Palmyrene.js":595,"./Script/Pau_Cin_Hau.js":596,"./Script/Phags_Pa.js":597,"./Script/Phoenician.js":598,"./Script/Psalter_Pahlavi.js":599,"./Script/Rejang.js":600,"./Script/Runic.js":601,"./Script/Samaritan.js":602,"./Script/Saurashtra.js":603,"./Script/Sharada.js":604,"./Script/Shavian.js":605,"./Script/Siddham.js":606,"./Script/SignWriting.js":607,"./Script/Sinhala.js":608,"./Script/Sogdian.js":609,"./Script/Sora_Sompeng.js":610,"./Script/Soyombo.js":611,"./Script/Sundanese.js":612,"./Script/Syloti_Nagri.js":613,"./Script/Syriac.js":614,"./Script/Tagalog.js":615,"./Script/Tagbanwa.js":616,"./Script/Tai_Le.js":617,"./Script/Tai_Tham.js":618,"./Script/Tai_Viet.js":619,"./Script/Takri.js":620,"./Script/Tamil.js":621,"./Script/Tangut.js":622,"./Script/Telugu.js":623,"./Script/Thaana.js":624,"./Script/Thai.js":625,"./Script/Tibetan.js":626,"./Script/Tifinagh.js":627,"./Script/Tirhuta.js":628,"./Script/Ugaritic.js":629,"./Script/Vai.js":630,"./Script/Wancho.js":631,"./Script/Warang_Citi.js":632,"./Script/Yi.js":633,"./Script/Zanabazar_Square.js":634,"./Script_Extensions/Adlam.js":635,"./Script_Extensions/Ahom.js":636,"./Script_Extensions/Anatolian_Hieroglyphs.js":637,"./Script_Extensions/Arabic.js":638,"./Script_Extensions/Armenian.js":639,"./Script_Extensions/Avestan.js":640,"./Script_Extensions/Balinese.js":641,"./Script_Extensions/Bamum.js":642,"./Script_Extensions/Bassa_Vah.js":643,"./Script_Extensions/Batak.js":644,"./Script_Extensions/Bengali.js":645,"./Script_Extensions/Bhaiksuki.js":646,"./Script_Extensions/Bopomofo.js":647,"./Script_Extensions/Brahmi.js":648,"./Script_Extensions/Braille.js":649,"./Script_Extensions/Buginese.js":650,"./Script_Extensions/Buhid.js":651,"./Script_Extensions/Canadian_Aboriginal.js":652,"./Script_Extensions/Carian.js":653,"./Script_Extensions/Caucasian_Albanian.js":654,"./Script_Extensions/Chakma.js":655,"./Script_Extensions/Cham.js":656,"./Script_Extensions/Cherokee.js":657,"./Script_Extensions/Common.js":658,"./Script_Extensions/Coptic.js":659,"./Script_Extensions/Cuneiform.js":660,"./Script_Extensions/Cypriot.js":661,"./Script_Extensions/Cyrillic.js":662,"./Script_Extensions/Deseret.js":663,"./Script_Extensions/Devanagari.js":664,"./Script_Extensions/Dogra.js":665,"./Script_Extensions/Duployan.js":666,"./Script_Extensions/Egyptian_Hieroglyphs.js":667,"./Script_Extensions/Elbasan.js":668,"./Script_Extensions/Elymaic.js":669,"./Script_Extensions/Ethiopic.js":670,"./Script_Extensions/Georgian.js":671,"./Script_Extensions/Glagolitic.js":672,"./Script_Extensions/Gothic.js":673,"./Script_Extensions/Grantha.js":674,"./Script_Extensions/Greek.js":675,"./Script_Extensions/Gujarati.js":676,"./Script_Extensions/Gunjala_Gondi.js":677,"./Script_Extensions/Gurmukhi.js":678,"./Script_Extensions/Han.js":679,"./Script_Extensions/Hangul.js":680,"./Script_Extensions/Hanifi_Rohingya.js":681,"./Script_Extensions/Hanunoo.js":682,"./Script_Extensions/Hatran.js":683,"./Script_Extensions/Hebrew.js":684,"./Script_Extensions/Hiragana.js":685,"./Script_Extensions/Imperial_Aramaic.js":686,"./Script_Extensions/Inherited.js":687,"./Script_Extensions/Inscriptional_Pahlavi.js":688,"./Script_Extensions/Inscriptional_Parthian.js":689,"./Script_Extensions/Javanese.js":690,"./Script_Extensions/Kaithi.js":691,"./Script_Extensions/Kannada.js":692,"./Script_Extensions/Katakana.js":693,"./Script_Extensions/Kayah_Li.js":694,"./Script_Extensions/Kharoshthi.js":695,"./Script_Extensions/Khmer.js":696,"./Script_Extensions/Khojki.js":697,"./Script_Extensions/Khudawadi.js":698,"./Script_Extensions/Lao.js":699,"./Script_Extensions/Latin.js":700,"./Script_Extensions/Lepcha.js":701,"./Script_Extensions/Limbu.js":702,"./Script_Extensions/Linear_A.js":703,"./Script_Extensions/Linear_B.js":704,"./Script_Extensions/Lisu.js":705,"./Script_Extensions/Lycian.js":706,"./Script_Extensions/Lydian.js":707,"./Script_Extensions/Mahajani.js":708,"./Script_Extensions/Makasar.js":709,"./Script_Extensions/Malayalam.js":710,"./Script_Extensions/Mandaic.js":711,"./Script_Extensions/Manichaean.js":712,"./Script_Extensions/Marchen.js":713,"./Script_Extensions/Masaram_Gondi.js":714,"./Script_Extensions/Medefaidrin.js":715,"./Script_Extensions/Meetei_Mayek.js":716,"./Script_Extensions/Mende_Kikakui.js":717,"./Script_Extensions/Meroitic_Cursive.js":718,"./Script_Extensions/Meroitic_Hieroglyphs.js":719,"./Script_Extensions/Miao.js":720,"./Script_Extensions/Modi.js":721,"./Script_Extensions/Mongolian.js":722,"./Script_Extensions/Mro.js":723,"./Script_Extensions/Multani.js":724,"./Script_Extensions/Myanmar.js":725,"./Script_Extensions/Nabataean.js":726,"./Script_Extensions/Nandinagari.js":727,"./Script_Extensions/New_Tai_Lue.js":728,"./Script_Extensions/Newa.js":729,"./Script_Extensions/Nko.js":730,"./Script_Extensions/Nushu.js":731,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":732,"./Script_Extensions/Ogham.js":733,"./Script_Extensions/Ol_Chiki.js":734,"./Script_Extensions/Old_Hungarian.js":735,"./Script_Extensions/Old_Italic.js":736,"./Script_Extensions/Old_North_Arabian.js":737,"./Script_Extensions/Old_Permic.js":738,"./Script_Extensions/Old_Persian.js":739,"./Script_Extensions/Old_Sogdian.js":740,"./Script_Extensions/Old_South_Arabian.js":741,"./Script_Extensions/Old_Turkic.js":742,"./Script_Extensions/Oriya.js":743,"./Script_Extensions/Osage.js":744,"./Script_Extensions/Osmanya.js":745,"./Script_Extensions/Pahawh_Hmong.js":746,"./Script_Extensions/Palmyrene.js":747,"./Script_Extensions/Pau_Cin_Hau.js":748,"./Script_Extensions/Phags_Pa.js":749,"./Script_Extensions/Phoenician.js":750,"./Script_Extensions/Psalter_Pahlavi.js":751,"./Script_Extensions/Rejang.js":752,"./Script_Extensions/Runic.js":753,"./Script_Extensions/Samaritan.js":754,"./Script_Extensions/Saurashtra.js":755,"./Script_Extensions/Sharada.js":756,"./Script_Extensions/Shavian.js":757,"./Script_Extensions/Siddham.js":758,"./Script_Extensions/SignWriting.js":759,"./Script_Extensions/Sinhala.js":760,"./Script_Extensions/Sogdian.js":761,"./Script_Extensions/Sora_Sompeng.js":762,"./Script_Extensions/Soyombo.js":763,"./Script_Extensions/Sundanese.js":764,"./Script_Extensions/Syloti_Nagri.js":765,"./Script_Extensions/Syriac.js":766,"./Script_Extensions/Tagalog.js":767,"./Script_Extensions/Tagbanwa.js":768,"./Script_Extensions/Tai_Le.js":769,"./Script_Extensions/Tai_Tham.js":770,"./Script_Extensions/Tai_Viet.js":771,"./Script_Extensions/Takri.js":772,"./Script_Extensions/Tamil.js":773,"./Script_Extensions/Tangut.js":774,"./Script_Extensions/Telugu.js":775,"./Script_Extensions/Thaana.js":776,"./Script_Extensions/Thai.js":777,"./Script_Extensions/Tibetan.js":778,"./Script_Extensions/Tifinagh.js":779,"./Script_Extensions/Tirhuta.js":780,"./Script_Extensions/Ugaritic.js":781,"./Script_Extensions/Vai.js":782,"./Script_Extensions/Wancho.js":783,"./Script_Extensions/Warang_Citi.js":784,"./Script_Extensions/Yi.js":785,"./Script_Extensions/Zanabazar_Square.js":786,"./index.js":787,"./unicode-version.js":788};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id=391},40:function(e,t,i){"use strict";i.r(t);var r=i(2),n=i.n(r);i(91),i(810),t.default=function(e){var t=e.children,i=e.title,r=e.onClick;return n.a.createElement("button",{"aria-label":i,className:"Emoji",title:i,role:"img",onClick:r},t)}},810:function(e,t,i){},811:function(e,t,i){e.exports={description:"",displayName:"Emoji",methods:[],props:[{type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!0,description:"Specific emoji for display.",tags:{},name:"children"},{type:{name:"func"},required:!0,description:"",tags:{},name:"onClick"},{type:{name:"string"},required:!0,description:"For button a11y label & title.",tags:{},name:"title"}],doclets:{},examples:i(812)}},812:function(e,t,i){var r={react:i(2),"./index.js":i(40)},n=i(92).default.bind(null,r),s=i(93).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Emoji$0 = require('./index.js');\nconst Emoji = Emoji$0['Emoji'] || (Emoji$0.default || Emoji$0);",n);e.exports=[{type:"markdown",content:"responsible for displaying emoji in a button element."},{type:"code",content:'<Emoji title="raise_hands" onClick={() => alert("Example onClick an Emoji")}>\n  \ud83d\ude4c\n</Emoji>',settings:{},evalInContext:s}]},815:function(e,t,i){},816:function(e,t,i){},817:function(e,t,i){},818:function(e,t,i){e.exports={description:"",displayName:"EmojiPicker",methods:[],props:[{type:{name:"func"},required:!0,description:"returns the value of a selected emoji.",tags:{},name:"onEmojiPick"},{type:{name:"objectOf",value:{name:"arrayOf",value:{name:"shape",value:{category:{name:"string",required:!0},char:{name:"string",required:!0},fitzpatrick_scale:{name:"bool",required:!0},key:{name:"string",required:!1},keywords:{name:"arrayOf",value:{name:"string"},required:!0}}}}},required:!1,description:"emojies group by their respective emoji category.\nBy default, it pulls emojies at [emojib](https://github.com/muan/emojilib)\n\n```\n{\n\tpeople: [{char: \ud83d\ude03, ... }, ...],\n\tobjects: [{char: \u231a\ufe0f, ... }, ...],\n\t...\n}\n```",defaultValue:{value:"ordered.reduce((acc, key) => {\n  const currentEmojiObj = { ...lib[key], key };\n  const category = currentEmojiObj.category;\n  const categoryEmojis = acc[category];\n  return {\n    ...acc,\n    [category]: categoryEmojis ? [...categoryEmojis, currentEmojiObj] : []\n  };\n}, {})",computed:!0},tags:{},name:"emojis"},{type:{name:"string"},required:!1,description:"field placeholder text.",defaultValue:{value:'"\ud83d\udd0e Search emoji..."',computed:!1},tags:{},name:"inputPlaceholder"},{type:{name:"func"},required:!1,description:"returns the emojies search result when user is typing words on SearchBar.\nTyping `'hello'` on SearchBar will return `['wave']`.",defaultValue:{value:"function() {}",computed:!1},tags:{},name:"onFieldSearch"},{type:{name:"func"},required:!1,description:"scrolls to current emoji collection top position.\n\n**NOTE:** To modify this function, please refer on it's default function first\n\t\t and start modify from there on.",defaultValue:{value:"function(emojiContent, navRef) {\n  return e => {\n    e.preventDefault();\n    emojiContent.current.scrollTop = navRef.current.offsetTop;\n  };\n}",computed:!1},tags:{},name:"onNavigateClick"},{type:{name:"string"},required:!1,description:"initial value for search bar field.",defaultValue:{value:'""',computed:!1},tags:{},name:"searchText"}],doclets:{},examples:i(819)}},819:function(e,t,i){var r={react:i(2),"./index.js":i(132)},n=i(92).default.bind(null,r),s=i(93).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst EmojiPicker$0 = require('./index.js');\nconst EmojiPicker = EmojiPicker$0['EmojiPicker'] || (EmojiPicker$0.default || EmojiPicker$0);",n);e.exports=[{type:"markdown",content:"main component that renders every components that built EmojiPicker"},{type:"code",content:"<EmojiPicker\n  onEmojiPick={emoji =>\n    alert(\n      `Example Emoji result: ${\n        emoji.char\n      } & stringify result: \\n${JSON.stringify(emoji)}`\n    )\n  }\n/>",settings:{},evalInContext:s}]},820:function(e,t,i){e.exports={description:"",displayName:"Emojis",methods:[],props:[{type:{name:"objectOf",value:{name:"arrayOf",value:{name:"shape",value:{category:{name:"string",required:!0},char:{name:"string",required:!0},fitzpatrick_scale:{name:"bool",required:!0},key:{name:"string",required:!1},keywords:{name:"arrayOf",value:{name:"string"},required:!0}}}}},required:!0,description:"emojies group by their respective emoji category.\nRecommended to use [emojib](https://github.com/muan/emojilib) in this\ncomponent.\n\n```\n{\n\tpeople: [{char: \ud83d\ude03, ... }, ...],\n\tobjects: [{char: \u231a\ufe0f, ... }, ...],\n\t...\n}\n```",tags:{},name:"emojis"},{type:{name:"func"},required:!0,description:"returns the value of a selected emoji.",tags:{},name:"onEmojiPick"},{type:{name:"objectOf",value:{name:"object"}},required:!1,description:"",defaultValue:{value:"{}",computed:!1},tags:{},name:"navRefs"},{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:"consists of emoji keys and this will display `Search Result`",defaultValue:{value:"[]",computed:!1},tags:{},name:"results"}],doclets:{},examples:i(821)}},821:function(e,t,i){var r={"../EmojiPicker":i(132),react:i(2),"./index.js":i(94)},n=i(92).default.bind(null,r),s=i(93).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Emojis$0 = require('./index.js');\nconst Emojis = Emojis$0['Emojis'] || (Emojis$0.default || Emojis$0);",n);e.exports=[{type:"markdown",content:"Lists down set of emojis"},{type:"code",content:'import { defaultProps } from "../EmojiPicker";\n\n<div style={{ overflow: "scroll", height: "20em" }}>\n  <Emojis\n    emojis={defaultProps.emojis}\n    results={[]}\n    onEmojiPick={emoji =>\n      alert(\n        `Example Emoji result: ${\n          emoji.char\n        } & stringify result: \\n${JSON.stringify(emoji)}`\n      )\n    }\n  />\n</div>;',settings:{},evalInContext:s}]},822:function(e,t,i){e.exports={description:"",displayName:"SearchBar",methods:[],props:[{type:{name:"shape",value:{current:{name:"object",required:!1}}},required:!0,description:"reference on a element for scrollTop condition.",tags:{},name:"emojiContent"},{type:{name:"string"},required:!0,description:"field placeholder text.",tags:{},name:"inputPlaceholder"},{type:{name:"func"},required:!0,description:"returns the emojies search result when user is typing words on SearchBar.\nTyping `'hello'` on SearchBar will return `['wave']`.",tags:{},name:"onFieldSearch"},{type:{name:"func"},required:!0,description:"new `value` being passed on input field when user enters a key.",tags:{},name:"setInput"},{type:{name:"func"},required:!0,description:"new `results` being passed here.",tags:{},name:"setResults"},{type:{name:"bool"},required:!1,description:"Force this element to focus after mount.",defaultValue:{value:"false",computed:!1},tags:{},name:"autoFocus"},{type:{name:"string"},required:!1,description:"value reflects on SearchBar's input element.",defaultValue:{value:'""',computed:!1},tags:{},name:"input"}],doclets:{},examples:i(823)}},823:function(e,t,i){var r={react:i(2),"./index.js":i(95)},n=i(92).default.bind(null,r),s=i(93).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst SearchBar$0 = require('./index.js');\nconst SearchBar = SearchBar$0['SearchBar'] || (SearchBar$0.default || SearchBar$0);",n);e.exports=[{type:"markdown",content:"searches emoji respect to input value."},{type:"code",content:'<SearchBar\n  input=""\n  emojiContent={{ current: {} }} /* use ref here */\n  onFieldSearch={() => {}}\n  setInput={() => {}}\n  setResults={() => {}}\n  inputPlaceholder="\ud83d\udd0e Search emoji..."\n/>',settings:{},evalInContext:s}]},91:function(e,t,i){},94:function(e,t,i){"use strict";i.r(t);var r=i(42),n=i(2),s=i.n(n),a=i(41),o=i(40);function c(e){var t=e.emojis,i=e.navRefs,n=e.onEmojiPick,c=e.results;function p(e){return function(t){t.preventDefault(),t.stopPropagation(),n(e)}}return s.a.createElement("div",{className:"Emojis"},c.length?s.a.createElement("dl",{className:"category"},s.a.createElement("dt",{className:"title",id:"emoji_search_results"},"Search Results"),s.a.createElement("dd",{className:"collection"},c.map((function(e){var t=a.lib[e];return s.a.createElement(o.default,{key:e,onClick:p(t),title:e},t.char)})))):null,Object.entries(t).map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return s.a.createElement("dl",{ref:i[n],key:n,className:"category",id:"content_".concat(n)},s.a.createElement("dt",{className:"title"},n.replace(/_/g," ")),s.a.createElement("dd",{className:"collection"},a.map((function(e){var t=e.key,i=e.char;return s.a.createElement(o.default,{key:t,title:t,onClick:p(e)},i)}))))})))}i(91),i(816),c.defaultProps={navRefs:{},results:[]},t.default=c},95:function(e,t,i){"use strict";i.r(t);var r=i(2),n=i.n(r),s=i(42),a=i(41),o=function(e){var t=e.emojiContent,i=e.onFieldSearch,r=e.setInput,n=e.setResults;return function(e){var o=e.target.value,c=o.split(" "),p=Object.entries(a.lib).filter((function(e){var t=Object(s.a)(e,2),i=(t[0],t[1].keywords);return c.find((function(e){return i.includes(e.toLowerCase())}))})).map((function(e){return e[0]}));if(p.length){var j=t.current;j.scrollTop&&j.scrollTo(0,0)}i(p),r(o),n(p)}};function c(e){var t=e.autoFocus,i=e.input,r=e.inputPlaceholder,s=e.emojiContent,a=e.onFieldSearch,c=e.setInput,p=e.setResults;return n.a.createElement("div",{className:"SearchBar"},n.a.createElement("input",{autoFocus:t,className:"input",onChange:o({emojiContent:s,onFieldSearch:a,setInput:c,setResults:p}),placeholder:r,type:"text",value:i}))}i(91),i(815),c.defaultProps={autoFocus:!1,input:""},t.default=c}},[[214,1,2]]]);