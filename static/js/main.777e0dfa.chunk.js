(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t){},106:function(e,t){},125:function(e,t,i){},129:function(e,t,i){},130:function(e,t,i){},131:function(e,t,i){"use strict";i.r(t);var r=i(2),a=i(0),s=i.n(a),c=i(29),n=i.n(c),o=(i(79),i(80),i(10)),l=i(14),d=i(12),h=i(11),u=i(20),b=i(8),j=i(134),m=i(133),p=i(135),g=i(68),f=(i(81),function(e){return Object(r.jsx)(m.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(r.jsx)(j.a,{fluid:!1,children:Object(r.jsx)(p.a,{className:"justify-content-center py-5",children:Object(r.jsxs)(g.a,{md:9,sm:12,children:[e.title&&Object(r.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(r.jsx)("h3",{className:"display-4 font-weight-light text-center",children:e.subTitle}),e.memo&&Object(r.jsx)("h4",{className:"lead font-weight-light",children:e.memo})]})})})})}),x=function(e){return Object(r.jsx)(f,{title:e.title,subTitle:e.subTitle,memo:e.memo})},O=i(26),k=i(49),v=(i(50),function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return Object(r.jsxs)(k.a.div,{className:"p-card-info text-wrap mb-5",style:t,children:[Object(r.jsxs)("p",{className:"p-card-title mb-1",children:[Object(r.jsx)("strong",{children:"PROJECT TITLE:"})," ",e.title]}),Object(r.jsxs)("p",{className:"p-card-desc text-wrap",children:[Object(r.jsx)("strong",{children:"Project Description:"})," ",e.desc]}),Object(r.jsx)("a",{className:"alignright mt-1",href:e.githubLink,target:"_blank",rel:"noopener noreferrer",children:"GitHub Repo"}),Object(r.jsx)("a",{className:"alignleft mt-1",href:e.deployedLink,target:"_blank",rel:"noopener noreferrer",children:"Deployed App"})]})}),y=function(e){return Object(r.jsxs)("div",{className:"d-inline-block p-card card px-2 py-1 m-3",onClick:function(t){return e.click(e.item)},children:[Object(r.jsx)("img",{className:"p-card-img",src:e.item.imgSrc,alt:e.item.title+" screenshot"}),e.item.selected&&Object(r.jsx)(v,{title:e.item.title,desc:e.item.desc,githubLink:e.item.githubLink,deployedLink:e.item.deployedLink})]})},S=i.p+"static/media/github-finder.90a8a278.png",C=i.p+"static/media/google-books-search.81b5964d.png",N=i.p+"static/media/docketmaster.6f47a975.png",L=i.p+"static/media/eat-dat-burger-home.6ea0d6e4.png",_=i.p+"static/media/stock-app.40373a76.png",w=i.p+"static/media/quiz-active.df381d54.png",E=i.p+"static/media/number-guess.1f006861.png",T=i.p+"static/media/password-generator.c3328157.png",G=i.p+"static/media/web-speech.8856a3b7.png",P=i.p+"static/media/weather-dashboard.d30e4410.png",A=i.p+"static/media/relaxer.3ca694cc.png",D=i.p+"static/media/lyric-search.352f53c3.png",R=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).handleCardClick=function(e){var t=Object(O.a)(a.state.items);t[e].selected=!t[e].selected,t.forEach((function(t){t.id!==e&&(t.selected=!1)})),a.setState({items:t})},a.makeCards=function(e){return e.map((function(e){return Object(r.jsx)(y,{item:e,click:function(t){return a.handleCardClick(e.id,t)}},e.id)}))},a.state={items:[{id:0,title:"Github Finder",desc:"An app built with React.js for finding github user profiles",imgSrc:S,githubLink:"https://github.com/etorres-revature/Github_Finder",deployedLink:"https://enigmatic-ocean-42815.herokuapp.com/",selected:!1},{id:1,title:"Google Books API Search",desc:"Search and save information about books of interest from the Google Books API",imgSrc:C,githubLink:"https://github.com/etorres-revature/React-Google_Books",deployedLink:"https://lit-citadel-69293.herokuapp.com",selected:!1},{id:2,title:"Docket Master",desc:"Create, track, and update the docket of a fictional court system",imgSrc:N,githubLink:"https://github.com/etorres-revature/Docket_Master",deployedLink:"https://pure-atoll-36836.herokuapp.com/",selected:!1},{id:3,title:"Eat Dat Burger",desc:"Make, eat, and re-cook your favorite burgers",imgSrc:L,githubLink:"https://github.com/etorres-revature/Eat_Dat_Burger",deployedLink:"https://hidden-garden-02467.herokuapp.com/",selected:!1},{id:4,title:"Portfolio Edge",desc:"A dashboard that provides up-to-the-minute stock information",imgSrc:_,githubLink:"https://github.com/etorres-revature/Lucky_Mountaineers",deployedLink:"https://etorres-revature.github.io/Lucky_Mountaineers/",selected:!1},{id:5,title:"JavaScript Code Quiz",desc:"Challenge yourself to learn more about JavaScript and its capabilities",imgSrc:w,githubLink:"https://github.com/etorres-revature/JavaScript_Code_Quiz_Challenge",deployedLink:"https://etorres-revature.github.io/JavaScript_Code_Quiz_Challenge/",selected:!1},{id:6,title:"Number Guess",desc:"Traditional number guessing game with a modern twist",imgSrc:E,githubLink:"https://github.com/etorres-revature/Number_Guess",deployedLink:"https://etorres-revature.github.io/Number_Guess/",selected:!1},{id:7,title:"Password Generator",desc:"Generate unique passwords.",imgSrc:T,githubLink:"https://github.com/etorres-revature/Password_Generator",deployedLink:"https://etorres-revature.github.io/Password_Generator/",selected:!1},{id:8,title:"Web Speech",desc:"Use your computer's Speech Synthesis to turn text to speech",imgSrc:G,githubLink:"https://github.com/etorres-revature/Web_Speech",deployedLink:"https://etorres-revature.github.io/Web_Speech/",selected:!1},{id:9,title:"Weather Dashboard",desc:"Search for weather conditions around the globe.",imgSrc:P,githubLink:"https://github.com/etorres-revature/Weather_Dashboard",deployedLink:"https://etorres-revature.github.io/Weather_Dashboard/",selected:!1},{id:10,title:"Relaxer",desc:"Moderate your breathing and listen to soothing tones with this relaxing app",imgSrc:A,githubLink:"https://github.com/etorres-revature/Relaxer",deployedLink:"https://etorres-revature.github.io/Relaxer/",selected:!1},{id:11,title:"Lyric Search",desc:"Search for lyrics to your favorite songs",imgSrc:D,githubLink:"https://github.com/etorres-revature/Lyric_Search",deployedLink:"https://etorres-revature.github.io/Lyric_Search/",selected:!1}]},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(r.jsx)(j.a,{fluid:!1,children:Object(r.jsx)(p.a,{className:"justify-content-around",children:this.makeCards(this.state.items)})})}}]),i}(a.Component),M=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{title:e.title}),Object(r.jsx)(R,{})]})},F=function(e){return Object(r.jsx)(j.a,{children:Object(r.jsx)(p.a,{className:"card justify-content-center p-3",children:Object(r.jsx)(g.a,{children:e.children})})})},J=i.p+"static/media/TorresEricD_IT_resume_11072020.e38a942c.pdf",B=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{title:e.title}),Object(r.jsx)(F,{children:Object(r.jsxs)("article",{children:[Object(r.jsx)("p",{class:"text-justify",children:"Eric D. Torres is a journeyman coder with experience coding Java, Object-Oriented Programming, JavaScript, HTML5, CSS, SQL, AWS, and PEGA. Using his foundation of research skills and strong analytical problem solving abilities, he has the ability to learn any coding language quickly."}),Object(r.jsx)("p",{class:"text-justify",children:"Eric is passionate about learning new coding design elements, cutting-edge coding languages, and creating the logical framework of projects from start to finish."}),Object(r.jsx)("p",{children:"He has the following certifications:"}),Object(r.jsxs)("ol",{children:[Object(r.jsx)("li",{children:"PEGA Certified System Architect (2/2020);"}),Object(r.jsx)("li",{children:"PEGA Certified Senior System Architect (3/2020);"}),Object(r.jsx)("li",{children:"PEGA Certified Business Architect (4/2020);"}),Object(r.jsx)("li",{children:"PEGA Certified Robotics Architect (5/2020);"}),Object(r.jsx)("li",{children:"SCRUMStudy Fundamentals of SCRUM (7/2020)."})]}),Object(r.jsx)("p",{children:"Currently, Eric is further honing his skills by acquiring a Certificate in Full Stack Web Development from the University of Texas Austin (focus on JavaScript; MERN stack)."}),Object(r.jsx)("p",{class:"text-justify",children:"From his work on local, state, and national political campaigns; developing public sector solutions; and creating an independent solo-law firm, Eric has the background and experience to understand your unique business needs."}),Object(r.jsxs)("p",{class:"text-justify",children:["Eric is looking to diversify his experience as a fullstack coder/software developer. You can"," ",Object(r.jsx)("a",{href:J,target:"_blank",rel:"noopener noreferrer",children:"check out his resume here"})]}),Object(r.jsxs)("p",{children:["Feel free to reach out to him at"," ",Object(r.jsx)("a",{href:"mailto:etorresnotary@gmail.com",children:"etorresnotary@gmail.com"}),"."]})]})})]})},I=i(48),W=i(30),q=function(){W.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(W.c.version,"/pdf.worker.js");var e=Object(a.useState)(null),t=Object(I.a)(e,2),i=(t[0],t[1]),s=Object(a.useState)(1),c=Object(I.a)(s,2),n=c[0];c[1];return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsxs)(W.a,{file:J,onLoadSuccess:function(e){var t=e.numPages;i(t)},children:[Object(r.jsx)(W.b,{pageNumber:n}),Object(r.jsx)(W.b,{pageNumber:n+1})]})})},H=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{title:e.title}),Object(r.jsx)(q,{})]})},U=i(25),z=i(70),Q=i.n(z),V=i(138),X=i(136),Y=(i(125),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var r;return Object(o.a)(this,i),(r=t.call(this,e)).handleChange=function(e){var t=e.target,i="checkbox"===t.type?t.checked:t.value,a=t.name;r.setState(Object(U.a)({},a,i))},r.handleSubmit=function(e){e.preventDefault(),r.setState({disabled:!0}),Q.a.post("localhost:8500/api/email",r.state).then((function(e){e.data.success,r.setState({disabled:!1,emailSent:!0})})).catch((function(e){r.setState({disabled:!1,emailSent:!1})}))},r.state={fullName:"",phone:"",email:"",message:"",disabled:!1,emailSent:null},r}return Object(l.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{title:this.props.title}),Object(r.jsx)(F,{children:Object(r.jsxs)(V.a,{onSubmit:this.handleSubmit,children:[Object(r.jsxs)(V.a.Group,{children:[Object(r.jsx)(V.a.Label,{htmlFor:"fullName",children:"Full Name:"}),Object(r.jsx)(V.a.Control,{id:"full-name",name:"fullName",type:"text",value:this.state.fullName,onChange:this.handleChange})]}),Object(r.jsxs)(V.a.Group,{children:[Object(r.jsx)(V.a.Label,{htmlFor:"phone",children:"Phone:"}),Object(r.jsx)(V.a.Control,{id:"phone",name:"phone",type:"phone",value:this.state.phone,onChange:this.handleChange})]}),Object(r.jsxs)(V.a.Group,{children:[Object(r.jsx)(V.a.Label,{htmlFor:"email",children:"E-mail address:"}),Object(r.jsx)(V.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(r.jsxs)(V.a.Group,{children:[Object(r.jsx)(V.a.Label,{htmlFor:"message",children:"Message:"}),Object(r.jsx)(V.a.Control,{id:"message",name:"message",as:"textarea",rows:"7",value:this.state.message,onChange:this.handleChange})]}),Object(r.jsx)(X.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,children:"Send Message"})," ",!0===this.state.emailSent&&Object(r.jsx)("p",{className:"d-inline success-msg",children:"E-mail sent successfully"}),!1===this.state.emailSent&&Object(r.jsx)("p",{className:"d-inline err-msg",children:"E-mail was not sent successfully"})]})})]})}}]),i}(a.Component)),K=i(137),Z=i(139),$=function(){return Object(r.jsxs)(K.a,{className:"border-bottom",bg:"transparent",expand:"md",children:[Object(r.jsx)(K.a.Brand,{children:Object(r.jsx)("strong",{children:"Eric D. Torres"})}),Object(r.jsx)(K.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(r.jsx)(K.a.Collapse,{id:"navbar-toggle",children:Object(r.jsxs)(Z.a,{className:"ml-auto",children:[Object(r.jsx)(u.b,{className:"nav-link",to:"/Portfolio",children:"Home"}),Object(r.jsx)(u.b,{className:"nav-link",to:"/projects",children:"Projects"}),Object(r.jsx)(u.b,{className:"nav-link",to:"/about",children:"About"}),Object(r.jsx)(u.b,{className:"nav-link",to:"/resume",children:"Resume"}),Object(r.jsx)(u.b,{className:"nav-link",to:"/contact",children:"Contact"})]})})]})},ee=(i(129),function(){return Object(r.jsx)("footer",{className:"footer mt-5 border-top text-center",children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(p.a,{className:"mb-2",children:Object(r.jsx)(g.a,{children:"Visit me on social media: "})}),Object(r.jsx)(p.a,{className:"mb-2",children:Object(r.jsxs)(g.a,{children:[Object(r.jsx)("a",{href:"https://www.linkedin.com/in/ericdtorres/",className:"fa fa-linkedin",target:"_blank",rel:"noopener noreferrer"}),Object(r.jsx)("a",{href:"https://github.com/etorres-revature",className:"fa fa-github",target:"_blank",rel:"noopener noreferrer"})]})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(g.a,{children:Object(r.jsxs)("p",{id:"e_mail",children:["E-mail:"," ",Object(r.jsx)("a",{href:"mailto:etorresnotary@gmail.com",children:"etorresnotary@gmail.com"}),", ","or use the ",Object(r.jsx)(u.b,{to:"/contact",children:"CONTACT"})," page."]})})}),Object(r.jsx)(p.a,{children:Object(r.jsx)(g.a,{children:Object(r.jsx)("p",{children:"\xa9 2020 Eric D. Torres Productions"})})})]})})}),te=(i(130),function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var r;return Object(o.a)(this,i),(r=t.call(this,e)).state={title:"Eric D. Torres",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Resume",path:"/resume"},{title:"Contact",path:"/contact"}],home:{title:"Front-End Development",subTitle:"If you can dream it, I can code it",memo:""},about:{title:"More about me"},projects:{title:"Sample projects"},resume:{title:"EXPERIENCE"},contact:{title:"Be in touch..."},PDFResume:"./assets/TorresEricD_IT_resume_11072020.pdf"},r}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(r.jsxs)(u.a,{children:[Object(r.jsx)($,{}),Object(r.jsx)(j.a,{className:"p-0",fluid:!0,children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/Portfolio",render:function(){return Object(r.jsx)(x,{title:e.state.home.title,subTitle:e.state.home.subTitle,memo:e.state.home.memo})}}),Object(r.jsx)(b.a,{exact:!0,path:"/projects",render:function(){return Object(r.jsx)(M,{title:e.state.projects.title})}}),Object(r.jsx)(b.a,{exact:!0,path:"/about",render:function(){return Object(r.jsx)(B,{title:e.state.about.title})}}),Object(r.jsx)(b.a,{exact:!0,path:"/resume",render:function(){return Object(r.jsx)(H,{title:e.state.resume.title})}}),Object(r.jsx)(b.a,{exact:!0,path:"/contact",render:function(){return Object(r.jsx)(Y,{title:e.state.contact.title})}})]})}),Object(r.jsx)(ee,{})]})}}]),i}(a.Component));n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(te,{})}),document.getElementById("root"))},50:function(e,t,i){},79:function(e,t,i){},81:function(e,t,i){}},[[131,1,2]]]);
//# sourceMappingURL=main.777e0dfa.chunk.js.map