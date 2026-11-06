const websites = {
   courseRegistration: {
    title: "Course Registration",
    links: [
            ["Course Catalog", "https://esquery.tku.edu.tw/acad/default.asp?func=eng"],
            ["Course Selection System", "https://www.ais.tku.edu.tw/EleCos_English/loginE.aspx"],
            ["General Course Regitraion System", "https://www.ais.tku.edu.tw/COS_LOT/Home/IndexE"],
            ["Extra Course Website", "https://www.ais.tku.edu.tw/RPT_ELE?lang=en-US"]
        
    ]
   },
    uniLife: {
        title: "Uni Life",
        links: [
            ["Club", "https://lpcs.tku.edu.tw/LPCS/fc_news/fc_news_all.aspx?mode=none"],
            ["Leave Application", "https://leave.sis.tku.edu.tw/"]
        ]
    },

    government: {
        title: "Government",
        links: [
            ["ARC Application", "https://coa.immigration.gov.tw/coa-frontend/student/entry"],
            ["Work Permit", "https://ezwp.wda.gov.tw/wcfonline/wSite/Control?function=IndexPage"]
        ]
    },

    credit: {
        title: "Credit",
        links: [
            ["Administration System", "http://sinfo.ais.tku.edu.tw/eMis/"],
            ["About Credit", "https://esquery.tku.edu.tw/acad/content/data/1.html"]
        ]
    }, 

    transportation: {
        title: "Transportation",
        links: [
            ["Bus R27 Live Bus Info", "https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0411002700&gb=0"],
            ["Bus R28 Live Bus Info", "https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0411002800&gb=1"],
            ["Bus 756 Live Bus Info", "https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0100075600&gb=0"],
            ["MRT Tamsui Station", "https://web.metro.taipei/img/ALL/timetables/071b.pdf", "https://ericyu.org/TaipeiMetroTime/lines/R-b-1,2,3,4,5.html"],
            ["LRT TKU station", "https://www.ntmetro.com.tw/basic/?mode=detail&node=457"],
            ["LRT 淡金北新 station", "https://www.ntmetro.com.tw/basic/?mode=detail&node=456"]

        ]
    },

   uniFacilities: {
    title: "Uni Facilities",
    links: [
        ["Meeting Room Reservation", "https://info.lib.tku.edu.tw/room_en.asp"],
        ["Gym&Pool Info", "https://www.sports.tku.edu.tw/shao-mo-swimming-pool/"]
    ]
   }
}

function openCard(category) {
    const data = websites[category];

    document.getElementById("cardTitle").textContent = data.title;

    document.getElementById("links").innerHTML = "";

    data.links.forEach(([name, url]) => {
        const link = document.createElement("a");

        link.textContent = name + " ↗";
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        document.getElementById("links").appendChild(link);
    });

    document.getElementById("card").showModal();
}