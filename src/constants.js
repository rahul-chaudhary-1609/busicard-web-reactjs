/**
 * redux constants
 */

//action constants

export const actions={
    LOGGED_IN:"login",
    LOGGED_OUT:"logout",
    SELECT_SUBSCRIPTION:"selectSubscription",
    UPDATE_USER_DATA:"updateUserData"
}



/**
 * API constants
 */

export const baseURL='http://52.203.53.80/api/v1'

export const apiConstants={
    signUp:'/client/signUp',
    verifyOtp:'/client/verifyOtp',
    resendOtp:'/client/resendOtp',
    signIn:'/client/login',
    uploadFile:'/client/uploadFile',
    forgotPassword:'/client/forgotPassword',
    resetPassword:'/client/setNewPassword',
    payment:'/client/payment',
    paymentSuccess:'/client/paymentSuccess',
    getEmployee:'/client/getEmployee',
    addEmployee:'/client/addEmployee',
    editEmployee:'/client/editEmployee',
    deleteEmployee:'/client/deleteEmployee',
    updateProfile:'/client/updateProfile',
}



/**
 * Toast Constants
 */

export const toastType={
    info:1,
    success:2,
    warning:3,
    error:4,
    default:5
}


/**
 * CSS Constants
 */

export const customTheme={
    colors:{
        theme_color_1: "#ffffff",
        theme_color_2: "#0869C8",
        theme_color_3: "#75B9B1",
        theme_color_4: "#000000",
        theme_color_5: "#E9F4FF",
        theme_color_6: "rgba(0,0,0,0.7)",
        theme_color_7: "rgba(0,0,0,0.1)", 
        theme_color_8: "rgba(0,0,0,0.4)", 
    }
}



export const countryList=[
    {code:"AF",value:"Afghanistan"},
    {code:"AX",value:"Aland Islands"},
    {code:"AL",value:"Albania"},
    {code:"DZ",value:"Algeria"},
    {code:"AS",value:"American Samoa"},
    {code:"AD",value:"Andorra"},
    {code:"AO",value:"Angola"},
    {code:"AI",value:"Anguilla"},
    {code:"AQ",value:"Antarctica"},
    {code:"AG",value:"Antigua and Barbuda"},
    {code:"AR",value:"Argentina"},
    {code:"AM",value:"Armenia"},
    {code:"AW",value:"Aruba"},
    {code:"AU",value:"Australia"},
    {code:"AT",value:"Austria"},
    {code:"AZ",value:"Azerbaijan"},
    {code:"BS",value:"Bahamas"},
    {code:"BH",value:"Bahrain"},
    {code:"BD",value:"Bangladesh"},
    {code:"BB",value:"Barbados"},
    {code:"BY",value:"Belarus"},
    {code:"BE",value:"Belgium"},
    {code:"BZ",value:"Belize"},
    {code:"BJ",value:"Benin"},
    {code:"BM",value:"Bermuda"},
    {code:"BT",value:"Bhutan"},
    {code:"BO",value:"Bolivia"},
    {code:"BQ",value:"Bonaire, Sint Eustatius and Saba"},
    {code:"BA",value:"Bosnia and Herzegovina"},
    {code:"BW",value:"Botswana"},
    {code:"BV",value:"Bouvet Island"},
    {code:"BR",value:"Brazil"},
    {code:"IO",value:"British Indian Ocean Territory"},
    {code:"BN",value:"Brunei Darussalam"},
    {code:"BG",value:"Bulgaria"},
    {code:"BF",value:"Burkina Faso"},
    {code:"BI",value:"Burundi"},
    {code:"KH",value:"Cambodia"},
    {code:"CM",value:"Cameroon"},
    {code:"CA",value:"Canada"},
    {code:"CV",value:"Cape Verde"},
    {code:"KY",value:"Cayman Islands"},
    {code:"CF",value:"Central African Republic"},
    {code:"TD",value:"Chad"},
    {code:"CL",value:"Chile"},
    {code:"CN",value:"China"},
    {code:"CX",value:"Christmas Island"},
    {code:"CC",value:"Cocos (Keeling) Islands"},
    {code:"CO",value:"Colombia"},
    {code:"KM",value:"Comoros"},
    {code:"CG",value:"Congo"},
    {code:"CD",value:"Congo, The Democratic Republic of "},
    {code:"CK",value:"Cook Islands"},
    {code:"CR",value:"Costa Rica"},
    {code:"CI",value:"Cote d'Ivoire"},
    {code:"HR",value:"Croatia"},
    {code:"CU",value:"Cuba"},
    {code:"CW",value:"Curaçao"},
    {code:"CY",value:"Cyprus"},
    {code:"CZ",value:"Czechia"},
    {code:"DK",value:"Denmark"},
    {code:"DJ",value:"Djibouti"},
    {code:"DM",value:"Dominica"},
    {code:"DO",value:"Dominican Republic"},
    {code:"EC",value:"Ecuador"},
    {code:"EG",value:"Egypt"},
    {code:"SV",value:"El Salvador"},
    {code:"GQ",value:"Equatorial Guinea"},
    {code:"ER",value:"Eritrea"},
    {code:"EE",value:"Estonia"},
    {code:"ET",value:"Ethiopia"},
    {code:"FK",value:"Falkland Islands (Malvinas)"},
    {code:"FO",value:"Faroe Islands"},
    {code:"FJ",value:"Fiji"},
    {code:"FI",value:"Finland"},
    {code:"FR",value:"France"},
    {code:"GF",value:"French Guiana"},
    {code:"PF",value:"French Polynesia"},
    {code:"TF",value:"French Southern Territories"},
    {code:"GA",value:"Gabon"},
    {code:"GM",value:"Gambia"},
    {code:"GE",value:"Georgia"},
    {code:"DE",value:"Germany"},
    {code:"GH",value:"Ghana"},
    {code:"GI",value:"Gibraltar"},
    {code:"GR",value:"Greece"},
    {code:"GL",value:"Greenland"},
    {code:"GD",value:"Grenada"},
    {code:"GP",value:"Guadeloupe"},
    {code:"GU",value:"Guam"},
    {code:"GT",value:"Guatemala"},
    {code:"GG",value:"Guernsey"},
    {code:"GN",value:"Guinea"},
    {code:"GW",value:"Guinea-Bissau"},
    {code:"GY",value:"Guyana"},
    {code:"HT",value:"Haiti"},
    {code:"HM",value:"Heard and Mc Donald Islands"},
    {code:"VA",value:"Holy See (Vatican City State)"},
    {code:"HN",value:"Honduras"},
    {code:"HK",value:"Hong Kong"},
    {code:"HU",value:"Hungary"},
    {code:"IS",value:"Iceland"},
    {code:"IN",value:"India"},
    {code:"ID",value:"Indonesia"},
    {code:"IR",value:"Iran, Islamic Republic of"},
    {code:"IQ",value:"Iraq"},
    {code:"IE",value:"Ireland"},
    {code:"IM",value:"Isle of Man"},
    {code:"IL",value:"Israel"},
    {code:"IT",value:"Italy"},
    {code:"JM",value:"Jamaica"},
    {code:"JP",value:"Japan"},
    {code:"JE",value:"Jersey"},
    {code:"JO",value:"Jordan"},
    {code:"KZ",value:"Kazakstan"},
    {code:"KE",value:"Kenya"},
    {code:"KI",value:"Kiribati"},
    {code:"KP",value:"Korea, Democratic People's Republic of"},
    {code:"KR",value:"Korea, Republic of"},
    {code:"XK",value:"Kosovo (temporary code)"},
    {code:"KW",value:"Kuwait"},
    {code:"KG",value:"Kyrgyzstan"},
    {code:"LA",value:"Lao, People's Democratic Republic"},
    {code:"LV",value:"Latvia"},
    {code:"LB",value:"Lebanon"},
    {code:"LS",value:"Lesotho"},
    {code:"LR",value:"Liberia"},
    {code:"LY",value:"Libyan Arab Jamahiriya"},
    {code:"LI",value:"Liechtenstein"},
    {code:"LT",value:"Lithuania"},
    {code:"LU",value:"Luxembourg"},
    {code:"MO",value:"Macao"},
    {code:"MK",value:"Macedonia, The Former Yugoslav Republic Of"},
    {code:"MG",value:"Madagascar"},
    {code:"MW",value:"Malawi"},
    {code:"MY",value:"Malaysia"},
    {code:"MV",value:"Maldives"},
    {code:"ML",value:"Mali"},
    {code:"MT",value:"Malta"},
    {code:"MH",value:"Marshall Islands"},
    {code:"MQ",value:"Martinique"},
    {code:"MR",value:"Mauritania"},
    {code:"MU",value:"Mauritius"},
    {code:"YT",value:"Mayotte"},
    {code:"MX",value:"Mexico"},
    {code:"FM",value:"Micronesia, Federated States of"},
    {code:"MD",value:"Moldova, Republic of"},
    {code:"MC",value:"Monaco"},
    {code:"MN",value:"Mongolia"},
    {code:"ME",value:"Montenegro"},
    {code:"MS",value:"Montserrat"},
    {code:"MA",value:"Morocco"},
    {code:"MZ",value:"Mozambique"},
    {code:"MM",value:"Myanmar"},
    {code:"NA",value:"Namibia"},
    {code:"NR",value:"Nauru"},
    {code:"NP",value:"Nepal"},
    {code:"NL",value:"Netherlands"},
    {code:"AN",value:"Netherlands Antilles"},
    {code:"NC",value:"New Caledonia"},
    {code:"NZ",value:"New Zealand"},
    {code:"NI",value:"Nicaragua"},
    {code:"NE",value:"Niger"},
    {code:"NG",value:"Nigeria"},
    {code:"NU",value:"Niue"},
    {code:"NF",value:"Norfolk Island"},
    {code:"MP",value:"Northern Mariana Islands"},
    {code:"NO",value:"Norway"},
    {code:"OM",value:"Oman"},
    {code:"PK",value:"Pakistan"},
    {code:"PW",value:"Palau"},
    {code:"PS",value:"Palestinian Territory, Occupied"},
    {code:"PA",value:"Panama"},
    {code:"PG",value:"Papua New Guinea"},
    {code:"PY",value:"Paraguay"},
    {code:"PE",value:"Peru"},
    {code:"PH",value:"Philippines"},
    {code:"PN",value:"Pitcairn"},
    {code:"PL",value:"Poland"},
    {code:"PT",value:"Portugal"},
    {code:"PR",value:"Puerto Rico"},
    {code:"QA",value:"Qatar"},
    {code:"RS",value:"Republic of Serbia"},
    {code:"RE",value:"Reunion"},
    {code:"RO",value:"Romania"},
    {code:"RU",value:"Russia Federation"},
    {code:"RW",value:"Rwanda"},
    {code:"BL",value:"Saint Barthélemy"},
    {code:"SH",value:"Saint Helena"},
    {code:"KN",value:"Saint Kitts & Nevis"},
    {code:"LC",value:"Saint Lucia"},
    {code:"MF",value:"Saint Martin"},
    {code:"PM",value:"Saint Pierre and Miquelon"},
    {code:"VC",value:"Saint Vincent and the Grenadines"},
    {code:"WS",value:"Samoa"},
    {code:"SM",value:"San Marino"},
    {code:"ST",value:"Sao Tome and Principe"},
    {code:"SA",value:"Saudi Arabia"},
    {code:"SN",value:"Senegal"},
    {code:"CS",value:"Serbia and Montenegro"},
    {code:"SC",value:"Seychelles"},
    {code:"SL",value:"Sierra Leone"},
    {code:"SG",value:"Singapore"},
    {code:"SX",value:"Sint Maarten"},
    {code:"SK",value:"Slovakia"},
    {code:"SI",value:"Slovenia"},
    {code:"SB",value:"Solomon Islands"},
    {code:"SO",value:"Somalia"},
    {code:"ZA",value:"South Africa"},
    {code:"GS",value:"South Georgia & The South Sandwich Islands"},
    {code:"SS",value:"South Sudan"},
    {code:"ES",value:"Spain"},
    {code:"LK",value:"Sri Lanka"},
    {code:"SD",value:"Sudan"},
    {code:"SR",value:"Suriname"},
    {code:"SJ",value:"Svalbard and Jan Mayen"},
    {code:"SZ",value:"Swaziland"},
    {code:"SE",value:"Sweden"},
    {code:"CH",value:"Switzerland"},
    {code:"SY",value:"Syrian Arab Republic"},
    {code:"TW",value:"Taiwan, Province of China"},
    {code:"TJ",value:"Tajikistan"},
    {code:"TZ",value:"Tanzania, United Republic of"},
    {code:"TH",value:"Thailand"},
    {code:"TL",value:"Timor-Leste"},
    {code:"TG",value:"Togo"},
    {code:"TK",value:"Tokelau"},
    {code:"TO",value:"Tonga"},
    {code:"TT",value:"Trinidad and Tobago"},
    {code:"TN",value:"Tunisia"},
    {code:"TR",value:"Turkey"},
    {code:"XT",value:"Turkish Rep N Cyprus (temporary code)"},
    {code:"TM",value:"Turkmenistan"},
    {code:"TC",value:"Turks and Caicos Islands"},
    {code:"TV",value:"Tuvalu"},
    {code:"UG",value:"Uganda"},
    {code:"UA",value:"Ukraine"},
    {code:"AE",value:"United Arab Emirates"},
    {code:"GB",value:"United Kingdom"},
    {code:"US",value:"United States"},
    {code:"UM",value:"United States Minor Outlying Islands"},
    {code:"UY",value:"Uruguay"},
    {code:"UZ",value:"Uzbekistan"},
    {code:"VU",value:"Vanuatu"},
    {code:"VE",value:"Venezuela"},
    {code:"VN",value:"Vietnam"},
    {code:"VG",value:"Virgin Islands, British"},
    {code:"VI",value:"Virgin Islands, U.S."},
    {code:"WF",value:"Wallis and Futuna"},
    {code:"EH",value:"Western Sahara"},
    {code:"YE",value:"Yemen"},
    {code:"ZM",value:"Zambia"},
    {code:"ZW",value:"Zimbabwe"},

]


export const STRIPE_PUBLISH_KEY="pk_live_51IQugbDvURnOPWYXi1vv1afIRm3UqCU6KUnYCWzKVJWkidmqRbe4FCGDnEl58XdmJ2GjqYgXW4OlX16q2HrHq4Yf00Z3BTFXYb"