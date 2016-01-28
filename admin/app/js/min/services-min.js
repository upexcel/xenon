"use strict";angular.module("xenon.services",[]).service("$menuItems",function(){this.menuItems=[];var e=this,a={parent:null,title:"",link:"",state:"",icon:"",isActive:!1,label:null,menuItems:[],setLabel:function(e,a,t){return"undefined"==typeof t&&(t=!0),this.label={text:e,classname:a,collapsedHide:t},this},addItem:function(t,d,s){var n=this,i=angular.extend(angular.copy(a),{parent:n,title:t,link:d,icon:s});return i.link&&(i.link.match(/^\./)&&(i.link=n.link+i.link.substring(1,d.length)),i.link.match(/^-/)&&(i.link=n.link+"-"+i.link.substring(2,d.length)),i.state=e.toStatePath(i.link)),this.menuItems.push(i),i}};this.addItem=function(e,t,d){var s=angular.extend(angular.copy(a),{title:e,link:t,state:this.toStatePath(t),icon:d});return this.menuItems.push(s),s},this.getAll=function(){return this.menuItems},this.prepareSidebarMenu=function(){var e=this.addItem("Dashboard","/app/dashboard","linecons-cog"),a=this.addItem("Layout & Skins","/app/layout-and-skins","linecons-desktop"),t=this.addItem("UI Elements","/app/ui","linecons-note"),d=this.addItem("Widgets","/app/widgets","linecons-star"),s=this.addItem("Mailbox","/app/mailbox","linecons-mail").setLabel("5","secondary",!1),n=this.addItem("Tables","/app/tables","linecons-database"),i=this.addItem("Forms","/app/forms","linecons-params"),m=this.addItem("Extra","/app/extra","linecons-beaker").setLabel("New Items","purple"),o=this.addItem("Charts","/app/charts","linecons-globe"),r=this.addItem("Menu Levels","","linecons-cloud");e.addItem("Dashboard 1","-/variant-1"),e.addItem("Dashboard 2","-/variant-2"),e.addItem("Dashboard 3","-/variant-3"),e.addItem("Dashboard 4","-/variant-4"),e.addItem("Update Hightlights","/app/update-highlights").setLabel("v1.3","pink"),t.addItem("Panels","-/panels"),t.addItem("Buttons","-/buttons"),t.addItem("Tabs & Accordions","-/tabs-accordions"),t.addItem("Modals","-/modals"),t.addItem("Breadcrumbs","-/breadcrumbs"),t.addItem("Blockquotes","-/blockquotes"),t.addItem("Progress Bars","-/progress-bars"),t.addItem("Navbars","-/navbars"),t.addItem("Alerts","-/alerts"),t.addItem("Pagination","-/pagination"),t.addItem("Typography","-/typography"),t.addItem("Other Elements","-/other-elements"),s.addItem("Inbox","-/inbox"),s.addItem("Compose Message","-/compose"),s.addItem("View Message","-/message"),n.addItem("Basic Tables","-/basic"),n.addItem("Responsive Tables","-/responsive"),n.addItem("Data Tables","-/datatables"),i.addItem("Native Elements","-/native"),i.addItem("Advanced Plugins","-/advanced"),i.addItem("Form Wizard","-/wizard"),i.addItem("Form Validation","-/validation"),i.addItem("Input Masks","-/input-masks"),i.addItem("File Upload","-/file-upload"),i.addItem("Editors","-/wysiwyg"),i.addItem("Sliders","-/sliders");var l=m.addItem("Icons","-/icons"),I=m.addItem("Maps","-/maps"),c=m.addItem("Members","-/members").setLabel("New","warning");m.addItem("Gallery","-/gallery"),m.addItem("Calendar","-/calendar"),m.addItem("Profile","-/profile"),m.addItem("Login","/login"),m.addItem("Lockscreen","/lockscreen"),m.addItem("Login Light","/login-light"),m.addItem("Timeline","-/timeline"),m.addItem("Timeline Centered","-/timeline-centered"),m.addItem("Notes","-/notes"),m.addItem("Image Crop","-/image-crop"),m.addItem("Portlets","-/portlets"),m.addItem("Blank Page","-/blank-page"),m.addItem("Search","-/search"),m.addItem("Invoice","-/invoice"),m.addItem("404 Page","-/page-404"),m.addItem("Tocify","-/tocify"),m.addItem("Loading Progress","-/loading-progress"),m.addItem("Notifications","-/notifications"),m.addItem("Nestable Lists","-/nestable-lists"),m.addItem("Scrollable","-/scrollable"),l.addItem("Font Awesome","-/font-awesome"),l.addItem("Linecons","-/linecons"),l.addItem("Elusive","-/elusive"),l.addItem("Meteocons","-/meteocons"),I.addItem("Google Maps","-/google"),I.addItem("Advanced Map","-/advanced"),I.addItem("Vector Map","-/vector"),c.addItem("Members List","-/list"),c.addItem("Add Member","-/add"),o.addItem("Chart Variants","-/variants"),o.addItem("Range Selector","-/range-selector"),o.addItem("Sparklines","-/sparklines"),o.addItem("Map Charts","-/map-charts"),o.addItem("Circular Gauges","-/gauges"),o.addItem("Bar Gauges","-/bar-gauges");var p=r.addItem("Menu Item 1.1");r.addItem("Menu Item 1.2"),r.addItem("Menu Item 1.3"),p.addItem("Menu Item 2.1");var u=p.addItem("Menu Item 2.2");return p.addItem("Menu Item 2.3"),u.addItem("Menu Item 3.1"),u.addItem("Menu Item 3.2"),this},this.prepareHorizontalMenu=function(){var e=this.addItem("Dashboard","/app/dashboard","linecons-cog"),a=this.addItem("Layout","/app/layout-and-skins","linecons-desktop"),t=this.addItem("UI Elements","/app/ui","linecons-note"),d=this.addItem("Forms","/app/forms","linecons-params"),s=this.addItem("Other","/app/extra","linecons-beaker");e.addItem("Dashboard 1","-/variant-1"),e.addItem("Dashboard 2","-/variant-2"),e.addItem("Dashboard 3","-/variant-3"),e.addItem("Dashboard 4","-/variant-4"),t.addItem("Panels","-/panels"),t.addItem("Buttons","-/buttons"),t.addItem("Tabs & Accordions","-/tabs-accordions"),t.addItem("Modals","-/modals"),t.addItem("Breadcrumbs","-/breadcrumbs"),t.addItem("Blockquotes","-/blockquotes"),t.addItem("Progress Bars","-/progress-bars"),t.addItem("Navbars","-/navbars"),t.addItem("Alerts","-/alerts"),t.addItem("Pagination","-/pagination"),t.addItem("Typography","-/typography"),t.addItem("Other Elements","-/other-elements"),d.addItem("Native Elements","-/native"),d.addItem("Advanced Plugins","-/advanced"),d.addItem("Form Wizard","-/wizard"),d.addItem("Form Validation","-/validation"),d.addItem("Input Masks","-/input-masks"),d.addItem("File Upload","-/file-upload"),d.addItem("Editors","-/wysiwyg"),d.addItem("Sliders","-/sliders");var n=s.addItem("Widgets","/app/widgets","linecons-star"),i=s.addItem("Mailbox","/app/mailbox","linecons-mail").setLabel("5","secondary",!1),m=s.addItem("Tables","/app/tables","linecons-database"),o=s.addItem("Extra","/app/extra","linecons-beaker").setLabel("New Items","purple"),r=s.addItem("Charts","/app/charts","linecons-globe"),l=s.addItem("Menu Levels","","linecons-cloud");i.addItem("Inbox","-/inbox"),i.addItem("Compose Message","-/compose"),i.addItem("View Message","-/message"),m.addItem("Basic Tables","-/basic"),m.addItem("Responsive Tables","-/responsive"),m.addItem("Data Tables","-/datatables");var I=o.addItem("Icons","-/icons").setLabel(4,"warning"),c=o.addItem("Maps","-/maps");o.addItem("Gallery","-/gallery"),o.addItem("Calendar","-/calendar"),o.addItem("Profile","-/profile"),o.addItem("Login","/login"),o.addItem("Lockscreen","/lockscreen"),o.addItem("Login Light","/login-light"),o.addItem("Timeline","-/timeline"),o.addItem("Timeline Centered","-/timeline-centered"),o.addItem("Notes","-/notes"),o.addItem("Image Crop","-/image-crop"),o.addItem("Portlets","-/portlets"),o.addItem("Blank Page","-/blank-page"),o.addItem("Search","-/search"),o.addItem("Invoice","-/invoice"),o.addItem("404 Page","-/page-404"),o.addItem("Tocify","-/tocify"),o.addItem("Loading Progress","-/loading-progress"),o.addItem("Notifications","-/notifications"),o.addItem("Nestable Lists","-/nestable-lists"),o.addItem("Scrollable","-/scrollable"),I.addItem("Font Awesome","-/font-awesome"),I.addItem("Linecons","-/linecons"),I.addItem("Elusive","-/elusive"),I.addItem("Meteocons","-/meteocons"),c.addItem("Google Maps","-/google"),c.addItem("Advanced Map","-/advanced"),c.addItem("Vector Map","-/vector"),r.addItem("Chart Variants","-/variants"),r.addItem("Range Selector","-/range-selector"),r.addItem("Sparklines","-/sparklines"),r.addItem("Map Charts","-/map-charts"),r.addItem("Circular Gauges","-/gauges"),r.addItem("Bar Gauges","-/bar-gauges");var p=l.addItem("Menu Item 1.1");l.addItem("Menu Item 1.2"),l.addItem("Menu Item 1.3"),p.addItem("Menu Item 2.1");var u=p.addItem("Menu Item 2.2");return p.addItem("Menu Item 2.3"),u.addItem("Menu Item 3.1"),u.addItem("Menu Item 3.2"),this},this.instantiate=function(){return angular.copy(this)},this.toStatePath=function(e){return e.replace(/\//g,".").replace(/^\./,"")},this.setActive=function(e){this.iterateCheck(this.menuItems,this.toStatePath(e))},this.setActiveParent=function(e){e.isActive=!0,e.isOpen=!0,e.parent&&this.setActiveParent(e.parent)},this.iterateCheck=function(a,t){angular.forEach(a,function(a){a.state==t?(a.isActive=!0,null!=a.parent&&e.setActiveParent(a.parent)):(a.isActive=!1,a.isOpen=!1,a.menuItems.length&&e.iterateCheck(a.menuItems,t))})}});