(function(imports){
  let d=[{option_id:"AF",option_value:"AFGHANISTAN"},{option_id:"AL",option_value:"ALBANIA"},{option_id:"DZ",option_value:"ALGERIA"},{option_id:"AS",option_value:"AMERICAN SAMOA"},{option_id:"AD",option_value:"ANDORRA"},{option_id:"AO",option_value:"ANGOLA"},{option_id:"AI",option_value:"ANGUILLA"},{option_id:"AQ",option_value:"ANTARCTICA"},{option_id:"AG",option_value:"ANTIGUA AND BARBUDA"},{option_id:"AR",option_value:"ARGENTINA"},{option_id:"AM",option_value:"ARMENIA"},{option_id:"AW",option_value:"ARUBA"},{option_id:"AU",option_value:"AUSTRALIA"},{option_id:"AT",option_value:"AUSTRIA"},{option_id:"AZ",option_value:"AZERBAIJAN"},{option_id:"BS",option_value:"BAHAMAS"},{option_id:"BH",option_value:"BAHRAIN"},{option_id:"BD",option_value:"BANGLADESH"},{option_id:"BB",option_value:"BARBADOS"},{option_id:"BY",option_value:"BELARUS"},{option_id:"BE",option_value:"BELGIUM"},{option_id:"BZ",option_value:"BELIZE"},{option_id:"BJ",option_value:"BENIN"},{option_id:"BM",option_value:"BERMUDA"},{option_id:"BT",option_value:"BHUTAN"},{option_id:"BO",option_value:"BOLIVIA"},{option_id:"BA",option_value:"BOSNIA AND HERZEGOVINA"},{option_id:"BW",option_value:"BOTSWANA"},{option_id:"BR",option_value:"BRAZIL"},{option_id:"BN",option_value:"BRUNEI DARUSSALAM"},{option_id:"BG",option_value:"BULGARIA"},{option_id:"BF",option_value:"BURKINA FASO"},{option_id:"BI",option_value:"BURUNDI"},{option_id:"KH",option_value:"CAMBODIA"},{option_id:"CM",option_value:"CAMEROON"},{option_id:"CA",option_value:"CANADA"},{option_id:"CV",option_value:"CAPE VERDE"},{option_id:"KY",option_value:"CAYMAN ISLANDS"},{option_id:"CF",option_value:"CENTRAL AFRICAN REPUBLIC"},{option_id:"TD",option_value:"CHAD"},{option_id:"CL",option_value:"CHILE"},{option_id:"CN",option_value:"CHINA"},{option_id:"CX",option_value:"CHRISTMAS ISLAND"},{option_id:"CC",option_value:"COCOS (KEELING) ISLANDS"},{option_id:"CO",option_value:"COLOMBIA"},{option_id:"KM",option_value:"COMOROS"},{option_id:"CG",option_value:"CONGO"},{option_id:"CD",option_value:"CONGO, THE DEMOCRATIC REPUBLIC OF THE"},{option_id:"CK",option_value:"COOK ISLANDS"},{option_id:"CR",option_value:"COSTA RICA"},{option_id:"CI",option_value:"COTE D IVOIRE"},{option_id:"HR",option_value:"CROATIA"},{option_id:"CU",option_value:"CUBA"},{option_id:"CY",option_value:"CYPRUS"},{option_id:"CZ",option_value:"CZECH REPUBLIC"},{option_id:"DK",option_value:"DENMARK"},{option_id:"DJ",option_value:"DJIBOUTI"},{option_id:"DM",option_value:"DOMINICA"},{option_id:"DO",option_value:"DOMINICAN REPUBLIC"},{option_id:"EC",option_value:"ECUADOR"},{option_id:"EG",option_value:"EGYPT"},{option_id:"SV",option_value:"EL SALVADOR"},{option_id:"GQ",option_value:"EQUATORIAL GUINEA"},{option_id:"ER",option_value:"ERITREA"},{option_id:"EE",option_value:"ESTONIA"},{option_id:"ET",option_value:"ETHIOPIA"},{option_id:"FK",option_value:"FALKLAND ISLANDS (MALVINAS)"},{option_id:"FO",option_value:"FAROE ISLANDS"},{option_id:"FJ",option_value:"FIJI"},{option_id:"FI",option_value:"FINLAND"},{option_id:"FR",option_value:"FRANCE"},{option_id:"PF",option_value:"FRENCH POLYNESIA"},{option_id:"GA",option_value:"GABON"},{option_id:"GM",option_value:"GAMBIA"},{option_id:"GE",option_value:"GEORGIA"},{option_id:"DE",option_value:"GERMANY"},{option_id:"GH",option_value:"GHANA"},{option_id:"GI",option_value:"GIBRALTAR"},{option_id:"GR",option_value:"GREECE"},{option_id:"GL",option_value:"GREENLAND"},{option_id:"GD",option_value:"GRENADA"},{option_id:"GU",option_value:"GUAM"},{option_id:"GT",option_value:"GUATEMALA"},{option_id:"GN",option_value:"GUINEA"},{option_id:"GW",option_value:"GUINEA-BISSAU"},{option_id:"GY",option_value:"GUYANA"},{option_id:"HT",option_value:"HAITI"},{option_id:"VA",option_value:"HOLY SEE (VATICAN CITY STATE)"},{option_id:"HN",option_value:"HONDURAS"},{option_id:"HK",option_value:"HONG KONG"},{option_id:"HU",option_value:"HUNGARY"},{option_id:"IS",option_value:"ICELAND"},{option_id:"IN",option_value:"INDIA"},{option_id:"ID",option_value:"INDONESIA"},{option_id:"IR",option_value:"IRAN, ISLAMIC REPUBLIC OF"},{option_id:"IQ",option_value:"IRAQ"},{option_id:"IE",option_value:"IRELAND"},{option_id:"IM",option_value:"ISLE OF MAN"},{option_id:"IL",option_value:"ISRAEL"},{option_id:"IT",option_value:"ITALY"},{option_id:"JM",option_value:"JAMAICA"},{option_id:"JP",option_value:"JAPAN"},{option_id:"JO",option_value:"JORDAN"},{option_id:"KZ",option_value:"KAZAKSTAN"},{option_id:"KE",option_value:"KENYA"},{option_id:"KI",option_value:"KIRIBATI"},{option_id:"KP",option_value:"KOREA DEMOCRATIC PEOPLES REPUBLIC OF"},{option_id:"KR",option_value:"KOREA REPUBLIC OF"},{option_id:"XK",option_value:"KOSOVO"},{option_id:"KW",option_value:"KUWAIT"},{option_id:"KG",option_value:"KYRGYZSTAN"},{option_id:"LA",option_value:"LAO PEOPLES DEMOCRATIC REPUBLIC"},{option_id:"LV",option_value:"LATVIA"},{option_id:"LB",option_value:"LEBANON"},{option_id:"LS",option_value:"LESOTHO"},{option_id:"LR",option_value:"LIBERIA"},{option_id:"LY",option_value:"LIBYAN ARAB JAMAHIRIYA"},{option_id:"LI",option_value:"LIECHTENSTEIN"},{option_id:"LT",option_value:"LITHUANIA"},{option_id:"LU",option_value:"LUXEMBOURG"},{option_id:"MO",option_value:"MACAU"},{option_id:"MK",option_value:"MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF"},{option_id:"MG",option_value:"MADAGASCAR"},{option_id:"MW",option_value:"MALAWI"},{option_id:"MY",option_value:"MALAYSIA"},{option_id:"MV",option_value:"MALDIVES"},{option_id:"ML",option_value:"MALI"},{option_id:"MT",option_value:"MALTA"},{option_id:"MH",option_value:"MARSHALL ISLANDS"},{option_id:"MR",option_value:"MAURITANIA"},{option_id:"MU",option_value:"MAURITIUS"},{option_id:"YT",option_value:"MAYOTTE"},{option_id:"MX",option_value:"MEXICO"},{option_id:"FM",option_value:"MICRONESIA, FEDERATED STATES OF"},{option_id:"MD",option_value:"MOLDOVA, REPUBLIC OF"},{option_id:"MC",option_value:"MONACO"},{option_id:"MN",option_value:"MONGOLIA"},{option_id:"ME",option_value:"MONTENEGRO"},{option_id:"MS",option_value:"MONTSERRAT"},{option_id:"MA",option_value:"MOROCCO"},{option_id:"MZ",option_value:"MOZAMBIQUE"},{option_id:"MM",option_value:"MYANMAR"},{option_id:"NA",option_value:"NAMIBIA"},{option_id:"NR",option_value:"NAURU"},{option_id:"NP",option_value:"NEPAL"},{option_id:"NL",option_value:"NETHERLANDS"},{option_id:"AN",option_value:"NETHERLANDS ANTILLES"},{option_id:"NC",option_value:"NEW CALEDONIA"},{option_id:"NZ",option_value:"NEW ZEALAND"},{option_id:"NI",option_value:"NICARAGUA"},{option_id:"NE",option_value:"NIGER"},{option_id:"NG",option_value:"NIGERIA"},{option_id:"NU",option_value:"NIUE"},{option_id:"MP",option_value:"NORTHERN MARIANA ISLANDS"},{option_id:"NO",option_value:"NORWAY"},{option_id:"OM",option_value:"OMAN"},{option_id:"PK",option_value:"PAKISTAN"},{option_id:"PW",option_value:"PALAU"},{option_id:"PA",option_value:"PANAMA"},{option_id:"PG",option_value:"PAPUA NEW GUINEA"},{option_id:"PY",option_value:"PARAGUAY"},{option_id:"PE",option_value:"PERU"},{option_id:"PH",option_value:"PHILIPPINES"},{option_id:"PN",option_value:"PITCAIRN"},{option_id:"PL",option_value:"POLAND"},{option_id:"PT",option_value:"PORTUGAL"},{option_id:"PR",option_value:"PUERTO RICO"},{option_id:"QA",option_value:"QATAR"},{option_id:"RO",option_value:"ROMANIA"},{option_id:"RU",option_value:"RUSSIAN FEDERATION"},{option_id:"RW",option_value:"RWANDA"},{option_id:"BL",option_value:"SAINT BARTHELEMY"},{option_id:"SH",option_value:"SAINT HELENA"},{option_id:"KN",option_value:"SAINT KITTS AND NEVIS"},{option_id:"LC",option_value:"SAINT LUCIA"},{option_id:"MF",option_value:"SAINT MARTIN"},{option_id:"PM",option_value:"SAINT PIERRE AND MIQUELON"},{option_id:"VC",option_value:"SAINT VINCENT AND THE GRENADINES"},{option_id:"WS",option_value:"SAMOA"},{option_id:"SM",option_value:"SAN MARINO"},{option_id:"ST",option_value:"SAO TOME AND PRINCIPE"},{option_id:"SA",option_value:"SAUDI ARABIA"},{option_id:"SN",option_value:"SENEGAL"},{option_id:"RS",option_value:"SERBIA"},{option_id:"SC",option_value:"SEYCHELLES"},{option_id:"SL",option_value:"SIERRA LEONE"},{option_id:"SG",option_value:"SINGAPORE"},{option_id:"SK",option_value:"SLOVAKIA"},{option_id:"SI",option_value:"SLOVENIA"},{option_id:"SB",option_value:"SOLOMON ISLANDS"},{option_id:"SO",option_value:"SOMALIA"},{option_id:"ZA",option_value:"SOUTH AFRICA"},{option_id:"ES",option_value:"SPAIN"},{option_id:"LK",option_value:"SRI LANKA"},{option_id:"SD",option_value:"SUDAN"},{option_id:"SR",option_value:"SURINAME"},{option_id:"SZ",option_value:"SWAZILAND"},{option_id:"SE",option_value:"SWEDEN"},{option_id:"CH",option_value:"SWITZERLAND"},{option_id:"SY",option_value:"SYRIAN ARAB REPUBLIC"},{option_id:"TW",option_value:"TAIWAN, PROVINCE OF CHINA"},{option_id:"TJ",option_value:"TAJIKISTAN"},{option_id:"TZ",option_value:"TANZANIA, UNITED REPUBLIC OF"},{option_id:"TH",option_value:"THAILAND"},{option_id:"TL",option_value:"TIMOR-LESTE"},{option_id:"TG",option_value:"TOGO"},{option_id:"TK",option_value:"TOKELAU"},{option_id:"TO",option_value:"TONGA"},{option_id:"TT",option_value:"TRINIDAD AND TOBAGO"},{option_id:"TN",option_value:"TUNISIA"},{option_id:"TR",option_value:"TURKEY"},{option_id:"TM",option_value:"TURKMENISTAN"},{option_id:"TC",option_value:"TURKS AND CAICOS ISLANDS"},{option_id:"TV",option_value:"TUVALU"},{option_id:"UG",option_value:"UGANDA"},{option_id:"UA",option_value:"UKRAINE"},{option_id:"AE",option_value:"UNITED ARAB EMIRATES"},{option_id:"GB",option_value:"UNITED KINGDOM"},{option_id:"US",option_value:"UNITED STATES"},{option_id:"UY",option_value:"URUGUAY"},{option_id:"UZ",option_value:"UZBEKISTAN"},{option_id:"VU",option_value:"VANUATU"},{option_id:"VE",option_value:"VENEZUELA"},{option_id:"VN",option_value:"VIET NAM"},{option_id:"VG",option_value:"VIRGIN ISLANDS, BRITISH"},{option_id:"VI",option_value:"VIRGIN ISLANDS, U.S."},{option_id:"WF",option_value:"WALLIS AND FUTUNA"},{option_id:"YE",option_value:"YEMEN"},{option_id:"ZM",option_value:"ZAMBIA"},{option_id:"ZW",option_value:"ZIMBABWE"}];

  //Yay, Emoji flags!
  let ccodes = {"AF":{"prefix":"93","flag":"🇦🇫"},"AL":{"prefix":"355","flag":"🇦🇱"},"DZ":{"prefix":"213","flag":"🇩🇿"},"AS":{"prefix":"1-684","flag":"🇦🇸"},"AD":{"prefix":"376","flag":"🇦🇩"},"AO":{"prefix":"244","flag":"🇦🇴"},"AI":{"prefix":"1-264","flag":"🇦🇮"},"AQ":{"prefix":"672","flag":"🇦🇶"},"AG":{"prefix":"1-268","flag":"🇦🇬"},"AR":{"prefix":"54","flag":"🇦🇷"},"AM":{"prefix":"374","flag":"🇦🇲"},"AW":{"prefix":"297","flag":"🇦🇼"},"AU":{"prefix":"61","flag":"🇦🇺"},"AT":{"prefix":"43","flag":"🇦🇹"},"AZ":{"prefix":"994","flag":"🇦🇿"},"BS":{"prefix":"1-242","flag":"🇧🇸"},"BH":{"prefix":"973","flag":"🇧🇭"},"BD":{"prefix":"880","flag":"🇧🇩"},"BB":{"prefix":"1-246","flag":"🇧🇧"},"BY":{"prefix":"375","flag":"🇧🇾"},"BE":{"prefix":"32","flag":"🇧🇪"},"BZ":{"prefix":"501","flag":"🇧🇿"},"BJ":{"prefix":"229","flag":"🇧🇯"},"BM":{"prefix":"1-441","flag":"🇧🇲"},"BT":{"prefix":"975","flag":"🇧🇹"},"BO":{"prefix":"591","flag":"🇧🇴"},"BA":{"prefix":"387","flag":"🇧🇦"},"BW":{"prefix":"267","flag":"🇧🇼"},"BR":{"prefix":"55","flag":"🇧🇷"},"BN":{"prefix":"673","flag":"🇧🇳"},"BG":{"prefix":"359","flag":"🇧🇬"},"BF":{"prefix":"226","flag":"🇧🇫"},"BI":{"prefix":"257","flag":"🇧🇮"},"KH":{"prefix":"855","flag":"🇰🇭"},"CM":{"prefix":"237","flag":"🇨🇲"},"CA":{"prefix":"1","flag":"🇨🇦"},"CV":{"prefix":"238","flag":"🇨🇻"},"KY":{"prefix":"1-345","flag":"🇰🇾"},"CF":{"prefix":"236","flag":"🇨🇫"},"TD":{"prefix":"235","flag":"🇹🇩"},"CL":{"prefix":"56","flag":"🇨🇱"},"CN":{"prefix":"86","flag":"🇨🇳"},"CX":{"prefix":"61","flag":"🇨🇽"},"CC":{"prefix":"61","flag":"🇨🇨"},"CO":{"prefix":"57","flag":"🇨🇴"},"KM":{"prefix":"269","flag":"🇰🇲"},"CG":{"prefix":"242","flag":"🇨🇬"},"CD":{"prefix":"243","flag":"🇨🇩"},"CK":{"prefix":"682","flag":"🇨🇰"},"CR":{"prefix":"506","flag":"🇨🇷"},"CI":{"prefix":"225","flag":"🇨🇮"},"HR":{"prefix":"385","flag":"🇭🇷"},"CU":{"prefix":"53","flag":"🇨🇺"},"CY":{"prefix":"357","flag":"🇨🇾"},"CZ":{"prefix":"420","flag":"🇨🇿"},"DK":{"prefix":"45","flag":"🇩🇰"},"DJ":{"prefix":"253","flag":"🇩🇯"},"DM":{"prefix":"1-767","flag":"🇩🇲"},"DO":{"prefix":"1-809, 1-829, 1-849","flag":"🇩🇴"},"EC":{"prefix":"593","flag":"🇪🇨"},"EG":{"prefix":"20","flag":"🇪🇬"},"SV":{"prefix":"503","flag":"🇸🇻"},"GQ":{"prefix":"240","flag":"🇬🇶"},"ER":{"prefix":"291","flag":"🇪🇷"},"EE":{"prefix":"372","flag":"🇪🇪"},"ET":{"prefix":"251","flag":"🇪🇹"},"FK":{"prefix":"500","flag":"🇫🇰"},"FO":{"prefix":"298","flag":"🇫🇴"},"FJ":{"prefix":"679","flag":"🇫🇯"},"FI":{"prefix":"358","flag":"🇫🇮"},"FR":{"prefix":"33","flag":"🇫🇷"},"PF":{"prefix":"689","flag":"🇵🇫"},"GA":{"prefix":"241","flag":"🇬🇦"},"GM":{"prefix":"220","flag":"🇬🇲"},"GE":{"prefix":"995","flag":"🇬🇪"},"DE":{"prefix":"49","flag":"🇩🇪"},"GH":{"prefix":"233","flag":"🇬🇭"},"GI":{"prefix":"350","flag":"🇬🇮"},"GR":{"prefix":"30","flag":"🇬🇷"},"GL":{"prefix":"299","flag":"🇬🇱"},"GD":{"prefix":"1-473","flag":"🇬🇩"},"GU":{"prefix":"1-671","flag":"🇬🇺"},"GT":{"prefix":"502","flag":"🇬🇹"},"GN":{"prefix":"224","flag":"🇬🇳"},"GW":{"prefix":"245","flag":"🇬🇼"},"GY":{"prefix":"592","flag":"🇬🇾"},"HT":{"prefix":"509","flag":"🇭🇹"},"VA":{"prefix":"379","flag":"🇻🇦"},"HN":{"prefix":"504","flag":"🇭🇳"},"HK":{"prefix":"852","flag":"🇭🇰"},"HU":{"prefix":"36","flag":"🇭🇺"},"IS":{"prefix":"354","flag":"🇮🇸"},"IN":{"prefix":"91","flag":"🇮🇳"},"ID":{"prefix":"62","flag":"🇮🇩"},"IR":{"prefix":"98","flag":"🇮🇷"},"IQ":{"prefix":"964","flag":"🇮🇶"},"IE":{"prefix":"353","flag":"🇮🇪"},"IM":{"prefix":"44-1624","flag":"🇮🇲"},"IL":{"prefix":"972","flag":"🇮🇱"},"IT":{"prefix":"39","flag":"🇮🇹"},"JM":{"prefix":"1-876","flag":"🇯🇲"},"JP":{"prefix":"81","flag":"🇯🇵"},"JO":{"prefix":"962","flag":"🇯🇴"},"KZ":{"prefix":"7","flag":"🇰🇿"},"KE":{"prefix":"254","flag":"🇰🇪"},"KI":{"prefix":"686","flag":"🇰🇮"},"KP":{"prefix":"850","flag":"🇰🇵"},"KR":{"prefix":"82","flag":"🇰🇷"},"XK":{"prefix":"383","flag":"🇽🇰"},"KW":{"prefix":"965","flag":"🇰🇼"},"KG":{"prefix":"996","flag":"🇰🇬"},"LA":{"prefix":"856","flag":"🇱🇦"},"LV":{"prefix":"371","flag":"🇱🇻"},"LB":{"prefix":"961","flag":"🇱🇧"},"LS":{"prefix":"266","flag":"🇱🇸"},"LR":{"prefix":"231","flag":"🇱🇷"},"LY":{"prefix":"218","flag":"🇱🇾"},"LI":{"prefix":"423","flag":"🇱🇮"},"LT":{"prefix":"370","flag":"🇱🇹"},"LU":{"prefix":"352","flag":"🇱🇺"},"MO":{"prefix":"853","flag":"🇲🇴"},"MK":{"prefix":"389","flag":"🇲🇰"},"MG":{"prefix":"261","flag":"🇲🇬"},"MW":{"prefix":"265","flag":"🇲🇼"},"MY":{"prefix":"60","flag":"🇲🇾"},"MV":{"prefix":"960","flag":"🇲🇻"},"ML":{"prefix":"223","flag":"🇲🇱"},"MT":{"prefix":"356","flag":"🇲🇹"},"MH":{"prefix":"692","flag":"🇲🇭"},"MR":{"prefix":"222","flag":"🇲🇷"},"MU":{"prefix":"230","flag":"🇲🇺"},"YT":{"prefix":"262","flag":"🇾🇹"},"MX":{"prefix":"52","flag":"🇲🇽"},"FM":{"prefix":"691","flag":"🇫🇲"},"MD":{"prefix":"373","flag":"🇲🇩"},"MC":{"prefix":"377","flag":"🇲🇨"},"MN":{"prefix":"976","flag":"🇲🇳"},"ME":{"prefix":"382","flag":"🇲🇪"},"MS":{"prefix":"1-664","flag":"🇲🇸"},"MA":{"prefix":"212","flag":"🇲🇦"},"MZ":{"prefix":"258","flag":"🇲🇿"},"MM":{"prefix":"95","flag":"🇲🇲"},"NA":{"prefix":"264","flag":"🇳🇦"},"NR":{"prefix":"674","flag":"🇳🇷"},"NP":{"prefix":"977","flag":"🇳🇵"},"NL":{"prefix":"31","flag":"🇳🇱"},"AN":{"prefix":"599","flag":"🇧🇶"},"NC":{"prefix":"687","flag":"🇳🇨"},"NZ":{"prefix":"64","flag":"🇳🇿"},"NI":{"prefix":"505","flag":"🇳🇮"},"NE":{"prefix":"227","flag":"🇳🇪"},"NG":{"prefix":"234","flag":"🇳🇬"},"NU":{"prefix":"683","flag":"🇳🇺"},"MP":{"prefix":"1-670","flag":"🇲🇵"},"NO":{"prefix":"47","flag":"🇳🇴"},"OM":{"prefix":"968","flag":"🇴🇲"},"PK":{"prefix":"92","flag":"🇵🇰"},"PW":{"prefix":"680","flag":"🇵🇼"},"PA":{"prefix":"507","flag":"🇵🇦"},"PG":{"prefix":"675","flag":"🇵🇬"},"PY":{"prefix":"595","flag":"🇵🇾"},"PE":{"prefix":"51","flag":"🇵🇪"},"PH":{"prefix":"63","flag":"🇵🇭"},"PN":{"prefix":"64","flag":"🇵🇳"},"PL":{"prefix":"48","flag":"🇵🇱"},"PT":{"prefix":"351","flag":"🇵🇹"},"PR":{"prefix":"1-787, 1-939","flag":"🇵🇷"},"QA":{"prefix":"974","flag":"🇶🇦"},"RO":{"prefix":"40","flag":"🇷🇴"},"RU":{"prefix":"7","flag":"🇷🇺"},"RW":{"prefix":"250","flag":"🇷🇼"},"BL":{"prefix":"590","flag":"🇧🇱"},"SH":{"prefix":"290","flag":"🇸🇭"},"KN":{"prefix":"1-869","flag":"🇰🇳"},"LC":{"prefix":"1-758","flag":"🇱🇨"},"MF":{"prefix":"590","flag":"🇲🇫"},"PM":{"prefix":"508","flag":"🇵🇲"},"VC":{"prefix":"1-784","flag":"🇻🇨"},"WS":{"prefix":"685","flag":"🇼🇸"},"SM":{"prefix":"378","flag":"🇸🇲"},"ST":{"prefix":"239","flag":"🇸🇹"},"SA":{"prefix":"966","flag":"🇸🇦"},"SN":{"prefix":"221","flag":"🇸🇳"},"RS":{"prefix":"381","flag":"🇷🇸"},"SC":{"prefix":"248","flag":"🇸🇨"},"SL":{"prefix":"232","flag":"🇸🇱"},"SG":{"prefix":"65","flag":"🇸🇬"},"SK":{"prefix":"421","flag":"🇸🇰"},"SI":{"prefix":"386","flag":"🇸🇮"},"SB":{"prefix":"677","flag":"🇸🇧"},"SO":{"prefix":"252","flag":"🇸🇴"},"ZA":{"prefix":"27","flag":"🇿🇦"},"ES":{"prefix":"34","flag":"🇪🇸"},"LK":{"prefix":"94","flag":"🇱🇰"},"SD":{"prefix":"249","flag":"🇸🇩"},"SR":{"prefix":"597","flag":"🇸🇷"},"SZ":{"prefix":"268","flag":"🇸🇿"},"SE":{"prefix":"46","flag":"🇸🇪"},"CH":{"prefix":"41","flag":"🇨🇭"},"SY":{"prefix":"963","flag":"🇸🇾"},"TW":{"prefix":"886","flag":"🇹🇼"},"TJ":{"prefix":"992","flag":"🇹🇯"},"TZ":{"prefix":"255","flag":"🇹🇿"},"TH":{"prefix":"66","flag":"🇹🇭"},"TL":{"prefix":"670","flag":"🇹🇱"},"TG":{"prefix":"228","flag":"🇹🇬"},"TK":{"prefix":"690","flag":"🇹🇰"},"TO":{"prefix":"676","flag":"🇹🇴"},"TT":{"prefix":"1-868","flag":"🇹🇹"},"TN":{"prefix":"216","flag":"🇹🇳"},"TR":{"prefix":"90","flag":"🇹🇷"},"TM":{"prefix":"993","flag":"🇹🇲"},"TC":{"prefix":"1-649","flag":"🇹🇨"},"TV":{"prefix":"688","flag":"🇹🇻"},"UG":{"prefix":"256","flag":"🇺🇬"},"UA":{"prefix":"380","flag":"🇺🇦"},"AE":{"prefix":"971","flag":"🇦🇪"},"GB":{"prefix":"44","flag":"🇬🇧"},"US":{"prefix":"1","flag":"🇺🇸"},"UY":{"prefix":"598","flag":"🇺🇾"},"UZ":{"prefix":"998","flag":"🇺🇿"},"VU":{"prefix":"678","flag":"🇻🇺"},"VE":{"prefix":"58","flag":"🇻🇪"},"VN":{"prefix":"84","flag":"🇻🇳"},"VG":{"prefix":"1-284","flag":"🇻🇬"},"VI":{"prefix":"1-340","flag":"🇻🇮"},"WF":{"prefix":"681","flag":"🇼🇫"},"YE":{"prefix":"967","flag":"🇾🇪"},"ZM":{"prefix":"260","flag":"🇿🇲"},"ZW":{"prefix":"263","flag":"🇿🇼"}};

    var capitalise_first_char_every_word = function (str){
    let word_arr = str.split(" ");
    let final_str = "";
    for (let i=0; i < word_arr.length; i++){
      final_str += (i > 0 ? " " : "") +  word_arr[i].charAt(0).toLocaleUpperCase()+word_arr[i].slice(1).toLocaleLowerCase();
    }
    return final_str;
  }

  //Write the options into the DOM
  let h=document.getElementById("country");
  for(var b=0;b<d.length;b++){
    let cc = d[b].option_id;
    var e=document.createElement("OPTION");
    e.value = cc;
    e.innerHTML = ccodes[cc]["flag"]+"+"+ccodes[cc]["prefix"]+"&nbsp;&nbsp;"+capitalise_first_char_every_word(d[b].option_value);
    h.appendChild(e)
  }

  //AJAX wrapper function
  var ajax = function (regData, callback){
    var sendString = "";
    for (var prop in regData){
      if (regData.hasOwnProperty(prop)){
        sendString += (sendString == "" ? "" : "&")+prop+"="+encodeURIComponent(regData[prop]);
      }
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://www.neobael.com/api/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function (){
      if (xhr.status === 200) {
        var result = JSON.parse(xhr.responseText);
        callback(result);
      }else{
        //registration failed because of network problems
        callback({"status":"fail", "resp":result});
      }
    }
    xhr.send(sendString);
  };

  //Function to select the dropdown box entry
  var setCountry = function(cc){
    if (!cc)
      return;
    for (let i=0; i < h.length; i++){
      if (cc.toUpperCase() == h[i].value.toUpperCase()){
        h.selectedIndex = i;
        break;
      }
    }
  };

  //Save the internet, query once per device only pls, assume the same every time afterwards
  if (typeof localStorage == "object" && typeof localStorage.getItem == "function" && typeof localStorage.getItem("country_code") == "string"){
    //use the variable from local storage
    setCountry(localStorage.getItem("country_code"));
  }else{
    //hit the API to do the country detection
    ajax({action: "clientgeoip"}, function(res){
      if (res.status=="ok"){
        if (typeof localStorage == "object" && typeof localStorage.setItem == "function")
        localStorage.setItem("country_code", res.geo.country_code);
        setCountry(res.geo.country_code);
      }
    });
  }
})(window["imports"]);
